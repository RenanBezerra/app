import React, { useState, useEffect } from 'react';
import { Image, View, Text, ActivityIndicator } from 'react-native';
import { Button, TextInput }from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

import styles from './styles';

const Login = ({ navigation }) => {

    //0 - carregando , 1 - logado , 2 - deslogado
    const [logged,setLogged] = useState(0);
    const [credenciais, setCredenciais] =useState({
        email:'',
        senha: ''
    });

    const checkLogin = async () => {
        //AsyncStorage.clear();
        const user = await AsyncStorage.getItem('@user');
        if (user) {
            setLogged(1);
            navigation.replace('Home');
        }else {
            setLogged(2);
        }
    };

    const login = async () => {
        try {
            const response = await api.post('/usuario/login', credenciais);
            const res = response.data;
            console.log(res)
            if(res.error){
                alert(res.message);
                return false;
            }

            console.log(res.usuario);
            await AsyncStorage.setItem('@user', JSON.stringify(res.usuario));
            navigation.replace('Home');
            
        } catch (error) {
            alert(error.message)
        }
    };

    useEffect(() => {
        checkLogin();
    },[]);

    return (

        <View style={styles.bgDark}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>

            {logged === 0 && <ActivityIndicator color="#fff" size="large"/>}
           {logged === 2 && <View>

                <TextInput style={styles.marginBotton}
                    mode="flat"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    label="Email ou numero de telefone"
                    value={credenciais.email}
                    onChangeText={(text) => setCredenciais({...credenciais, email:text})}
                />

                <TextInput style={styles.marginBotton}
                    mode="flat"
                    label="Senha"
                    secureTextEntry
                    value={credenciais.senha}
                    onChangeText={(text) => setCredenciais({...credenciais, senha:text})}
                />
                <Button  
                 style={styles.marginBotton}
                 mode="contained" 
                 onPress={() => login() }>
                        Entrar
                </Button>

                <Button  
                    style={styles.marginBotton}
                    onPress={() => console.log('Pressed')}
                    theme={{colors: {primary: '#fff'}}}
                    >
                        Recuperar senha
                </Button>

                <Text style={styles.textSmall}>
                    O acesso está protegido pelo Goole reCAPTCHA para
                    garantir que você não é um robo. Saiba mais.
                </Text>
            </View>}
        </View>
    )
} 

export default Login;
import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { Button, TextInput }from 'react-native-paper';

import styles from './styles';

const Login = () =>{

    const [credenciais, setCredenciais] =useState({
        email:'',
        senha: ''
    })

    return (

        <View style={styles.bgDark}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <View>

                <TextInput style={styles.marginBotton}
                    mode="flat"
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
                 onPress={() => console.log('Pressed')}>
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
            </View>
        </View>
    )
} 

export default Login;
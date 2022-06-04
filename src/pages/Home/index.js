import React,{useEffect,useState} from 'react';
import {View,ScrollView,RefreshControl} from 'react-native';

import styles from './styles';
import {Button,Title} from 'react-native-paper';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ButtonVertical from '../../components/ButtonVertical';

import Previas from '../../components/Previas';
import Secao from '../../components/Secao';

import api from '../../services/api';

const Home = () => {
    const [refreshing,setRefreshing] = useState(false);
    const [principal,setPrincipal] = useState({});
    const [secoes,setSecoes] = useState([]);

    const getHome = async () => {
        try {
            setRefreshing(true)
            const response = await api.get('/home');
            const res = response.data;
            console.log(res);
            if(res.error){
                alert(res.message);  
                setRefreshing(false) 
                return false;
            }

            setPrincipal(res.principal);
            setSecoes(res.secoes);
            setRefreshing(false);

        } catch (error) {
            setRefreshing(false) 
            alert(error.message);  
            
        }
    
    }
        useEffect(() => {
            getHome();
        }, [])
    
    return (
        <ScrollView style={styles.container}
            refreshControl={<RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={getHome}/>}>
            <Header/>
            <Hero filme={principal}/>
            <View style={styles.menuHeader}>
               <ButtonVertical
                icon="plus"
                text="Minha Lista"
               >
               </ButtonVertical>
                <Button
                    icon="play"
                    uppercase={false}
                    mode="contained"
                    color="#fff">
                    Assistir
                </Button>
                <ButtonVertical
                icon="information-outline"
                text="Saiba Mais"
                >
                </ButtonVertical>
                
            </View>
            <View style={styles.previaContainer}>
                    <Title style={styles.previaTitle}>Prévias</Title>
                    <Previas filmes={secoes[0]}/>

                </View>

                {secoes.map((secao,index) => (
                    <Secao secao={secao} key={index} />

                ))}
                
        </ScrollView>
    );
};

export default Home;
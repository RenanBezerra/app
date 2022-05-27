import React from 'react';

import {ScrollView, ImageBackground, View} from 'react-native';
import { Title,Button, Paragraph, Caption } from 'react-native-paper';
import styles from './styles';
import Secao from '../../components/Secao'

import ButtonVertical from '../../components/ButtonVertical'
const Filme = () => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground 
                source={{ uri: 'https://i.imgur.com/EJyDFeY.png'}}
                style={styles.hero}
                />
            <View style={styles.containerPadding}>
                <Title>Nome do filme</Title>
                <Button
                    style={styles.buttonPlay}
                    icon="play"
                    uppercase={false}
                    mode="contained"
                    color="#fff">
                    Assistir
                </Button>
                <Paragraph>
                    Pregadores Profanos Autoridades Corruptas, Amantes Assassinos. Numa
                    cidade cheia de pecadores um jovem busca justiça
                </Paragraph>
                <Caption style={styles.captionInfos}>
                    Elenco:{' '}
                    <Caption style={styles.captionWhite}> 
                        Renan Bezerra, Thaila Abrantes, Carlos Eduardo, Sandra Borges
                    </Caption>{' '}
                    Generos: {' '}
                    <Caption style={styles.captionWhite}> 
                    Ação, Aventura, Dramático. Cenas e momentos  
                    </Caption>
                    {' '}Violentos: {' '} 
                    <Caption style={styles.captionWhite}>
                    Violentos
                    </Caption>
                </Caption>
                <View style={styles.menu}>
                    <ButtonVertical icon="plus" text="Minha Lista"/>
                    <ButtonVertical icon="thumb-up" text="Classifique"/>
                    <ButtonVertical icon="send" text="Compartilhe"/>
                    <ButtonVertical icon="download" text="Baixar"/>
                </View>
                
            </View>
            <Secao hasTopBorder/>
        </ScrollView>

    );
};

export default Filme;
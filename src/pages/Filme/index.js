import React, { useState } from 'react';

import {ScrollView, ImageBackground, View, TouchableOpacity, Text,FlatList} from 'react-native';
import { Title,Button, Paragraph, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SinglePickerMaterialDialog  } from 'react-native-material-dialog';

import styles from './styles';
import Secao from '../../components/Secao'
import Episodeo from '../../components/Episodeo'



import ButtonVertical from '../../components/ButtonVertical'

const Filme = () => {

    const [tipo] = useState('serie')
    const [visible, setVisible] = useState(false)
    const [temporada, setTemporada] = useState({value:1, label: 'Temporada 1'})

    return (
        <>
        <SinglePickerMaterialDialog
            title={'Serie - Temporadas'}
            items={[{ value:1, label: 'Temporada 1'},
                    { value:2, label: 'Temporada 2'},
                    { value:3, label: 'Temporada 3'},]}
            visible={visible}
            selectedItem={temporada}
            onOk={(result) => {
               setVisible(false);
               setTemporada(result.selectedItem);
            }}
            />
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
                {tipo === "serie" && (
                <>
                    <TouchableOpacity onPress={() => setVisible(true)} style={styles.buttonTemporada}>
                        <Text style={styles.temporadaName}>{temporada.label}</Text>
                        <Icon name="chevron-down" color="#fff" size={20}/>
                    </TouchableOpacity>
                        <FlatList
                            data={[1,2,3,4]}
                            renderItem={({item, index}) => <Episodeo key={index}/>}
                        />
                </>
            )}
                
            </View>
            {tipo === "filme" && <Secao hasTopBorder/>}
            
        </ScrollView>
        </>
    );
};

export default Filme;
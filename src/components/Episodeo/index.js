import React from 'react';
import { Image, TouchableOpacity,View } from 'react-native';
import { Caption, Title } from 'react-native-paper'
import styles from './styles';
const Episodeo = () => {
    return(
        <TouchableOpacity style={styles.container}>
        <View style={styles.row}>
            <Image style={styles.capa} source={{ uri: 'https://i.imgur.com/EJyDFeY.png'}}/>
            <View>
            <Title style={{fontSize: 15}}>1. Nome do Episodeo</Title>
            <Caption>45 mins</Caption>
            </View>
        </View>
        <Caption>
        There are many variation of passages of Lorem Ipsum availably
        There are many variation of passages of Lorem Ipsum availably
        There are many variation of passages of Lorem Ipsum availably            
        </Caption>
        </TouchableOpacity>
    )
}

export default Episodeo;
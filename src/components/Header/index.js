import React from 'react'
import {Text, View, TouchableOpacity, Image,SafeAreaView} from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
    return (
        <LinearGradient 
            style={styles.header}
            colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
        >
        <SafeAreaView 
                style={styles.headerSafeAreaView}
        >
            <Image style={styles.image} source={require('../../assets/logo_compact.png')}/>
            <TouchableOpacity>
                <Text style={styles.textWhite}>Séries</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textWhite}>Filmes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textWhite}>Minha Lista</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </LinearGradient>
    )
}

export default Header;
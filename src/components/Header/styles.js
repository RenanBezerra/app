import {StyleSheet,Platform} from 'react-native';  

const styles = StyleSheet.create({
    textWhite:{
        color: '#fff',
        },
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 70,
        marginTop: Platform.OS === 'ios' ? 50 : 10,
        alignItems: 'center'
    },
    image:{
        height: 50,
        width: 30

    }
});

export default styles;
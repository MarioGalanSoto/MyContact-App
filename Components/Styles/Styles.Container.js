import { StyleSheet } from 'react-native';


const ContainerStyles = StyleSheet.create({

    MainContainer:{
        flex: 1,
        // backgroundColor: '#3F4E4F',
        backgroundColor: '#3F4E4F',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ContactsContainer:{
        borderRadius : 10,
        width: '90%',
        height: '10%',
        backgroundColor: '#2C3639',
        //backgroundColor: '#0F3D3E',
        borderRightColor :'green',
        overlayColor : 'red',
        borderBottomColor: 'purple',
    },
});


export default ContainerStyles;
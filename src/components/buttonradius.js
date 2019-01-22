import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image ,TouchableOpacity} from 'react-native';


export default Buttonradius = ({ buttontext,onpress }) => {
    const { container,btnstyle } = styles
    return (
        <View style={container}>
        <TouchableOpacity onPress={onpress}>
            <Text style={btnstyle}> {buttontext}</Text>
        </TouchableOpacity>
            
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: .6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15
    },

    btnstyle: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'white',
        fontSize: 12,
        padding: 3,
        paddingHorizontal: 30,
        backgroundColor:'#005AFF',
        borderRadius:35

    },

   
});
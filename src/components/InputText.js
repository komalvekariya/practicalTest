import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';


export default InputText = ({ inputplaceholder, imgpeople, imgcancel, multiline, securetext, val, onchange }) => {
    const { container, inputtext, icnimg, } = styles
    return (
        <View style={container}>
            <Image style={icnimg} source={imgpeople} />
            <TextInput
                style={inputtext}
                placeholder={inputplaceholder}
                placeholderTextColor='black'
                multiline={multiline}
                secureTextEntry={securetext}
                value={val}
                onChangeText={onchange}
            />

            <Image style={icnimg} source={imgcancel} />

        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: .6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginHorizontal: 8,


    },

    inputtext: {
        fontSize: 13,
        // backgroundColor:'red',
        width: '80%',
    },

    icnimg: {
        height: 15,
        width: 15
    }

});
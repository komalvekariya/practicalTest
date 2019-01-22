import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default InputText = ({ inputplaceholder, imgpeople, imgcancel, multiline, securetext,onpressimg, keyboard,val, onchange ,retutnkey}) => {
    const { container, inputtext, icnimg, } = styles
    return (
        <View style={container}>
            <TouchableOpacity> 
                <Image style={icnimg} source={imgpeople} />
            </TouchableOpacity>
            <TextInput
                style={inputtext}
                placeholder={inputplaceholder}
                placeholderTextColor='black'
                multiline={multiline}
                secureTextEntry={securetext}
                value={val}
                onChangeText={onchange}
                returnKeyType={"next"}
                keyboardType={keyboard}
            />
            <TouchableOpacity onPress={onpressimg} >
                <Image style={icnimg} source={imgcancel} />
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
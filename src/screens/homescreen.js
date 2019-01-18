import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import SignIn from '../components/SignUp'
import SignUp from '../components/SignIn'


export default class homescreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signinouttext: true
        }
    }

    _onChangefalse = () => {
        const { signinouttext } = this.state
        this.setState({ signinouttext: false })
    }

    _onChangetrue = () => {
        const { signinouttext } = this.state
        this.setState({ signinouttext: true })
    }



    render() {
        const { signinouttext } = this.state
        const { signintext, container, signouttext, backtext, backiconimg, signintext1, signouttext1 } = styles
        return (
            <ScrollView>
                <View style={container}>
                    <View style={{ flex: .1, flexDirection: 'row', marginTop: 2, alignItems: 'center' }}>
                        <Image source={require('../assets/images/icn_back.png')}
                            style={backiconimg}
                        />
                        <Text style={backtext}>Back</Text>
                    </View>
                    <View style={{ flex: .1, flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                        <TouchableOpacity
                            onPress={this._onChangetrue}
                        >
                            <Text style={!signinouttext ? signintext : signintext1}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this._onChangefalse}
                        >
                            <Text style={signinouttext ? signouttext : signouttext1}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    {signinouttext
                        ?
                        <SignIn />
                        :
                        <SignUp />
                    }

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    backtext: {
        color: '#005AFF',
        fontSize: 16,
    },

    signintext: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'black',
        fontSize: 10,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        padding: 5,
        paddingHorizontal: 40

    },

    signintext1: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'white',
        fontSize: 10,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        padding: 5,
        paddingHorizontal: 40,
        backgroundColor: '#005AFF'

    },


    signouttext: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'black',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        fontSize: 10,
        padding: 5,
        paddingHorizontal: 40

    },

    signouttext1: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'white',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        fontSize: 10,
        padding: 5,
        paddingHorizontal: 40,
        backgroundColor: '#005AFF'

    },

    backiconimg: {
        height: 20,
        width: 20
    }


});
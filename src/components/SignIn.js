import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Switch,AsyncStorage } from 'react-native'
import InputText from './InputText'
import Buttonradius from './buttonradius'
import * as CONST from '../helper/constant'
import { Actions } from 'react-native-router-flux';


export default class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            switch1Value: false,
            email:'',
            getemail:''
        }
    }

    async componentWillMount() {
        this.setState({ getemail: await AsyncStorage.getItem(CONST.KEY_USER_EMAIL) });
    }


_Checkuserlogin=() =>{
     if(this.state.getemail==this.state.email)
    {
        Actions.pop()
    }
    else{
      Actions.pop(SignIn)
    }
}

    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        // console.warn('Switch 1 is: ' + value)
    }

    render() {

        const { container } = styles
        return (
            <View style={container}>
                <View style={{ flex: 0.6, marginTop: 60 }}>
                    <InputText inputplaceholder='Enter User Name or Email'
                        imgpeople={require('../assets/images/icn_user.png')}
                        imgcancel={require('../assets/images/icn_cancel.png')}
                        val={this.state.email}
                        onchange={(email) => this.setState({email})}
                    />
                    <InputText inputplaceholder='Password'
                        imgpeople={require('../assets/images/icn_password.png')}
                        imgcancel={require('../assets/images/icn_invisible.png')}
                        securetext={true}
                    />

                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 90 }}>
                    <Text style={{ color: 'black', fontSize: 12 }}>Save Password</Text>
                    <Switch onValueChange={this.toggleSwitch1} value={this.state.switch1Value} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Buttonradius buttontext={'Cancel'} />
                    <Buttonradius buttontext={'Login'} onpress={this._Checkuserlogin}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },


})
import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Switch, AsyncStorage } from 'react-native'
import InputText from './InputText'
import Buttonradius from './buttonradius'
import * as CONST from '../helper/constant'
import { Actions } from 'react-native-router-flux';
import thankyou from '../screens/thankyou';


export default class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            switch1Value: false,
            email: '',
            getemail: '',
            password: '',
            getpassword: '',
            hidePassword: true,

        }
    }

    async componentWillMount() {
        AsyncStorage.getItem(CONST.KEY_USER_EMAIL).then((res) => {
            let response = JSON.parse(res);
            console.warn(response)
            this.setState({ getemail: response.email, getpassword: response.password });
        })

    }


    _Checkuserlogin = () => {
        if (this.state.getemail == this.state.email && this.state.getpassword == this.state.password) {
            Actions.thankyou();
        }
        else {

            alert("please input valid Email/Password")

        }
    }

    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        // console.warn('Switch 1 is: ' + value)
    }

    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    _oncancel = () => {
        Actions.homescreen()
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
                        onchange={(email) => this.setState({ email })}
                        onpressimg={(email) => this.setState({ email })}
                    />
                    <InputText inputplaceholder='Password'
                        imgpeople={require('../assets/images/icn_password.png')}
                        imgcancel={(this.state.hidePassword) ? require('../assets/images/icn_invisible.png') : require('../assets/images/icn_view.png')}
                        securetext={this.state.hidePassword}
                        val={this.state.password}
                        onchange={(password) => this.setState({ password })}
                        onpressimg={this.managePasswordVisibility}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 90 }}>
                    <Text style={{ color: 'black', fontSize: 12 }}>Save Password</Text>
                    <Switch
                        onValueChange={this.toggleSwitch1}
                        value={this.state.switch1Value}

                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Buttonradius buttontext={'Cancel'} onpress={this._oncancel} />
                    <Buttonradius buttontext={'Login'} onpress={this._Checkuserlogin} />
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
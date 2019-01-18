import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import InputText from './InputText'
import DatePicker from 'react-native-datepicker'
import Buttonradius from './buttonradius'
import { KEY_USER_EMAIL } from '../helper/constant'



export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gendertext: false,
            date: "2016-05-15",
            email: '',
            password: ''

        }
    }

    _onChangegenderfalse = () => {
        const { gendertext } = this.state
        this.setState({ gendertext: false })
    }

    _onChangegendertrue = () => {
        const { gendertext } = this.state
        this.setState({ gendertext: true })
    }

    _emailchangetext = () => {
        const { email} = this.state

        alert(this.state.email);

    }
    saveData = async () => {
        await AsyncStorage.setItem(KEY_USER_EMAIL, this.state.email);
        let user = await AsyncStorage.getItem(KEY_USER_EMAIL);
        console.warn(user);
    }

    render() {
        const { gendertext } = this.state
        const { container, maletext, maletext1, femaletext, femaletext1, inputtext11, imgemail } = styles
        return (
            <View style={container}>
                <View style={{ flex: 0.6, marginTop: 16 }}>
                    <InputText inputplaceholder='First Name'
                        imgpeople={require('../assets/images/icn_people.png')}
                        imgcancel={require('../assets/images/icn_cancel.png')}

                    />
                    <InputText inputplaceholder='Last Name'
                        imgpeople={require('../assets/images/icn_people.png')}
                        imgcancel={require('../assets/images/icn_cancel.png')}
                    />
                    <InputText inputplaceholder='Address'
                        multiline={true}
                        imgpeople={require('../assets/images/icn_home.png')}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                    <View style={{ flex: .5, marginLeft: 40 }}>
                        <Text style={{ color: 'black', fontSize: 12 }}>Gender:</Text>
                    </View>
                    <View style={{ flex: .7, flexDirection: 'row', marginRight: 90 }}>
                        <TouchableOpacity onPress={this._onChangegenderfalse}>
                            <Text style={gendertext ? maletext : maletext1}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onChangegendertrue}>
                            <Text style={!gendertext ? femaletext : femaletext1}>Female</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 0.3, justifyContent: 'center', flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <TextInput
                            placeholder='Email Address'
                            style={inputtext11}
                            placeholderTextColor='black'
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}

                        />
                        <Image style={imgemail} source={require('../assets/images/icn_info.png')} />
                    </View>
                    <TextInput
                        placeholder='Password'
                        // secureTextEntry
                        placeholderTextColor='black'
                        style={inputtext11}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}

                    />

                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 8, marginLeft: 0 }}>
                    <DatePicker
                        style={{ width: 270 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="1990-05-01"
                        maxDate="2019-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,

                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Buttonradius buttontext={'Edit'} />
                    <Buttonradius buttontext={'Save'} onpress={this.saveData} />
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
    maletext: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'black',
        fontSize: 10,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        padding: 3,
        paddingHorizontal: 30

    },

    maletext1: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'white',
        fontSize: 10,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        padding: 3,
        paddingHorizontal: 30,
        backgroundColor: '#005AFF'

    },


    femaletext: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'black',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        fontSize: 10,
        padding: 3,
        paddingHorizontal: 30

    },

    femaletext1: {
        borderWidth: 1,
        borderColor: '#005AFF',
        color: 'white',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        fontSize: 10,
        padding: 3,
        paddingHorizontal: 30,
        backgroundColor: '#005AFF'

    },
    inputtext11: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 2,
        width: 270,
        marginTop: 13,
        fontSize: 12
    },

    imgemail: {
        height: 15,
        width: 15,
        marginTop: 20,
    }


});
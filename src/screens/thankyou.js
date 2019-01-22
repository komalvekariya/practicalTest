import React, { Component } from 'react'
import { Text, View ,Image} from 'react-native'

export default class thankyou extends Component {


    render() {
        return (
            <View style={{flex:1,flexDirection:'column',justifyContent:'space-between' }}>
               
                <Image style={{width:'80%',height:90,resizeMode:'contain',alignItems:'center',marginLeft:20,marginTop:100}} source={require('../assets/images/img_thnk.png')}/>
                
            </View>
        )
    }

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
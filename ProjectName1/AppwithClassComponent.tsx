import React, { Component } from "react";
import { Image, Text, View } from "react-native";

class AppwithClassComponent extends React.Component {
  
    render() {
        console.log("xxx")
        return (
            <View>
                <Text>Zainuddin </Text>
                <Text>Efendi </Text>
                <Text>Rambe </Text>
                <Photo/>
            </View>
        )
    }
}

class Photo extends Component {

    render(){

        return (

            <Image source={{uri :"https://placeimg.com/100/100/tech"}} style={{width:100,height:100}}  />
        )
    }
}

export default AppwithClassComponent



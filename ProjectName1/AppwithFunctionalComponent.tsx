
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from "react";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";
import images from "./images";


const AppwithFunctionalComponent = () => {

    return (
        <StyingReactNative />
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ea00ff',
        marginLeft: 20,
        marginTop: 40,
    }
})


const StyingReactNative = () => {

    return (

        <View>
            <Text style={styles.text}>Styling Component</Text>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: "#eaff00",
                borderWidth: 2,
                borderColor: "#ea0000",
                marginTop: 20,
                marginLeft: 20
            }}>

            </View>
            <Image source={images.macbook} style={{width: 100,height:100}} />
            <View>

            </View>
        </View>
    )

}


const SimpleComponent = () => {

    return (
        <View>
            <View style={{ width: 80, height: 80, backgroundColor: "#eaea00" }}></View>
            <TextName />
            <Text> Zainuddin </Text>
            <Text> Efendi </Text>
            <Text> Rambe </Text>
            <Photo />
            <TextInput style={{ borderWidth: 1 }} />
        </View>
    )

}

const TextName = () => {


    return (

        <Text> Name of</Text>
    )
}

const Photo = () => {

    return (
        <Image source={{ uri: "https://placeimg.com/100/100/tech" }} style={{ width: 100, height: 100 }} />
    )
}

export default AppwithFunctionalComponent;
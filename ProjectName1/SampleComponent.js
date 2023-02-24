
import React from "react";
import { Image, Text, TextInput, View, StyleSheet, ScrollView } from "react-native";
import images from "./images";


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

export default SimpleComponent
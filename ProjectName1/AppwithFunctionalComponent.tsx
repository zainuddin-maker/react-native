
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from "react";
import { Image, Text, TextInput, View, StyleSheet, ScrollView } from "react-native";
import images from "./images";
import MateriFlexBox from "./MateriFlexBox";
import SimpleComponent from "./SampleComponent";
import {StyingReactNative} from "./StyingReactNative";
import PositionReactNative from "./PositionReactNative";
import StylingComponent from "./src/pages/StylingComponent";

const AppwithFunctionalComponent = () => {

    return (
        <ScrollView>
            {/* <SimpleComponent/> */}
            <StylingComponent />
            {/* <StyingReactNative /> */}
            {/* <MateriFlexBox/> */}
            <PositionReactNative/>
        </ScrollView>
       
    )
}








export default AppwithFunctionalComponent;
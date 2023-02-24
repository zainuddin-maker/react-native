// install extension ES7 react native , and write rnc

import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

export default class PositionReactNative extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper : {padding : 20 , alignItems :'center'}
})


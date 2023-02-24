import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import images from '../../../images';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#eaff00',
          borderWidth: 2,
          borderColor: '#ea0000',
          marginTop: 20,
          marginLeft: 20,
        }}></View>

      <View
        style={{
          padding: 12,
          backgroundColor: '#F2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={images.macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 6}}>
          Macbook
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ea00ff',
    marginLeft: 20,
    marginTop: 40,
  },
}); 

export default StylingComponent;

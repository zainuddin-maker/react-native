import react, {Component} from 'react';
import {Text, View} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
        <View>
            <View
                    style={{
                    flexDirection: 'row',
                    backgroundColor: '#eaeaea',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    }}>
                    {/* <Text>Materi Flex Box</Text> */}
                    <View
                    style={{backgroundColor: '#ff00ff', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#000', width: 50, height: 50}}></View>

                    <View
                    style={{backgroundColor: '#ff0000', width: 50, height: 50}}></View>
                    <View
                    style={{backgroundColor: '#0000ff', width: 50, height: 50}}></View>
                </View>

            <View style={{flexDirection:"row",justifyContent:"space-between"}}>

                <Text> Beranda</Text>
                <Text> Beranda</Text>
                <Text> Beranda</Text>
                <Text> Beranda</Text>
                <Text> Beranda</Text>
                <Text> Beranda</Text>

            </View>
        </View>
    
    );
  }
}

export default MateriFlexBox;

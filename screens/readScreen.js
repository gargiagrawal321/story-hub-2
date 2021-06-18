import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: 'white'}}>
                <Text style={{fontSize: 30,alignItems: 'center',justifyContent: 'center', 
                  backgroundColor : 'pink', textAlign : 'center', color : 'black'}}>
                Story Hub 
                </Text>

          <View>
          <Image 
          style={{ margin:40,width:250, height:250}}
          source={require('../assets/reading.jpeg')} />
          </View>

                <Text style={{fontSize: 30,alignItems: 'center',justifyContent: 'center', backgroundColor : 'pink', textAlign : 'center', color : 'black'}}>
                 READING SCREEN
                </Text>
            </View>
        )
    }
}
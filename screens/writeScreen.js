import  React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
             })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        ToastAndroid.show('Story Submitted', ToastAndroid.SHORT)
    }
    render(){
        return(
            <View  style={{backgroundColor: 'white' , height: 1000}}>
               
                <Text style = {{ backgroundColor : 'pink', 
                 color : 'black', 
                 fontSize : 30, 
                 textAlign : 'center'}}> Story Hub  </Text>
                
                  <TextInput 
                    placeholder="STORY TITLE"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.inputStyle}/>
      

                   <TextInput
                    placeholder="AUTHOR"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.inputStyle} />


                      <TextInput 
                    placeholder="WRITE STORY"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                   style={{width:'90%', 
                  marginTop: 20, 
                  alignSelf: 'center', 
                  height: 200,  
                  borderWidth: 2,}}
                    multiline={true}/>

                    <TouchableOpacity
                    style={styles.submittext}
                    onPress={this.submitStory}
                    >
                    <Text style={styles.submit}>Submit</Text>
                </TouchableOpacity>

            </View>
        )
     }
  }

  const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 2,
        color : 'black'
      },

      submittext:{
        borderWidth : 2, 
        padding : 5, 
        margin:20, 
        justifyContent:'center', 
        alignItems:'center',
        alignSelf:'center', 
        height:50, 
        width:'42%',
         backgroundColor:'pink',
      },      

      submit:{fontWeight:'bold', fontSize:22}
  })
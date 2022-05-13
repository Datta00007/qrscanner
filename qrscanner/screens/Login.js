import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


function Login(props) {
    const [username,setusername] = useState('');
    const [password,setPassword]=useState('')
    
    
    const sendCred = async (props)=>{
      fetch("http://localhost:9002/login",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
         "username":username,
         "password":password
       })
      })
      .then(res=>res.json())
      .then(async (data)=>{
             try {
               await AsyncStorage.setItem('username',data.username)
               props.navigation.replace("scan")
             } catch (e) {
               console.log("error hai",e)
                Alert(e)
             }
      })
   }
  
    return (
     <> 
     <KeyboardAvoidingView behavior="position">
       <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text 
        style={{fontSize:35,marginLeft:18,marginTop:10,color:"#3b3b3b"}}>welcome to</Text>
        <Text 
        style={{fontSize:30,marginLeft:18,color:"blue"}}
        >Coders Never Quit</Text>
        <View
        style={{
          borderBottomColor:"blue",
          borderBottomWidth:4,
          borderRadius:10,
          marginLeft:20,
          marginRight:150,
          marginTop:4
        }}
         />
        <Text
        style={{
          fontSize:20,marginLeft:18,marginTop:20
        }}
        
        >Login with username</Text>
        <TextInput
          label='username'
          mode="outlined"
          value={username}
          style={{marginLeft:18,marginRight:18,marginTop:18}}
          theme={{colors:{primary:"blue"}}}
          onChangeText={(text)=>setusername(text)}
       
        />
        <TextInput
          label='password'
          mode="outlined"
          secureTextEntry={true}
          value={password}
          onChangeText={(text)=>{setPassword(text)}}
          style={{marginLeft:18,marginRight:18,marginTop:18}}
          theme={{colors:{primary:"blue"}}}
       
        />
        <Button 
          mode="contained"
          style={{marginLeft:18,marginRight:18,marginTop:18}}
         onPress={() => sendCred(props)}>
          Login
        </Button>
        
        </KeyboardAvoidingView>
     </>
    );
  
}

export default Login
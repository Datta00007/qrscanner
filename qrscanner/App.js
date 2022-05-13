
import React,{useEffect,useState} from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import AsyncStorage from '@react-native-community/async-storage';
import Scan from './screens/Scan';
const Stack = createStackNavigator();

const App= () => {
   const [isloggedin,setLogged] = useState(null)

   const detectLogin= async ()=>{
      const token = await AsyncStorage.getItem('username')
      if(token){
          setLogged(true)
      }else{
          setLogged(false)
      }
   }
  useEffect(()=>{
     detectLogin()
  },[])


  return (
    <NavigationNativeContainer>
      <Stack.Navigator
      headerMode="none"
      >   
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="scan" component={Scan} /> 
      </Stack.Navigator>
    </NavigationNativeContainer>

  );
};


export default App;

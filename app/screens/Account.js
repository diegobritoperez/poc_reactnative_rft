import 'react-native-get-random-values';
import React, { createRef, FunctionComponent,useEffect,useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import AsyncStorage from '@react-native-community/async-storage';
import Tab2Screen from './Tab2Screen';

import Cookies from 'universal-cookie';
import OnboardingScreen from './OnboardingScreen';
import SplashScreen from './SplashScreen';
import App from 'App';

const AccountScreen = ({ navigation },props) => {
  
   const [login, setLogin]= useState(null);
   console.log(login,'login como viene ?????')
  const cookies = new Cookies(cookies);
  
  

 
  useEffect(()=>{

     console.log("ejecutando useeffect 2222");
    
  //TO DO:aqui seteo algo en el localstore

     
  AsyncStorage.getItem('UID123', (err, result) => {
    console.log(result, " omboarding ======>>>> account resultadoasyn");
    if (result == null){
      //console.log(AsyncStorage,"=========> Omboarding resultado account ASIN");
     // const d = result;
     setLogin(false)
      console.log(result,"'''''''''''''esta setiado como nulo '''''''''''''''''''")
     //TODO AQUI MUESTRA UN COMPONENTE
    
    }else{
      setLogin(true)
    }
  });




    

},[]);


return <App/>, <SplashScreen navigation={navigation}/>, login ? <Tab2Screen navigation={navigation} /> : <OnboardingScreen  navigation={navigation}/> ;


 




};

export default AccountScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textScreen: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

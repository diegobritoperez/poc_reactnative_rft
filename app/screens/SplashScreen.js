import 'react-native-get-random-values';
import React, {  ImageBackground,createRef, FunctionComponent,useEffect,useState } from 'react';

import { SafeAreaView, navigation} from 'react-navigation';
import { Image,BackgroundStyleSheet, Text, Button,View, StyleSheet} from 'react-native';
import { set } from 'react-native-reanimated';
import Cookie from 'react-native-cookie';


import Cookies from 'universal-cookie';

const remote = 'https://cdna.artstation.com/p/assets/images/images/025/964/008/small/juanpiw-w-fondo-conlogo.jpg?1587477383';


export default function Splash({ navigation },props){

    
    console.log(navigation,props,'props///////////');
  
    useEffect(()=>{
      
       
        setTimeout(() =>  navigation.navigate('om'), 2000)  

   },[]);
   
   return (
       
    <SafeAreaView style={styles.container}>
    <Image
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
            }}
            source={{ uri: remote }}
          />
      
    
  </SafeAreaView>
    

   );
  
     
  
  
}
   


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
  });       

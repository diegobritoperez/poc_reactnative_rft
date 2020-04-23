
import 'react-native-get-random-values';
import React, { createRef, FunctionComponent,useEffect,useState } from 'react';
import { ImageBackground,Image,StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, navigation} from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';



import Cookies from 'universal-cookie';
import { color } from 'react-native-reanimated';


const OnboardingScreen = ({ navigation },props) => {
  const remote = 'http://www.juanpiw.cl/assets/img/e_learning-7.jpg';
  console.log(navigation,"-------navigatio");
  console.log(props);
  const cookies = new Cookies(cookies);
  if(cookies,{} ){
    
   // navigation.navigate('om')
    console.log(cookies,"hay cookies =========== omboarding")
    //TO DO : aqui seteo algo en el asynstore
   
   
  }else{
    
    console.log("no hhay cukies")
  //  navigateTab2();
  }
 
  useEffect(()=>{
   
    console.log("ejecutando useefect de omboarding");
   // Cookie.clear('https://web.movistar.com.ar/consumptions').then((cookie) => console.log(cookie," borrando omboarding ??????????"));
   // Cookie.clear('https://web.movistar.com.ar/').then((cookie) => console.log(cookie," borrando omboardin??????????"));
  
    navigation.navigate('om')

},[]);



return (
  
 <SafeAreaView style={styles.container}>
   
   <ImageBackground
            style={{
              flex: 1,
              resizeMode: "cover",
              width: '100%',
              height: '120%',

              
            }}
            source={{ uri: remote }}

            
          >
    <View>
     
    
    <Text style={styles.textScreen}>Tu linea siempre a mano</Text>
    <Text style={styles.textScreen2}>Lo que necesites para gestionar tu cuenta está acá </Text>
    <Button buttonStyle={styles.botonScreen} title="Ingresá ahora " onPress={() => navigation.navigate('login')} />
    <Button buttonStyle={styles.botonScreen2} titleStyle={styles.titleScreenC} title="Porta tu línea" type="outline" onPress={() => navigation.navigate('Cuenta')} />
    <Text style={styles.textScreen3}> Al continuar has leído y aceptás nuestros términos y condiciones </Text>
    </View>   
            </ImageBackground>
   
  
 </SafeAreaView>
 
 
);


function navigateTab2(){
  navigation.navigate('Tab2')
 }
  
 function Home(){
  navigation.navigate('Home')
 }
 
  

 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textScreen: {
    paddingTop: 400,
    alignSelf:'center',
    fontSize: 18,
     marginBottom: 20,
     color:'#fff',
     
  },
  textScreen2: {
    alignSelf:'center',
    fontSize: 14,
     marginBottom: 20,
     color:'#fff'
  },

  textScreen3: {
   
    
    fontSize: 14,
     marginBottom: 20,
     color:'#fff',
     marginLeft: 30,
     marginRight:30,
     justifyContent: 'center',
     textAlign: 'center',

  },
  botonScreen:{
    marginLeft: 30,
    marginRight:30,
    paddingLeft: 40,
    paddingRight:40,
    backgroundColor:'#5bc500',
    marginBottom:10
  },
  botonScreen2:{
    marginLeft: 30,
    marginRight:30,
    paddingLeft: 40,
    paddingRight:40,
    borderColor:'#fff',
    marginBottom:10,
   
    borderWidth:2

  },
  titleScreenC:{
    color:'#fff'
    
  }
});

export default OnboardingScreen;
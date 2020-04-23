import 'react-native-get-random-values';
import React, { createRef, FunctionComponent,useEffect,useState, RefreshControl, } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import WebViewScreen from './WebViewScreen';
import LoginScreen from './WebViewScreen';
import { WebView } from 'react-native-webview';



import Cookies from 'universal-cookie';




const cookies = new Cookies(cookies);

const Tab2Screen = ({ navigation },props) => {
console.log(props,"props");

Tab2Screen.navigationOptions = {
  //title:"hoa",
 // headertitle: 'Chat',
  headerStyle: { backgroundColor: '#00a9e0' },
  headerTitleStyle: { color: '#fff' },
}

  
useEffect(()=>{
       
  cookies.set('webiid', 'installationI', { path: 'https://web.movistar.com.ar/' });
     console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman

     cookies.set('sid', 'installationI', { path: 'https://web.movistar.com.ar/consumptions' });
     console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman


     cookies.set('lang', 'installatioI', { path: 'https://web.movistar.com.ar/consumptions' });
     console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman
   
        console.log("ejecutando useeffect tab2 222222222");
         
   },[]);
     
  return (
    <WebView useWebKit={true}
    
    source={{ uri: 'https://web.movistar.com.ar/consumptions' }}
   onNavigationStateChange ={(event)=> {
       console.log('captura de evento',event)     
       checkUrl(event) 
      
   }}
   style={{marginTop: 20}}
 >   
 </WebView>  
  );
  function checkUrl(event) {

    if(event.url === "https://web.movistar.com.ar/consumptions"){
      cookies.getAll( 'https://web.movistar.com.ar/consumptions')
    //cookies.remove('sid',{ path: 'https://web.movistar.com.ar/consumptions' })
       // clear all cookies for 'http://bing.com'
    
       cookies.set('webiid', 'installatio', { path: 'https://web.movistar.com.ar/' });
       console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman
  
       cookies.set('sid', 'installatio', { path: 'https://web.movistar.com.ar/consumptions' });
       console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman
  
  
       cookies.set('lang', 'installati', { path: 'https://web.movistar.com.ar/consumptions' });
       console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman
    }else {
      cookies.getAll( 'https://web.movistar.com.ar/consumptions')
      navigation.navigate('Cuenta')
      console.log(cookies, "todas las cokies en tab2 -------")
        
    }
     }
  
};

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

export default Tab2Screen;
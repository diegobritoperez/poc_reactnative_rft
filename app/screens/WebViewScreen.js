
import 'react-native-get-random-values';
import React, { createRef, FunctionComponent,useEffect,useState, RefreshControl, } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { WebView, WebViewNavigation } from 'react-native-webview';
//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Cookie from 'react-native-cookie';
import Cookies from 'universal-cookie';



const cookies = new Cookies(cookies);


 let webViewRef = createRef();

 function WebViewScreen({navigation},props){


 WebViewScreen.navigationOptions = {
    headertitle: 'login',
    headerStyle: { backgroundColor: '#00a9e0' },
    headerTitleStyle: { color: '#fff' },
}
  

   console.log(props,'props///////////');
   ////////////////
   
   console.log(webViewRef,"WEBREFFFFFFFF")
  
   ////////////

   cookies.getAll( 'https://web.movistar.com.ar/')
   console.log( cookies.getAll( 'https://web.movistar.com.ar/'),"todas las cookies ===================> por universal cookies")
    
  const onMessage = (event) => {
    const { data } = event.nativeEvent;
  
    if (data.includes('Cookie:')) {
      // process the cookiekes
      console.log(data.includes(' Cookie'),'&&&&&&&&&&&&&&&')
      //// aqui traigo todas las cookies
    
    }

  };
 
 useEffect(()=>{
  //navigateTab2()
  //Cookie.clear('https://auth.ar-pro.baikalplatform.com/saml-login?disco=true&idp=https://idp.movistar.com.ar/IDP/sps/Movistar/saml20').then((cookie) => console.log(cookie," borrando omboardin??????????"));
  //https://idp.movistar.com.ar/convergencia/login_C2.html
 // Cookie.clear('https://idp.movistar.com.ar/convergencia/login_C2.html').then((cookie) => console.log(cookie," borrando omboardin??????????"));
  cookies.set('webiid', 'installationId', { path: 'https://web.movistar.com.ar/' });
  console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman
  //Cookie.clear('https://web.movistar.com.ar/').then((cookie) => console.log(cookie," borrando cokiesn??????????"));
        console.log("ejecutando useeffect webwiescrenn 11111111111111111");
         
       //TO DO:aqui seteo algo en el localstore
        AsyncStorage.setItem('UID123', 'hola', () => {
        AsyncStorage.getItem('UID123', (err, result) => {
          console.log(result, "======>>>>resultadoasyn");
          if (result != null){
            
            console.log("=========> se guardo la variable")
          }
        });
      });

     if(!cookies.cookies){
      console.log(cookies.cookies,"hay cookies ===========·333ssss")
     
    }else{
      // COOKIE VARIABLE
          console.log(cookies.cookies,"no hhay cukies++++//////////////")
         let c = cookies.cookies;
          console.log(c,'c------------')
         
      
    }
   },[]);
     
      
  return (   
    
     <WebView useWebKit={true}
           
           ref={webViewRef}
           onMessage={onMessage}
           source={{ uri: 'https://web.movistar.com.ar/' }}
           
           onNavigationStateChange ={(event)=> {
           console.log('captura de evento',event)     
           checkUrl(event) 
          

           if (webViewRef.current) {
          // Cookie.clear()
            // recarga
             console.log("hola------------a>>>>");
           
         
         
        }
        
       }}
       /* onLoadStart={
       // ()=>navigation.navigate('Cuenta').cosole.log('--------------------xxxxxxxxxxxs--------------e')
        
       } */
       onLoadEnd={ onloadEm}
     >   

     
     </WebView>   
     
   );
   
   function onloadEm(){
    cookies.set('webiid', 'installationId', { path: 'https://web.movistar.com.ar/' });
    console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman
    
    console.log("onloadend   endn-----------------'''''''''''''''''''''''''''''''''''''''''''''''''''_>")
  }

  
   function checkUrl(event) {

    if(event.url === 'https://web.movistar.com.ar/consumptions'){

      cookies.set('webiid', 'installationId', { path: 'https://web.movistar.com.ar/' });
      console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee');

      cookies.set('sid', 'sesionId', { path: 'https://web.movistar.com.ar/consumptions' });
      console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee');




     // Cookie.set('https://web.movistar.com.ar/consumptions', 'sid', 'dino').then(() => console.log('success navagando tap 1')),
     // Cookie.set('https://web.movistar.com.ar/', 'webiid', 'dino2').then(() => console.log('--navegando tap rsuccess2'))
     // Cookie.set('https://web.movistar.com.ar/', 'lang','c').then(() => console.log('--navegando tap rsuccess2')) 
      console.log("aqui estamos viajando a consumpitoons");
      navigateTab2();
       
    }else {
     
    }
     }
   
     function navigateTab2(){
      navigation.navigate('Cuenta')
      console.log('ññññññññññññ viajando a Cuenta')
     }
     
     function loginD(){
 
      navigation.navigate('login')
 
     }
   
     
    
    


}

export default WebViewScreen;



   

    
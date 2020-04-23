
import 'react-native-get-random-values';
import React, { createRef, FunctionComponent,useEffect,useState, RefreshControl, } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { WebView, WebViewNavigation } from 'react-native-webview';
//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Cookie from 'react-native-cookie';
import Cookies from 'universal-cookie';




const cookies = new Cookies(cookies);

//cookies.set('webiid', 'Pacman', { path: 'https://web.movistar.com.ar' });
//console.log(cookies.get('webiid =========//////////')); // Pacman

 let webViewRef = createRef();

 function DescubreScreen({navigation},props){

   console.log(props,'props///////////');
   ////////////////
   WebViewScreen.navigationOptions = {
   // headertitle: 'Chat',
    headerStyle: { backgroundColor: '#00a9e0' },
    headerTitleStyle: { color: '#fff' },
}
   
   console.log(webViewRef,"WEBREFFFFFFFF")
  
   ////////////
    
  const onMessage = (event) => {
    const { data } = event.nativeEvent;
  
    if (data.includes('Cookie:')) {
      // process the cookiekes
      console.log(data.includes(' Cookie'),'&&&&&&&&&&&&&&&')
      //// aqui traigo todas las cookies
     cookies.getAll( 'https://web.movistar.com.ar/')
     console.log( cookies,"todas las cookies ===== por universal cookies")
    }

  };
 
 useEffect(()=>{
       
   Cookie.set('https://web.movistar.com.ar/consumptions', 'sid', 'use').then(() => console.log('success0')),
            Cookie.set('https://web.movistar.com.ar/', 'webiid', 'use').then(() => console.log(' rsuccess0'))
          
              Cookie.set('https://web.movistar.com.ar/', 'lang','use').then(() => console.log(' rsuccess0'))
    // navigateTab2()
       // loginD()
       // navigation.navigate('login')// aqui me faltaira una pantalla
        console.log("ejecutando useeffect webwiscren de descubre---------------------------------------u");
         
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

      // TO DO : RESCATO UNA COOKIE COMO VARIABLE
        
          console.log(cookies.cookies,"no hhay cukies++++//////////////")
         let c = cookies.cookies;
          console.log(c,'c------------ lo que contiene ')
         
      
    }
   },[]);
     
     
   
      
  return (   
    
     <WebView useWebKit={true}
           
           ref={webViewRef}
           onMessage={onMessage}
           source={{ uri: 'https://web.movistar.com.ar' }}
           
           onNavigationStateChange ={(event)=> {
           console.log('captura de evento',event)     
           checkUrl(event) 
          

           if (webViewRef.current) {
          //Cookie.clear()
            // recarga
             console.log("hola------------a>>>>");
           
            Cookie.get('https://web.movistar.com.ar/').then((cookie) =>{
           
              //  Cookie.clear('https://web.movistar.com.ar/consumptions').then((cookie) => console.log(cookie," clear ??????????"));
             //  Cookie.clear('https://web.movistar.com.ar/').then((cookie) => console.log(cookie," clear??????????"));
             let cook = cookie;
             console.log(cook,"====== cookies traidas====")
           
             if(cook == null){
            
             console.log("navegacion...........")
              
          }else{
           
            console.log("navegacion...........222")
          }
           if(cook == null){
         
            console.log("la data tiene cookies")
          
          }else{
           // Cookie.clear();

            console.log( cookies,"la data no sabe tiene cookies");
          
            
             //   Cookie.set('https://web.movistar.com.ar', 'lang','hom').then(() => console.log(' rsuccess0'))
          }
          // Cookie.set('https://web.movistar.com.ar/consumptions', 'sid', 'xx').then(() => console.log('success0')),
          //  Cookie.set('https://web.movistar.com.ar', 'webiid', 'xxx').then(() => console.log(' rsuccess0'))
          
          //    Cookie.set('https://web.movistar.com.ar', 'lang','xxx').then(() => console.log(' rsuccess0'))
         
      
           },
           
          // Cookie.set('https://web.movistar.com.ar/consumptions', 'sid', 'sws').then(() => console.log('success wev')),
          // Cookie.set('https://web.movistar.com.ar', 'webiid', 'holss').then(() => console.log(' rsuccess wb'))
          
          );
         
        }
        
       }}
       style={{marginTop: 20}}

       onLoad={()=>{
        navigation.navigate('Tab2')
       }}
     >   

     
     </WebView>   
     
   );


  
   function checkUrl(event) {

    if(event.url === 'https://web.movistar.com.ar/consumptions'){
      Cookie.set('https://web.movistar.com.ar/consumptions', 'sid', 'dinow').then(() => console.log('success navagando tap 1')),
      Cookie.set('https://web.movistar.com.ar', 'webiid', 'dino2').then(() => console.log('--navegando tap rsuccess2'))
      Cookie.set('https://web.movistar.com.ar', 'lang','c').then(() => console.log('--navegando tap rsuccess2')) 
      console.log("aqui estamos viajando a consumpitoons");
      navigateTab2();
       
    }else {
     
    }
     }
   
     function navigateTab2(){
      navigation.navigate('Tab2')
     }
     
     function loginD(){
 
      navigation.navigate('login')
 
     }
   
     
    
    


}

export default DescubreScreen;



   

    
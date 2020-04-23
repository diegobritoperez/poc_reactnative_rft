import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { WebView, WebViewNavigation } from 'react-native-webview';

const DetailScreen = ({ navigation }) => {

 
  return (
    <WebView useWebKit={true}
           
    
  
    source={{ uri: 'http://3dmente.cl/externos/Prueba_fena/vtour/tour.html' }}
    
  />
  )
}



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

export default DetailScreen;

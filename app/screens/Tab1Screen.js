
import React,{useEffect} from 'react';
import { StyleSheet, Text, Button,Platform,ActionSheetIOS} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Cookie from 'react-native-cookie';

import Cookies from 'universal-cookie';





const cookies = new Cookies(cookies);

const Tab1Screen = ({ navigation },props) =>{ 



  Tab1Screen.navigationOptions = {
    tabBarOptions: { 
      showIcon: true 
    }, 
    headertitle: 'Chat',
    headerStyle: { backgroundColor: '#00a9e0' },
    headerTitleStyle: { color: '#fff' },
}
   const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "salir", "Reset"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          logout();
        } else if (buttonIndex === 1) {
          logout();
        } else if (buttonIndex === 2) {
          logout();
        }
      }
    );

  useEffect(()=>{

    cookies.set('webiid', 'installationId', { path: 'https://web.movistar.com.ar/' });
     console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman

     cookies.set('sid', 'installationId', { path: 'https://web.movistar.com.ar/consumptions' });
     console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman


     cookies.set('lang', 'installatioId', { path: 'https://web.movistar.com.ar/consumptions' });
     console.log(cookies.get('webiid'),'=========================================UNIVERSAL WEEBIDD  useeeee'); // Pacman

     const majorVersionIOS = parseInt (Platform.Version, 10); 
     if (majorVersionIOS) { 
       
       console.log('Su versión de IOS es menor o igual que 9')
       }
   // Cookie.set('https://web.movistar.com.ar/consumptions', 'sid', 'hom').then(() => console.log('succestab1')),
   //  Cookie.set('https://web.movistar.com.ar/', 'webiid', 'hom').then(() => console.log(' rsuccesstab1'))
   //  Cookie.set('https://web.movistar.com.ar/', 'lang','hom').then(() => console.log(' rsuccesstab1'))
     
  
  },[]);

 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textScreen}>Home Screen</Text>
      <Button
        title="Bonus Everis"
        onPress={() => navigation.navigate('xd')}
      />

     
    
     
      <Button title="Log out " onPress={lo}  />
    </SafeAreaView>

//
  );
   
  function logout(){
     // Cookie.clear('https://web.movistar.com.ar/consumptions').then((cookie) => console.log(cookie," clear ??????????xxx tab1"));
      //  Cookie.clear('https://web.movistar.com.ar/').then((cookie) => console.log(cookie," clear??????????xxx tab1"));
      
    navigation.navigate('login2')

   // Cookie.set('https://web.movistar.com.ar/consumptions', 'sid', 'sessionId').then(() => console.log('success')),
   // Cookie.set('https://web.movistar.com.ar', 'webiid', 'installationId').then(() => console.log(' rsuccess'))
   }
   function lo(){
    const majorVersionIOS = parseInt (Platform.Version, 10); 
    if (Platform.OS === 'android') { 
      logout();
    }else{
      
      onPress()
      console.log ('Su versión de IOS es menor o igual que 9'); 
    }
  

}

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
  },


  header: {
    height: Platform.OS === 'android' ? 76 : 100,
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    ...Platform.select({
      ios: { backgroundColor: '#f00', paddingTop: 24},
      android: { backgroundColor: '#00f'}
    }),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
});

export default Tab1Screen;

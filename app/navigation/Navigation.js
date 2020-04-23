
import React from "react";
import { Image } from 'react-native-elements';
import { ImageBackground,StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Screens
import OnboardingScreen from '../screens/OnboardingScreen';
import DescubreScreen from '../screens/Descubre';

import DetailScreen from '../screens/DetailScreen';
import NewScreen from '../screens/NewScreen';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen'; 
import WebViewScreen from '../screens/WebViewScreen';

import SplashScreen from '../screens/SplashScreen';

import CuentaScreen from '../screens/Cuenta';
/* import  MyAccountScreen from '../screens/Account/MyAccount';
import LoginScreen from '../screens/Account/Login';
import AjustesScreen from './Ajustes'; */

const image = 'https://scontent.fscl8-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/94261658_2039826869497216_6939946545018044416_n.jpg?_nc_cat=108&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_ohc=6Rf0z4CVI1MAX83nGUo&_nc_ht=scontent.fscl8-1.fna&_nc_tp=14&oh=e685225f53d8e35093ffb2e92d5d1c32&oe=5EC5F4A3';
const image2 = 'https://scontent.fscl8-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/94419096_2039826656163904_8947139162218168320_n.jpg?_nc_cat=108&_nc_sid=730e14&efg=eyJpIjoidCJ9&_nc_ohc=Vd09LRTzoAcAX8cYz_y&_nc_ht=scontent.fscl8-1.fna&_nc_tp=14&oh=b580a9c58b31a272be59eec4c732ce9a&oe=5EC72D76';
const image3 = 'https://scontent.fscl8-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/94381836_2039826706163899_8141233367107502080_n.jpg?_nc_cat=110&_nc_sid=730e14&efg=eyJpIjoidCJ9&_nc_ohc=jX9JvB99Mf0AX9Z-zIN&_nc_ht=scontent.fscl8-1.fna&_nc_tp=14&oh=8489e697e99902b40dc347f1284caf4d&oe=5EC7CF3B';
const image4 = 'https://scontent.fscl8-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/94312915_2039826806163889_90188777003155456_n.jpg?_nc_cat=104&_nc_sid=730e14&efg=eyJpIjoidCJ9&_nc_ohc=1KHHh1QlO2MAX8Vghtk&_nc_ht=scontent.fscl8-1.fna&_nc_tp=14&oh=fa25f5027fd3bceb20b49b5dde696af1&oe=5EC5BA74';







export default createAppContainer(

  
  createSwitchNavigator(
    {
      //Auth: LoginScreen,
          Auth: SplashScreen,
          om:{
            screen: OnboardingScreen,
            navigationOptions:()=>({
                title:"om"
    
            })
    
        },
      
    
      login2:{
        screen: CuentaScreen,
        navigationOptions:()=>({
            title:"login2"

        })

    },

     
    descubre:{
      screen: DescubreScreen,
      navigationOptions:()=>({
          title:"Descubre"

      })

  },


  Cuenta:{
    screen: Tab2Screen,
    navigationOptions:()=>({
        title:"cuenta"

    })

},
  
  login: createStackNavigator(
    {
    login:WebViewScreen,
    navigationOptions:()=>({
     // headertitle: 'Chat',
    headerStyle: { backgroundColor: '#00a9e0' },
    headerTitleStyle: { color: '#fff' },
    })
   } , 
    {headerLayoutPreset: 'center',  },
         

  ),
  
         // om: createStackNavigator({
         //   Onboardingcreen:OnboardingScreen,
         // }
         // ),
         Splash: createStackNavigator({
            Splashcreen:SplashScreen,
          }
          ),
  

       
      Cuenta: createBottomTabNavigator (
      
          {
          cuenta:{
  
            screen: Tab2Screen,
           
            navigationOptions: () => ({
              tabBarLabel: "Cuenta",
              tabBarIcon: ({ tintColor }) => (
                <Image
                source={{ uri: image }}
                style={{ width: 20, height: 20 }}
              />
              )
            })
      
        
        
        
         },

         Notificaciones:{
  
          screen: Tab2Screen,
         
          navigationOptions: () => ({
            tabBarLabel: "Descubre",
            tabBarIcon: ({ tintColor }) => (
              <Image
              source={{ uri: image2 }}
              style={{ width: 20, height: 20 }}
            />
            )
          })
    
      
      
      
       },


       notificaciones:{
  
        screen: Tab2Screen,
       
        navigationOptions: () => ({
          tabBarLabel: "notificaciones",
          tabBarIcon: ({ tintColor }) => (
            <Image
            source={{ uri: image3 }}
            style={{ width: 20, height: 20 }}
          />
          )
        })

    
     },

     ajustes:{
       
      
      screen: Tab1Screen,
      
      options:()=> ({
        title: 'My home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }),
     
      navigationOptions: () => ({
        title:'jdjd',
        tabBarLabel: "ajustes",
        tabBarIcon: ({ tintColor }) => (
          <Image
          source={{ uri: image4 }}
          style={{ width: 20, height: 20 }}
        />
        )
      })

  
   },

    },
       
        ),
     
          }

  )


)
import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import  MyAccountScreen from '../screens/Account/MyAccount';
import LoginScreen from '../screens/Account/Login';
import AjustesScreen from './Ajustes';





const NavigationStacks = createStackNavigator({

   
    MyAccount:{
        screen: MyAccountScreen,
        navigationOptions:()=>({
            title:""

        })

    },
    Login:{
        screen: LoginScreen,
        navigationOptions:()=>({
            title:"Login"

        })

    }, 
    Ajustes:{
        screen: AjustesScreen,
        navigationOptions:()=>({
            title:"ajustes"

        })

    }, 


  
   
   });
 
 
 export default  createAppContainer(NavigationStacks)
 
 
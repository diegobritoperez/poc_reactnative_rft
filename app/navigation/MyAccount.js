import { createStackNavigator} from "react-navigation-stack";

import  MyAccountScreen from '../screens/Account/MyAccount';
import LoginScreen from '../screens/Account/Login';
import AjustesScreen from '../screen/Ajustes';

const MyAccountScreenStacks =  createStackNavigator({
   
    MyAccount:{
        screen: MyAccountScreen,
        navigationOptions:()=>({
            title:"Accounts"

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
            title:"Ajustes"

        })

    }, 


});


export default  MyAccountScreenStacks;


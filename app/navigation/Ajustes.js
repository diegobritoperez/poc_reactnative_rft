import { createStackNavigator} from "react-navigation-stack";
import  AjustesScreen from '../screens/Ajustes';


const AjustesScreenStacks =  createStackNavigator({
   
    Ajustes:{
        screen: AjustesScreen,
        navigationOptions:()=>({
            title:"Ajustes"

        })

    } 
});


export default AjustesScreenStacks;
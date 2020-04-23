import { createStackNavigator} from "react-navigation-stack";
import  CuentaScreen from '../screens/Cuenta';


const CuentaScreenStacks =  createStackNavigator({
   
    Cuenta:{
        screen: CuentaScreen,
        navigationOptions:()=>({
            title:"Cuenta"

        })

    } 
});


export default CuentaScreenStacks;
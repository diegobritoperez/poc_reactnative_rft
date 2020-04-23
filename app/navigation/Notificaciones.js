import { createStackNavigator} from "react-navigation-stack";
import  NotificacionesScreen from '../screens/Notificaciones';


const NotificacionesScreenStacks =  createStackNavigator({
   
    Notificaciones:{
        screen: NotificacionesScreen,
        navigationOptions:()=>({
            title:"Notificaciones"

        })

    } 
});


export default NotificacionesScreenStacks;
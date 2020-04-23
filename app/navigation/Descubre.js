import { createStackNavigator} from "react-navigation-stack";
import  DescubreScreen from '../screens/Descubre';


const DescubreScreenStacks =  createStackNavigator({
   
    Descubre:{
        screen: DescubreScreen,
        navigationOptions:()=>({
            title:"Descubre"

        })

    } 
});


export default DescubreScreenStacks;
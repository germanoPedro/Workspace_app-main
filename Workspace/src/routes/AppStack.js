import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Registerscreen from "../screens/Registerscreen";
import Homescreen from "../screens/Homescreen";
import GlobalStyle from "../utils/GlobalStyle";
import Welcomescreen from "../screens/Welcomescreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="start" component={Welcomescreen} />
                <Stack.Screen name="Register" component={Registerscreen}/>
                <Stack.Screen name="Home" component={Homescreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;
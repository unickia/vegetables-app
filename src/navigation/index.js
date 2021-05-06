import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import { navigationRef } from '../utils/navigate';

import RegistrationScreen from "../screens/auth/sign-up";
import LoginScreen from "../screens/auth/sign-in";

const Stack = createStackNavigator();

function StackNavigatorLogin() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Registration" options={{ headerShown: false }} component={RegistrationScreen} />            
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />            
        </Stack.Navigator>
    );
}


function MainNavigator() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={StackNavigatorLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;
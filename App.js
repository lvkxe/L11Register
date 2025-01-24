import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home.js';
import Register from './Register.js';
import Success from './Success.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'Go-Kart Competition' }} />
                <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
                <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

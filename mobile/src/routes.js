import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cases from './pages/Cases';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Lista de casos" component={Cases}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}


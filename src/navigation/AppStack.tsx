import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GlobalWrapper } from '../component';
import { AppStrings } from '../constants';
import { AuthStack, ProfileStack } from './stack';



const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => {
    return (

            <NavigationContainer >
                <StatusBar  translucent={true} barStyle={'dark-content'} />
                <Stack.Navigator  screenOptions={{ headerShown: false, }}>
                    <Stack.Screen name={AppStrings.AuthStack} component={AuthStack} />
                    <Stack.Screen name={AppStrings.ProfileStack} component={ProfileStack} />
                </Stack.Navigator>
            </NavigationContainer>

    )
}

export default AppStack

const styles = StyleSheet.create({})
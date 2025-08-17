import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppStrings } from '../../constants';
import login from '../../screens/auth/login';
import otp from '../../screens/auth/otp';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}   >
            <Stack.Screen name={AppStrings.Login} component={login}/>
            <Stack.Screen name={AppStrings.OTP} component={otp}/>
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
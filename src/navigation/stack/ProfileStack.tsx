import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppStrings } from '../../constants'
import coupen from '../../screens/home/coupen'
import coupendetails from '../../screens/home/coupendetails'

const Stack  = createNativeStackNavigator()
const ProfileStack = () => {
  return (
   <Stack.Navigator screenOptions={{ headerShown: false , }}>
    <Stack.Screen name={AppStrings.Coupen} component={coupen}/>
    <Stack.Screen name={AppStrings.Details} component={coupendetails}/>
   </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})
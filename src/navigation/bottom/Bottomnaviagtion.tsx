import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppStrings } from '../../constants'
import order from '../../screens/home/order'
import coupen from '../../screens/home/coupen'
import profile from '../../screens/home/profile'

const Tab = createBottomTabNavigator()


const Bottomnaviagtion = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name={AppStrings.Order} component={order}/>
        <Tab.Screen name={AppStrings.Coupen} component={coupen}/>
        <Tab.Screen name={AppStrings.Profile} component={profile}/>
    </Tab.Navigator>
  )
}

export default Bottomnaviagtion

const styles = StyleSheet.create({})
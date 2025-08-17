import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppStrings } from '../../constants'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'


const Coupen = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{alignItems:'center', justifyContent:'center', flex:1}}>
            <LinearGradient
              colors={['#252525', '#070707']}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={StyleSheet.absoluteFill}     
              pointerEvents="none"                
            />

    </SafeAreaView>
  )
}

export default  Coupen

const styles = StyleSheet.create({})
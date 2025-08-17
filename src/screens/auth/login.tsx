import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStyle, Colors } from '../../theme'
import CustomButton from '../../component/custombutton'
import { AppStrings } from '../../constants'
import CustomTextInput from '../../component/customtextinput'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import CustomText from '../../component/customtext'

type RootStackParamList = {
  Login: undefined
  OTP: { phoneNumber: string }
}

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [inputValue, setInputValue] = useState<string>('')


  const validNumber = () => {
    // example validation (only digits, at least 10 numbers)
    const cleaned = inputValue.replace(/\D/g, '')
    return cleaned.length >= 10 ? '+91' + cleaned : ''
  }

const handleLogin = () => {
  const phoneNumber = validNumber();
  if (phoneNumber) {
    navigation.navigate('OTP', { number: phoneNumber }); // ✅ use `number` instead of `param`
  } else {
    // show error (Toast, Snackbar, or Alert)
    console.warn('Please enter a valid phone number');
  }
};

  return (

    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#252525', '#070707']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}     
        pointerEvents="none"                
      />
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <CustomText textStyle={styles.maintext} text={AppStrings.McBrand}/>
          <CustomText textStyle={styles.logintext} text={AppStrings.LOGIN}/>
        </View>
        <View style={styles.inputContainer}>

          <CustomText textStyle={styles.numberText} text={AppStrings.numbertext}/>
          <CustomTextInput onChangeText={setInputValue} Value={inputValue} />
        </View>
      </View>
      <CustomButton text={AppStrings.LOGIN} onpress={handleLogin} />
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    ...AppStyle.FlexBox.flex1,
    ...AppStyle.Padding.ph16,
  },
  maintext: {
    ...AppStyle.Fonts.f42w900,
    color: Colors.maintextcolor,
    ...AppStyle.Fonts.textcenter
  },
  logoContainer: {

    ...AppStyle.FlexBox.justifyContentEnd,
    ...AppStyle.FlexBox.flex035,
    ...AppStyle.Fonts.textcenter,
  },
  innerContainer: {
    ...AppStyle.FlexBox.alignItemCenter,
    ...AppStyle.FlexBox.flex095,
    // backgroundColor:'white',
  },
  logintext: {
    color: Colors.white,
    ...AppStyle.Fonts.textcenter,
    ...AppStyle.Fonts.f20w700,
    letterSpacing:4,
    ...AppStyle.Padding.pv10,
    fontFamily:'Poppins-Bold',
  },
  numberText: {
    ...AppStyle.Fonts.f16w500,
    color: Colors.white,
    ...AppStyle.Fonts.textcenter,
    ...AppStyle.Padding.pv20,
    fontFamily:'Poppins-Medium',
  },
  inputContainer: {
    ...AppStyle.FlexBox.flex030,
    // backgroundColor:'red',
    ...AppStyle.Padding.ph16,
    justifyContent: 'center',
  }
})



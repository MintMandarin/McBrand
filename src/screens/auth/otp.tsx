import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../assets/images'
import { AppStyle, Colors } from '../../theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import OTPInput from '../../component/otpInput'
import CustomButton from '../../component/custombutton'
import { AppStrings } from '../../constants'
import LinearGradient from 'react-native-linear-gradient'
import OTPCountdown from '../../component/otpcount'
import CustomText from '../../component/customtext'
interface OTPInputGroupProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

const Otp : React.FC<OTPInputGroupProps> = ({ length = 4, onComplete }) => {
 const navigation = useNavigation();
  const route = useRoute();
  const { number } = route.params as { number: string };
  console.log("🚀 ~ Otp ~ number:", number)


const maskNumber = (num: string) => {
  if (!num || num.length < 6) return num; 

  const visibleStart = num.slice(0, 5);   
  const visibleEnd = num.slice(-3);      
  const masked = '****'
  // const masked = '*'.repeat(num.length - (visibleStart.length + visibleEnd.length));
  return `${visibleStart}${masked}${visibleEnd}`;
};
 const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
const inputRefs = useRef(Array.from({ length }, () => React.createRef<TextInput>())).current;

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < length - 1) {
      inputRefs[index + 1].current?.focus();
    }

    if (newOtp.join('').length === length && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyPress = (e: { nativeEvent: { key: string } }, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  console.log(otp)
  const handleSubmit = () => {
    navigation.navigate(AppStrings.ProfileStack,{screen: AppStrings.Coupen})
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
      <View style={styles.secContainer}>
        <View style={styles.frameContainer}>
          <Image source={images.frame} style={styles.framestyle} />
        </View>
        <View style={styles.otpcontain}>
          <CustomText textStyle={styles.inputText} text={AppStrings.InputOTP}/>
          <CustomText textStyle={styles.otpText} text={AppStrings.OTPsent}/>
          <CustomText textStyle={styles.number} text={maskNumber(number)}/>
          <View style={styles.otpContainer}>
            {otp.map((val, index) => (
              <OTPInput
                key={index}
                ref={inputRefs[index]}
                value={val}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>
          <CustomText textStyle={[styles.otpText, AppStyle.Margins.mv25,]} text={AppStrings.NotCode}/>
          <OTPCountdown initialSeconds={60} onResend={()=>{
            console.log('Resend OTP triggered!');
          }}
          />
        </View>
      </View>
      <CustomButton text={AppStrings.submit} onpress={handleSubmit} />

    </SafeAreaView>
  )
}

export default Otp

const styles = StyleSheet.create({
  container: {
    ...AppStyle.FlexBox.flex1,
    ...AppStyle.Padding.ph16,
  },
  secContainer: {
    ...AppStyle.FlexBox.flex095
  },
  frameContainer: {
    ...AppStyle.FlexBox.flex025,
    ...AppStyle.FlexBox.justifyendaligncenter,
    // backgroundColor:'red',

  },
  otpcontain:{
    ...AppStyle.FlexBox.flex050,
    ...AppStyle.FlexBox.center,
    // backgroundColor:'pink',
   
  },
  framestyle: {
    height: 68,
    width: 126,
  },
  inputText: {
    color: Colors.white,
    ...AppStyle.Fonts.f26w600,
    ...AppStyle.Fonts.textcenter,
    ...AppStyle.Padding.pv20,
  fontFamily:'Poppins-SemiBold',
  letterSpacing:4.4,
  },
  otpText: {
    ...AppStyle.Fonts.f12w500,
    color: Colors.textcolor,
    ...AppStyle.Fonts.textcenter,
    fontFamily:'Poppins-Regular',
    
  },
  otpContainer: {
    ...AppStyle.FlexBox.justifyrowcenter,
  },
  number:{
    ...AppStyle.Fonts.f14w500,
    color:Colors.activecolor,
    ...AppStyle.Fonts.textcenter,
    ...AppStyle.Padding.pv10,
    fontFamily:'Poppins-Regular',

  }
})
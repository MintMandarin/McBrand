import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AppStyle, Colors } from '../../theme'
import CustomText from '../customtext'

interface CustomButtonProps {
    text?: string,
    onpress?: () => void,
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onpress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onpress}>
      <LinearGradient
        start={{ x: 0.08, y: 0 }}   // approximating 8.59% start
        end={{ x: 1, y: 0.007 }}    // slight tilt to match 84.33deg
        colors={['#D29A1A', '#815D0B']}
        style={styles.buttonstyle}
      >
        <CustomText textStyle={styles.textcolor} text={text} />
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  buttonstyle: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    ...AppStyle.FlexBox.center,
  },
  textcolor: {
    color: Colors.white,
    ...AppStyle.Fonts.f14,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 1.2,
  },
})

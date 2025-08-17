import { Image, ImageSourcePropType, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import { AppStrings } from '../../constants'
import images from '../../assets/images'
import { AppStyle, Colors } from '../../theme'

    interface CustomTextInputProps {
        onChangeText?: (text: string) => void,
        Value?: string,
        source?:ImageSourcePropType,

    }

const CustomTextInput : React.FC<CustomTextInputProps> = ({onChangeText, Value, source}) => {

  return (
    <View style={styles.container}>
        <Image source={images.flag} style={styles.flag}/>
        <Text style={styles.INDText}>{AppStrings.IND}</Text>
        <TextInput keyboardType='number-pad' style={styles.inputText} onChangeText={onChangeText} value={Value}/>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        backgroundColor:Colors.InputColor,
        borderWidth:1,
        borderColor:Colors.bordercolor,
        ...AppStyle.FlexBox.rowaligncenter,
        ...AppStyle.Padding.ph10,
        borderRadius:10,
        elevation:5,
    },
    inputText:{
        width:'90%', 
        color:Colors.white,
        fontFamily:'Poppins-Medium',
    },
    flag:{
        height:24, 
        width:24,
    },
    INDText:{
        color:Colors.text3color,
        ...AppStyle.Padding.ph10,
        fontFamily:'Poppins-Medium',
    }
})
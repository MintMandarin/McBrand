import React, { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { AppStyle, Colors } from '../../theme';

interface OTPInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const OTPInput = forwardRef<TextInput, OTPInputProps>(({ value, onChangeText, ...rest }, ref) => {
  return (
    <TextInput
      ref={ref}
      value={value}
      onChangeText={onChangeText}
      maxLength={1}
      keyboardType="number-pad"
      style={styles.inputStyle}
      {...rest}
    />
  );
});

export default OTPInput;

const styles = StyleSheet.create({
  inputStyle: {
    height: 80,
    width: 60,
    ...AppStyle.Fonts.textcenter,
    color: Colors.white,
    ...AppStyle.Fonts.f36w600,
    backgroundColor: Colors.InputColor,
    borderColor: Colors.bordercolor,
    borderWidth: 1,
    borderRadius: 15,
    ...AppStyle.Margins.mh10,
    ...AppStyle.Margins.mv5,
    elevation:5,
  },
});

import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';

type TextProps = {
    text?: string;
    textStyle?: StyleProp<TextStyle>; // Make textStyle optional
    onpress?: () => void;
    children?: React.ReactNode;
};

const CustomText: React.FC<TextProps> = ({ text, textStyle, onpress, children }) => {
    return <Text style={[styles.defaultText, textStyle]} onPress={onpress}>{text} {children}</Text>; // Combine styles
};

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 14,
        color: 'black',
    },
});

export default CustomText;

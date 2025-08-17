import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppStyle, Colors } from '../../theme';
import CustomText from '../customtext';

interface OTPCountdownProps {
  initialSeconds?: number; // default 60 seconds
  onResend?: () => void;
}

const OTPCountdown: React.FC<OTPCountdownProps> = ({ initialSeconds = 60, onResend }) => {
  const [timer, setTimer] = useState<number>(initialSeconds);
  const [isActive, setIsActive] = useState<boolean>(true);

  const tick = useCallback(() => {
    setTimer(prev => {
      if (prev <= 1) {
        setIsActive(false); // timer finished
        return 0;
      }
      return prev - 1;
    });
  }, []);

  useEffect(() => {
    if (!isActive) return;
    const timeout = setTimeout(tick, 1000);
    return () => clearTimeout(timeout);
  }, [timer, isActive, tick]);

  const handleResend = () => {
    if (!isActive) {
      setTimer(initialSeconds);
      setIsActive(true);
      onResend?.();
    }
  };

   const displayTimer = String(timer).padStart(2, '0');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleResend} activeOpacity={0.7}>
        <CustomText textStyle={styles.resend}  text={`Resend OTP code (${displayTimer})`}/>
      </TouchableOpacity>
    </View>
  );
};

export default OTPCountdown;

const styles = StyleSheet.create({
  container: {  alignItems: 'center' },
  resend: {
    color: Colors.activecolor,
    ...AppStyle.Fonts.f14w500,
    ...AppStyle.Fonts.textcenter,
    borderBottomWidth:2, 
    borderColor:Colors.activecolor,
    
  },
});

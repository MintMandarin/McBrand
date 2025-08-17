// GlobalWrapper.tsx
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props { children: ReactNode }

const GlobalWrapper: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#252525', '#070707']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}     // ✅ sits behind everything
        pointerEvents="none"                // ✅ never blocks touches
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export default GlobalWrapper;

import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const EnterOTPScreen = () => {
  const [otp, setOTP] = useState('');
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    setOTP((prevOTP) => {
      const updatedOTP = prevOTP.split('');
      updatedOTP[index] = value;
      return updatedOTP.join('');
    });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOTPKeyPress = (index, key) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: 4 }, (_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={otp[index]}
          onChangeText={(value) => handleOTPChange(index, value)}
          onKeyPress={({ nativeEvent: { key } }) =>
            handleOTPKeyPress(index, key)
          }
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    width: 50,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default EnterOTPScreen;

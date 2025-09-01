import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Login() {
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.loginContainer}>
      <Image 
        source={require('../../../assets/logo-branca.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Nome de usuário"
          style={[styles.input, usernameFocused && styles.inputFocused]}
          placeholderTextColor="#aaa"
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => setUsernameFocused(false)}
        />
        <TextInput 
          placeholder="Senha"
          style={[styles.input, passwordFocused && styles.inputFocused]}
          secureTextEntry={true}
          placeholderTextColor="#aaa"
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entre no Time!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    width: '75%',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 170,
    marginBottom: 40, 
  },
  inputContainer: {
    width: '100%',
    padding: 0,
    alignItems: 'center',
  },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    color: '#333',
    fontFamily: 'sans-serif-bold', 
    fontWeight: '700', 
  },
  inputFocused: {
    borderColor: '#8A2BE2', 
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  button: {
    marginTop: 10,
    width: '65%', 
    backgroundColor: '#fff', 
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#8A2BE2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#8A2BE2',
  },
  buttonText: {
    color: '#a6a4a4ff', 
    fontSize: 17,
    fontFamily: 'sans-serif-bold', 
    fontWeight: '700', 
  },
});

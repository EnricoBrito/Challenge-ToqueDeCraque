import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function getLogin() {
    if (!userName || !password) {
      return Alert.alert('Ei, Craque!', 'Preenche aí e bora pro jogo!');
    }

    setLoading(true);

    setTimeout(() => {
      if (userName === 'enrico' && password === '0212') {
        Alert.alert('Bom jogo, Craque!', 'Tá dentro do time!');
        setLoading(false);
        navigation.navigate("Home" as never); 
      } else if (userName !== 'enrico' && password === '0212') {
        setLoading(false);
        Alert.alert('Puts, Craque!', 'Escalou o nome errado!');
      } else if (userName === 'enrico' && password !== '0212') {
        setLoading(false);
        Alert.alert('Puts, Craque!', 'Errou o chute da senha!');
      } else {
        setLoading(false);
        Alert.alert('Puts, Craque!', 'Tá impedido! Usuário e senha errados.');
      }
    }, 1200);
  }

  return (
    <LinearGradient
      colors={["#d8b4fe", "#7e22ce"]} 
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.container}
    >
      <View style={styles.loginContainer}>
        <Image
          source={require('../../assets/logo-branca-toquedecraque.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons
              name="person-outline"
              size={22}
              color={usernameFocused ? "#8A2BE2" : "#aaa"}
              style={styles.icon}
            />
            <TextInput
              placeholder="Nome em campo"
              style={[styles.input, usernameFocused && styles.inputFocused]}
              placeholderTextColor="#aaa"
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              value={userName}
              onChangeText={setUserName}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color={passwordFocused ? "#8A2BE2" : "#aaa"}
              style={styles.icon}
            />
            <TextInput
              placeholder="Senha do Craque"
              style={[styles.input, passwordFocused && styles.inputFocused]}
              secureTextEntry={true}
              placeholderTextColor="#aaa"
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={getLogin}>
            {loading ? (
              <ActivityIndicator color={'#fff'} size={'small'} />
            ) : (
              <Text style={styles.buttonText}>Jogar!</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerWhite}>Tá fora?</Text>
          <TouchableOpacity onPress={getLogin}>
            <Text style={styles.footerPurple}>Entra pro time!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

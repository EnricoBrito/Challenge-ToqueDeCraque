<<<<<<< HEAD
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from '../app-toquedecraque/src/pages/login';
import Home from './src/pages/Home/index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './src/pages/login/index';
>>>>>>> 187e060ff82030ddbc2e35105730dee1dd663f1b

export default function App() {
  return (
    <LinearGradient
<<<<<<< HEAD
      colors={['#8F33E8', '#9C00E0', '#B054E0', '#B25CCF']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
=======
      colors={['#8A2BE2', '#9400D3', '#ab42d8ff', '#ae50c6ff']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Login />
>>>>>>> 187e060ff82030ddbc2e35105730dee1dd663f1b
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
=======
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> 187e060ff82030ddbc2e35105730dee1dd663f1b
  },
});

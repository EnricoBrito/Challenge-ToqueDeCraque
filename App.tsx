import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './src/pages/login/index';

export default function App() {
  return (
    <LinearGradient
      colors={['#8A2BE2', '#9400D3', '#ab42d8ff', '#ae50c6ff']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Login />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

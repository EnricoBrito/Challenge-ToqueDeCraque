import React, { useRef } from 'react';
import { View, Text, Image, FlatList, Dimensions, Linking, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { WebView } from 'react-native-webview';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const data = [
  {
    image: require('../../assets/lu-ale.png'),
    text: 'Luana Maluf é comentarista e voz do futebol feminino no Toque de Craque!',
  },
  {
    image: require('../../assets/lu-ale2.png'),
    text: 'Ale Xavier traz análises e histórias inspiradoras do futebol feminino!',
  },
  {
    image: require('../../assets/lu-ale3.png'),
    text: 'As duas juntas representam o poder e crescimento do futebol feminino!',
  },
];

const VIDEO_URL = 'https://www.youtube.com/embed/pr4wX4hCVLs?playsinline=1&autoplay=1&mute=1&loop=1&playlist=pr4wX4hCVLs';

export default function TelaInicial() {
  const flatListRef = useRef<FlatList>(null);

  const handlePressLink = () => {
    Linking.openURL('https://www.youtube.com/watch?v=pr4wX4hCVLs');
  };

  return (
    <LinearGradient
      colors={['#d8b4fe', '#7e22ce']}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.container}
    >
      <View style={{ paddingTop: 50, paddingBottom: 50, alignItems: 'flex-start', width: '100%' }}>
        <Text style={styles.title}>TOQUE DE CRAQUE</Text>

        <View style={{ width: '100%', paddingHorizontal: 20, marginBottom: 10 }}>
          <View style={styles.videoWrapper}>
            <WebView
              style={styles.video}
              source={{ uri: VIDEO_URL }}
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction={false}
            />
          </View>

          <TouchableOpacity onPress={handlePressLink}>
            <Text style={styles.lastVideoTitle}>Assista o ultimo video!</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(_, index) => String(index)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 50 }}
          renderItem={({ item }) => (
            <View style={{ width, alignItems: 'center', paddingBottom: 80 }}>
              <View style={styles.imageWrapper}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.subtitle}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
}

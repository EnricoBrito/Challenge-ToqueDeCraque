import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

// Importa cada aba como componente
import TelaInicial from '../TelaInicial';
import Noticias from '../Noticias';
import Chat from '../Chat';
import Perfil from '../perfil';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  function renderContent() {
    switch (activeTab) {
      case 'home':
        return <TelaInicial />;
      case 'news':
        return <Noticias />;
      case 'chat':
        return <Chat />;
      case 'profile':
        return <Perfil />;
      default:
        return <TelaInicial />;
    }
  }

  return (
    <LinearGradient
      colors={["#d8b4fe", "#7e22ce"]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.container}
    >
      {renderContent()}

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setActiveTab('home')} style={styles.navItem}>
          <Ionicons name="home-outline" size={28} color={activeTab === 'home' ? "#fff" : "#aaa"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('news')} style={styles.navItem}>
          <Ionicons name="newspaper-outline" size={28} color={activeTab === 'news' ? "#fff" : "#aaa"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('chat')} style={styles.navItem}>
          <Ionicons name="chatbubble-ellipses-outline" size={28} color={activeTab === 'chat' ? "#fff" : "#aaa"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('profile')} style={styles.navItem}>
          <Ionicons name="person-outline" size={28} color={activeTab === 'profile' ? "#fff" : "#aaa"} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

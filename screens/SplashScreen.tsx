import React, { useEffect, useRef } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  StatusBar,
} from 'react-native';
import SplashScreenNative from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
  const timer = setTimeout(() => {
    console.log('Splash screen loaded');
    SplashScreenNative.hide(); 
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      console.log('Navigating to UserSelection');
      navigation.navigate('UserSelection' as never);
    });
  }, 100); 

  return () => clearTimeout(timer);
}, []);


  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Image source={require('../assets/background_splash.png')} style={styles.background} />
      <Animated.Image
        source={require('../assets/logo.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
    width: 200,
    height: 200,
  },
});

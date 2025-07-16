import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Linking } from 'react-native';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      setError('');
      Alert.alert('Login Successful', 'Welcome Admin!');
    } else {
      setError('Input is incorrect');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google user info:', userInfo);
      Alert.alert('Login Successful', 'Logged in with Google');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Google sign-in failed');
    }
  };

  const handleMicrosoftLogin = async () => {
    const url = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?...`;
     const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert('Error', 'Cannot open Microsoft login URL');
  }
  };

  const handleEmailLogin = () => {
    Alert.alert('Email Login Clicked');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.loginTitle}>LOGIN</Text>

      <TextInput
        placeholder="Username"
        style={[styles.input, error && styles.errorInput]}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        style={[styles.input, error && styles.errorInput]}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      {error !== '' && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.socialButton} onPress={handleMicrosoftLogin}>
        <Text style={styles.socialText}>Continue with Microsoft</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={handleEmailLogin}>
        <Text style={styles.socialText}>Continue with Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  loginTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 50,
    fontSize: 16,
  },
  errorInput: {
    borderColor: '#FF0000',
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 8,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#2744A7',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 8,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#333',
  },
});

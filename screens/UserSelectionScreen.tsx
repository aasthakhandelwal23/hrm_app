import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const UserSelectionScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background_user_selection.png')}
      style={styles.container}
    >
      <Image
        source={require('../assets/logo_user_selection.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Employee</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default UserSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#ffffffaa',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

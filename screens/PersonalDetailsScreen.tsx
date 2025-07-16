import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BottomTabs from '../components/BottomTabs';
import { useNavigation } from '@react-navigation/native';

const PersonalDetailsScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>XYZ ASYAA</Text>
        <Text style={styles.label}>Employee ID:</Text>
        <Text style={styles.value}>230122239002</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>xyz12@gmail.com</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <BottomTabs active="Profile" onNavigate={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef6f8',
    justifyContent: 'space-between',
  },
  profileContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#3cc47c',
    borderRadius: 8,
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PersonalDetailsScreen;

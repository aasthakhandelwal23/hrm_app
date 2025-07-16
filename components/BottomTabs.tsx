import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  active: string;
  onNavigate: (screen: string) => void;
};

const BottomTabs: React.FC<Props> = ({ active, onNavigate }) => {
  return (
    <View style={styles.container}>
      <TabIcon name="home" label="HOME" active={active === 'Home'} onPress={() => onNavigate('Home')} />
      <TabIcon name="mail" label="INBOX" active={active === 'Inbox'} onPress={() => onNavigate('Inbox')} />
      <TabIcon name="time" label="TIMESHEET" active={active === 'Timesheet'} onPress={() => onNavigate('Timesheet')} />
      <TabIcon name="person" label="PROFILE" active={active === 'Profile'} onPress={() => onNavigate('Profile')} />
      <TabIcon name="settings" label="TEAM" active={active === 'Team'} onPress={() => onNavigate('Team')} />
    </View>
  );
};

const TabIcon = ({ name, active, onPress }: any) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name={name} size={26} color={active ? '#4F8EF7' : '#ccc'} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
});

export default BottomTabs;

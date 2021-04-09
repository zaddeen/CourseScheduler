import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const schedule = {
  title: "CS Courses for 2020-2021"
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bannerStyle}>{schedule.title}</Text>
      <View style={styles.headers}>
        <Text style={styles.title}>Course Scheduler</Text>
        <Text style={styles.subtitle}>Welcome to the Course Scheduler tool!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
  },
  bannerStyle: {
    marginTop: 50,
    color: '#888',
    fontSize: 32,
  },
  headers: {
    marginTop: 100,
  },
  title: {
    fontSize: 48,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 24,
  }
  
});

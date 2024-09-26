import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShortCoursesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Six-Week Courses Information</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
  },
});

export default ShortCoursesScreen;

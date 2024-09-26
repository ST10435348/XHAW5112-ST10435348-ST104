import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empowering the Nation</Text>
      <Button
        title="View Six-month Courses"
        onPress={() => navigation.navigate('LongCourses')}
      />
      <Button
        title="View Six-week Courses"
        onPress={() => navigation.navigate('ShortCourses')}
      />
      <Button
        title="Contact Us"
        onPress={() => navigation.navigate('ContactUs')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;

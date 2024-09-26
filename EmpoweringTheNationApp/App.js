import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LongCoursesScreen from './screens/LongCoursesScreen';
import ShortCoursesScreen from './screens/ShortCoursesScreen';
import ContactUsScreen from './screens/ContactUsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LongCourses" component={LongCoursesScreen} />
        <Stack.Screen name="ShortCourses" component={ShortCoursesScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

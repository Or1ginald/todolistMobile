/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TODOs</Text>
      <TaskItem title="Wash a car" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
});

export default HomeScreen;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskItem = () => {
  return (
    <View>
      <Text style={styles.container}>TaskItem</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    color: 'red',
  },
});

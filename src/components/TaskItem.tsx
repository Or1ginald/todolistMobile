import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type TaskItemPropsType = {
  title: string;
};

const TaskItem = (props: TaskItemPropsType) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Pressable>
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: '#f3f3f3',
  },
});

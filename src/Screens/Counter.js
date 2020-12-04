import React from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';
import Display from "../Components/Display";
import Increase from '../Components/Increase';
import Decrease from '../Components/Decrease';

function Counter() {
  return (
    <View style={styles.container}>
      <Increase/>
      <Display/>
      <Decrease/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Counter;
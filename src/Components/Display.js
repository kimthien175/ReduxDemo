import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

function Display({ count }) {
  return (<Text>{count}</Text>);
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({ count: state.Counter.count });

export default connect(mapStateToProps)(Display);

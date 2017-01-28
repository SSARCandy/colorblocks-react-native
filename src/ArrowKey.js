import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ArrowKey extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleKeyDown} = this.props;

    return (
      <View style={styles.groupContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonRed}
            onPress={() => {handleKeyDown(38);}}
          /> 
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonBlue}
            onPress={() => {handleKeyDown(37);}}
          /> 
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonGreen}
            onPress={() => {handleKeyDown(40);}}
          /> 
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonYellow}
            onPress={() => {handleKeyDown(39);}}
          /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    flex: 2,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonGreen: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  buttonRed: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'red'
  },
  buttonBlue: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'blue'
  },
  buttonYellow: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'yellow'
  },
});

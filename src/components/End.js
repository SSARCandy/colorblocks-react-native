import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {INIT_TIME, COMBO_THRES} from '../constants';

export default class End extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleRestart, answered, correct} = this.props;

    return (
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={{textAlign: 'center', fontSize:24}}>Welcome to ColorBlocks</Text>
          <Text style={styles.text}>
            Answer the color that didn't appear in Questions.
          </Text>
          <Text style={styles.text}>
            You have {INIT_TIME} sec to answer these questions.
          </Text>
          <Text style={styles.text}>
            You will get bonus time if you get {COMBO_THRES} combo corrects.
          </Text>
          <Text style={styles.text}>
            Use arrow keys or click button to answer.
          </Text>
          {answered > 0 && (
            <View style={styles.staticWrap}>
              <Text style={styles.staticText}>Total Questions: {answered} </Text>
              <Text style={styles.staticText}>Correct: {correct} </Text>
              <Text style={styles.staticText}>Wrong: {answered - correct} </Text>
              <Text style={styles.staticText}>Accuracy: {Math.round((correct / answered) * 100)}% </Text>
            </View>
          )}
          <View style={styles.startBtnWrap}>
            <Button
              onPress={handleRestart}
              title={answered > 0 ? 'RESTART' : 'START'}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    backgroundColor: '#ccc',
    padding: 10,
  }, 
  text: {
    textAlign: 'center'
  },
  startBtnWrap: {
    marginTop: 10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.8
  },
  staticWrap: {
    margin: 10,
    alignItems: 'center'
  },
  staticText: {
    fontSize: 18,
    fontWeight: '500'
  }
})

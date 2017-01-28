import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { INIT_TIME, COMBO_BONUS } from './constants';

export default class StatusPanel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {height, width} = Dimensions.get('window');
    const {score, time, bonus} = this.props;
    const timeStyle = {
      color: time < 10 ? 'red' : 'black'
    };
    const timebarStyle = {
      width: time/INIT_TIME*width,
      backgroundColor: time < 10 ? 'red' : 'green'
    };
    const timeBonusStyle = {
      opacity: bonus ? 1 : 0
    };

    return (
      <View style={styles.statusContainer}>
        <Text style={timebarStyle}></Text>
        <View style={styles.statusWrap}>
          {/*<Text style={styles.status}> +{COMBO_BONUS} BONUS TIME </Text>*/}
          <Text style={styles.status}>Scores: {score}</Text>
          <Text style={styles.status}>Time: {time} s</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusContainer: {
    
  },
  status: {
    fontSize: 16,
    fontWeight: '700',
    padding: 10,
    width: 100,
    height: 50,
    color: 'black'
  },
  statusWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { KEY_COLOR_MAP, COLOR_MAP, COLOR_LABEL_MAP } from '../constants';


export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {color, result, bonus, focus} = this.props;
    const resultStyle = result == 'correct' ? 'green' : 'red';
    const icon = result == 'correct' ? '✔' : '✘';
    const transform = { transform: [{ scale: 1.5 }] };
    let style = {
      color: COLOR_MAP[color[0]],
      backgroundColor: COLOR_MAP[color[1]],
      width: 100,
      padding: 10,
      fontWeight: '700',
      textAlign: 'center'
    };

    if (focus) {
      style = Object.assign(style, transform);
    }

    return (
      <View style={styles.questionWrap}>
        <Animated.View style={focus ? transform : styles.masked}>
          <Animated.Text style={style}>
            {COLOR_LABEL_MAP[color[2]]}
          </Animated.Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  masked: {
    backgroundColor: 'black',
    opacity:0.5
  }
});

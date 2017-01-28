import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { KEY_COLOR_MAP, COLOR_MAP, COLOR_LABEL_MAP } from '../constants';

const zoomOut = {
  from: { scale: 1.5 },
  to: { scale: 1 },
};
const zoomIn = {
  from: { scale: 1 },
  to: { scale: 1.5 },
};


export default class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {color, result, bonus, focus, unfocus} = this.props;
    const resultStyle = result == 'correct' ? 'green' : 'red';
    const icon = result == 'correct' ? '✔' : '✘';
    const style = {
      color: COLOR_MAP[color[0]],
      backgroundColor: COLOR_MAP[color[1]],
      width: 100,
      padding: 10,
      fontWeight: '700',
      textAlign: 'center'
    };

    let transition = '';
    if (focus) transition = zoomIn;
    if (unfocus) transition = zoomOut;

    return (
      <View style={styles.questionWrap}>
        <Animatable.View
          animation={transition || ''}
          duration={500}
          style={focus ? {} : styles.masked}
        >
          <Animatable.Text
            animation={transition || ''}
            duration={500}
            style={focus ? style : [style, {opacity: 0.5}]}
          >
            {COLOR_LABEL_MAP[color[2]]}
          </Animatable.Text>
        </Animatable.View>
        {!!result && (<Text style={[styles.icon, {color: resultStyle}]}>{icon}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  masked: {
    backgroundColor: 'black',
  },
  icon: {
    position: 'absolute',
    right: -3,
    fontSize: 28,
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset: {
      width: 3,
      height: 3
    },
  }
});

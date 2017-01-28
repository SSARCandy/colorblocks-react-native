import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Question from './Question';


export default class QuestionsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {questions, index} = this.props;
    const {height, width} = Dimensions.get('window');
    const middle = width/2 - 70;
    const offset = index*140;

    return (
      <Animatable.View
        transition='left'
        easing='ease-in-out'
        duration={500}
        style={[styles.listContainer, {left: middle - offset}]}
      >
        {questions.map((q, idx) => {
          const {color, state} = q;

          return (
            <View key={idx} style={styles.container}>
              <Question
                focus={idx === index}
                unfocus={idx+1 === index}
                color={color}
                result={state}
              />
            </View>
          );
        })}
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  container: {
    margin: 20
  }
});

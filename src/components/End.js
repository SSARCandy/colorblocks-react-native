import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {INIT_TIME, COMBO_THRES} from '../constants';
import I18n from '../i18n';


export default class End extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleRestart, answered, correct} = this.props;

    return (
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={{textAlign: 'center', fontSize:24}}>{I18n.t('WELCOME')}</Text>
          <Text style={styles.text}>{I18n.t('INTRO1')}</Text>
          <Text style={styles.text}>{I18n.t('INTRO2')}</Text>
          <Text style={styles.text}>{I18n.t('INTRO3')}</Text>
          {answered > 0 && (
            <View style={styles.staticWrap}>
              <Text style={styles.staticText}>{I18n.t('TOTAL_QUESTIONS')}: {answered} </Text>
              <Text style={styles.staticText}>{I18n.t('CORRECT')}: {correct} </Text>
              <Text style={styles.staticText}>{I18n.t('WRONG')}: {answered - correct} </Text>
              <Text style={styles.staticText}>{I18n.t('ACCURACY')}: {Math.round((correct / answered) * 100)}% </Text>
            </View>
          )}
          <View style={styles.startBtnWrap}>
            <Button
              onPress={handleRestart}
              title={answered > 0 ? I18n.t('RESTART') : I18n.t('START')}
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
    opacity: 0.9
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

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Question from './Question';


export default class QuestionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listWidth: 0,
      scrollViewWidth: 0
    };
    this.listWidthOld = 0;
  }

  componentDidUpdate() {
    const {listWidth, scrollViewWidth} = this.state;

    if (listWidth === this.listWidthOld) return;
    this.listWidthOld = listWidth;

    const rightOfList = listWidth - scrollViewWidth;
    this.scrollView.scrollTo({
      x: rightOfList,
      animated: true 
    });   
  }

  onLayout = (e) => {
    const {width} = e.nativeEvent.layout;
    this.setState({
      scrollViewWidth: width
    });
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    const {listWidth} = this.state;

    this.setState({
      listWidth: contentWidth 
    });
  }

  render() {
    const {questions, index} = this.props;

    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        horizontal={true}
        onLayout={this.onLayout}
        onContentSizeChange={this.onContentSizeChange}
        ref={ (component) => this.scrollView = component }
        contentContainerStyle={styles.listContainer}
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center'
  },
  container: {
    margin: 15
  }
});

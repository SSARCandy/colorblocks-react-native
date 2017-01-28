import React, { Component } from 'react';
import StatusPanel from './StatusPanel';
import QuestionsList from './QuestionsList';
import ArrowKey from './ArrowKey';
import End from './End';
import { KEY_COLOR_MAP, COLOR_MAP, INIT_TIME, COMBO_THRES, COMBO_BONUS } from '../constants';
import { initial_state, shuffle } from '../utils';
import '../style/App.css';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = initial_state();
  }

  tick = () => {
    const {time} = this.state;
    if (time <= 1) {
      clearInterval(this.interval);
    }

    this.setState({
      time: time - 1,
      start: time > 1
    });
  }

  generateQuestion = () => {
    const color = shuffle([0, 1, 2, 3]);
    let questions = this.state.questions;
    questions.push({
      color: color,
      state: ''
    });

    this.setState(questions);
  }

  answerQuestion = (ans) => {
    const { answered, correct, combo, time } = this.state;
    let {questions} = this.state;
    let nextState = {
      answered: answered + 1
    };

    if (ans === questions[answered].color[3]) {
      if ((combo + 1) % COMBO_THRES === 0) {
        nextState.time = Math.min(time + COMBO_BONUS, INIT_TIME);
      }
      questions[answered].state = 'correct';
      nextState = Object.assign(nextState, {
        correct: correct + 1,
        questions: questions,
        combo: combo + 1,
      });
    } else {
      questions[answered].state = 'wrong';
      nextState = Object.assign(nextState, {
        answered: answered + 1,
        questions: questions,
        combo: 0
      });
    }
    
    this.setState(nextState);
  }

  handleKeyDown = (keyCode) => {
    if (!this.state.start) return;
    if (!~[37, 38, 39, 40].indexOf(keyCode)) return;

    this.answerQuestion(KEY_COLOR_MAP[keyCode]);
    this.generateQuestion();
  }

  handleRestart = () => {
    this.setState(Object.assign(initial_state(), { start: true }));
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    const {correct, answered, time, combo, questions, start} = this.state;
    const bonusTime = (combo > 0) && (combo % COMBO_THRES === 0);

    return (
      <div className='container' onKeyDown={(event) => { this.handleKeyDown(event.keyCode); } } tabIndex={0}>
        <StatusPanel time={time} score={correct} bonus={bonusTime} />
        <QuestionsList questions={questions} index={answered} />
        <ArrowKey handleKeyDown={this.handleKeyDown} />
        {!start && (
          <div>
            <End
              handleRestart={this.handleRestart}
              answered={answered}
              correct={correct} />
            <div className='overlay' />
          </div>
        )}
      </div>
    );
  }
}
import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.translations = {
  en: {
    TIME: 'Time',
    BONUS_TIME: 'BONUS TIME',
    CORRECT: 'Correct',
    WRONG: 'Wrong',
    ACCURACY: 'Accuracy',
    SCORE: 'Score',
    WELCOME: 'Welcome to ColorBlocks',
    INTRO1: 'Answer the color that didn\'t appear in Questions.',
    INTRO2: 'You will get bonus time if you get combo corrects.',
    INTRO3: 'Press button to answer.',
    TOTAL_QUESTIONS: 'Total Questions',
    RESTART: 'RESTART',
    START: 'START',
    RED: 'RED',
    BLUE: 'BLUE',
    GREEN: 'GREEN',
    YELLOW: 'YELLOW',
    SHARE: 'Share',
    SHARE_TITLE: 'I got high score in ColorBlocks!',
    SHARE_CONTENT: 'I got %{score} points in ColorBlocks, come and beat me!'
  },
  zh: {
    TIME: '時間',
    BONUS_TIME: '額外時間',
    CORRECT: '正確',
    WRONG: '錯誤',
    ACCURACY: '答對率',
    SCORE: '分數',    
    WELCOME: '歡迎來到 ColorBlocks',
    INTRO1: '找出題目中缺少的顏色！',
    INTRO2: '連續答對可以獲得額外的時間！',
    INTRO3: '按下面的顏色按鈕來作答。',
    TOTAL_QUESTIONS: '總答題數',
    RESTART: '重新開始',
    START: '開始',
    RED: '紅',
    BLUE: '藍',
    GREEN: '綠',
    YELLOW: '黃',
    SHARE: '分享',
    SHARE_TITLE: '我在 ColorBlocks 獲得高分！',
    SHARE_CONTENT: '我在 ColorBlocks 中得到了 %{score} 分，快來挑戰我吧！'
  }
};

export default I18n;
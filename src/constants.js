import I18n from './i18n';

export const KEY_COLOR_MAP = {
  38: 0, // up
  37: 1, // left
  40: 2, // down
  39: 3  // right
};

export const COLOR_MAP = [
  'red',
  'blue',
  'green',
  'yellow'
];

export const COLOR_LABEL_MAP = [
  I18n.t('RED'),
  I18n.t('BLUE'),
  I18n.t('GREEN'),
  I18n.t('YELLOW'),
];

export const INIT_TIME = 60;
export const COMBO_THRES = 5;
export const COMBO_BONUS = 5;

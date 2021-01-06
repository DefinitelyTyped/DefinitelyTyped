import css2RN = require('css-to-react-native');

css2RN.default([
  ['font', 'bold 14px/16px "Helvetica"'],
  ['margin', '5px 7px 2px'],
  ['border-left-width', '5px'],
]); // $ExpectType Style

css2RN.getPropertyName('border-width'); // $ExpectType string
css2RN.getStylesForProperty('borderWidth', '1px 0px 2px 0px'); // $ExpectType Style

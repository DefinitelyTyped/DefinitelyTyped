import matches = require('dom-matches');

const elem = document.querySelector('.foo');
matches(elem, '.foo'); // $ExpectType boolean

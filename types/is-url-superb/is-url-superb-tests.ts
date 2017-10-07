import isUrl = require('is-url-superb');

const url1: boolean = isUrl('http://todomvc.com');
const url2: boolean = isUrl('//todomvc.com');
const url3: boolean = isUrl('unicorn');

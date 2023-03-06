import * as markdownEscape from 'markdown-escape';

// $ExpectType string
markdownEscape("#1! We're #1!");

// $ExpectType string
markdownEscape('one (1)', ['parentheses']);

const characterSet: markdownEscape.CharacterSet = 'asterisks';
const string: string = characterSet;

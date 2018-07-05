import detectIndent = require('detect-indent');

const indent = detectIndent('').indent || '    ';

const indentInfo = detectIndent('');
indentInfo; // $ExpectType IndentInfo
const num: number = indentInfo.amount;
const str: string = indentInfo.indent;
const type: 'space' | 'tab' | null = indentInfo.type;

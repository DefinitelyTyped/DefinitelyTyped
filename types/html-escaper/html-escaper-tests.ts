import { escape, unescape } from 'html-escaper' ;

// $ExpectType string
const escaped = escape("<bella>");

// $ExpectType string
const unescaped = unescape(escaped);

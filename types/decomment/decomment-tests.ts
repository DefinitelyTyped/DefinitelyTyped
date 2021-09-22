import decomment = require('decomment');
const code = '/* comment */\r\n\r\n var test = 123';
decomment(code); // $ExpectType string
decomment(code, { space: true }); // $ExpectType string
decomment(code, { ignore: /\/\*\*\s*\n([^\*]|(\*(?!\/)))*\*\//g }); // $ExpectType string
decomment(code, { trim: true }); // $ExpectType string
decomment(code, { tolerant: true }); // $ExpectType string

const text = '.my-class{color:Red;}// comments';
decomment.text(text); // $ExpectType string
decomment.html(text, { space: true }); // $ExpectType string
decomment.getEOL(text); // $ExpectType string

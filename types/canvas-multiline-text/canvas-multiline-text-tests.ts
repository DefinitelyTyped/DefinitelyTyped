import drawMultilineText = require('./');

// When no Context is given
// $ExpectError
drawMultilineText({} as any, 'Test', {
    minFontSize: 10,
    maxFontSize: 10
}) // 10
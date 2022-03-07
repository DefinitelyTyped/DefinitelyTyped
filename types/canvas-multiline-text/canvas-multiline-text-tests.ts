import drawMultilineText = require('canvas-multiline-text');

// When no Context is given then it should return 10 as the default
// $ExpectType number
drawMultilineText({} as any, 'Test', {
    minFontSize: 10,
    maxFontSize: 10,
}); // 10

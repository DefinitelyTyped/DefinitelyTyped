import drawMultilineText = require('canvas-multiline-text');

// When no Context is given
// $ExpectType number
drawMultilineText({} as any, 'Test', {
    minFontSize: 10,
    maxFontSize: 10,
}); // 10

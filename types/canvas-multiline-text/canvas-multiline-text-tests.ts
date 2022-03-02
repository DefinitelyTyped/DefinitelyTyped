import drawMultilineText = require('canvas-multiline-text');

// When no Context is given
drawMultilineText({} as any, 'Test', {
    minFontSize: 10,
    maxFontSize: 10
}); // 10

import isColor = require('is-color');

isColor('#000');
// => boolean

isColor.isHex('#000');
// => boolean
isColor.isHsl('#000');
// => boolean
isColor.isHsla('#000');
// => boolean
isColor.isRgb('rgb(0, 0, 0)');
// => boolean
isColor.isRgba('rgba(0,0,0, 0)');
// => boolean
isColor.isKeyword('red');
// => boolean
isColor.isInherit('inherit');
// => is 'inherit'
isColor.isTransparent('transparent');
// => is 'transparent'
isColor.isCurrentColor('currentColor');
// => is 'currentColor'|'currentcolor'

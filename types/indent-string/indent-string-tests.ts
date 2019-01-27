import indentString = require('indent-string');

// $ExpectType string
indentString('Unicorns\nRainbows');
indentString('Unicorns\nRainbows', 4);
// => '    Unicorns'
// => '    Rainbows'

indentString('Unicorns\nRainbows', 4, '♥');
// => '♥♥♥♥Unicorns'
// => '♥♥♥♥Rainbows'
indentString('Unicorns\nRainbows', 4, { indent: '♥' });
indentString('Unicorns\nRainbows', 4, { includeEmptyLines: true });

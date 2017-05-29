import indentString = require('indent-string');

indentString('Unicorns\nRainbows', 4);
// => '    Unicorns'
// => '    Rainbows'

indentString('Unicorns\nRainbows', 4, '♥');
// => '♥♥♥♥Unicorns'
// => '♥♥♥♥Rainbows'

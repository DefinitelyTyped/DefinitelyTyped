import ellipsize = require('ellipsize');

ellipsize('');
// ''
ellipsize(undefined);
// ''
ellipsize('one two three four', 8);
// 'one two…'
ellipsize('one two-three four', 8);
// 'one two…'
ellipsize('one two three four', 100);
// 'one two three four'
ellipsize('12345678910');
// '1234567…'
ellipsize('abc', 0);

ellipsize('one two&three four', 8, { chars: [' ', '&'], ellipse: '→' });
// 'one two→'

ellipsize('123456789ABCDEF', 8, { truncate: false });
// ''

// its default settings
ellipsize('123456789ABCDEF', 8, { truncate: true });
// '1234567…'

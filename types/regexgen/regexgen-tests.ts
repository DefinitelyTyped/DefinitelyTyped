import regexgen = require('regexgen');

regexgen(['foobar', 'foobaz', 'foozap', 'fooza']);

const t = new regexgen.Trie();
t.add('foobar');
t.add('foobaz');
t.toRegExp();

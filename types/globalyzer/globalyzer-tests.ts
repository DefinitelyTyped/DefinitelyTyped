import globalyzer = require('globalyzer');

globalyzer('foo/bar/.git/'); // $ExpectType { base: string; glob: string; isGlob: boolean; }
// => { base: 'foo/bar/.git/', glob: '', isGlob: false }

globalyzer('foo/bar/**/baz'); // $ExpectType { base: string; glob: string; isGlob: boolean; }
// => { base: 'foo/bar', glob: '**/baz', isGlob: true }

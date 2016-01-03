/// <reference path="./micromatch.d.ts"/>
import mm = require('micromatch');

// Usage.
mm(['a.js', 'b.md', 'c.txt'], '*.{js,txt}');

// Multiple patterns.
mm(['a.md', 'b.js', 'c.txt', 'd.json'], ['*.md', '*.txt']);

// "isMatch" method.
mm.isMatch('.verb.md', '*.md');
mm.isMatch('.verb.md', '*.md', {dot: true});
mm.isMatch('.verb.md', {dot: true});

// "contains" method.
mm.contains('a/b/c', 'a/b');

// "matcher" method.
var isMatch = mm.matcher('*.md');

// "filter" method.
var fn = mm.filter('*.md');

// "any" method.
mm.any('abc', ['!*z']);
mm.any('abc', 'a*');

// "expand" method.
mm.expand('*.js');

// "makeRe" method.
mm.makeRe('*.js');

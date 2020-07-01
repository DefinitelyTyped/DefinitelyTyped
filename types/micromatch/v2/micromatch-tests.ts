
import mm = require('micromatch');

var strArrResult: string[];
var boolResult: boolean;
var strMatchFuncResult: mm.MatchFunction<string>;
var anyMatchFuncResult: mm.MatchFunction<any>;
var globDataResult: mm.GlobData;
var regExpResult: RegExp;

// Usage.
strArrResult = mm(['a.js', 'b.md', 'c.txt'], '*.{js,txt}');

// Multiple patterns.
strArrResult = mm(['a.md', 'b.js', 'c.txt', 'd.json'], ['*.md', '*.txt']);

// "isMatch" method.
boolResult = mm.isMatch('.verb.md', '*.md');
boolResult = mm.isMatch('.verb.md', '*.md', {dot: true});
boolResult = mm.isMatch('*.md', {dot: true})('.verb.md');

// "contains" method.
boolResult = mm.contains('a/b/c', 'a/b');
boolResult = mm.contains('a/b/c', 'a/b', {dot: true});

// "matcher" method.
strMatchFuncResult = mm.matcher('*.md');
strMatchFuncResult = mm.matcher(/\.md$/);
strMatchFuncResult = mm.matcher((filePath: string) => true);

// "filter" method.
anyMatchFuncResult = mm.filter('*.md');
anyMatchFuncResult = mm.filter(/\.md$/);
anyMatchFuncResult = mm.filter((filePath: string) => true);

anyMatchFuncResult = mm.filter('*.md', {dot: true});
['a.js', 'b.txt', 'c.md'].filter(anyMatchFuncResult);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
anyMatchFuncResult = mm.filter(['{1..10}', '![7-9]', '!{3..4}']);
arr.filter(anyMatchFuncResult);

// "any" method.
boolResult = mm.any('abc', ['!*z']);
boolResult = mm.any('abc', 'a*');
boolResult = mm.any('abc', 'a*', {dot: true});

// "expand" method.
globDataResult = mm.expand('*.js');
globDataResult = mm.expand('*.js', {dot: true});

// "makeRe" method.
regExpResult = mm.makeRe('*.js');
regExpResult = mm.makeRe('*.js', {dot: true});

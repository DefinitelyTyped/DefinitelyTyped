import mm = require('micromatch');

// options type is accessible
const micromatchOptions: mm.Options = {
    basename: true,
    dot: true,
};

let strArrResult: string[];
let boolResult: boolean;

// main function
strArrResult = mm(['a.js', 'a.txt'], '*.js', micromatchOptions);
strArrResult = mm(['a.js', 'a.txt'], ['*.js']);

// .match
strArrResult = mm.match(['a.a', 'a.aa', 'a.b', 'a.c'], '*.a');

// .isMatch
boolResult = mm.isMatch('a.a', '*.a');

// .some
boolResult = mm.some('foo.js', '*.js');
boolResult = mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']);
boolResult = mm.some(['foo.js', 'bar.js'], '*.js');

// .every
boolResult = mm.every('foo.js', ['foo.js']);
boolResult = mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']);
boolResult = mm.every(['foo.js', 'bar.js'], '*.js');

// .any
boolResult = mm.any('foo.js', ['foo.js']);
boolResult = mm.any(['foo.js', 'bar.js'], ['*.js', '!foo.js'], micromatchOptions);
boolResult = mm.any(['foo.js', 'bar.js'], '*.js');

// .all
boolResult = mm.all('foo.js', ['foo.js']);
boolResult = mm.all(['foo.js', 'bar.js'], ['*.js', '!foo.js']);
boolResult = mm.all(['foo.js', 'bar.js'], '*.js');

// .not
strArrResult = mm.not(['a.a', 'b.b', 'c.c'], '*.a');

// .contains
boolResult = mm.contains('aa/bb/cc', '*b');
boolResult = mm.contains('aa/bb/cc', ['*b', '*a']);

// .matchKeys
const obj = { aa: 'a', ab: 'b', ac: 'c' };
const partialObj: Partial<typeof obj> = mm.matchKeys(obj, '*b');

// .matcher
const matcherFn: (str: string) => boolean = mm.matcher('*.!(*a)');

// .capture
const strArrResultNullable: string[] | null = mm.capture('test/*.js', 'test/foo.js');

// .makeRe
const regex: RegExp = mm.makeRe('*.js');

// .braces
strArrResult = mm.braces('*.js');
strArrResult = mm.braces('*.js', { expand: true });

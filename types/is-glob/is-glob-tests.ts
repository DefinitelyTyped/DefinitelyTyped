import * as isGlob from 'is-glob';

// $ExpectType boolean
isGlob();
isGlob(null);
isGlob('abc.js');
isGlob(['abc.js']);

isGlob('abc.js', {});
isGlob('abc.js', { strict: false });

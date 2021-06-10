import isCore = require('is-core-module');
import assert = require('assert');

assert(isCore('fs'));
assert(!isCore('butts'));

isCore('fs'); // $ExpectType boolean
isCore('fs', '12.14.0'); // $ExpectType boolean

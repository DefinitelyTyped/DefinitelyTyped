import elv = require('elv');

elv(''); // $ExpectType boolean

elv.behavior.enableFalse; // $ExpectedType boolean
elv.behavior.enableNaN; // $ExpectedType boolean
elv.behavior.enableNull; // $ExpectedType boolean
elv.behavior.enableUndefined; // $ExpectedType boolean

elv.coalesce(''); // $ExpectType any
elv.ncoalesce(''); // $ExpectType any
elv.populated(''); // $ExpectType boolean
elv.tryGet([], 0); // $ExpectType any
elv.tryGet([], 0, ''); // $ExpectType any

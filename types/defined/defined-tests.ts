import defined = require('defined');

const opts = { x: undefined, y : false, w : 4 };
// $ExpectType number | boolean | undefined
defined<boolean | number | undefined>(opts.x, opts.y, opts.w, 100);
// $ExpectType any
defined(opts.x, opts.y, opts.w, 100);

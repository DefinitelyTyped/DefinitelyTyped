import abs = require('abs-svg-path');
const absolutized = abs([['M', 10, 10], ['l', 100, 100]]); // $ExpectType AbsAnyCommand[]

import execall = require('execall');

execall(/(\d+)/g, '$200 and $400'); // $ExpectType Match[]

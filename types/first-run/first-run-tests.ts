import firstRun = require('first-run');

firstRun(); // $ExpectType boolean
firstRun({ name: 'foo' }); // $ExpectType boolean

firstRun.clear();

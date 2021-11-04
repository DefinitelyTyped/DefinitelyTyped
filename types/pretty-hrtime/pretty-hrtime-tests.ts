/// <reference types="node" />

import prettyHrtime = require('pretty-hrtime');

const hrtime = process.hrtime();

prettyHrtime(hrtime); // $ExpectType string
prettyHrtime(hrtime, { verbose: true }); // $ExpectType string
prettyHrtime(hrtime, { precise: true }); // $ExpectType string

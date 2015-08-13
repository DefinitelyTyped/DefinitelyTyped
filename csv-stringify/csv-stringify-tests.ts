/// <reference path="csv-stringify.d.ts" />

import stringify = require("csv-stringify");


stringify([["1", "2", "3"], ["4", "5", "6"]], (error: Error, output: string): void => {
  // nothing
});

stringify([["1", "2", "3"], ["4", "5", "6"]], {
	delimiter: ","
}, (error: Error, output: string): void => {
  // nothing
});


var s = stringify({ delimiter: "," });
s.write(["1", "2", "3"]);





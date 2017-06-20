import stringify = require("csv-stringify");

let stream: stringify.Stringifier;

stringify([["1", "2", "3"], ["4", "5", "6"]], (error: Error, output: string): void => {
  // nothing
});

stringify([["1", "2", "3"], ["4", "5", "6"]], {
	delimiter: ","
}, (error: Error, output: string): void => {
  // nothing
});

stream = stringify({ delimiter: "," });

stream.write(["1", "2", "3"]);

const transform: NodeJS.ReadWriteStream = stream;

stream = stringify();

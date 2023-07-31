import differ = require('ansi-diff-stream');

// test type exports
type ADS = differ.AnsiDiffStream;

const diff = differ(); // $ExpectType AnsiDiffStream

setInterval(() => {
    diff.write(`\
This is a demo
The time is: ${new Date()}
That is all`);
}, 500);

diff.pipe(process.stdout);
diff.clear(); // $ExpectType void
diff.reset(); // $ExpectType void

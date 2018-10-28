import logUpdate = require('log-update');

logUpdate(`
        ♥♥
     unicorns
        ♥♥
`);

logUpdate.clear();
logUpdate.done();

logUpdate.stderr('oh', 'my', 'oh', 'my');
logUpdate.stderr.clear();
logUpdate.stderr.done();

const logStdOut = logUpdate.create(process.stdout);
logStdOut('oh', 'my', 'oh', 'my');
logStdOut.clear();
logStdOut.done();

import cmdShim = require('cmd-shim');

cmdShim('./whatever/bin.js', './.bin/my-bin', (err) => {
    if (err) throw err;
});
cmdShim.ifExists('./whatever/bin.js', './.bin/my-bin', (err) => {
    if (err) throw err;
});

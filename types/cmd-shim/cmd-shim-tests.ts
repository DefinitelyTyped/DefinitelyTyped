import cmdShim = require('cmd-shim');

cmdShim('./whatever/bin.js', './.bin/my-bin');
cmdShim.ifExists('./whatever/bin.js', './.bin/my-bin');

import gs = require('glob-stream');

var read: NodeJS.ReadableStream;

read = gs.create('xx');
read = gs.create('xx', {});
read = gs.create(['xx'], {});
read = gs.create(['xx'], {cwd: 'xx'});
read = gs.create(['xx'], {base: 'xx'});
read = gs.create(['xx'], {cwdbase: true});

import sloc = require('sloc');

const stats = sloc('const a = 1;\nconsole.log(a);', 'js');
const statsDebugged = sloc('const a = 1;\nconsole.log(a);', 'ts', { debug: true });

const keys = sloc.keys;
const extensions = sloc.extensions;

import memFs = require('mem-fs');
import editor = require('mem-fs-editor');

const store = memFs.create();
const fs = editor.create(store);

fs.write('somefile.js', 'var a = 1;');

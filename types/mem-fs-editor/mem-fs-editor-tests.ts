import { Transform } from 'stream';

import memFs = require('mem-fs');
import editor = require('mem-fs-editor');

const store = memFs.create();
const fs = editor.create(store);

fs.write('template.js', 'var a = 1; console.log(\'<%= foo %>\', a);');

fs.copy('template.js', 'template.tpl', {
    process: (contents) => contents,
    globOptions: {
        cwd: '.'
    }
});

fs.copyTpl('template.tpl', 'output.js', {
    foo: 'bar'
});

const obj = fs.readJSON('template.json');
fs.writeJSON('template.json', obj);
fs.extendJSON('template.json', {qwer: 'asdf'});

fs.writeJSON('template.json', 'qwer'); // should not be an error, because the parameter is passed to JSON.stringify and it accepts the string
// fs.extendJSON('template.json', 'qwer'); // should be an error, because it does not make sense to extend a json with string

// should accept both versions of commit - with filters and without:
const cb = (err: any) => ({adsf: 'adsf'});
fs.commit(cb);

const filters: Transform[] = [];
fs.commit(filters, cb);

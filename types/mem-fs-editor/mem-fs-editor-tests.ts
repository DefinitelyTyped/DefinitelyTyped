import { Transform } from 'stream';

import * as memFs from 'mem-fs';
import * as editor from 'mem-fs-editor';

const store = memFs.create();
const fs = editor.create(store);

fs.write('template.js', 'var a = 1; console.log(\'<%= foo %>\', a);');
fs.append('template.js', 'var b = 2;');

fs.copy('template.js', 'template.tpl', {
    globOptions: {
        cwd: '.'
    },
    process: (contents) => contents
});

fs.copyTpl('template.tpl', 'output.js', {
    foo: 'bar'
});

const obj = fs.readJSON('template.json');
fs.writeJSON('template.json', obj);

fs.writeJSON('template.json', 'qwer'); // should not be an error, because the parameter is passed to JSON.stringify and it accepts the string
// fs.extendJSON('template.json', 'qwer'); // should be an error, because it does not make sense to extend a json with string

// should accept both versions of commit - with filters and without:
const cb = (err: any) => ({adsf: 'adsf'});
fs.commit(cb);

const filters: Transform[] = [];
fs.commit(filters, cb);

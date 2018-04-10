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

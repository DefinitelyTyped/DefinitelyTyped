import insert = require('insert-module-globals');
import { VarsOption } from 'insert-module-globals';

function example() {
    function inserter(file: string) {
        return insert(file, { basedir: __dirname + '/files' });
    }

    return inserter;
}

function insert_custom_globals() {
    const customProcessContent = 'customProcessContent';
    const files: string[] = [];

    const vars: VarsOption = {
        process(file, basedir) {
            return {
                id: "path/to/custom_process.js",
                source: customProcessContent
            };
        },
        Buffer(file, basedir) {
            return {
                id: 'path/to/custom_buffer.js',
                source: customProcessContent,
                // suffix is optional
                // it's used to extract the value from the module.
                // it becomes: require(...).Buffer in this case.
                suffix: '.Buffer'
            };
        },
        Math() {
            // if you return a string,
            // it's simply set as the value.
            return '{}';
            // ^ any attempt to use Math[x] will throw!
        }
    };

    function inserter(file: string) {
        return insert(file, { vars });
    }

    return inserter;
}

function disable_select_globals() {
    const insertGlobalVars: VarsOption = {};
    const wantedGlobalVars = ['__filename', '__dirname'];
    Object.keys(insert.vars).forEach((x) => {
        if (wantedGlobalVars.indexOf(x) === -1) {
            insertGlobalVars[x] = undefined;
        }
    });

    return insert('index.js', {
        vars: insertGlobalVars
    });
}

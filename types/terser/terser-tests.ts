/// <reference types="node" />

import { OutputQuoteStyle, minify } from 'terser';

let code: any;

code = {
    "file1.js": "function add(first, second) { return first + second; }",
    "file2.js": "console.log(add(1 + 2, 3 + 4));"
};

minify(code);

code = "function add(first, second) { return first + second; }";
minify(code);

minify(code);

const output = minify(code, {
    warnings: true,
    mangle: {
        properties: {
            regex: /reg/
        }
    },
    compress: {
        arguments: true
    }
});

if (output.warnings) {
    output.warnings.filter(x => x === 'Dropping unused variable');
}

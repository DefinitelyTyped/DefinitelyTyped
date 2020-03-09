/// <reference types="node" />

import { OutputQuoteStyle, minify } from 'uglify-js';

let code: any;

code = {
    "file1.js": "function add(first, second) { return first + second; }",
    "file2.js": "console.log(add(1 + 2, 3 + 4));"
};

minify(code);

code = "function add(first, second) { return first + second; }";
minify(code);

minify(code, {
    output: {
        quote_style: OutputQuoteStyle.AlwaysDouble
    }
});

const output = minify(code, {
    warnings: 'verbose',
    mangle: {
        properties: {
            regex: /reg/
        }
    },
    sourceMap: {
        filename: 'foo.map'
    },
    compress: {
        arguments: true
    }
});

const compressOptions = {
    booleans: true,
    comparisons: true,
    conditionals: true,
    dead_code: true,
    evaluate: true,
    hoist_funs: false,
    if_return: true,
    join_vars: true,
    keep_fargs: true,
    loops: true,
    side_effects: true,
    unused: true,
};
minify(code, {
    compress: compressOptions,
});

if (output.warnings) {
    output.warnings.filter(x => x === 'Dropping unused variable');
}

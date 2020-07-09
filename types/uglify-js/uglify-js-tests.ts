/// <reference types="node" />

import { OutputQuoteStyle, minify } from 'uglify-js';

let code: any;

code = {
    'file1.js': 'function add(first, second) { return first + second; }',
    'file2.js': 'console.log(add(1 + 2, 3 + 4));',
};

minify(code);

code = 'function add(first, second) { return first + second; }';
minify(code, { toplevel: true });

minify(code, {
    warnings: true,
    output: {
        beautify: true,
        preamble: '/* uglified */',
        quote_style: OutputQuoteStyle.AlwaysDouble,
    },
});

const output = minify(code, {
    warnings: 'verbose',
    mangle: {
        properties: {
            regex: /reg/,
        },
        toplevel: true,
    },
    sourceMap: {
        filename: 'foo.map',
        names: false,
    },
    compress: {
        arguments: true,
        global_defs: {
            '@console.log': 'alert',
        },
        passes: 2,
    },
    nameCache: {},
});
if (output.warnings) {
    output.warnings.filter(x => x === 'Dropping unused variable');
}

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

minify(code, {
    sourceMap: {
        content: 'inline',
    },
});

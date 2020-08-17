import { OutputQuoteStyle, minify } from 'uglify-es';

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

if (output.warnings) {
    output.warnings.filter(x => x === 'Dropping unused variable');
}

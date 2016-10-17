
import * as babel from "babel-core";


// Example from https://github.com/babel/babel/tree/master/packages/babel-core
const code = `class Example {}`;
const result = babel.transform(code, { /* options */ });
result.code; // Generated code
result.map; // Sourcemap
result.ast; // AST


// Examples from http://babeljs.io/docs/usage/api/
let options: babel.TransformOptions = {
    plugins: [
        "es2015-arrow-functions",
        "es2015-block-scoped-functions",
        "es2015-block-scoping",
        "es2015-classes",
    ],
    only: /.*\.js/,
    ast: false,
    sourceMaps: true
};

babel.transformFile("filename.js", options, function (err, result) {
    result.code;
    result.map;
    result.ast;
});

babel.transformFileSync("filename.js", options).code;

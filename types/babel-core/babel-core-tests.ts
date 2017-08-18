import * as babel from "babel-core";

// Example from https://github.com/babel/babel/tree/master/packages/babel-core
const code = `class Example {}`;
const result = babel.transform(code, { /* options */ });
result.code; // Generated code
result.map; // Sourcemap
result.ast; // AST

// Examples from http://babeljs.io/docs/usage/api/
const options: babel.TransformOptions = {
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

babel.transformFile("filename.js", options, (err, result) => {
    result.code;
    result.map;
    result.ast;
});

babel.transformFileSync("filename.js", options).code;

// Slightly modified example from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#-pre-and-post-in-plugins
export default function(): babel.PluginObj<{ cache: Map<string, number>}> {
    return {
        pre(state) {
            this.cache = new Map();
        },
        visitor: {
            StringLiteral(path) {
            this.cache.set(path.node.value, 1);
            }
        },
        post(state) {
            return this.cache;
        }
    };
}

// Type definitions for static-eval v0.2.4
// Project: https://github.com/substack/static-eval
// Definitions by: Ben Liddicott <https://github.com/benliddicott/DefinitelyTyped>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
 

declare module 'static-eval' {
    function evaluate(ast, vars: { [name: string]: any });
    export =evaluate;
}

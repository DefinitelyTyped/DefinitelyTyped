// Type definitions for closure-compiler
// Project: https://github.com/tim-smart/node-closure/
// Definitions by: Martin Probst <https://github.com/mprobst>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'closure-compiler' {
  type Callback = (err: Error, stdout: string, stderr: string) => any;
  function compile(src: string, callback: Callback): void;
  function compile(src: string, options: {[k: string]: string | string[]},
                   callback: Callback): void;
}

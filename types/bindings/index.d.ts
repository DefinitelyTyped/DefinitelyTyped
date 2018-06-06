// Type definitions for bindings 1.3
// Project: https://github.com/TooTallNate/node-bindings
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The main `bindings()` function loads the compiled bindings for a given module.
 * It uses V8's Error API to determine the parent filename that this function is
 * being invoked from, which is then used to find the root directory.
 */
declare function bindings(mod: string): any;

export = bindings;

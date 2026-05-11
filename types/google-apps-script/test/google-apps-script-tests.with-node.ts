/**
 * should avoid throwing TS2403 error (Variable 'console' must be of type 'Console', but here has type 'console') with @types/node
 * @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32585}
 */

/// <reference types="node" />

// Console
console.log("log");
console.info("info");
console.warn("warn");
console.error("error");
console.log("Console can use %s and %d format string.", "hello", 2);

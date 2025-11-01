/*
React projects that don't include the DOM library need these interfaces to compile.
React Native applications use React, but there is no DOM available. The JavaScript runtime
is ES6/ES2015 only. These definitions allow such projects to compile with only `--lib ES6`.

Warning: all of these interfaces are empty. If you want type definitions for various properties
(such as HTMLInputElement.prototype.value), you need to add `--lib DOM` (via command line or tsconfig.json).
*/

interface StyleMedia {}

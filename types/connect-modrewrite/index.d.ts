// Type definitions for connect-modrewrite
// Project: https://github.com/tinganho/connect-modrewrite
// Definitions by: Tingan Ho <https://github.com/tinganho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2




import express = require('express');
declare function modrewrite(rewrites: string[]): express.RequestHandler;
export = modrewrite;

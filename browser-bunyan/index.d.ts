// Type definitions for browser-bunyan 0.4
// Project: https://github.com/philmander/browser-bunyan
// Definitions by: Paul Lockwood <https://github.com/PaulLockwood>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import bunyan = require("bunyan");

declare module "bunyan" {
    function ConsoleFormattedStream(): void;
}

export = bunyan;

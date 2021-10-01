// Type definitions for pino-caller 3.1
// Project: https://github.com/pinojs/pino-caller#readme
// Definitions by: Austin Ziegler <https://github.com/halostatue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Pino = require('pino');

export = Caller;

interface Options {
    relativeTo?: string;
}

declare function Caller(logger: Pino.Logger, options?: Options): Pino.Logger;

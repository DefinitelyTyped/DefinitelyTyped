// Type definitions for superagent-bunyan 5.2
// Project: https://github.com/joaquimserafim/superagent-bunyan#readme
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as Logger from 'bunyan';
import { Plugin } from 'superagent';

declare function superagentLogger(logger: Logger, requestId?: string, extra?: object): Plugin;

export = superagentLogger;

// Type definitions for express-version-route 1.0
// Project: https://github.com/lirantal/express-version-route
// Definitions by: Rogelio Negrete <https://github.com/weffe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Handler } from 'express';

export function route(versionsMap: Map<string, Handler>): Handler;

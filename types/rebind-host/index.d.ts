// Type definitions for rebind-host 1.0
// Project: https://github.com/truffls/node-rebind-host#readme
// Definitions by: Tyler Johnson <https://github.com/tyler-johnson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Handler } from "express";

declare function createRebindHost(forceHost?: string): Handler;
export = createRebindHost;

// Type definitions for bunyan-winston-adapter 0.2
// Project: https://github.com/gluwer/bunyan-winston-adapter
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as bunyan from "bunyan";
import { Logger } from "winston";

export function createAdapter(logger: Logger, mapping?: any): bunyan;

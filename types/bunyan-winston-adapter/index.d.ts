// Type definitions for bunyan-winston-adapter 0.2
// Project: https://github.com/gluwer/bunyan-winston-adapter
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as bunyan from "bunyan";
import { LoggerInstance } from "winston";

export function createAdapter(logger: LoggerInstance, mapping?: any): bunyan;

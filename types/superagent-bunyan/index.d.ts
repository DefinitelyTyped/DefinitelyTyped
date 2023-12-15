import * as Logger from "bunyan";
import { Plugin } from "superagent";

declare function superagentLogger(logger: Logger, requestId?: string, extra?: object): Plugin;

export = superagentLogger;

// Type definitions for http-proxy-agent 2.0
// Project: https://github.com/TooTallNate/node-http-proxy-agent
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Agent } from 'http';
import { Url } from 'url';

declare class HttpProxyAgent extends Agent {
    constructor(options: string | Url);
}

export = HttpProxyAgent;

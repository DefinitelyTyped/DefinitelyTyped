// Type definitions for http-proxy-agent 2.0
// Project: https://github.com/TooTallNate/node-http-proxy-agent
// Definitions by: mrmlnc <https://github.com/mrmlnc>
//                 steprescott <https://github.com/steprescott>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node"/>

import { Agent } from 'http';
import { Url } from 'url';

declare class HttpProxyAgent extends Agent {
    constructor(options: string | Partial<Url>);

    proxy: Url;
    secureProxy: boolean;
}

export = HttpProxyAgent;

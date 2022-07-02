// Type definitions for superagent-proxy 3.0
// Project: https://github.com/TooTallNate/superagent-proxy#readme
// Definitions by: Daniel Imhoff <https://github.com/dwieeb>
//                 Roh Rajendra <https://github.com/neurally>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as superagent from 'superagent';

declare module 'superagent' {
    interface Request {
        proxy(url: string): this;
    }
}

declare function superagentProxy(s: superagent.SuperAgentStatic): void;

export = superagentProxy;

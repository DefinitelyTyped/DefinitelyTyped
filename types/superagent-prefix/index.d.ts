// Type definitions for superagent-prefix 0.0
// Project: https://github.com/johntron/superagent-prefix, https://github.com/mattahorton/superagent-prefix
// Definitions by: Michael Ledin <https://github.com/mxl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as request from 'superagent';

declare function plugin(prefix: string): request.Plugin;

declare namespace plugin {
}

export = plugin;

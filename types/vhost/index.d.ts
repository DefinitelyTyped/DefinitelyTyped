// Type definitions for vhost 3.0
// Project: https://github.com/expressjs/vhost
// Definitions by: Vincenzo Chianese <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');

declare function vhost(hostname: string | RegExp, handler: express.Handler): string;

export = vhost;

// Type definitions for connect-datadog 0.0
// Project: https://github.com/datadog/node-connect-datadog
// Definitions by: Moshe Good <https://github.com/moshegood>
//                 Michael Mifsud <https://github.com/xzyfer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import express = require('express');
import dogstatsd = require('node-dogstatsd');

export = Factory;

declare function Factory(options?: Factory.Options): express.RequestHandler;

declare namespace Factory {
    interface Options {
        stat?: string;
        tags?: string[];
        path?: boolean;
        method?: boolean;
        protocol?: boolean;
        response_code?: boolean;
        dogstatsd?: dogstatsd.StatsDClient;
    }
}

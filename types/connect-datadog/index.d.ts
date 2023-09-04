// Type definitions for connect-datadog 0.0
// Project: https://github.com/datadog/node-connect-datadog
// Definitions by: Moshe Good <https://github.com/moshegood>
//                 Michael Mifsud <https://github.com/xzyfer>
//                 Lewis Vail <https://github.com/lewisvail3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require("express");
import hotShots = require("hot-shots");

export = Factory;

declare function Factory(options?: Factory.Options): express.RequestHandler;

declare namespace Factory {
    interface Options {
        stat?: string | undefined;
        tags?: string[] | undefined;
        path?: boolean | undefined;
        base_url?: boolean | undefined;
        method?: boolean | undefined;
        protocol?: boolean | undefined;
        response_code?: boolean | undefined;
        dogstatsd?: hotShots.StatsD | undefined;
    }
}

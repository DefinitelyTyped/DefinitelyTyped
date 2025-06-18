/// <reference types="jasmine" />

import karma = require("karma");

declare module "karma" {
    interface ClientOptions {
        jasmine?:
            | (jasmine.Configuration & {
                /** @deprecated undocumented to be removed */
                timeoutInterval?: number | undefined;
            })
            | undefined;
        /**
         * run a subset of the full set of specs.
         * Complete sharding support needs to be done in the process that calls karma,
         * and would need to support test result integration across shards.
         * See {@link https://github.com/karma-runner/karma-jasmine#sharding}
         */
        shardIndex?: number | undefined;
        /**
         * run a subset of the full set of specs.
         * Complete sharding support needs to be done in the process that calls karma,
         * and would need to support test result integration across shards.
         * See {@link https://github.com/karma-runner/karma-jasmine#sharding}
         */
        totalShards?: number | undefined;
    }
}

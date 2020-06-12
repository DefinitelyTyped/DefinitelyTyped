// Type definitions for karma-mocha 1.3
// Project: https://github.com/karma-runner/karma-mocha#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ClientOptions {
        mocha?: MochaClientOptions;
    }

    interface MochaClientOptions {
        /** This will be exposed in a reporter as `result.mocha.{exportedValue}` */
        export?: string[];
        /** You can set opts to equal true then plugin will load opts from default location 'test/mocha.opts' */
        opts?: true | string;
        /** any supported Mocha configuration options */
        [key: string]: any;
    }
}

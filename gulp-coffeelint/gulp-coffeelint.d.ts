// Type definitions for gulp-coffeelint
// Project: https://github.com/janraasch/gulp-coffeelint
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-coffeelint" {
    namespace coffeelint {
        interface Coffeelint {
            /**
             * @param optFile Absolute path of a json file containing options for coffeelint.
             * @param opt Options you wish to send to coffeelint. If optFile is given, this will be ignored.
             * @param literate Are we dealing with Literate CoffeeScript?
             * @param rules Add custom rules to coffeelint.
             */
            (optFile?: string, opt?: any, literate?: boolean, rules?: Function[]): NodeJS.ReadWriteStream;
            reporter(reporter?: string|Function): NodeJS.ReadWriteStream;
        }
    }

    var coffeelint: coffeelint.Coffeelint;

    export = coffeelint;
}


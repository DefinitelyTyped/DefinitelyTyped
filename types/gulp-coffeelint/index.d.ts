/// <reference types="node" />

declare namespace coffeelint {
    interface Coffeelint {
        /**
         * @param optFile Absolute path of a json file containing options for coffeelint.
         * @param opt Options you wish to send to coffeelint. If optFile is given, this will be ignored.
         * @param literate Are we dealing with Literate CoffeeScript?
         * @param rules Add custom rules to coffeelint.
         */
        (optFile?: string, opt?: any, literate?: boolean, rules?: Function[]): NodeJS.ReadWriteStream;
        reporter(reporter?: string | Function): NodeJS.ReadWriteStream;
    }
}

declare var coffeelint: coffeelint.Coffeelint;

export = coffeelint;

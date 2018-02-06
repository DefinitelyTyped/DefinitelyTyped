import _ = require("../index");

declare namespace Lodash {
    interface FunctionsIn {
        (): FunctionsIn;
        <T extends {}>(object: any): string[];
    }
}

declare const functionsIn: Lodash.FunctionsIn;
export = functionsIn;

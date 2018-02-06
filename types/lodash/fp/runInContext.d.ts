import _ = require("../index");

declare namespace Lodash {
    interface RunInContext {
        (): RunInContext;
        (context: object): typeof _;
    }
}

declare const runInContext: Lodash.RunInContext;
export = runInContext;

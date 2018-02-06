import _ = require("../index");

declare namespace Lodash {
    interface RunInContext {
        /**
         * Create a new pristine lodash function using the given context object.
         *
         * @param context The context object.
         * @return Returns a new lodash function.
         */
        (): RunInContext;
        /**
         * Create a new pristine lodash function using the given context object.
         *
         * @param context The context object.
         * @return Returns a new lodash function.
         */
        (context: object): typeof _;
    }
}

declare const runInContext: Lodash.RunInContext;
export = runInContext;

// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Create a new pristine lodash function using the given context object.
     *
     * @param context The context object.
     * @return Returns a new lodash function.
     */
    type RunInContext = (context: object) => typeof _;
}

declare const runInContext: Lodash.RunInContext;
export = runInContext;

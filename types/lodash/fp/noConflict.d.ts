// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Reverts the _ variable to its previous value and returns a reference to the lodash function.
     *
     * @return Returns the lodash function.
     */
    type NoConflict = () => typeof _;
}

declare const noConflict: Lodash.NoConflict;
export = noConflict;

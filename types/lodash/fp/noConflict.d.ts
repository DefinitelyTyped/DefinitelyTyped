import _ = require("../index");

declare namespace Lodash {
    type NoConflict = /**
     * Reverts the _ variable to its previous value and returns a reference to the lodash function.
     *
     * @return Returns the lodash function.
     */
    () => typeof _;;
}

declare const noConflict: Lodash.NoConflict;
export = noConflict;

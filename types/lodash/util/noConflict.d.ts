import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Reverts the _ variable to its previous value and returns a reference to the lodash function.
         *
         * @return Returns the lodash function.
         */
        noConflict(): typeof _;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.noConflict
         */
        noConflict(): typeof _;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.noConflict
         */
        noConflict(): LoDashExplicitWrapper<typeof _>;
    }
}
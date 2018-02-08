// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type NoConflict = 
    /**
     * Reverts the _ variable to its previous value and returns a reference to the lodash function.
     *
     * @return Returns the lodash function.
     */
    () => typeof _;

declare const noConflict: NoConflict;
declare namespace noConflict {}
export = noConflict;

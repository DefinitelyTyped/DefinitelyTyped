// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Rearg {
    /**
     * Creates a function that invokes func with arguments arranged according to the specified indexes where the
     * argument value at the first index is provided as the first argument, the argument value at the second index
     * is provided as the second argument, and so on.
     * @param func The function to rearrange arguments for.
     * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.
     * @return Returns the new function.
     */
    (): Rearg;
    /**
     * Creates a function that invokes func with arguments arranged according to the specified indexes where the
     * argument value at the first index is provided as the first argument, the argument value at the second index
     * is provided as the second argument, and so on.
     * @param func The function to rearrange arguments for.
     * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.
     * @return Returns the new function.
     */
    (indexes: _.Many<number>): Rearg1x1;
    /**
     * Creates a function that invokes func with arguments arranged according to the specified indexes where the
     * argument value at the first index is provided as the first argument, the argument value at the second index
     * is provided as the second argument, and so on.
     * @param func The function to rearrange arguments for.
     * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.
     * @return Returns the new function.
     */
    (indexes: _.Many<number>, func: (...args: any[]) => any): (...args: any[]) => any;
}
interface Rearg1x1 {
    /**
     * Creates a function that invokes func with arguments arranged according to the specified indexes where the
     * argument value at the first index is provided as the first argument, the argument value at the second index
     * is provided as the second argument, and so on.
     * @param func The function to rearrange arguments for.
     * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.
     * @return Returns the new function.
     */
    (): Rearg1x1;
    /**
     * Creates a function that invokes func with arguments arranged according to the specified indexes where the
     * argument value at the first index is provided as the first argument, the argument value at the second index
     * is provided as the second argument, and so on.
     * @param func The function to rearrange arguments for.
     * @param indexes The arranged argument indexes, specified as individual indexes or arrays of indexes.
     * @return Returns the new function.
     */
    (func: (...args: any[]) => any): (...args: any[]) => any;
}

declare const rearg: Rearg;
declare namespace rearg {}
export = rearg;

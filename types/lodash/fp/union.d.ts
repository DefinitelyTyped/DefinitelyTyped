// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Union {
    /**
     * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of combined values.
     */
    (): Union;
    /**
     * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of combined values.
     */
    <T>(arrays2: _.List<T> | null | undefined): Union1x1<T>;
    /**
     * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of combined values.
     */
    <T>(arrays2: _.List<T> | null | undefined, arrays: _.List<T> | null | undefined): T[];
}
interface Union1x1<T> {
    /**
     * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of combined values.
     */
    (): Union1x1<T>;
    /**
     * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of combined values.
     */
    (arrays: _.List<T> | null | undefined): T[];
}

declare const union: Union;
declare namespace union {}
export = union;

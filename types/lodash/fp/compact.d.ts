// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Compact =
    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
     * falsey.
     *
     * @param array The array to compact.
     * @return Returns the new array of filtered values.
     */
    <T>(array: _.List<T | null | undefined | false | "" | 0> | null | undefined) => T[];

declare const compact: Compact;
export = compact;

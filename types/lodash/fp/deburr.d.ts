// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
     * diacritical marks.
     *
     * @param string The string to deburr.
     * @return Returns the deburred string.
     */
    type Deburr = (string: string) => string;
}

declare const deburr: Lodash.Deburr;
export = deburr;

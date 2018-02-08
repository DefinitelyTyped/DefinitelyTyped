// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type Deburr = 
    /**
     * Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing combining
     * diacritical marks.
     *
     * @param string The string to deburr.
     * @return Returns the deburred string.
     */
    (string: string) => string;

declare const deburr: Deburr;
declare namespace deburr {}
export = deburr;

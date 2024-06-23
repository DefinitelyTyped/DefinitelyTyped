interface Options {
    /**
     * A string used for the indentation of the declaration (default is 4
     * spaces).
     */
    indent?: string | undefined;
    /**
     * Defines the placement of open curly brace, either end-of-line (default)
     * or separate-line
     */
    openbrace?: "end-of-line" | "separate-line" | undefined;

    /**
     * Always inserts a semicolon after the last ruleset(default is false)
     */
    autosemicolon?: boolean | undefined;
}
declare function beautify(cssText: string, options?: Options): string;

export = beautify;

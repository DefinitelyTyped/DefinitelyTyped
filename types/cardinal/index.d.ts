import highlight = require("./lib/highlight");
import highlightFile = require("./lib/highlightFile");
import highlightFileSync = require("./lib/highlightFileSync");

type CardinalThemeColorizer = (
    value: string,
    info: { tokens: ReadonlyArray<{ type: string; value: string }>; tokenIndex: number },
) => string;

interface CardinalThemeTokenRule {
    [key: string]: CardinalThemeColorizer | undefined;
    _default?: CardinalThemeColorizer | undefined;
}

export type CardinalTheme = Record<string, CardinalThemeTokenRule | undefined> & {
    _default?: CardinalThemeColorizer | undefined;
};

export interface CardinalOptions {
    /** used to optionally override the theme used to highlight */
    theme?: CardinalTheme | undefined;
    /** if `true` line numbers are included in the highlighted code */
    linenos?: boolean | undefined;
    /** sets line number of the first line when line numbers are printed */
    firstline?: number | undefined;
    /**
     * if true JSX syntax is supported, otherwise cardinal will raise an error when encountering JSX
     * @default false
     */
    jsx?: boolean | undefined;
}

export { highlight, highlightFile, highlightFileSync };

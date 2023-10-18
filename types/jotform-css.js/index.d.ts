declare global {
    const cssjs: CssJsConstructor;
}

export interface CssJsConstructor {
    new(): CssJs;
}

export const cssjs: CssJsConstructor;
export default cssjs;

export interface CssJs {
    /**
     * Parses given css string, and returns css object
     * keys as selectors and values are css rules
     * eliminates all css comments before parsing
     * @param css string to be parsed
     * @returns css object
     */
    parseCSS(css: string): CssJs;

    /**
     * parses given string containing css directives
     * @param rules, css directive string eg color:white; font-size:18px;
     * @returns an array of objects containing ruleName:ruleValue pairs
     */
    parseRules(rules: string): any[];

    /**
     * returns the rule having given directive
     */
    findCorrespondingRule(rules: string, directive: string, value?: string): string | boolean;

    /**
     * Finds styles that have given selector, compress them and returns them
     */
    findBySelector(cssObject: CssJs, selector: string, contains?: boolean): CssJs;

    /**
     * deletes cssObjects having given selector, and returns new array
     */
    deleteBySelector(cssObject: CssJs, selector: string): CssJs;

    /**
     * Compresses given cssObjectArray and tries to minimize selector redundence
     */
    compressCSS(cssObject: CssJs): CssJs;

    /**
     * @returns diff css object contains changed values in css1 in regards to css2, false if same
     */
    cssDiff(css1: CssJs, css2: CssJs): boolean;

    /**
     * @param cssObject target css object array
     * @param newArray source array that will be pushed into cssObject parameter
     * @param reverse [optional], if given true, first parameter will be traversed on reversed order
     * effectively giving priority to the styles in newArray
     */
    intelligentMerge(cssObject: CssJs, newArray: CssJs, reverse?: boolean): void;

    /**
     * inserts new css objects into a bigger css object with same selectors grouped together
     * @param cssObject array of bigger css object to be pushed into
     * @param minimalObject single css object
     * @param reverse reverse [optional] default is false, if given, cssObject will be reversly traversed
     * resulting more priority in minimalObject's styles
     */
    intelligentCSSPush(cssObject: CssJs, minimalObject: CssJs, reverse?: boolean): void;

    /**
     * Filter outs rule objects whose type param equal to DELETED
     * @param rules array of rules
     */
    compactRules(rules: string[]): string[];

    /**
     * Computes string for ace editor using this.css or given cssBase optional parameter
     */
    getCSSForEditor(parsedCss: CssJs, depth?: number): string;

    /**
     * Given rules array, returns visually formatted css string to be used inside editor
     */
    getCSSOfRules(rules: string, depth?: null): string;

    /**
     * Given css string or objectArray, parses it and then for every selector,
     * prepends this.cssPreviewNamespace to prevent css collision issues
     * @returns object in which this css prepended
     */
    applyNamespacing(parsedCss: CssJs | string, prefix: string): CssJs;

    /**
     * @param css the original css string to be stripped out of comments
     * @returns cleaned CSS containing no css comments
     */
    stripComments(css: string): string;
}

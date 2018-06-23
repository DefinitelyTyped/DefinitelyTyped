// Type definitions for jotform-css.js v1.0.1
// Project: https://github.com/jotform/css.js
// Definitions by: Peter van der Woude <https://github.com/pandawood>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

/**
 * Thid doesn't get used in the way I intended
 */
export function cssjs() : CssJs

export interface CssJs {

	/**
	 * Parses given css string, and returns css object
	 * keys as selectors and values are css rules
	 * eliminates all css comments before parsing
	 * @param {string} css string to be parsed
	 * @returns {CssJs} css object
	 */
	parseCSS(css: string): CssJs

	/**
	 * parses given string containing css directives
	 * @param {string} rules, css directive string eg color:white; font-size:18px;
	 * @returns {any[]} an array of objects containing ruleName:ruleValue pairs
	 */
	parseRules(rules: string): any[]

	/**
	 * returns the rule having given directive
	 * @param {string} rules
	 * @param {string} directive
	 * @param {string} value
	 */
	findCorrespondingRule(rules: string, directive: string, value?: string): string | boolean

	/**
	 * Finds styles that have given selector, compress them and returns them
	 * @param cssObject
	 * @param {string} selector
	 * @param {boolean} contains
	 */
	findBySelector(cssObject: CssJs, selector: string, contains?: boolean) : CssJs

	/**
	 * deletes cssObjects having given selector, and returns new array
	 * @param {CssJs} cssObject
	 * @param {string} selector
	 * @returns {CssJs}
	 */
	deleteBySelector(cssObject: CssJs, selector: string): CssJs

	/**
	 * Compresses given cssObjectArray and tries to minimize selector redundence
	 * @param {CssJs} cssObject
	 * @returns {CssJs}
	 */
	compressCSS(cssObject: CssJs): CssJs

	/**
	 * @param {CssJs} css1
	 * @param {CssJs} css2
	 * @returns {boolean} diff css object contains changed values in css1 in regards to css2, false if same
	 */
	cssDiff(css1: CssJs, css2: CssJs): boolean

	/**
	 * @param {CssJs} cssObject target css object array
	 * @param {CssJs} newArray source array that will be pushed into cssObject parameter
	 * @param {boolean} reverse [optional], if given true, first parameter will be traversed on reversed order
	 effectively giving priority to the styles in newArray
	 */
	intelligentMerge(cssObject: CssJs, newArray: CssJs, reverse?: boolean) : void

	/**
	 * inserts new css objects into a bigger css object with same selectors grouped together
	 * @param {CssJs} cssObject array of bigger css object to be pushed into
	 * @param {CssJs} minimalObject single css object
	 * @param {boolean} reverse reverse [optional] default is false, if given, cssObject will be reversly traversed
	 resulting more priority in minimalObject's styles
	 */
	intelligentCSSPush(cssObject: CssJs, minimalObject: CssJs, reverse?: boolean) : void

	/**
	 * Filter outs rule objects whose type param equal to DELETED
	 * @param {string} rules array of rules
	 */
	compactRules(rules: string[]): string[]

	/**
	 * Computes string for ace editor using this.css or given cssBase optional parameter
	 * @param {CssJs} parsedCss
	 * @param depth
	 * @returns {string}
	 */
	getCSSForEditor(parsedCss: CssJs, depth?: number): string

	/**
	 * Given rules array, returns visually formatted css string to be used inside editor
	 * @param {string} rules
	 * @param {null} depth
	 * @returns {string}
	 */
	getCSSOfRules(rules: string, depth?: null): string

	/**
	 * Given css string or objectArray, parses it and then for every selector,
	 * prepends this.cssPreviewNamespace to prevent css collision issues
	 * @param {CssJs} parsedCss
	 * @param {string} prefix
	 * @returns {CssJs} object in which this css prepended
	 */
	applyNamespacing(parsedCss: CssJs | string, prefix: string): CssJs

	/**
	 * @param {string} css the original css string to be stripped out of comments
	 * @returns {string} cleaned CSS containing no css comments
	 */
	stripComments(css: string): string
}

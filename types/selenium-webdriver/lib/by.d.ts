import { Locator, WebDriver, WebElement } from "../";

/**
 * Typings for lib/by.js
 * Describes a mechanism for locating an element on the page.
 * @final
 */
export class By {
    /**
     * @param {string} using the name of the location strategy to use.
     * @param {string} value the value to search for.
     */
    constructor(using: string, value: string);

    using: string;
    value: string;

    /**
     * Locates elements that have a specific class name.
     *
     * @param {string} name The class name to search for.
     * @return {!By} The new locator.
     * @see http://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes
     * @see http://www.w3.org/TR/CSS2/selector.html#class-html
     */
    static className(name: string): By;

    /**
     * Locates elements using a CSS selector.
     *
     * @param {string} selector The CSS selector to use.
     * @return {!By} The new locator.
     * @see http://www.w3.org/TR/CSS2/selector.html
     */
    static css(selector: string): By;

    /**
     * Locates eleemnts by the ID attribute. This locator uses the CSS selector
     * `*[id='$ID']`, _not_ `document.getElementById`.
     *
     * @param {string} id The ID to search for.
     * @return {!By} The new locator.
     */
    static id(id: string): By;

    /**
     * Locates link elements whose
     * {@linkplain WebElement#getText visible text} matches the given
     * string.
     *
     * @param {string} text The link text to search for.
     * @return {!By} The new locator.
     */
    static linkText(text: string): By;

    /**
     * Locates an elements by evaluating a
     * {@linkplain WebDriver#executeScript JavaScript expression}.
     * The result of this expression must be an element or list of elements.
     *
     * @param {!(string|Function)} script The script to execute.
     * @param {...*} var_args The arguments to pass to the script.
     * @return {function(!./WebDriver): !./Promise}
     *     A new JavaScript-based locator function.
     */
    static js(script: string | Function, ...var_args: any[]): (webdriver: WebDriver) => Promise<any>;

    /**
     * Locates elements whose `name` attribute has the given value.
     *
     * @param {string} name The name attribute to search for.
     * @return {!By} The new locator.
     */
    static name(name: string): By;

    /**
     * Locates link elements whose
     * {@linkplain WebElement#getText visible text} contains the given
     * substring.
     *
     * @param {string} text The substring to check for in a link's visible text.
     * @return {!By} The new locator.
     */
    static partialLinkText(text: string): By;

    /**
     * Locates elements with a given tag name.
     *
     * @param {string} name The tag name to search for.
     * @return {!By} The new locator.
     * @deprecated Use {@link By.css() By.css(tagName)} instead.
     */
    static tagName(name: string): By;

    /**
     * Locates elements matching a XPath selector. Care should be taken when
     * using an XPath selector with a {@link WebElement} as WebDriver
     * will respect the context in the specified in the selector. For example,
     * given the selector `//div`, WebDriver will search from the document root
     * regardless of whether the locator was used with a WebElement.
     *
     * @param {string} xpath The XPath selector to use.
     * @return {!By} The new locator.
     * @see http://www.w3.org/TR/xpath/
     */
    static xpath(xpath: string): By;

    toObject(): Object;

    /** @override */
    toString(): string;
}

/**
 * Describes a mechanism for locating an element relative to others
 * on the page.
 * @final
 */
export class RelativeBy {
    /**
     * @param {By} findDetails
     * @param {Array<Object>} filters
     */
    constructor(findDetails: By, filters: Object[]);

    /**
     * Look for elements above the root element passed in
     * @param {string|WebElement} locatorOrElement
     * @return {!RelativeBy} Return this object
     */
    above(locatorOrElement: Locator | WebElement): RelativeBy;

    /**
     * Look for elements below the root element passed in
     * @param {Locator|WebElement} locatorOrElement
     * @return {!RelativeBy} Return this object
     */
    below(locatorOrElement: Locator | WebElement): RelativeBy;

    /**
     * Look for elements left the root element passed in
     * @param {Locator|WebElement} locatorOrElement
     * @return {!RelativeBy} Return this object
     */
    toLeftOf(locatorOrElement: Locator | WebElement): RelativeBy;

    /**
     * Look for elements right the root element passed in
     * @param {Locator|WebElement} locatorOrElement
     * @return {!RelativeBy} Return this object
     */
    toRightOf(locatorOrElement: Locator | WebElement): RelativeBy;

    /**
     * Look for elements near the root element passed in
     * @param {Locator|WebElement} locatorOrElement
     * @return {!RelativeBy} Return this object
     */
    near(locatorOrElement: Locator | WebElement): RelativeBy;

    /**
     * Returns a marshalled version of the {@link RelativeBy}
     * @return {!Object} Object representation of a {@link WebElement}
     *     that will be used in {@link #findElements}.
     */
    marshall(): Object;

    /** @override */
    toString(): string;
}

/**
 * Short-hand expressions for the primary element locator strategies.
 * For example the following two statements are equivalent:
 *
 *     var e1 = driver.findElement(By.id('foo'));
 *     var e2 = driver.findElement({id: 'foo'});
 *
 * Care should be taken when using JavaScript minifiers (such as the
 * Closure compiler), as locator hashes will always be parsed using
 * the un-obfuscated properties listed.
 */
export type ByHash =
    | { className: string }
    | { css: string }
    | { id: string }
    | { js: string }
    | { linkText: string }
    | { name: string }
    | { partialLinkText: string }
    | { tagName: string }
    | { xpath: string };

/**
 * Checks if a value is a valid locator.
 * @param {!(By|Function|ByHash)} locator The value to check.
 * @return {!(By|Function)} The valid locator.
 * @throws {TypeError} If the given value does not define a valid locator
 *     strategy.
 */
export function checkedLocator(locator: Locator): By | Function;

/**
 * Start searching for relative objects using search criteria with By.
 * @param {Locator} by A By map that shows how to find the initial element
 * @returns {RelativeBy} RelativeBy instance
 */
export function locateWith(by: Locator): RelativeBy;

/**
 * Start Searching for relative objects using the value returned from
 * `By.tagName()`.
 *
 * Note: this method will likely be removed in the future please use
 * `locateWith`.
 * @param {By} tagName The value returned from calling By.tagName()
 * @returns {RelativeBy} RelativeBy instance
 */
export function withTagName(tagName: By): RelativeBy;

/**
 * Escapes a CSS string.
 * @param {string} css the string to escape.
 * @return {string} the escaped string.
 * @throws {TypeError} if the input value is not a string.
 * @throws {InvalidCharacterError} if the string contains an invalid character.
 * @see https://drafts.csswg.org/cssom/#serialize-an-identifier
 */
export function escapeCss(css: string): string;

import { IWebElementId, Locator, Serializable, WebDriver, WebElement, WebElementPromise } from '..';
import { Command } from './command';

/**
 * Represents a ShadowRoot of a {@link WebElement}. Provides functions to
 * retrieve elements that live in the DOM below the ShadowRoot.
 */
export class ShadowRoot implements Serializable<IWebElementId> {
    constructor(driver: WebDriver, id: string | Promise<string>);

    /**
     * Extracts the encoded ShadowRoot ID from the object.
     *
     * @param {?} obj The object to extract the ID from.
     * @return {string} the extracted ID.
     * @throws {TypeError} if the object is not a valid encoded ID.
     */
    static extractId(obj: any): string;

    /**
     * @param {?} obj the object to test.
     * @return {boolean} whether the object is a valid encoded WebElement ID.
     */
    static isId(obj: any): boolean;

    /** @override */
    serialize(): Promise<IWebElementId>;

    /**
     * Schedules a command that targets this element with the parent WebDriver
     * instance. Will ensure this element's ID is included in the command
     * parameters under the "id" key.
     *
     * @param {!command.Command} command The command to schedule.
     * @return {!Promise<T>} A promise that will be resolved with the result.
     * @template T
     * @see WebDriver#schedule
     */
    execute_<T>(command: Command): Promise<T>;

    /**
     * Schedule a command to find a descendant of this ShadowROot. If the element
     * cannot be found, the returned promise will be rejected with a
     * {@linkplain error.NoSuchElementError NoSuchElementError}.
     *
     * The search criteria for an element may be defined using one of the static
     * factories on the {@link by.By} class, or as a short-hand
     * {@link ./by.ByHash} object. For example, the following two statements
     * are equivalent:
     *
     *     var e1 = shadowroot.findElement(By.id('foo'));
     *     var e2 = shadowroot.findElement({id:'foo'});
     *
     * You may also provide a custom locator function, which takes as input this
     * instance and returns a {@link WebElement}, or a promise that will resolve
     * to a WebElement. If the returned promise resolves to an array of
     * WebElements, WebDriver will use the first element. For example, to find the
     * first visible link on a page, you could write:
     *
     *     var link = element.findElement(firstVisibleLink);
     *
     *     function firstVisibleLink(shadowRoot) {
     *       var links = shadowRoot.findElements(By.tagName('a'));
     *       return promise.filter(links, function(link) {
     *         return link.isDisplayed();
     *       });
     *     }
     *
     * @param {!(by.By|Function)} locator The locator strategy to use when
     *     searching for the element.
     * @return {!WebElementPromise} A WebElement that can be used to issue
     *     commands against the located element. If the element is not found, the
     *     element will be invalidated and all scheduled commands aborted.
     */
    findElement(locator: Locator): WebElementPromise;

    /**
     * Locates all of the descendants of this element that match the given search
     * criteria.
     *
     * @param {!(by.By|Function)} locator The locator strategy to use when
     *     searching for the element.
     * @return {!Promise<!Array<!WebElement>>} A promise that will resolve to an
     *     array of WebElements.
     */
    findElements(locator: Locator): Promise<WebElement[]>;

    getId(): Promise<string>;
}

/**
 * ShadowRootPromise is a promise that will be fulfilled with a WebElement.
 * This serves as a forward proxy on ShadowRoot, allowing calls to be
 * scheduled without directly on this instance before the underlying
 * ShadowRoot has been fulfilled.
 *
 * @final
 */
export interface ShadowRootPromise extends Promise<ShadowRoot> {}

/**
 * Implement ShadowRootPromise
 */
export class ShadowRootPromise extends ShadowRoot {
    /**
     * @param {!WebDriver} driver The parent WebDriver instance for this
     *     element.
     * @param {!Promise<!ShadowRoot>} shadow A promise
     *     that will resolve to the promised element.
     */
    constructor(driver: WebDriver, shadow: Promise<ShadowRoot>);
}

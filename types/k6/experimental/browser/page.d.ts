import {
    BrowserContext,
    EvaluationArgument,
    PageFunction,
    SelectOptionsObject,
    KeyboardModifier,
    MouseButton,
    ScreenshotOptions,
    NavigationOptions,
} from './';
import { Touchscreen } from './touchscreen';
import { Response } from './response';
import { Locator } from './locator';
import { JSHandle } from './js_handle';
import { Keyboard } from './keyboard';
import { Mouse } from './mouse';
import { ElementHandle } from './element_handle';
import { Frame } from './frame';
import { Worker } from './worker';

/**
 * Page provides methods to interact with a single tab in a running web browser
 * instance. One instance of the browser can have many page instances.
 */
export class Page {
    /**
     * Activates the browser tab so that it comes into focus and actions can be
     * performed against it.
     */
    bringToFront(): void;

    /**
     * **NOTE** Use locator-based `locator.check([options])` instead.
     *
     * This method is used to select an input checkbox.
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    check(
        selector: string,
        options?: {
            /**
             * Setting this to `true` will bypass the actionability checks (visible,
             * stable, enabled). Defaults to `false`.
             */
            force?: boolean;

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * A point to use relative to the top left corner of the element. If not
             * supplied, a visible point of the element is used.
             */
            position?: {
                x: number;

                y: number;
            };

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;

            /**
             * Setting this to `true` will perform the actionability checks without
             * performing the action. Useful to wait until the element is ready for the
             * action without performing it. Defaults to `false`.
             */
            trial?: boolean;
        },
    ): void;

    /**
     * **NOTE** Use locator-based `locator.click([options])` instead.
     *
     * This method clicks an element matching `selector`.
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    click(
        selector: string,
        options?: {
            /**
             * The mouse button (`left`, `middle` or `right`) to use during the action.
             * Defaults to `left`.
             */
            button?: MouseButton;

            /**
             * The number of times the action is performed. Defaults to `1`.
             */
            clickCount?: number;

            /**
             * Milliseconds to wait between `mousedown` and `mouseup`. Defaults to `0`.
             */
            delay?: number;

            /**
             * Setting this to `true` will bypass the actionability checks (`visible`,
             * `stable`, `enabled`). Defaults to `false`.
             */
            force?: boolean;

            /**
             * `Alt`, `Control`, `Meta` or `Shift` modifiers keys pressed during the
             * action. If not specified, currently pressed modifiers are used,
             * otherwise defaults to `null`.
             */
            modifiers?: KeyboardModifier[];

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * A point to use relative to the top left corner of the element. If not
             * supplied, a visible point of the element is used.
             */
            position?: {
                x: number;

                y: number;
            };

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;

            /**
             * Setting this to `true` will perform the actionability checks without
             * performing the action. Useful to wait until the element is ready for the
             * action without performing it. Defaults to `false`.
             */
            trial?: boolean;
        },
    ): Promise<void>;

    /**
     * This will close the tab that this page is associated with.
     */
    close(): void;

    /**
     * Gets the HTML contents of the page.
     */
    content(): string;

    /**
     * Gets the `BrowserContext` that the page belongs to.
     */
    context(): BrowserContext;

    /**
     * **NOTE** Use locator-based `locator.dblclick([options])` instead.
     *
     * Mouse double clicks an element matching provided selector.
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    dblclick(
        selector: string,
        options?: {
            /**
             * The mouse button (`left`, `middle` or `right`) to use during the action.
             * Defaults to `left`.
             */
            button?: MouseButton;

            /**
             * Milliseconds to wait between `mousedown` and `mouseup`. Defaults to `0`.
             */
            delay?: number;

            /**
             * Setting this to `true` will bypass the actionability checks (`visible`,
             * `stable`, `enabled`). Defaults to `false`.
             */
            force?: boolean;

            /**
             * `Alt`, `Control`, `Meta` or `Shift` modifiers keys pressed during the
             * action. If not specified, currently pressed modifiers are used,
             * otherwise defaults to `null`.
             */
            modifiers?: KeyboardModifier[];

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * A point to use relative to the top left corner of the element. If not
             * supplied, a visible point of the element is used.
             */
            position?: {
                x: number;

                y: number;
            };

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;

            /**
             * Setting this to `true` will perform the actionability checks without
             * performing the action. Useful to wait until the element is ready for the
             * action without performing it. Defaults to `false`.
             */
            trial?: boolean;
        },
    ): void;

    /**
     * **NOTE** Use locator-based locator.dispatchEvent([options]) instead.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param type DOM event type: `"click"` etc.
     * @param eventInit Optional event-specific initialization properties.
     * @param options
     */
    dispatchEvent(
        selector: string,
        type: string,
        eventInit?: EvaluationArgument,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): void;

    /**
     * This method changes the `CSS media type` through the `media` argument,
     * and/or the `'prefers-colors-scheme'` media feature, using the `colorScheme`
     * argument.
     * @param options
     */
    emulateMedia(options?: {
        /**
         * Emulates `'prefers-colors-scheme'` media feature, supported values are
         * `'light'`, `'dark'`, and `'no-preference'`.
         */
        colorScheme?: 'light' | 'dark' | 'no-preference';

        /**
         * Changes the CSS media type of the page. The only allowed values are
         * `'screen'`, and `'print'`.
         */
        media?: 'screen' | 'print';

        /**
         * Emulates `'prefers-reduced-motion'` media feature, supported values are
         * `'reduce'`, `'no-preference'`.
         */
        reducedMotion?: 'reduce' | 'no-preference';
    }): void;

    /**
     * This emulates your website with the specified vision deficiency type.
     * The supported types are:
     * - none: default.
     * - blurredVision: where vision is less precise.
     * - protanopia: the inability to perceive any red light.
     * - deuteranopia: the inability to perceive any green light.
     * - tritanopia: the inability to perceive any blue light.
     * - achromatopsia: the inability to perceive any color except for shades of
     * grey (extremely rare).
     * @param type
     */
    emulateVisionDeficiency(
        type: 'none' | 'blurredVision' | 'deuteranopia' | 'protanopia' | 'tritanopia' | 'achromatopsia',
    ): void;

    /**
     * Returns the value of the `pageFunction` invocation.
     *
     * A string can also be passed in instead of a function.
     *
     * @param pageFunction Function to be evaluated in the page context.
     * @param arg Optional argument to pass to `pageFunction`.
     */
    evaluate<R, Arg>(pageFunction: PageFunction<Arg, R>, arg?: Arg): R;

    /**
     * Returns the value of the `pageFunction` invocation as a [JSHandle].
     *
     * The only difference between page.evaluate(pageFunction[, arg]) and
     * page.evaluateHandle(pageFunction[, arg]) is that
     * page.evaluateHandle(pageFunction[, arg])returns [JSHandle].
     *
     * @param pageFunction Function to be evaluated in the page context.
     * @param arg Optional argument to pass to `pageFunction`.
     */
    evaluateHandle<R, Arg>(pageFunction: PageFunction<Arg, R>, arg?: Arg): JSHandle<R>;

    /**
     * **NOTE** Use locator-based `locator.fill(value[, options])` instead.
     *
     * Fill an `input`, `textarea` or `[contenteditable]` element with the
     * provided value.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param value Value to fill for the `<input>`, `<textarea>` or
     * `[contenteditable]` element.
     * @param options
     */
    fill(
        selector: string,
        value: string,
        options?: {
            /**
             * Setting this to `true` will bypass the actionability checks (`visible`,
             * `stable`, `enabled`). Defaults to `false`.
             */
            force?: boolean;

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): void;

    /**
     * **NOTE** Use locator-based `locator.focus([options])` instead.
     *
     * This method fetches an element with `selector` and focuses it.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    focus(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): void;

    /**
     * Frames returns an array of frames on the page.
     */
    frames(): Frame[];

    /**
     * **NOTE** Use locator-based locator.getAttribute(name[, options]) instead.
     *
     * Returns the element attribute value for the given attribute name.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param name Attribute name to get the value for.
     * @param options
     */
    getAttribute(
        selector: string,
        name: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): null | string;

    /**
     * Navigates to the specified url and returns the main resource response.
     *
     * navigating to `about:blank` or navigation to the same URL with a different
     * hash, will succeed and return `null`.
     *
     * @param url URL to navigate page to. The url should include scheme, e.g.
     * `https://`.
     * @param options
     */
    goto(url: string, options?: NavigationOptions): Promise<null | Response>;

    /**
     * **NOTE** Use locator-based locator.hover([options]) instead.
     *
     * This method hovers over an element matching `selector`.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    hover(
        selector: string,
        options?: {
            /**
             * Setting this to `true` will bypass the actionability checks (`visible`,
             * `stable`, `enabled`). Defaults to `false`.
             */
            force?: boolean;

            /**
             * `Alt`, `Control`, `Meta` or `Shift` modifiers keys pressed during the
             * action. If not specified, currently pressed modifiers are used,
             * otherwise defaults to `null`.
             */
            modifiers?: KeyboardModifier[];

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * A point to use relative to the top left corner of the element. If not
             * supplied, a visible point of the element is used.
             */
            position?: {
                x: number;

                y: number;
            };

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;

            /**
             * Setting this to `true` will perform the actionability checks without
             * performing the action. Useful to wait until the element is ready for the
             * action without performing it. Defaults to `false`.
             */
            trial?: boolean;
        },
    ): void;

    /**
     * **NOTE** Use locator-based locator.innerHTML([options]) instead.
     *
     * Returns `element.innerHTML`.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    innerHTML(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): string;

    /**
     * **NOTE** Use locator-based locator.innerText([options]) instead.
     *
     * Returns `element.innerText`.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    innerText(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): string;

    /**
     * **NOTE** Use locator-based locator.inputValue([options]) instead.
     *
     * Returns `input.value` for the selected `<input>` or `<textarea>` or
     * `<select>` element.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    inputValue(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): string;

    /**
     * **NOTE** Use locator-based locator.isChecked([options]) instead.
     *
     * Checks to see if the `checkbox` `input` type is selected or not.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    isChecked(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): boolean;

    /**
     * Indicates that the page has been closed.
     */
    isClosed(): boolean;

    /**
     * **NOTE** Use locator-based locator.isDisabled([options]) instead.
     *
     * Returns whether the element is disabled.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    isDisabled(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): boolean;

    /**
     * **NOTE** Use locator-based locator.isEditable([options]) instead.
     *
     * Returns whether the element is editable.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    isEditable(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): boolean;

    /**
     * **NOTE** Use locator-based locator.isEnabled([options]) instead.
     *
     * Returns whether the element is enabled.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    isEnabled(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): boolean;

    /**
     * **NOTE** Use locator-based locator.isHidden([options]) instead.
     *
     * Returns whether the element is hidden.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    isHidden(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): boolean;

    /**
     * **NOTE** Use locator-based locator.isVisible([options]) instead.
     *
     * Returns whether the element is visible.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    isVisible(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): boolean;

    /**
     * Returns the keyboard instance to interact with a virtual keyboard on the
     * page.
     */
    keyboard: Keyboard;

    /**
     * The method returns an element locator. Locators resolve to the element
     * when the action takes place, which means locators can span over navigations
     * where the underlying dom changes.
     *
     * @param selector A selector to use when resolving DOM element.
     */
    locator(selector: string): Locator;

    /**
     * The page's main frame. Page is made up of frames in a hierarchical. At the
     * top is mainFrame. A page is guaranteed to have a mainFrame.
     */
    mainFrame(): Frame;

    /**
     * Returns the mouse instance to interact with a virtual mouse on the page.
     */
    mouse: Mouse;

    /**
     * Returns the page that opened the current page. The first page that is
     * navigated to will have a null opener.
     */
    opener(): Page | null;

    /**
     * **NOTE** Use locator-based locator.press(key[, options]) instead.
     *
     * Focuses the element, and then uses keyboard.down(key) and
     * keyboard.up(key).
     *
     * A superset of the `key` values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).
     *
     * Following modification shortcuts are also supported: `Shift`, `Control`,
     * `Alt`, `Meta`, `ShiftLeft`.
     *
     * Holding down `Shift` will type the text that corresponds to the `key` in
     * the upper case.
     *
     * If `key` is a single character, it is case-sensitive, so the values `a`
     * and `A` will generate different respective texts.
     *
     * Shortcuts such as `key: "Control+o"` or `key: "Control+Shift+T"` are
     * supported as well. When specified with the modifier, modifier is pressed
     * and being held while the subsequent key is being pressed.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param key Name of the key to press or a character to generate, such as
     * `ArrowLeft` or `a`.
     * @param options
     */
    press(
        selector: string,
        key: string,
        options?: {
            /**
             * Milliseconds to wait between `mousedown` and `mouseup`. Defaults to `0`.
             */
            delay?: number;

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): void;

    /**
     * This reloads the current page Returns the main resource response.
     *
     * @param options
     */
    reload(options?: {
        /**
         * Maximum operation time in milliseconds. Defaults to `30` seconds. The
         * default value can be changed via the
         * browserContext.setDefaultNavigationTimeout(timeout),
         * browserContext.setDefaultTimeout(timeout),
         * page.setDefaultNavigationTimeout(timeout) or
         * page.setDefaultTimeout(timeout) methods.
         *
         * Setting the value to `0` will disable the timeout.
         *
         */
        timeout?: number;

        /**
         * When to consider operation succeeded, defaults to `load`. Events can be
         * either:
         * - `'domcontentloaded'` - consider operation to be finished when the
         * `DOMContentLoaded` event is fired.
         * - `'load'` - consider operation to be finished when the `load` event is
         * fired.
         * - `'networkidle'` - **DISCOURAGED** consider operation to be finished
         * when there are no network connections for at least `500` ms. Don't use
         * this method for testing especially with chatty websites where the event
         * may never fire, rely on web assertions to assess readiness instead.
         */
        waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
    }): null | Response;

    /**
     * Returns the buffer with the captured screenshot from the browser.
     *
     * @param options
     */
    screenshot(
        options?: {
            /**
             * An object which specifies clipping of the resulting image.
             */
            clip?: {
                /**
                 * x-coordinate of top-left corner of clip area
                 */
                x: number;

                /**
                 * y-coordinate of top-left corner of clip area
                 */
                y: number;

                /**
                 * width of clipping area
                 */
                width: number;

                /**
                 * height of clipping area
                 */
                height: number;
            };

            /**
             * When true, takes a screenshot of the full scrollable page, instead of
             * the currently visible viewport. Defaults to `false`.
             */
            fullPage?: boolean;
        } & ScreenshotOptions,
    ): ArrayBuffer;

    /**
     * **NOTE** Use locator-based locator.selectOption(values[, options]) instead.
     *
     * This select one or more options which match the values from a <select>
     * element.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param values Options to select. If the select has multiple attribute, all
     * matching options are selected, otherwise only the first option matching
     * one of the passed options is selected. Object can be made up of keys with
     * value, label or index.
     * @param options
     */
    selectOption(
        selector: string,
        values: string | ElementHandle | SelectOptionsObject | string[] | ElementHandle[] | SelectOptionsObject[],
        options?: {
            /**
             * Setting this to `true` will bypass the actionability checks (visible,
             * stable, enabled). Defaults to `false`.
             */
            force?: boolean;

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): string[];

    /**
     * Set the supplied html string to the current page.
     *
     * @param html HTML markup to assign to the page.
     * @param options
     */
    setContent(
        html: string,
        options?: {
            /**
             * Maximum operation time in milliseconds. Defaults to `30` seconds. The
             * default value can be changed via the
             * browserContext.setDefaultNavigationTimeout(timeout),
             * browserContext.setDefaultTimeout(timeout),
             * page.setDefaultNavigationTimeout(timeout) or
             * page.setDefaultTimeout(timeout) methods.
             *
             * Setting the value to `0` will disable the timeout.
             *
             */
            timeout?: number;

            /**
             * When to consider operation succeeded, defaults to `load`. Events can be
             * either:
             * - `'domcontentloaded'` - consider operation to be finished when the
             * `DOMContentLoaded` event is fired.
             * - `'load'` - consider operation to be finished when the `load` event is
             * fired.
             * - `'networkidle'` - **DISCOURAGED** consider operation to be finished
             * when there are no network connections for at least `500` ms. Don't use
             * this method for testing especially with chatty websites where the event
             * may never fire, rely on web assertions to assess readiness instead.
             */
            waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
        },
    ): void;

    /**
     * This setting will change the navigation timeout for the following methods:
     * - page.goto(url[, options])
     * - page.reload([options])
     * - page.setContent(html[, options])
     * - page.waitForNavigation([options])
     *
     * @param timeout in milliseconds
     */
    setDefaultNavigationTimeout(timeout: number): void;

    /**
     * This setting will change the timeout for all the methods accepting a
     * `timeout` option.
     *
     * @param timeout in milliseconds
     */
    setDefaultTimeout(timeout: number): void;

    /**
     * This sets extra HTTP headers which will be sent with subsequent
     * HTTP requests.
     *
     * @param headers An object containing the additional HTTP headers.
     * All header values must be strings.
     */
    setExtraHTTPHeaders(headers: { [key: string]: string }): void;

    /**
     * This will update the page's width and height.
     *
     * @param viewportSize
     */
    setViewportSize(viewportSize: {
        /**
         * page width in pixels.
         */
        width: number;

        /**
         * page height in pixels.
         */
        height: number;
    }): void;

    /**
     * **NOTE** Use locator-based locator.tap([options]) instead.
     *
     * Tap the first element that matches the selector.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    tap(
        selector: string,
        options?: {
            /**
             * Setting this to `true` will bypass the actionability checks (visible,
             * stable, enabled). Defaults to `false`.
             */
            force?: boolean;

            /**
             * `Alt`, `Control`, `Meta` or `Shift` modifiers keys pressed during the
             * action. If not specified, currently pressed modifiers are used,
             * otherwise defaults to `null`.
             */
            modifiers?: KeyboardModifier[];

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * A point to use relative to the top left corner of the element. If not
             * supplied, a visible point of the element is used.
             */
            position?: {
                x: number;

                y: number;
            };

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;

            /**
             * Setting this to `true` will perform the actionability checks without
             * performing the action. Useful to wait until the element is ready for the
             * action without performing it. Defaults to `false`.
             */
            trial?: boolean;
        },
    ): void;

    /**
     * **NOTE** Use locator-based locator.textContent([options]) instead.
     *
     * Returns `element.textContent`.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    textContent(
        selector: string,
        options?: {
            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): string;

    /**
     * Returns the page's title.
     */
    title(): string;

    /**
     * Returns the touchscreen instance to interact with a virtual touchscreen on
     * the page.
     */
    touchscreen: Touchscreen;

    /**
     * **NOTE** Use locator-based locator.type(text[, options]) instead.
     *
     * Type the `text` in the first element found that matches the selector.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param text The text to type into the element.
     * @param options
     */
    type(
        selector: string,
        text: string,
        options?: {
            /**
             * Milliseconds to wait between `mousedown` and `mouseup`. Defaults to `0`.
             */
            delay?: number;

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): void;

    /**
     * **NOTE** Use locator-based `locator.uncheck([options])` instead.
     *
     * This method is used to unselect an input checkbox.
     *
     * @param selector A selector to search for an element. If there are multiple
     * elements satisfying the selector, the first will be used.
     * @param options
     */
    uncheck(
        selector: string,
        options?: {
            /**
             * Setting this to `true` will bypass the actionability checks (visible,
             * stable, enabled). Defaults to `false`.
             */
            force?: boolean;

            /**
             * If set to `true` and a navigation occurs from performing this action, it
             * will not wait for it to complete. Defaults to `false`.
             */
            noWaitAfter?: boolean;

            /**
             * A point to use relative to the top left corner of the element. If not
             * supplied, a visible point of the element is used.
             */
            position?: {
                x: number;

                y: number;
            };

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;

            /**
             * Setting this to `true` will perform the actionability checks without
             * performing the action. Useful to wait until the element is ready for the
             * action without performing it. Defaults to `false`.
             */
            trial?: boolean;
        },
    ): void;

    /**
     * Returns the page's URL.
     */
    url(): string;

    /**
     * Returns the page's size (width and height).
     */
    viewportSize(): {
        /**
         * page width in pixels.
         */
        width: number;

        /**
         * page height in pixels.
         */
        height: number;
    };

    /**
     * Returns when the `pageFunction` returns a truthy value.
     *
     * @param pageFunction Function to be evaluated in the page context.
     * @param arg Optional argument to pass to `pageFunction`.
     * @param options
     */
    waitForFunction<R, Arg>(
        pageFunction: PageFunction<Arg, R>,
        options?: {
            /**
             * If `polling` is `'raf'`, then `pageFunction` is constantly executed in
             * `requestAnimationFrame` callback. If `polling` is a number, then it is
             * treated as an interval in milliseconds at which the function would be
             * executed. Defaults to `raf`.
             */
            polling?: number | 'raf';

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
        arg?: Arg,
    ): Promise<JSHandle<R>>;

    /**
     * This waits for the given load state to be reached. It will immediately
     * unblock if that lifecycle event has already been received.
     *
     * @param state Optional load state to wait for, defaults to `load`:
     * - `'domcontentloaded'` - consider operation to be finished when the
     * `DOMContentLoaded` event is fired.
     * - `'load'` - consider operation to be finished when the `load` event is
     * fired.
     * - `'networkidle'` - **DISCOURAGED** consider operation to be finished
     * when there are no network connections for at least `500` ms. Don't use
     * this method for testing especially with chatty websites where the event
     * may never fire, rely on web assertions to assess readiness instead.
     * @param options
     */
    waitForLoadState(
        state?: 'load' | 'domcontentloaded' | 'networkidle',
        options?: {
            /**
             * Maximum operation time in milliseconds. Defaults to `30` seconds. The
             * default value can be changed via the
             * browserContext.setDefaultNavigationTimeout(timeout),
             * browserContext.setDefaultTimeout(timeout),
             * page.setDefaultNavigationTimeout(timeout) or
             * page.setDefaultTimeout(timeout) methods.
             *
             * Setting the value to `0` will disable the timeout.
             *
             */
            timeout?: number;
        },
    ): void;

    /**
     * Waits for the given navigation lifecycle event to occur and returns the main
     * resource response.
     *
     * @param options
     */
    waitForNavigation(options?: {
        /**
         * Maximum operation time in milliseconds. Defaults to `30` seconds. The
         * default value can be changed via the
         * browserContext.setDefaultNavigationTimeout(timeout),
         * browserContext.setDefaultTimeout(timeout),
         * page.setDefaultNavigationTimeout(timeout) or
         * page.setDefaultTimeout(timeout) methods.
         *
         * Setting the value to `0` will disable the timeout.
         *
         */
        timeout?: number;

        /**
         * When to consider operation succeeded, defaults to `load`. Events can be
         * either:
         * - `'domcontentloaded'` - consider operation to be finished when the
         * `DOMContentLoaded` event is fired.
         * - `'load'` - consider operation to be finished when the `load` event is
         * fired.
         * - `'networkidle'` - **DISCOURAGED** consider operation to be finished
         * when there are no network connections for at least `500` ms. Don't use
         * this method for testing especially with chatty websites where the event
         * may never fire, rely on web assertions to assess readiness instead.
         */
        waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
    }): Promise<null | Response>;

    /**
     * **NOTE** Use web assertions that assert visibility or a locator-based
     * locator.waitFor([options]) instead.
     *
     * Returns when element specified by selector satisfies `state` option.
     *
     * @param selector A selector to query for.
     * @param options
     */
    waitForSelector(
        selector: string,
        options?: {
            /**
             * Defaults to `'visible'`. Can be either:
             * - `'attached'` - wait for element to be present in DOM.
             * - `'detached'` - wait for element to not be present in DOM.
             * - `'visible'` - wait for element to have non-empty bounding box and no
             * `visibility:hidden`.
             * - `'hidden'` - wait for element to be either detached from DOM, or have
             * an empty bounding box or `visibility:hidden`.
             */
            state?: 'attached' | 'detached' | 'visible' | 'hidden';

            /**
             * When `true`, the call requires selector to resolve to a single element.
             * If given selector resolves to more than one element, the call throws
             * an exception. Defaults to `false`.
             */
            strict?: boolean;

            /**
             * Maximum time in milliseconds. Defaults to `30` seconds. Default is
             * overridden by the `setDefaultTimeout` option on `BrowserContext` or
             * `page` methods.
             *
             * Setting the value to `0` will disable the timeout.
             */
            timeout?: number;
        },
    ): ElementHandle;

    /**
     * **NOTE** Never wait for timeout in production, use this only for debugging.
     * Tests that wait for time are inherently flaky. Use `Locator` actions and
     * web assertions that wait automatically.
     *
     * Waits for the given `timeout` in milliseconds.
     *
     * @param timeout A timeout to wait for
     */
    waitForTimeout(timeout: number): void;

    /**
     * This method returns all of the dedicated WebWorkers associated with the page.
     */
    workers(): Worker[];

    /**
     * **NOTE** Use locator-based page.locator(selector[, options]) instead.
     *
     * The method finds an element matching the specified selector within the page.
     * If no elements match the selector, the return value resolves to `null`.
     * To wait for an element on the page, use locator.waitFor([options]).
     * @param selector A selector to query for.
     */
    $(selector: string): ElementHandle;

    /**
     * **NOTE** Use locator-based page.locator(selector[, options]) instead.
     *
     * The method finds all elements matching the specified selector within the
     * page. If no elements match the selector, the return value resolves to `[]`.
     * @param selector A selector to query for.
     */
    $$(selector: string): ElementHandle[];
}

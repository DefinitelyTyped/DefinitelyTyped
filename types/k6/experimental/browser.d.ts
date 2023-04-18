/**
 * This module provides an experimental implementation that brings browser
 * test automation to the k6 testing platform.
 */

/**
 * Page provides methods to interact with a single tab in a browser in Chromium.
 * One instance of the browser can have many page instances.
 */
export class Page {
  /**
   * Activates the browser tab so that it comes into focus and actions can be
   * performed against it.
   */
  bringToFront(): void;

  /**
   * **NOTE** Use locator-based [locator.check([options])](https://k6.io/docs/javascript-api/k6-browser/api/locator/check/) instead.
   *
   * This method is used to select an input checkbox.
   * @param selector A selector to search for an element. If there are multiple
   * elements satisfying the selector, the first will be used.
   * @param options
   */
  check(selector: string, options?: {
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
     * Maximum time in milliseconds. Pass `0` to disable the timeout. Default
     * is overridden by the `setDefaultTimeout` option on [browserContext](https://k6.io/docs/javascript-api/k6-browser/api/browsercontext/)
     * or [page](https://k6.io/docs/javascript-api/k6-browser/api/page/) methods. Defaults to `30000`.
     */
    timeout?: number;

    /**
     * Setting this to `true` will perform the actionability checks without
     * performing the action. Useful to wait until the element is ready for the
     * action without performing it. Defaults to `false`.
     */
    trial?: boolean;
  }): void;

  /**
   * **NOTE** Use locator-based [locator.click([options])](https://k6.io/docs/javascript-api/k6-browser/api/locator/click/) instead.
   *
   * This method clicks an element matching `selector`.
   * @param selector A selector to search for an element. If there are multiple
   * elements satisfying the selector, the first will be used.
   * @param options
   */
  click(selector: string, options?: {
    /**
     * The mouse button (`left`, `middle` or `right`) to use during the action.
     * Defaults to `left`.
     */
    button?: "left"|"right"|"middle";

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
    modifiers?: Array<"Alt"|"Control"|"Meta"|"Shift">;

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
     * Maximum time in milliseconds. Pass `0` to disable the timeout. Default
     * is overridden by the `setDefaultTimeout` option on [browserContext](https://k6.io/docs/javascript-api/k6-browser/api/browsercontext/)
     * or [page](https://k6.io/docs/javascript-api/k6-browser/api/page/) methods. Defaults to `30000`.
     */
    timeout?: number;

    /**
     * Setting this to `true` will perform the actionability checks without
     * performing the action. Useful to wait until the element is ready for the
     * action without performing it. Defaults to `false`.
     */
    trial?: boolean;
  }): Promise<void>;

  /**
   * This will close the tab that this page is associated with.
   */
  close(): void;

  /**
   * Gets the HTML contents of the page.
   */
  content(): string;
}

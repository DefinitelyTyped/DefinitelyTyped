// Type definitions for jquery-pjax
// Project: https://github.com/defunkt/jquery-pjax
// Definitions by: Junle Li <https://github.com/lijunle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/**
 * Interface for pjax:popstate event.
 */
interface PjaxPopStateEventObject extends JQuery.Event {
    /**
     * Navigation direction. Could be "back" or "forward".
     */
    direction: string
}

interface PjaxSettings extends JQuery.AjaxSettings {
    /**
     * A jQuery selector indicates where to stick the response body. E.g., $(container).html(xhr.responseBody).
     * If it is not defined, the `data-pjax` attribute of the link will be treated as container.
     * If such an attribute is not defined too, the context will be treated as container.
     */
    container?: string;

    /**
     * Whether to pushState the URL. Defaults to true.
     */
    push?: boolean;

    /**
     * Whether to replaceState the URL. Defaults to false.
     */
    replace?: boolean;

    /**
     * How many requests to cache. Defaults to 20.
     */
    maxCacheLength?: number;

    /**
     * A string or function returning the current pjax version
     */
    version?: string | (() => string);

    /**
     * Vertical position to scroll to after navigation.
     * To avoid changing scroll position, pass false.
     */
    scrollTo?: number | boolean;

    /**
     * Eventually the relatedTarget value for pjax events.
     */
    target?: EventTarget;

    /**
     * CSS selector for the fragment to extract from ajax response.
     */
    fragment?: string;
}

interface JQuery {
    /**
     * Tell PJAX to listen links with delegation selector that, when click on them, fetches the href with ajax into the container.
     * Tries to make sure the back button and ctrl+click work the way you'd expect.
     * If `options.container` is not defined, the `data-pjax` attribute of the link will be treated as container.
     * If such an attribute is not defined too, the context runs with this statement will be treated as container.
     * @param delegationSelector The selector to limit which links PJAX should listen on.
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. E.g., $(container).html(xhr.responseBody).
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     * @return Returns the jQuery object
     */
    pjax(delegationSelector: string, options?: PjaxSettings): JQuery;

    /**
     * Tell PJAX to listen links with delegation selector that, when click on them, fetches the href with ajax into the container.
     * Tries to make sure the back button and ctrl+click work the way you'd expect.
     * If `options.container` is not defined, the `data-pjax` attribute of the link will be treated as container.
     * If such an attribute is not defined too, the context runs with this statement will be treated as container.
     * @param delegationSelector The selector to limit which links PJAX should listen on.
     * @param containerSelector A jQuery selector indicates where to stick the response body. E.g., $(containerSelector).html(xhr.responseBody).
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. The `containerSelector` parameter has priority.
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     * @return Returns the jQuery object
     */
    pjax(delegationSelector: string, containerSelector?: string, options?: PjaxSettings): JQuery;

    on(event: 'pjax:popstate', handler: (e: PjaxPopStateEventObject) => void): this;
}

interface JQueryStatic {
    pjax: PjaxStatic;
}

interface PjaxStatic {
    /**
     * PJAX default settings.
     */
    defaults: PjaxSettings;

    /**
     * Loads a URL with ajax, puts the response body inside a container, then pushState()'s the loaded URL.
     * Works just like $.ajax in that it accepts a jQuery ajax settings object (with keys like url, type, data, etc).
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. E.g., $(container).html(xhr.responseBody).
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     */
    (options?: PjaxSettings): JQueryXHR;

    /**
     * PJAX on click handler.
     * @param event A jQuery click event.
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. E.g., $(container).html(xhr.responseBody).
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     */
    click(event: JQuery.Event, options?: PjaxSettings): void;

    /**
     * PJAX on click handler.
     * @param event A jQuery click event.
     * @param containerSelector A jQuery selector indicates where to stick the response body. E.g., $(containerSelector).html(xhr.responseBody).
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. The `containerSelector` parameter has priority.
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     */
    click(event: JQuery.Event, containerSelector?: string, options?: PjaxSettings): void;

    /**
     * PJAX on form submit handler
     * @param event A jQuery click event.
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. E.g., $(container).html(xhr.responseBody).
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     */
    submit(event: JQuery.Event, options?: PjaxSettings): void;

    /**
     * PJAX on form submit handler
     * @param event A jQuery click event.
     * @param containerSelector A jQuery selector indicates where to stick the response body. E.g., $(containerSelector).html(xhr.responseBody).
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. The `containerSelector` parameter has priority.
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     */
    submit(event: JQuery.Event, containerSelector?: string, options?: PjaxSettings): void;

    /**
     * Install pjax functions on $.pjax to enable pushState behavior. Does nothing if already enabled.
     */
    enable(): void;

    /**
     * Disable pushState behavior.
     * This is the case when a browser doesn't support pushState. It is sometimes useful to disable pushState for debugging on a modern browser.
     */
    disable(): void;

    /**
     * Reload current page with pjax.
     */
    reload(container: string, options?: PjaxSettings): JQueryXHR;
}

interface JQuerySupport {
    /**
     * A boolean value indicates if pjax is supported by the browser.
     */
    pjax: boolean;
}

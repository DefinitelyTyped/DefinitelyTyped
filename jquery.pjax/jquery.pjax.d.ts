// Type definitions for jquery-pjax
// Project: https://github.com/defunkt/jquery-pjax

/// <reference path="../jquery/jquery.d.ts" />

interface PjaxSettings extends JQueryAjaxSettings {
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
}

interface JQueryStatic {
    pjax: PjaxStatic;
}

interface PjaxStatic {
    /**
     * PJAX on click handler.
     * @param event A jQuery click event.
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. E.g., $(container).html(xhr.responseBody).
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     */
    click(event: JQueryEventObject, options?: PjaxSettings): void;

    /**
     * PJAX on click handler.
     * @param event A jQuery click event.
     * @param containerSelector A jQuery selector indicates where to stick the response body. E.g., $(containerSelector).html(xhr.responseBody).
     * @param options PJAX settings, which is a superset of jQuery AJAX settings. It includes the following specific options:
     * - container: a jQuery selector indicates where to stick the response body. The `containerSelector` parameter has priority.
     * - push: a boolean indicates whether to pushState the URL. Default is true.
     * - replace: a boolean indicates whether to use replaceState instead of pushState. Default is false.
     */
    click(event: JQueryEventObject, containerSelector?: string, options?: PjaxSettings): void;
}

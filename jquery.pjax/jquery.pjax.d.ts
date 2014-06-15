// Type definitions for jquery-pjax
// Project: https://github.com/defunkt/jquery-pjax

/// <reference path="../jquery/jquery.d.ts" />

interface JQuery {
    /*
     * Tell PJAX to listen links with delegation selector that, when click on them, fetches the href with ajax into the container.
     * Tries to make sure the back button and ctrl+click work the way you'd expect.
     * If `options.container` is not defined, the `data-pjax` attribute of the link will be treated as container,
     * If such an attribute is not defined too, the context runs with this statement will be treated as container.
     * @param delegationSelector The selector to limit which links PJAX should listen on.
     * @param options A valid jQuery ajax options object that may include these pjax specific options:
     * - container: A jQuery selector indicates where to stick the response body. E.g., $(container).html(xhr.responseBody).
     * - push: Whether to pushState the URL. Defaults to true (of course).
     * - replace: Want to use replaceState instead? That's cool.
     * @return Returns the jQuery object
     */
    pjax(delegationSelector: string, options?: JQueryAjaxSettings): JQuery;

    /*
     * Tell PJAX to listen links with delegation selector that, when click on them, fetches the href with ajax into the container.
     * Tries to make sure the back button and ctrl+click work the way you'd expect.
     * If `options.container` is not defined, the `data-pjax` attribute of the link will be treated as container,
     * If such an attribute is not defined too, the context runs with this statement will be treated as container.
     * @param delegationSelector The selector to limit which links PJAX should listen on.
     * @param containerSelector A jQuery selector indicates where to stick the response body. E.g., $(container).html(xhr.responseBody).
     * @param options A valid jQuery ajax options object that may include these pjax specific options:
     * - container: A jQuery selector indicates where to stick the response body. The containerSelector has priority.
     * - push: Whether to pushState the URL. Defaults to true (of course).
     * - replace: Want to use replaceState instead? That's cool.
     * @return Returns the jQuery object
     */
    pjax(delegationSelector: string, containerSelector?: string, options?: JQueryAjaxSettings): JQuery;
}

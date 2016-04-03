declare module goog.ui {

    /**
     * Decorates the element with a suitable {@link goog.ui.Component} instance, if
     * a matching decorator is found.
     * @param {Element} element Element to decorate.
     * @return {goog.ui.Component?} New component instance, decorating the element.
     */
    function decorate(element: Element): goog.ui.Component;
}

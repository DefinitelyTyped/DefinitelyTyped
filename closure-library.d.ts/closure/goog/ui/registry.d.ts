declare module goog {
    function require(name: 'goog.ui.registry'): typeof goog.ui.registry;
}

declare module goog.ui.registry {

    /**
     * Given a {@link goog.ui.Component} constructor, returns an instance of its
     * default renderer.  If the default renderer is a singleton, returns the
     * singleton instance; otherwise returns a new instance of the renderer class.
     * @param {Function} componentCtor Component constructor function (for example
     *     {@code goog.ui.Button}).
     * @return {goog.ui.ControlRenderer?} Renderer instance (for example the
     *     singleton instance of {@code goog.ui.ButtonRenderer}), or null if
     *     no default renderer was found.
     */
    function getDefaultRenderer(componentCtor: Function): goog.ui.ControlRenderer;

    /**
     * Sets the default renderer for the given {@link goog.ui.Component}
     * constructor.
     * @param {Function} componentCtor Component constructor function (for example
     *     {@code goog.ui.Button}).
     * @param {Function} rendererCtor Renderer constructor function (for example
     *     {@code goog.ui.ButtonRenderer}).
     * @throws {Error} If the arguments aren't functions.
     */
    function setDefaultRenderer(componentCtor: Function, rendererCtor: Function): void;

    /**
     * Returns the {@link goog.ui.Component} instance created by the decorator
     * factory function registered for the given CSS class name, or null if no
     * decorator factory function was found.
     * @param {string} className CSS class name.
     * @return {goog.ui.Component?} Component instance.
     */
    function getDecoratorByClassName(className: string): goog.ui.Component;

    /**
     * Maps a CSS class name to a function that returns a new instance of
     * {@link goog.ui.Component} or a subclass, suitable to decorate an element
     * that has the specified CSS class.
     * @param {string} className CSS class name.
     * @param {Function} decoratorFn No-argument function that returns a new
     *     instance of a {@link goog.ui.Component} to decorate an element.
     * @throws {Error} If the class name or the decorator function is invalid.
     */
    function setDecoratorByClassName(className: string, decoratorFn: Function): void;

    /**
     * Returns an instance of {@link goog.ui.Component} or a subclass suitable to
     * decorate the given element, based on its CSS class.
     *
     * TODO(nnaze): Type of element should be {!Element}.
     *
     * @param {Element} element Element to decorate.
     * @return {goog.ui.Component?} Component to decorate the element (null if
     *     none).
     */
    function getDecorator(element: Element): goog.ui.Component;

    /**
     * Resets the global renderer and decorator registry.
     */
    function reset(): void;
}

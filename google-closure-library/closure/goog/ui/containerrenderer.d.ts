declare module goog {
    function require(name: 'goog.ui.ContainerRenderer'): typeof goog.ui.ContainerRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Container}.  Can be used as-is, but
     * subclasses of Container will probably want to use renderers specifically
     * tailored for them by extending this class.
     * @param {string=} opt_ariaRole Optional ARIA role used for the element.
     * @constructor
     */
    class ContainerRenderer {
        constructor(opt_ariaRole?: string);
        
        /**
         * Default CSS class to be applied to the root element of containers rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Constructs a new renderer and sets the CSS class that the renderer will use
         * as the base CSS class to apply to all elements rendered by that renderer.
         * An example to use this function using a menu is:
         *
         * <pre>
         * var myCustomRenderer = goog.ui.ContainerRenderer.getCustomRenderer(
         *     goog.ui.MenuRenderer, 'my-special-menu');
         * var newMenu = new goog.ui.Menu(opt_domHelper, myCustomRenderer);
         * </pre>
         *
         * Your styles for the menu can now be:
         * <pre>
         * .my-special-menu { }
         * </pre>
         *
         * <em>instead</em> of
         * <pre>
         * .CSS_MY_SPECIAL_MENU .goog-menu { }
         * </pre>
         *
         * You would want to use this functionality when you want an instance of a
         * component to have specific styles different than the other components of the
         * same type in your application.  This avoids using descendant selectors to
         * apply the specific styles to this component.
         *
         * @param {Function} ctor The constructor of the renderer you want to create.
         * @param {string} cssClassName The name of the CSS class for this renderer.
         * @return {goog.ui.ContainerRenderer} An instance of the desired renderer with
         *     its getCssClass() method overridden to return the supplied custom CSS
         *     class name.
         */
        static getCustomRenderer(ctor: Function, cssClassName: string): goog.ui.ContainerRenderer;
        
        /**
         * Returns the ARIA role to be applied to the container.
         * See http://wiki/Main/ARIA for more info.
         * @return {undefined|string} ARIA role.
         */
        getAriaRole(): void|string;
        
        /**
         * Enables or disables the tab index of the element.  Only elements with a
         * valid tab index can receive focus.
         * @param {Element} element Element whose tab index is to be changed.
         * @param {boolean} enable Whether to add or remove the element's tab index.
         */
        enableTabIndex(element: Element, enable: boolean): void;
        
        /**
         * Creates and returns the container's root element.  The default
         * simply creates a DIV and applies the renderer's own CSS class name to it.
         * To be overridden in subclasses.
         * @param {goog.ui.Container} container Container to render.
         * @return {Element} Root element for the container.
         */
        createDom(container: goog.ui.Container): Element;
        
        /**
         * Returns the DOM element into which child components are to be rendered,
         * or null if the container hasn't been rendered yet.
         * @param {Element} element Root element of the container whose content element
         *     is to be returned.
         * @return {Element} Element to contain child elements (null if none).
         */
        getContentElement(element: Element): Element;
        
        /**
         * Default implementation of {@code canDecorate}; returns true if the element
         * is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Default implementation of {@code decorate} for {@link goog.ui.Container}s.
         * Decorates the element with the container, and attempts to decorate its child
         * elements.  Returns the decorated element.
         * @param {goog.ui.Container} container Container to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {!Element} Decorated element.
         */
        decorate(container: goog.ui.Container, element: Element): Element;
        
        /**
         * Sets the container's state based on the given CSS class name, encountered
         * during decoration.  CSS class names that don't represent container states
         * are ignored.  Considered protected; subclasses should override this method
         * to support more states and CSS class names.
         * @param {goog.ui.Container} container Container to update.
         * @param {string} className CSS class name.
         * @param {string} baseClass Base class name used as the root of state-specific
         *     class names (typically the renderer's own class name).
         * @protected
         */
        setStateFromClassName(container: goog.ui.Container, className: string, baseClass: string): void;
        
        /**
         * Takes a container and an element that may contain child elements, decorates
         * the child elements, and adds the corresponding components to the container
         * as child components.  Any non-element child nodes (e.g. empty text nodes
         * introduced by line breaks in the HTML source) are removed from the element.
         * @param {goog.ui.Container} container Container whose children are to be
         *     discovered.
         * @param {Element} element Element whose children are to be decorated.
         * @param {Element=} opt_firstChild the first child to be decorated.
         */
        decorateChildren(container: goog.ui.Container, element: Element, opt_firstChild?: Element): void;
        
        /**
         * Inspects the element, and creates an instance of {@link goog.ui.Control} or
         * an appropriate subclass best suited to decorate it.  Returns the control (or
         * null if no suitable class was found).  This default implementation uses the
         * element's CSS class to find the appropriate control class to instantiate.
         * May be overridden in subclasses.
         * @param {Element} element Element to decorate.
         * @return {goog.ui.Control?} A new control suitable to decorate the element
         *     (null if none).
         */
        getDecoratorForChild(element: Element): goog.ui.Control;
        
        /**
         * Initializes the container's DOM when the container enters the document.
         * Called from {@link goog.ui.Container#enterDocument}.
         * @param {goog.ui.Container} container Container whose DOM is to be initialized
         *     as it enters the document.
         */
        initializeDom(container: goog.ui.Container): void;
        
        /**
         * Returns the element within the container's DOM that should receive keyboard
         * focus (null if none).  The default implementation returns the container's
         * root element.
         * @param {goog.ui.Container} container Container whose key event target is
         *     to be returned.
         * @return {Element} Key event target (null if none).
         */
        getKeyEventTarget(container: goog.ui.Container): Element;
        
        /**
         * Returns the CSS class to be applied to the root element of containers
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         */
        getCssClass(): string;
        
        /**
         * Returns all CSS class names applicable to the given container, based on its
         * state.  The array of class names returned includes the renderer's own CSS
         * class, followed by a CSS class indicating the container's orientation,
         * followed by any state-specific CSS classes.
         * @param {goog.ui.Container} container Container whose CSS classes are to be
         *     returned.
         * @return {!Array<string>} Array of CSS class names applicable to the
         *     container.
         */
        getClassNames(container: goog.ui.Container): Array<string>;
        
        /**
         * Returns the default orientation of containers rendered or decorated by this
         * renderer.  The base class implementation returns {@code VERTICAL}.
         * @return {goog.ui.Container.Orientation} Default orientation for containers
         *     created or decorated by this renderer.
         */
        getDefaultOrientation(): goog.ui.Container.Orientation;
    }
}

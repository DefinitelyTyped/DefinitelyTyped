declare module goog {
    function require(name: 'goog.ui.ScrollFloater'): typeof goog.ui.ScrollFloater;
    function require(name: 'goog.ui.ScrollFloater.EventType'): typeof goog.ui.ScrollFloater.EventType;
}

declare module goog.ui {

    /**
     * Creates a ScrollFloater; see file overview for details.
     *
     * @param {Element=} opt_parentElement Where to attach the element when it's
     *     floating.  Default is the document body.  If the floating element
     *     contains form inputs, it will be necessary to attach it to the
     *     corresponding form element, or to an element in the DOM subtree under
     *     the form element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class ScrollFloater extends goog.ui.Component {
        constructor(opt_parentElement?: Element, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Decorates the floated element with the standard ScrollFloater CSS class.
         * @param {Element} element The element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Forces the component to update the cached element positions and sizes and
         * to re-evaluate whether the the component should be docked, floated or
         * pinned.
         */
        update(): void;
        
        /**
         * Sets whether the element should be floated if it scrolls out of view.
         * @param {boolean} enable Whether floating is enabled for this element.
         */
        setScrollingEnabled(enable: boolean): void;
        
        /**
         * @return {boolean} Whether the component is enabled for scroll-floating.
         */
        isScrollingEnabled(): boolean;
        
        /**
         * @return {boolean} Whether the component is currently scroll-floating.
         */
        isFloating(): boolean;
        
        /**
         * @return {boolean} Whether the component is currently pinned to the bottom
         *     of the container.
         */
        isPinned(): boolean;
        
        /**
         * @param {number} offset A vertical offset from the top of the viewport, from
         *    which to start floating the element. Default is 0. This is useful in cases
         *    when there are 'position:fixed' elements covering up part of the viewport.
         */
        setViewportTopOffset(offset: number): void;
        
        /**
         * @param {Element} container An element used to define the boundaries within
         *     which the floater can be positioned. If not specified, scrolling the page
         *     down far enough may result in the floated element extending past the
         *     containing element as it is being scrolled out of the viewport. In some
         *     cases, such as a list with a sticky header, this may be undesirable. If
         *     the container element is specified and the floated element extends past
         *     the bottom of the container, the element will be pinned to the bottom of
         *     the container.
         */
        setContainerElement(container: Element): void;
    }
}

declare module goog.ui.ScrollFloater {

    /**
     * Events dispatched by this component.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // FLOAT: EventType;
        // DOCK: EventType;
        // PIN: EventType;
    };

    /**
     * The element can float at different positions on the page.
     * @enum {number}
     * @private
     */
    type FloatMode_ = number;
    var FloatMode_: {
        TOP: FloatMode_;
        BOTTOM: FloatMode_;
    };
}

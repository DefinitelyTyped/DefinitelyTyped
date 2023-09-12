declare namespace OO.ui {
    /**
     * Each Element represents a rendering in the DOM—a button or an icon, for example, or anything
     * that is visible to a user. Unlike {@link OO.ui.Widget widgets}, plain elements usually do not
     * have events connected to them and can't be interacted with.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Element
     */
    interface Element extends Element.Props, Element.Prototype {}

    namespace Element {
        type ScrollDirection = "x" | "y";

        interface Dimension {
            border: Rectangle;
            scroll: Coordinate;
            scrollbar: {
                right: number;
                bottom: number;
            };
            rect: Rectangle;
        }

        /**
         * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Element-static-method-scrollIntoView
         */
        interface ScrollIntoViewConfig {
            /** Animate to the new scroll offset. */
            animate?: boolean;
            /** jQuery animation duration value */
            duration?: JQuery.Duration;
            /** Scroll in only one direction, e.g. 'x' or 'y', omit to scroll in both directions */
            direction?: ScrollDirection;
            /** Aligns the top of the element to the top of the visible area of the scrollable ancestor. */
            alignToTop?: boolean;
            /**
             * Additional padding on the container to scroll past. Object containing any of 'top',
             * 'bottom', 'left', or 'right' as numbers.
             */
            padding?: Rectangle;
            /**
             * Scroll container. Defaults to {@link Static.getClosestScrollableContainer getClosestScrollableContainer}
             * of the element.
             */
            scrollContainer?: HTMLElement;
        }

        interface ConfigOptions {
            /**
             * The names of the CSS classes to apply to the element. CSS styles are
             * added to the top level (e.g., the outermost div) of the element. See the
             * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Buttons_and_Switches#cssExample)
             * for an example.
             */
            classes?: string[];

            /** The HTML id attribute used in the rendered tag. */
            id?: string;

            /** Text to insert */
            text?: string;

            /**
             * An array of content elements to append (after {@link text}).
             * Strings will be html-escaped; use an {@link OO.ui.HtmlSnippet} to append raw HTML.
             * Instances of OO.ui.Element will have their {@link Props.$element $element}
             * appended.
             */
            content?: Array<string | HtmlSnippet | Element>;

            /** Content elements to append (after {@link text}). */
            $content?: JQuery;

            /** Wrapper element. Defaults to a new element with {@link Prototype.getTagName getTagName}. */
            $element?: JQuery;

            /**
             * Custom data of any type or combination of types (e.g., string, number, array, object).
             * Data can also be specified with the {@link Prototype.setData setData} method.
             */
            data?: any;
        }

        interface Static {
            /**
             * The name of the HTML tag used by the element.
             *
             * The static value may be ignored if the {@link Prototype.getTagName getTagName} method
             * is overridden.
             */
            tagName: string;

            /* Static Methods */

            /**
             * Reconstitute a JavaScript object corresponding to a widget created
             * by the PHP implementation.
             *
             * @param node A single node for the widget to infuse.
             * @param config Configuration options
             * @return
             *   The `OO.ui.Element` corresponding to this (infusible) document node.
             *   For `Tag` objects emitted on the HTML side (used occasionally for content)
             *   the value returned is a newly-created Element wrapping around the existing
             *   DOM node.
             */
            infuse(node: HTMLElement | JQuery, config?: object): Element;

            /**
             * Get the document of an element.
             *
             * @param obj Object to get the document for
             * @return Document object
             */
            getDocument(obj: JQuery | HTMLElement | Document | globalThis.Window): Document | null;

            /**
             * Get the window of an element or document.
             *
             * @param obj Context to get the window for
             * @return Window object
             */
            getWindow(obj: JQuery | HTMLElement | Document | globalThis.Window): globalThis.Window;

            /**
             * Get the direction of an element or document.
             *
             * @param obj Context to get the direction for
             * @return Text direction, either 'ltr' or 'rtl'
             */
            getDir(obj: JQuery | HTMLElement | Document | globalThis.Window): Direction;

            /**
             * Get the offset between two frames.
             *
             * @param from Window of the child frame
             * @param to Window of the parent frame
             * @param offset Offset to start with, used internally
             * @return Offset object, containing left and top properties
             */
            getFrameOffset(from: globalThis.Window, to?: globalThis.Window, offset?: Coordinate): Coordinate;

            /**
             * Get the offset between two elements.
             *
             * The two elements may be in a different frame, but in that case the frame $element is
             * in must be contained in the frame $anchor is in.
             *
             * @param $element Element whose position to get
             * @param $anchor Element to get $element's position relative to
             * @return Translated position coordinates, containing top and left properties
             */
            getRelativePosition($element: JQuery, $anchor: JQuery): Coordinate;

            /**
             * Get element border sizes.
             *
             * @param el Element to measure
             * @return Dimensions object with `top`, `left`, `bottom` and `right` properties
             */
            getBorders(el: HTMLElement): Rectangle;

            /**
             * Get dimensions of an element or window.
             *
             * @param el Element to measure
             * @return Dimensions object with `borders`, `scroll`, `scrollbar` and `rect` properties
             */
            getDimensions(el: HTMLElement | globalThis.Window): Dimension;

            /**
             * Convert native `scrollLeft` value to a value consistent between browsers.
             * See {@link getScrollLeft}.
             *
             * @param nativeOffset Native `scrollLeft` value
             * @param el Element from which the value was obtained
             * @return
             */
            computeNormalizedScrollLeft(nativeOffset: number, el: HTMLElement | globalThis.Window): number;

            /**
             * Convert our normalized `scrollLeft` value to a value for current browser.
             * See {@link getScrollLeft}.
             *
             * @param normalizedOffset Normalized `scrollLeft` value
             * @param el Element on which the value will be set
             * @return
             */
            computeNativeScrollLeft(normalizedOffset: number, el: HTMLElement | globalThis.Window): number;

            /**
             * Get the number of pixels that an element's content is scrolled to the left.
             *
             * This function smooths out browser inconsistencies (nicely described in the README at
             * <https://github.com/othree/jquery.rtl-scroll-type>) and produces a result consistent
             * with Firefox's 'scrollLeft', which seems the most sensible.
             *
             * (Firefox's scrollLeft handling is nice because it increases from left to right,
             * consistently with `getBoundingClientRect().left` and related APIs; because initial
             * value is zero, so resetting it is easy; because adapting a hardcoded scroll position
             * to a symmetrical RTL interface requires just negating it, rather than involving
             * `clientWidth` and `scrollWidth`; and because if you mess up and don't adapt your code
             * to RTL, it will scroll to the beginning rather than somewhere randomly in the middle
             * but not where you wanted.)
             *
             * @param el Element to measure
             * @return Scroll position from the left.
             *  If the element's direction is LTR, this is a positive number between `0` (initial
             *  scroll position) and `el.scrollWidth - el.clientWidth` (furthest possible scroll
             *  position).
             *  If the element's direction is RTL, this is a negative number between `0` (initial
             *  scroll position) and `-el.scrollWidth + el.clientWidth` (furthest possible scroll
             *  position).
             */
            getScrollLeft(el: HTMLElement | globalThis.Window): number;

            /**
             * Set the number of pixels that an element's content is scrolled to the left.
             *
             * See {@link getScrollLeft}.
             *
             * @param el Element to scroll (and to use in calculations)
             * @param scrollLeft Scroll position from the left.
             *  If the element's direction is LTR, this must be a positive number between
             *  `0` (initial scroll position) and `el.scrollWidth - el.clientWidth`
             *  (furthest possible scroll position).
             *  If the element's direction is RTL, this must be a negative number between
             *  `0` (initial scroll position) and `-el.scrollWidth + el.clientWidth`
             *  (furthest possible scroll position).
             */
            setScrollLeft(el: HTMLElement | globalThis.Window, scrollLeft: number): void;

            /**
             * Get the root scrollable element of given element's document.
             *
             * Support: Chrome <= 60
             *
             * On older versions of Blink, `document.documentElement` can't be used to get or set
             * the scrollTop property; instead we have to use `document.body`. Changing and testing
             * the value lets us use 'body' or 'documentElement' based on what is working.
             *
             * https://code.google.com/p/chromium/issues/detail?id=303131
             *
             * @param el Element to find root scrollable parent for
             * @return Scrollable parent, `<body>` or `<html>`
             */
            getRootScrollableElement(el: HTMLElement): HTMLBodyElement | HTMLHtmlElement;

            /**
             * Get closest scrollable container.
             *
             * Traverses up until either a scrollable element or the root is reached, in which case
             * the root scrollable element will be returned (see {@link getRootScrollableElement}).
             *
             * @param el Element to find scrollable container for
             * @param dimension Dimension of scrolling to look for; `x`, `y` or omit for either
             * @return Closest scrollable container
             */
            getClosestScrollableContainer(el: HTMLElement, dimension?: ScrollDirection): HTMLElement;

            /**
             * Scroll element into view.
             *
             * @param elOrPosition Element to scroll into view
             * @param config Configuration options
             * @return Promise which resolves when the scroll is complete
             */
            scrollIntoView(elOrPosition: HTMLElement | Rectangle, config?: ScrollIntoViewConfig): JQuery.Promise<void>;

            /**
             * Force the browser to reconsider whether it really needs to render scrollbars inside
             * the element and reserve space for them, because it probably doesn't.
             *
             * Workaround primarily for <https://code.google.com/p/chromium/issues/detail?id=387290>,
             * but also similar bugs in other browsers. "Just" forcing a reflow is not sufficient in
             * all cases, we need to first actually detach (or hide, but detaching is simpler) all
             * children, *then* force a reflow, and then reattach (or show) them back.
             *
             * @param el Element to reconsider the scrollbars on
             */
            reconsiderScrollbars(el: HTMLElement): void;
        }

        interface Props {
            $element: JQuery;
        }

        interface Prototype {
            /**
             * Toggle visibility of an element.
             *
             * @param show Make element visible, omit to toggle visibility
             * @return The element, for chaining
             */
            toggle(show?: boolean): this;

            /**
             * Check if element is visible.
             *
             * @return element is visible
             */
            isVisible(): boolean;

            /**
             * Get element data.
             *
             * @return Element data
             */
            getData(): unknown;

            /**
             * Set element data.
             *
             * @param data Element data
             * @return The element, for chaining
             */
            setData(data: any): this;

            /**
             * Set the element has an 'id' attribute.
             *
             * @param id
             * @return The element, for chaining
             */
            setElementId(id: string): this;

            /**
             * Ensure that the element has an 'id' attribute, setting it to an unique value if it's
             * missing, and return its value.
             *
             * @return
             */
            getElementId(): string;

            /**
             * Check if element supports one or more methods.
             *
             * @param methods Method or list of methods to check
             * @return All methods are supported
             */
            supports(methods: string | string[]): boolean;

            /**
             * Update the theme-provided classes.
             *
             * This is called in element mixins and widget classes any time state changes.
             * Updating is debounced, minimizing overhead of changing multiple attributes and
             * guaranteeing that theme updates do not occur within an element's constructor
             */
            updateThemeClasses(): void;

            /**
             * Get the HTML tag name.
             *
             * Override this method to base the result on instance information.
             *
             * @return HTML tag name
             */
            getTagName(): string;

            /**
             * Check if the element is attached to the DOM
             *
             * @return The element is attached to the DOM
             */
            isElementAttached(): boolean;

            /**
             * Get the DOM document.
             *
             * @return Document object
             */
            getElementDocument(): Document;

            /**
             * Get the DOM window.
             *
             * @return Window object
             */
            getElementWindow(): globalThis.Window;

            /**
             * Get closest scrollable container.
             *
             * @return Closest scrollable container
             */
            getClosestScrollableElementContainer(): HTMLElement;

            /**
             * Get group element is in.
             *
             * @return Group element, null if none
             */
            getElementGroup(): mixin.GroupElement | null;

            /**
             * Set group element is in.
             *
             * @param group Group element, null if none
             * @return The element, for chaining
             */
            setElementGroup(group: mixin.GroupElement | null): this;

            /**
             * Scroll element into view.
             *
             * @param config Configuration options
             * @return Promise which resolves when the scroll is complete
             */
            scrollElementIntoView(config?: ScrollIntoViewConfig): JQuery.Promise<void>;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): Element;
            prototype: Prototype;
            static: Static;
        }
    }

    const Element: Element.Constructor;
}

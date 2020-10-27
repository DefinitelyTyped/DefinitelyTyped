import * as Popper from 'popper.js';

declare class Tooltip {
    constructor(element: Element);

    /**
     * Reveals an element’s tooltip. Returns to the caller before the
     * tooltip has actually been shown (i.e. before the shown.bs.tooltip
     * event occurs). This is considered a “manual” triggering of the
     * tooltip. Tooltips with zero-length titles are never displayed.
     */
    show(): void;

    /**
     * Hides an element’s tooltip. Returns to the caller before the tooltip
     * has actually been hidden (i.e. before the hidden.bs.tooltip event
     * occurs). This is considered a “manual” triggering of the tooltip.
     */
    hide(): void;

    /**
     * Toggles an element’s tooltip. Returns to the caller before the
     * tooltip has actually been shown or hidden (i.e. before the
     * shown.bs.tooltip or hidden.bs.tooltip event occurs). This is
     * considered a “manual” triggering of the tooltip.
     */
    toggle(): void;

    /**
     * Hides and destroys an element’s tooltip. Tooltips that use delegation
     * (which are created using the selector option) cannot be individually
     * destroyed on descendant trigger elements.
     */
    dispose(): void;

    /**
     * Gives an element’s tooltip the ability to be shown. Tooltips are
     * enabled by default.
     */
    enable(): void;

    /**
     * Removes the ability for an element’s tooltip to be shown. The tooltip
     * will only be able to be shown if it is re-enabled.
     */
    disable(): void;

    /**
     * Toggles the ability for an element’s tooltip to be shown or hidden.
     */
    toggleEnabled(): void;

    /**
     * Updates the position of an element’s tooltip.
     */
    update(): void;

    /**
     * Static method which allows you to get the scrollspy instance associated
     * with a DOM element
     */
    static getInstance(element: Element): Tooltip;
}

declare namespace Tooltip {
    enum Events {
        /**
         * This event fires immediately when the show instance method is called.
         */
        show = 'show.bs.tooltip',

        /**
         * This event is fired when the tooltip has been made visible to the
         * user (will wait for CSS transitions to complete).
         */
        shown = 'shown.bs.tooltip',

        /**
         * This event is fired immediately when the hide instance method has
         * been called.
         */
        hide = 'hide.bs.tooltip',

        /**
         * This event is fired when the tooltip has finished being hidden from
         * the user (will wait for CSS transitions to complete).
         */
        hidden = 'hidden.bs.tooltip',

        /**
         * This event is fired after the show.bs.tooltip event when the tooltip
         * template has been added to the DOM.
         */
        inserted = 'inserted.bs.tooltip',
    }

    interface Options {
        /**
         * Apply a CSS fade transition to the tooltip
         *
         * @default true
         */
        animation: boolean;

        /**
         * Appends the tooltip to a specific element. Example: container:
         * 'body'. This option is particularly useful in that it allows you to
         * position the tooltip in the flow of the document near the triggering
         * element - which will prevent the tooltip from floating away from the
         * triggering element during a window resize.
         *
         * @default false
         */
        container: string | Element | false;

        /**
         * Delay showing and hiding the popover (ms) - does not apply to manual
         * trigger type
         *
         * If a number is supplied, delay is applied to both hide/show
         *
         * @default 0
         */
        delay: number | { show: number; hide: number };

        /**
         * Allow HTML in the tooltip.
         *
         * If true, HTML tags in the tooltip's title will be rendered in the
         * tooltip. If false, innerText property will be used to insert content
         * into the DOM.
         *
         * Use text if you're worried about XSS attacks.
         *
         * @default false
         */
        html: boolean;

        /**
         * How to position the popover - auto | top | bottom | left | right.
         * When auto is specified, it will dynamically reorient the popover.
         *
         * When a function is used to determine the placement, it is called with
         * the popover DOM node as its first argument and the triggering element
         * DOM node as its second. The this context is set to the popover
         * instance.
         *
         * @default 'top'
         */
        placement: 'auto' | 'top' | 'bottom' | 'left' | 'right' | (() => void);

        /**
         * If a selector is provided, tooltip objects will be delegated to the
         * specified targets. In practice, this is used to also apply tooltips
         * to dynamically added DOM elements (jQuery.on support).
         *
         * @default false
         */
        selector: string | false;

        /**
         * Base HTML to use when creating the tooltip.
         *
         * The tooltip's title will be injected into the .tooltip-inner.
         *
         * .tooltip-arrow will become the tooltip's arrow.
         *
         * The outermost wrapper element should have the .tooltip class and
         * role="tooltip".
         *
         * @default '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
         */
        template: string;

        /**
         * Default title value if title attribute isn't present.
         *
         * If a function is given, it will be called with its this reference set
         * to the element that the popover is attached to.
         *
         * @default ''
         */
        title: string | Element | (() => void);

        /**
         * How tooltip is triggered - click | hover | focus | manual. You may
         * pass multiple triggers; separate them with a space.
         *
         * 'manual' indicates that the tooltip will be triggered
         * programmatically via the .tooltip('show'), .tooltip('hide') and
         * .tooltip('toggle') methods; this value cannot be combined with any
         * other trigger.
         *
         * 'hover' on its own will result in tooltips that cannot be triggered
         * via the keyboard, and should only be used if alternative methods for
         * conveying the same information for keyboard users is present.
         *
         * @default 'hover focus'
         */
        trigger:
            | 'click'
            | 'hover'
            | 'focus'
            | 'manual'
            | 'click hover'
            | 'click focus'
            | 'hover focus'
            | 'click hover focus';

        /**
         * Offset of the tooltip relative to its target.
         *
         * When a function is used to determine the offset, it is called with an
         * object containing the offset data as its first argument. The function
         * must return an object with the same structure. The triggering element
         * DOM node is passed as the second argument.
         *
         * @see {@link https://popper.js.org/docs/v1/#modifiers..offset.offset}
         * @default 0
         */
        offset: number | string | (() => void);

        /**
         * Allow to specify which position Popper will use on fallback.
         *
         * @see {@link https://popper.js.org/docs/v1/#modifiers..flip.behavior}
         * @default 'flip'
         */
        fallbackPlacement: Popper.Behavior | Popper.Position[];

        /**
         * Overflow constraint boundary of the popover. Accepts the values of
         * 'viewport', 'window', 'scrollParent', or an HTMLElement reference
         * (JavaScript only).
         *
         * @see {@link https://popper.js.org/docs/v1/#modifiers..preventOverflow.boundariesElement}
         * @default 'scrollParent'
         */
        boundary: 'viewport' | 'window' | 'scrollParent' | Element;

        /**
         * Enable or disable the sanitization. If activated 'template' and
         * 'title' options will be sanitized.
         *
         * @default true
         */
        sanitize: boolean;

        /**
         * Object which contains allowed attributes and tags
         *
         * @see {@link https://v5.getbootstrap.com/docs/5.0/getting-started/javascript/#sanitizer}
         */
        whiteList: Record<keyof HTMLElementTagNameMap, string[]>;

        /**
         * Here you can supply your own sanitize function. This can be useful if
         * you prefer to use a dedicated library to perform sanitization.
         *
         * @default null
         */
        sanitizeFn: () => void | null;

        /**
         * To change Bootstrap's default Popper.js config
         *
         * @see {@link https://popper.js.org/docs/v1/#Popper.Defaults}
         * @default null
         */
        popperConfig: Popper.PopperOptions | null;
    }
}

export default Tooltip;

import * as Popper from 'popper.js';

declare class Popover {
    constructor(element: Element, options?: Partial<Popover.Options>);

    /**
     * Reveals an element’s popover. Returns to the caller before the
     * popover has actually been shown (i.e. before the shown.bs.popover
     * event occurs). This is considered a “manual” triggering of the
     * popover. Popovers whose title and content are both zero-length are
     * never displayed.
     */
    show(): void;

    /**
     * Hides an element’s popover. Returns to the caller before the popover
     * has actually been hidden (i.e. before the hidden.bs.popover event
     * occurs). This is considered a “manual” triggering of the popover.
     */
    hide(): void;

    /**
     * Toggles an element’s popover. Returns to the caller before the
     * popover has actually been shown or hidden (i.e. before the
     * shown.bs.popover or hidden.bs.popover event occurs). This is
     * considered a “manual” triggering of the popover.
     */
    toggle(): void;

    /**
     * Gives an element’s popover the ability to be shown. Popovers are
     * enabled by default.
     */
    enable(): void;

    /**
     * Removes the ability for an element’s popover to be shown. The popover
     * will only be able to be shown if it is re-enabled.
     */
    disable(): void;

    /**
     * Toggles the ability for an element’s popover to be shown or hidden.
     */
    toggleEnable(): void;

    /**
     * Updates the position of an element’s popover.
     */
    update(): void;

    /**
     * Hides and destroys an element’s popover. Popovers that use delegation
     * (which are created using the selector option) cannot be individually
     * destroyed on descendant trigger elements.
     */
    dispose(): void;

    /**
     * Static method which allows you to get the popover instance associated
     * with a DOM element
     */
    static getInstance(element: Element, options?: Partial<Popover.Options>): Popover;
}

declare namespace Popover {
    enum Events {
        /**
         * This event fires immediately when the show instance method is called.
         */
        show = 'show.bs.popover',

        /**
         * This event is fired when the popover has been made visible to the
         * user (will wait for CSS transitions to complete).
         */
        shown = 'shown.bs.popover',

        /**
         * This event is fired immediately when the hide instance method has
         * been called.
         */
        hide = 'hide.bs.popover',

        /**
         * This event is fired when the popover has finished being hidden from
         * the user (will wait for CSS transitions to complete).
         */
        hidden = 'hidden.bs.popover',

        /**
         * This event is fired after the show.bs.popover event when the popover
         * template has been added to the DOM.
         */
        inserted = 'inserted.bs.popover',
    }

    interface Options {
        /**
         * Apply a CSS fade transition to the popover
         *
         * @default true
         */
        animation: boolean;

        /**
         * Appends the popover to a specific element. Example: container:
         * 'body'. This option is particularly useful in that it allows you to
         * position the popover in the flow of the document near the triggering
         * element - which will prevent the popover from floating away from the
         * triggering element during a window resize.
         *
         * @default false
         */
        container: string | Element | false;

        /**
         * Default content value if data-content attribute isn't present.
         *
         * If a function is given, it will be called with its this reference set
         * to the element that the popover is attached to.
         *
         * @default ''
         */
        content: string | Element | (() => void);

        /**
         * Delay showing and hiding the popover (ms) - does not apply to manual
         * trigger export type
         *
         * If a number is supplied, delay is applied to both hide/show
         *
         * @default 0
         */
        delay: number | { show: number; hide: number };

        /**
         * Insert HTML into the popover. If false, innerText property will be
         * used to insert content into the DOM. Use text if you're worried about
         * XSS attacks.
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
         * @default 'right'
         */
        placement: 'auto' | 'top' | 'bottom' | 'left' | 'right' | (() => void);

        /**
         * If a selector is provided, popover objects will be delegated to the
         * specified targets. In practice, this is used to enable dynamic HTML
         * content to have popovers added.
         *
         * @default false
         */
        selector: string | false;

        /**
         * Base HTML to use when creating the popover.
         *
         * The popover's title will be injected into the .popover-header.
         *
         * The popover's content will be injected into the .popover-body.
         *
         * .popover-arrow will become the popover's arrow.
         *
         * The outermost wrapper element should have the .popover class.
         *
         * @default '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
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
         * How popover is triggered - click | hover | focus | manual. You may
         * pass multiple triggers; separate them with a space. manual cannot be
         * combined with any other trigger.
         *
         * @default 'click'
         */
        trigger: 'click' | 'hover' | 'focus' | 'manual';

        /**
         * Offset of the popover relative to its target.
         *
         * @see {@link https://popper.js.org/docs/v1/#modifiers..offset.offset}
         * @default 0
         */
        offset: number | string;

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
         * Enable or disable the sanitization. If activated 'template',
         * 'content' and 'title' options will be sanitized.
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

export default Popover;

// Type definitions for Bootstrap 3.4
// Project: http://twitter.github.com/bootstrap/
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

export as namespace Bootstrap;

// --------------------------------------------------------------------------
// For jQuery v1 and v2 backward compatibility
// --------------------------------------------------------------------------

/**
 * Same as jQuery v3 `JQuery.EventHandlerBase`.
 */
export type JQueryEventHandlerBase<TContext, T> =
    (this: TContext, t: T, ...args: any[]) => void | false;

// --------------------------------------------------------------------------
// Some Types and Interfaces
// --------------------------------------------------------------------------

export type Placement = "auto" | "top" | "bottom" | "left" | "right";

export type Trigger = "click" | "hover" | "focus" | "manual" |
    "click hover" | "click focus" | "hover focus" |
    "click hover focus";

export type DynamicOffset = (elem: JQuery) => number;

export interface Delay {
    show?: number;
    hide?: number;
}

export interface Offset {
    top?: number | DynamicOffset;
    bottom?: number | DynamicOffset;
}

export interface Viewport {
    padding?: number;
    selector: string;
}

export interface TooltipInstance<T extends TooltipOptions> {
    options: T;
}

// --------------------------------------------------------------------------------------
// Options Interfaces
// --------------------------------------------------------------------------------------

export interface ModalOptions {
    /**
     * Includes a modal-backdrop element.
     * Alternatively, specify `static` for a backdrop which doesn't close the modal on click.
     *
     * @default true
     */
    backdrop?: boolean | "static";

    /**
     * Closes the modal when escape key is pressed.
     *
     * @default true
     */
    keyboard?: boolean;

    /**
     * Shows the modal when initialized.
     *
     * @default true
     */
    show?: boolean;

    /**
     * If a remote URL is provided, **content will be loaded one time** via jQuery's `load` method and injected into the `.modal-content` div.
     *
     * @default false
     * @deprecated Use client-side templating or a data binding framework instead, or call `jQuery.load` yourself.
     */
    remote?: string;
}

export interface ScrollSpyOptions {
    /**
     * Pixels to offset from top when calculating position of scroll.
     *
     * @default 10
     */
    offset?: number;

    /**
     * The ID or class of the parent element of any Bootstrap `.nav` component.
     *
     * @default ""
     */
    target?: string;
}

export interface TooltipOptions {
    /**
     * Apply a CSS fade transition to the tooltip or popover.
     *
     * @default true
     */
    animation?: boolean;

    /**
     * Appends the tooltip or popover to a specific element. Example: `container: 'body'`.
     * This option is particularly useful in that it allows you to position the tooltip or popover
     * in the flow of the document near the triggering element - which will prevent
     * it from floating away from the triggering element during a window resize.
     *
     * @default false
     */
    container?: string | false;

    /**
     * Delay showing and hiding the tooltip or popover (ms) - does not apply to manual trigger type.
     * If a number is supplied, delay is applied to both hide/show.
     * Object structure is: `delay: { "show": 500, "hide": 100 }`.
     *
     * @default 0
     */
    delay?: number | Delay;

    /**
     * Insert HTML into the tooltip or popover. If false, jQuery's text method will be used to insert content into the DOM.
     * Use text if you're worried about XSS attacks.
     *
     * @default false
     */
    html?: boolean;

    /**
     * How to position the tooltip or popover - top | bottom | left | right | auto.
     * When "auto" is specified, it will dynamically reorient the tooltip or popover.
     * For example, if placement is "auto left", the tooltip will display to the left when possible, otherwise it will display right.
     *
     * When a function is used to determine the placement, it is called with
     * the tooltip or popover DOM node as its first argument and the triggering element DOM node as its second.
     * The `this` context is set to the tooltip or popover instance.
     *
     * @default tooltip: "top", popover: "right"
     */
    placement?: Placement | ((this: TooltipInstance<this>, tooltip: HTMLElement, trigger: Element) => Placement);

    /**
     * If a selector is provided, tooltip or popover objects will be delegated to the specified targets.
     * In practice, this is used to enable dynamic HTML content to have popovers added.
     *
     * @default false
     */
    selector?: string;

    /**
     * Base HTML to use when creating the tooltip or popover.
     * The tooltip's (resp., popover's) title will be injected into the `.tooltip-inner` (resp., `.popover-title`).
     * The popover's content will be injected into the `.popover-content`.
     * The `.tooltip-arrow` (resp., `.arrow`) will become the tooltip's (resp., popover's) arrow.
     * The outermost wrapper element should have the `.tooltip` (resp., `.popover`) class.
     *
     * @default '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
     * @default '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
     */
    template?: string;

    /**
     * Default title value if title attribute isn't present.
     * If a function is given, it will be called with its `this` reference set to the element
     * that the tooltip or popover is attached to.
     *
     * @default ""
     */
    title?: string | ((this: Element) => string);

    /**
     * How tooltip or popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.
     * "manual" cannot be combined with any other trigger.
     *
     * @default tooltip: "hover focus", popover: "click"
     */
    trigger?: Trigger;

    /**
     * Keeps the tooltip within the bounds of this element. Example: viewport: `#viewport` or `{"selector": "#viewport", "padding": 0}`.
     * If a function is given in the object, it is called with the triggering element DOM node as its only argument.
     * The `this` context is set to the tooltip instance.
     *
     * @default {selector: 'body', padding: 0}
     */
    viewport?: string | Viewport;

    /**
     * Enable or disable the sanitization. If activated 'template', 'content' and 'title' options will be sanitized.
     *
     * @default true
     */
    sanitize?: boolean;

    /**
     * Object which contains allowed attributes and tags.
     */
    whiteList?: {[key: string]: string[]};

    /**
     * Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization.
     *
     * @default null
     */
    sanitizeFn?: null | ((input: string) => string);
}

export interface PopoverOptions extends TooltipOptions {
    /**
     * Default content value if `data-content` attribute isn't present.
     * If a function is given, it will be called with its `this` reference
     * set to the element that the popover is attached to.
     *
     * @default ""
     */
    content?: string | ((this: Element) => string);
}

export interface CollapseOptions {
    /**
     * If a selector is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown.
     *
     * @default false
     */
    parent?: string | false;

    /**
     * Toggles the collapsible element on invocation.
     *
     * @default true
     */
    toggle?: boolean;
}

export interface CarouselOptions {
    /**
     * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
     *
     * @default 5000
     */
    interval?: number | false;

    /**
     * If set to "hover", pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`.
     * If set to null, hovering over the carousel won't pause it.
     *
     * @default "hover"
     */
    pause?: "hover" | null;

    /**
     * Whether the carousel should cycle continuously or have hard stops.
     *
     * @default true
     */
    wrap?: boolean;

    /**
     * Whether the carousel should react to keyboard events.
     *
     * @default true
     */
    keyboard?: boolean;
}

export interface AffixOptions {
    /**
     * Pixels to offset from screen when calculating position of scroll. If a single number is provided, the offset will be applied in both top and bottom directions.
     * To provide a unique, bottom and top offset just provide an object offset: `{top: 7, bottom: 5}`.
     * Use a function in the object when you need to dynamically calculate an offset.
     *
     * @default 10
     */
    offset?: number | Offset;

    /**
     * Specifies the target element of the affix.
     *
     * @default window
     */
    target?: string | Node | JQuery | Window;
}

// --------------------------------------------------------------------------------------
// Events
// --------------------------------------------------------------------------------------

export interface CarouselEventHandler extends JQueryEventObject {
    /**
     * The direction in which the carousel is sliding.
     */
    direction: "left" | "right";

    /**
     * The DOM element that is being slid into place as the active item.
     */
    relatedTarget: HTMLElement;
}

export interface DropdownsEventHandler extends JQueryEventObject {
    /**
     * The toggling anchor element.
     */
    relatedTarget: HTMLElement;
}

export interface TapEventHandler extends JQueryEventObject {
    /**
     * * For `show.bs.tab` and `shown.bs.tab`, is the new active tab.
     * * For `hide.bs.tab`, is the current active tab.
     * * For `hidden.bs.tab`, is the previous active tab.
     */
    target: HTMLElement; // overridden only for better JsDoc

    /**
     * * For `show.bs.tab` and `shown.bs.tab`, is the previous active tab, if available.
     * * For `hide.bs.tab`, is the new soon-to-be-active tab.
     * * For `hidden.bs.tab`, is the new active tab.
     */
    relatedTarget: HTMLElement;
}

export type AffixEvent = "affix.bs.affix" | "affixed.bs.affix" | "affix-top.bs.affix" | "affixed-top.bs.affix" | "affix-bottom.bs.affix" | "affixed-bottom.bs.affix";
export type AlertEvent = "close.bs.alert" | "closed.bs.alert";
export type CarouselEvent = "slide.bs.carousel" | "slid.bs.carousel";
export type CollapseEvent = "show.bs.collapse" | "shown.bs.collapse" | "hide.bs.collapse" | "hidden.bs.collapse";
export type DropdownEvent = "show.bs.dropdown" | "shown.bs.dropdown" | "hide.bs.dropdown" | "hidden.bs.dropdown";
export type PopoverEvent = "show.bs.popover" | "shown.bs.popover" | "hide.bs.popover" | "hidden.bs.popover" | "inserted.bs.popover";
export type ScrollspyEvent = "activate.bs.scrollspy";
export type TapEvent = "show.bs.tab" | "shown.bs.tab" | "hide.bs.tab" | "hidden.bs.tab";
export type TooltipEvent = "show.bs.tooltip" | "shown.bs.tooltip" | "hide.bs.tooltip" | "hidden.bs.tooltip" | "inserted.bs.tooltip";

// --------------------------------------------------------------------------------------
// jQuery
// --------------------------------------------------------------------------------------

declare global {
    interface JQuery<TElement = HTMLElement> {
        /**
         * Call a method on the modal element:
         * * `toggle` – Manually toggles a modal.
         * * `show` – Manually opens a modal.
         * * `hide` – Manually hides a modal.
         * * `handleUpdate` – Readjusts the modal's positioning to counter a scrollbar in case one should appear, which would make the modal jump to the left.
         * Only needed when the height of the modal changes while it is open.
         *
         * Returns to the caller before the modal has actually been shown or hidden (i.e. before the `shown.bs.modal` or `hidden.bs.modal` event occurs).
         */
        modal(action: "toggle" | "show" | "hide" | "handleUpdate"): this;
        /**
         * Activates a content as a modal.
         */
        modal(options?: ModalOptions): this;

        /**
         * If no _method_ is specified, toggle contextual overlays for displaying lists of links.
         * The data-api, `data-toggle="dropdown"` is always required to be present on the dropdown's trigger element.
         *
         * When _method_ `toggle` is specified, toggles the dropdown menu of a given navbar or tabbed navigation.
         */
        dropdown(action?: "toggle"): this;

    // tslint:disable:jsdoc-format
        /**
         * When using scrollspy in conjunction with adding or removing of elements from the DOM, you'll need to call the refresh, see example.
         * @example
    ```javascript
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})
    ```
        */
    // tslint:enable:jsdoc-format
        scrollspy(action: "refresh"): this;
        /**
         * Add scrollspy behavior to a topbar navigation.
         */
        scrollspy(options?: ScrollSpyOptions): this;

        /**
         * If no _method_ is specified, activates a tab element and content container. Tab should have either a `data-target` or an `href` targeting a container node in the DOM.
         *
         * When _method_ `show` is specified, selects the given tab and shows its associated content.
         * Any other tab that was previously selected becomes unselected and its associated content is hidden.
         *
         * Returns to the caller before the tab pane has actually been shown (i.e. before the `shown.bs.tab` event occurs).
         */
        tab(action?: "show"): this;

        /**
         * Call a method on the tooltip element:
         * * `show` – Reveals an element's tooltip. Tooltips with zero-length titles are never displayed.
         * * `hide` – Hides an element's tooltip.
         * * `toggle` – Toggles an element's tooltip.
         * * `destroy` – Hides and destroys an element's tooltip.
         * Tooltips that use delegation (which are created using `selector` option) cannot be individually destroyed on descendant trigger elements.
         *
         * Returns to the caller before the tooltip has actually been shown or hidden (i.e. before the `shown.bs.tooltip` or `hidden.bs.tooltip` event occurs).
         * This is considered a "manual" triggering of the tooltip.
         */
        tooltip(action: "show" | "hide" | "toggle" | "destroy"): this;
        /**
         * Attaches a tooltip handler to an element collection.
         */
        tooltip(options?: TooltipOptions): this;

        /**
         * Call a method on the popover element:
         * * `show` – Reveals an element's popover. Popovers whose both title and content are zero-length are never displayed.
         * * `hide` – Hides an element's popover.
         * * `toggle` – Toggles an element's popover.
         * * `destroy` – Hides and destroys an element's popover.
         * Popovers that use delegation (which are created using the `selector` option) cannot be individually destroyed on descendant trigger elements.
         *
         * Returns to the caller before the popover has actually been shown or hidden (i.e. before the `shown.bs.popover` or `hidden.bs.popover` event occurs).
         * This is considered a "manual" triggering of the popover.
         */
        popover(action: "show" | "hide" | "toggle" | "destroy"): this;
        /**
         * Initializes popovers for an element collection.
         */
        popover(options?: PopoverOptions): this;

        /**
         * If no _method_ is specified, makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute.
         * (Not necessary when using the data-api's auto-initialization.)
         *
         * When _method_ `close` is specified, closes an alert by removing it from the DOM. If the `.fade` and `.in` classes are present on the element,
         * the alert will fade out before it is removed.
         */
        alert(action?: "close"): this;

        /**
         * Call a method on the button element:
         * * `toggle` – Toggles push state. Gives the button the appearance that it has been activated.
         * * `reset` – Resets button state: swaps text to original text. This method is asynchronous and returns before the resetting has actually completed.
         * * _string_ – Swaps text to any data defined text state.
         */
        button(action: "toggle" | "reset" | string): this;

        /**
         * Call a method on the collapsible element:
         * * `toggle` – Toggles a collapsible element to shown or hidden.
         * * `show` – Shows a collapsible element.
         * * `hide` – Hides a collapsible element.
         *
         * Returns to the caller before the collapsible element has actually been shown or hidden (i.e. before the `shown.bs.collapse` or `hidden.bs.collapse` event occurs).
         */
        collapse(action: "toggle" | "show" | "hide"): this;
        /**
         * Activates a content as a collapsible element.
         */
        collapse(options?: CollapseOptions): this;

        /**
         * Call a method on the carousel element:
         * * `cycle` – Cycles through the carousel items from left to right.
         * * `pause` – Stops the carousel from cycling through items.
         * * _number_ – Cycles the carousel to a particular frame (0 based, similar to an array).
         * * `prev` – Cycles to the previous item.
         * * `next` – Cycles to the next item.
         *
         * Returns to the caller before the target item has been shown (i.e. before the `slid.bs.carousel` event occurs).
         */
        carousel(action: "cycle" | "pause" | number | "prev" | "next"): this;
        /**
         * Initializes the carousel and starts cycling through items.
         */
        carousel(options?: CarouselOptions): this;

        /**
         * Recalculates the state of the affix based on the dimensions, position, and scroll position of the relevant elements.
         * The `.affix`, `.affix-top`, and `.affix-bottom` classes are added to or removed from the affixed content according to the new state.
         * This method needs to be called whenever the dimensions of the affixed content or the target element are changed, to ensure correct positioning of the affixed content.
         */
        affix(action: "checkPosition"): this;
        /**
         * Activates your content as affixed content.
         */
        affix(options?: AffixOptions): this;

        on(events: CarouselEvent, handler: JQueryEventHandlerBase<HTMLElement, CarouselEventHandler>): this;
        on(events: DropdownEvent, handler: JQueryEventHandlerBase<HTMLElement, DropdownsEventHandler>): this;
        on(events: TapEvent, handler: JQueryEventHandlerBase<HTMLElement, TapEventHandler>): this;
        on(
            events: AffixEvent | AlertEvent | CollapseEvent | PopoverEvent | ScrollspyEvent | TooltipEvent,
            handler: JQueryEventHandlerBase<HTMLElement, JQueryEventObject>
        ): this;

        /** @deprecated */
        emulateTransitionEnd(duration: number): this;
    }
}

// --------------------------------------------------------------------------------------
// Other
// --------------------------------------------------------------------------------------

export interface TransitionEventNames {
    end: string;
}

export interface JQuerySupport {
    transition: boolean | TransitionEventNames;
}

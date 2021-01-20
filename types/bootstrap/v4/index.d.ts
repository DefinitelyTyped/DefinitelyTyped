// Type definitions for Bootstrap 4.5
// Project: https://github.com/twbs/bootstrap/, https://getbootstrap.com
// Definitions by: denisname <https://github.com/denisname>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

import * as Popper from "popper.js";

export as namespace Bootstrap;

// --------------------------------------------------------------------------
// Some Types and Interfaces
// --------------------------------------------------------------------------

export type Placement = "auto" | "top" | "bottom" | "left" | "right";

export type Trigger = "click" | "hover" | "focus" | "manual" |
    "click hover" | "click focus" | "hover focus" |
    "click hover focus";

export interface Delay {
    show: number;
    hide: number;
}

export interface TooltipInstance<T extends TooltipOption> {
    config: T;
    element: Element;
    tip: HTMLElement;
}

export interface OffsetsExtend {
    popper?: Partial<Popper.Offset>;
    reference?: Partial<Popper.Offset>;
}

// --------------------------------------------------------------------------------------
// Options Interfaces
// --------------------------------------------------------------------------------------

export interface CarouselOption {
    /**
     * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
     *
     * @default 5000
     */
    interval?: false | number;

    /**
     * Whether the carousel should react to keyboard events.
     *
     * @default true
     */
    keyboard?: boolean;

    /**
     * Use to easily control the position of the carousel. It accepts the keywords prev or next, which alters the slide position
     * relative to its current position. Alternatively, use `data-slide-to` to pass a raw slide index to the carousel.
     *
     * @default false
     */
    slide?: "next" | "prev" | false;

    /**
     * If set to "hover", pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`.
     * If set to false, hovering over the carousel won't pause it.
     *
     * On touch-enabled devices, when set to "hover", cycling will pause on `touchend` (once the user finished interacting with the carousel)
     * for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.
     *
     * @default "hover"
     */
    pause?: "hover" | false;

    /**
     * Autoplays the carousel after the user manually cycles the first item.
     * If `carousel`, autoplays the carousel on load.
     * @default false
     */
    ride?: 'carousel' | boolean;

    /**
     * Whether the carousel should cycle continuously or have hard stops.
     *
     * @default true
     */
    wrap?: boolean;

    /**
     * Whether the carousel should support left/right swipe interactions on touchscreen devices.
     *
     * @default true
     */
    touch?: boolean;
}

export interface CollapseOption {
    /**
     * If parent is provided, then all collapsible elements under the specified parent will be closed when
     * this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the card class).
     * The attribute has to be set on the target collapsible area.
     *
     * @default ""
     */
    parent?: string | JQuery | Element;

    /**
     * Toggles the collapsible element on invocation.
     *
     * @default true
     */
    toggle?: boolean;
}

export interface DropdownOption {
    /**
     * Offset of the dropdown relative to its target.
     * For more information refer to Popper.js's offset docs.
     *
     * @default 0
     */
    offset?: number | string | ((this: DropdownOption, offset: OffsetsExtend) => OffsetsExtend);

    /**
     * Allow Dropdown to flip in case of an overlapping on the reference element.
     * For more information refer to Popper.js's flip docs.
     *
     * @default true
     */
    flip?: boolean;

    /**
     * Overflow constraint boundary of the dropdown menu.
     * Accepts the values of 'viewport', 'window', 'scrollParent', or an HTMLElement reference (JavaScript only).
     * For more information refer to Popper.js's preventOverflow docs.
     *
     * @default "scrollParent"
     */
    boundary?: Popper.Boundary | HTMLElement;

    /**
     * Reference element of the dropdown menu. Accepts the values of 'toggle', 'parent', or an HTMLElement reference.
     * For more information refer to Popper.js's referenceObject docs.
     *
     * @default "toggle"
     */
    reference?: "toggle" | "parent" | HTMLElement;

    /**
     * By default, we use Popper.js for dynamic positioning. Disable this with 'static'.
     *
     * @default "dynamic"
     */
    display?: "dynamic" | "static";
}

export interface ModalOption {
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
     * Puts the focus on the modal when initialized.
     *
     * @default true
     */
    focus?: boolean;

    /**
     * Shows the modal when initialized.
     *
     * @default true
     */
    show?: boolean;
}

export interface PopoverOption extends TooltipOption {
    /**
     * Default content value if `data-content` attribute isn't present.
     * If a function is given, it will be called with its `this` reference
     * set to the element that the popover is attached to.
     *
     * @default ""
     */
    content?: string | Element | ((this: Element) => string | Element);
}

export interface ScrollspyOption {
    /**
     * Finds which section the spied element is in:
     * * `auto` will choose the best method get scroll coordinates.
     * * `offset` will use jQuery offset method to get scroll coordinates.
     * * `position` will use jQuery position method to get scroll coordinates.
     *
     * @default "auto"
     */
    method?: "auto" | "offset" | "position";

    /**
     * Pixels to offset from top when calculating position of scroll.
     *
     * @default 10
     */
    offset?: number;

    /**
     * A selector of the parent element or the parent element itself
     * of any Bootstrap `.nav` or `.list-group` component.
     *
     * @default ""
     */
    target?: string | JQuery<Element> | Element;
}

export interface ToastOption {
    /**
     * Apply a CSS fade transition to the toast.
     *
     * @default true
     */
    animation?: boolean;

    /**
     * Auto hide the toast.
     *
     * @default true
     */
    autohide?: boolean;

    /**
     * Delay hiding the toast in millisecond.
     *
     * @default 500
     */
    delay?: number;
}

export interface TooltipOption {
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
    container?: string | Element | false;

    /**
     * Delay showing and hiding the tooltip or popover (ms) - does not apply to manual trigger type.
     * If a number is supplied, delay is applied to both hide/show.
     * Object structure is: `delay: { "show": 500, "hide": 100 }`.
     *
     * @default 0
     */
    delay?: number | Delay;

    /**
     * Allow HTML in the tooltip or popover.
     * If true, HTML tags will be rendered in the tooltip or popover.
     * If false, jQuery's text method will be used to insert content into the DOM.
     * Use text if you're worried about XSS attacks.
     *
     * @default false
     */
    html?: boolean;

    /**
     * How to position the tooltip or popover - auto | top | bottom | left | right.
     * When "auto" is specified, it will dynamically reorient the tooltip or popover.
     *
     * When a function is used to determine the placement, it is called with
     * the tooltip or popover DOM node as its first argument and the triggering element DOM node as its second.
     * The `this` context is set to the tooltip or popover instance.
     *
     * @default tooltip: "top", popover: "right"
     */
    placement?: Placement | ((this: TooltipInstance<this>, node: HTMLElement, trigger: Element) => Placement);

    /**
     * If a selector is provided, tooltip or popover objects will be delegated to the specified targets.
     * In practice, this is used to enable dynamic HTML content to have popovers added.
     *
     * @default false
     */
    selector?: string | false;

    /**
     * Base HTML to use when creating the tooltip or popover.
     * The tooltip's (resp., popover's) title will be injected into the `.tooltip-inner` (resp., `.popover-header`).
     * The `.arrow` will become the tooltip's (resp., popover's) arrow.
     * The outermost wrapper element should have the `.tooltip` (resp., .popover) class and `role="tooltip"`.
     *
     * @default '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
     * @default '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
     */
    template?: string;

    /**
     * Default title value if title attribute isn't present.
     * If a function is given, it will be called with its `this` reference set to the element
     * that the tooltip or popover is attached to.
     *
     * @default ""
     */
    title?: string | Element | ((this: Element) => string | Element);

    /**
     * How tooltip or popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.
     * 'manual' indicates that the tooltip will be triggered programmatically; this value cannot be combined with any other trigger.
     * 'hover' should only be used if alternative methods for conveying the same information for keyboard users is present.
     *
     * @default tooltip: "hover focus", popover: "click"
     */
    trigger?: Trigger;

    /**
     * Offset of the tooltip or popover relative to its target.
     * For more information refer to Popper.js's offset docs.
     *
     * @default 0
     */
    offset?: number | string;

    /**
     * Allow to specify which position Popper will use on fallback.
     * For more information refer to Popper.js's behavior docs.
     *
     * @default "flip"
     */
    fallbackPlacement?: Popper.Behavior | ReadonlyArray<Popper.Behavior>;

    /**
     * Overflow constraint boundary of the tooltip or popover.
     * Accepts the values of 'viewport', 'window', 'scrollParent',
     * or an HTMLElement reference (JavaScript only).
     * For more information refer to Popper.js's preventOverflow docs.
     *
     * @default "scrollParent"
     */
    boundary?: Popper.Boundary | HTMLElement;

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

    /**
     * To change Bootstrap's default Popper.js config,
     * see {@link https://popper.js.org/docs/v1/ Popper.js's configuration}
     */
    popperConfig?: null | object;
}

// --------------------------------------------------------------------------------------
// Events
// --------------------------------------------------------------------------------------

export interface CarouselEventHandler<TElement> extends JQuery.TriggeredEvent<TElement, undefined, HTMLElement, HTMLElement> {
    /**
     * The carousel dom element.
     */
    target: HTMLElement; // overridden only for better JsDoc

    /**
     * The direction in which the carousel is sliding.
     */
    direction: "left" | "right";

    /**
     * The DOM element that is being slid into place as the active item.
     */
    relatedTarget: HTMLElement;

    /**
     * The index of the current item.
     */
    from: number;

    /**
     * The index of the next item.
     */
    to: number;
}

export interface DropdownsEventHandler<TElement> extends JQuery.TriggeredEvent<TElement, undefined, HTMLElement, HTMLElement> {
    /**
     * The the dropdown's toggle and the dropdown menu container (the `.dropdown` element).
     */
    target: HTMLElement; // overridden only for better JsDoc

    /**
     * The toggling anchor element.
     */
    relatedTarget: HTMLElement;
}

export interface ModalEventHandler<TElement> extends JQuery.TriggeredEvent<TElement, undefined, HTMLElement, HTMLElement> {
    /**
     * The modal dom element.
     */
    target: HTMLElement; // overridden only for better JsDoc

    /**
     * For `show.bs.modal` and `shown.bs.modal` is the clicked element, when caused by a _click_.
     * Otherwise is undefined.
     */
    relatedTarget: HTMLElement | undefined;
}

export interface TapEventHandler<TElement> extends JQuery.TriggeredEvent<TElement, undefined, HTMLElement, HTMLElement> {
    /**
     * * For `show.bs.tab` and `shown.bs.tab`, is the newly activated tab.
     * * For `hide.bs.tab`, is the current active tab.
     * * For `hidden.bs.tab`, is the previous active tab.
     */
    target: HTMLElement; // overridden only for better JsDoc

    /**
     * * For `show.bs.tab` and `shown.bs.tab`, is the previous active tab.
     * * For `hide.bs.tab`, is the new soon-to-be-active tab.
     * * For `hidden.bs.tab`, is the new active tab.
     */
    relatedTarget: HTMLElement;
}

export type AlertEvent = "close.bs.alert" | "closed.bs.alert";
export type CarouselEvent = "slide.bs.carousel" | "slid.bs.carousel";
export type CollapseEvent = "show.bs.collapse" | "shown.bs.collapse" | "hide.bs.collapse" | "hidden.bs.collapse";
export type DropdownEvent = "show.bs.dropdown" | "shown.bs.dropdown" | "hide.bs.dropdown" | "hidden.bs.dropdown";
export type ModalEvent = "show.bs.modal" | "shown.bs.modal" | "hide.bs.modal" | "hidden.bs.modal" | "hidePrevented.bs.modal";
export type PopoverEvent = "show.bs.popover" | "shown.bs.popover" | "hide.bs.popover" | "hidden.bs.popover" | "inserted.bs.popover";
export type ScrollspyEvent = "activate.bs.scrollspy";
export type TapEvent = "show.bs.tab" | "shown.bs.tab" | "hide.bs.tab" | "hidden.bs.tab";
export type ToastEvent = "show.bs.toast" | "shown.bs.toast" | "hide.bs.toast" | "hidden.bs.toast";
export type TooltipEvent = "show.bs.tooltip" | "shown.bs.tooltip" | "hide.bs.tooltip" | "hidden.bs.tooltip" | "inserted.bs.tooltip";

// --------------------------------------------------------------------------------------
// jQuery
// --------------------------------------------------------------------------------------

declare global {
    interface JQuery<TElement = HTMLElement> {
        /**
         * If no _method_ is specified, makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute.
         * (Not necessary when using the data-api's auto-initialization.)
         * Otherwise, call the method on the alert element:
         * * `close` – Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before it is removed.
         * * `dispose` – Destroys an element's alert.
         */
        alert(action?: "close" | "dispose"): this;

        /**
         * Call a method on the button element:
         * * `toggle` – Toggles push state. Gives the button the appearance that it has been activated.
         * * `dispose` – Destroys an element's button.
         */
        button(action: "toggle" | "dispose"): this;

        /**
         * Call a method on the carousel element:
         * * `cycle` – Cycles through the carousel items from left to right.
         * * `pause` – Stops the carousel from cycling through items.
         * * _number_ – Cycles the carousel to a particular frame (0 based, similar to an array).
         * * `prev` – Cycles to the previous item.
         * * `next` – Cycles to the next item.
         * * `dispose` – Destroys an element's carousel.
         *
         * Returns to the caller before the target item has been shown (i.e. before the `slid.bs.carousel` event occurs).
         */
        carousel(action: "cycle" | "pause" | number | "prev" | "next" | "dispose"): this;
        /**
         * Initializes the carousel and starts cycling through items.
         */
        carousel(options?: CarouselOption): this;

        /**
         * Call a method on the collapsible element:
         * * `toggle` – Toggles a collapsible element to shown or hidden.
         * * `show` – Shows a collapsible element.
         * * `hide` – Hides a collapsible element.
         * * `dispose` – Destroys an element's collapse.
         *
         * Returns to the caller before the collapsible element has actually been shown or hidden (i.e. before the `shown.bs.collapse` or `hidden.bs.collapse` event occurs).
         */
        collapse(action: "toggle" | "show" | "hide" | "dispose"): this;
        /**
         * Activates a content as a collapsible element.
         */
        collapse(options?: CollapseOption): this;

        /**
         * Call a method on the dropdown element:
         * * `toggle` – Toggles the dropdown menu of a given navbar or tabbed navigation.
         * * `show` – Shows the dropdown menu of a given navbar or tabbed navigation.
         * * `hide` – Hides the dropdown menu of a given navbar or tabbed navigation.
         * * `update` – Updates the position of an element's dropdown.
         * * `dispose` – Destroys an element's dropdown.
         */
        dropdown(action: "toggle" | "show" | "hide" | "update" | "dispose"): this;
        /**
         * Toggle contextual overlays for displaying lists of links.
         *
         * The data-api, `data-toggle="dropdown"` is always required to be present on the dropdown's trigger element.
         */
        dropdown(options?: DropdownOption): this;

        /**
         * Call a method on the modal element:
         * * `toggle` – Manually toggles a modal.
         * * `show` – Manually opens a modal.
         * * `hide` – Manually hides a modal.
         * * `handleUpdate` – Manually readjust the modal's position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).
         * * `dispose` – Destroys an element's modal.
         *
         * Returns to the caller before the modal has actually been shown or hidden (i.e. before the `shown.bs.modal` or `hidden.bs.modal` event occurs).
         */
        modal(action: "toggle" | "show" | "hide" | "handleUpdate" | "dispose"): this;
        /**
         * Activates a content as a modal.
         */
        modal(options?: ModalOption): this;

        /**
         * Call a method on the popover element:
         * * `show` – Reveals an element's popover. Popovers whose both title and content are zero-length are never displayed.
         * * `hide` – Hides an element's popover.
         * * `toggle` – Toggles an element's popover.
         * * `dispose` – Hides and destroys an element's popover.
         * Popovers that use delegation (which are created using the `selector` option) cannot be individually destroyed on descendant trigger elements.
         * * `enable` – Gives an element's popover the ability to be shown. Popovers are enabled by default.
         * * `disable` – Removes the ability for an element's popover to be shown. The popover will only be able to be shown if it is re-enabled.
         * * `toggleEnabled` – Toggles the ability for an element's popover to be shown or hidden.
         * * `update` – Updates the position of an element's popover.
         *
         * Returns to the caller before the popover has actually been shown or hidden (i.e. before the `shown.bs.popover` or `hidden.bs.popover` event occurs).
         * This is considered a "manual" triggering of the popover.
         */
        popover(action: "show" | "hide" | "toggle" | "dispose" | "enable" | "disable" | "toggleEnabled" | "update"): this;
        /**
         * Initializes popovers for an element collection.
         */
        popover(options?: PopoverOption): this;

// tslint:disable:jsdoc-format
        /**
         * Call a method on the scrollspy element:
         * * `refresh` – When using scrollspy in conjunction with adding or removing of elements from the DOM, you'll need to call the refresh, see example.
         * * `dispose` – Destroys an element's scrollspy.
         *
         * @example
```javascript
$('[data-spy="scroll"]').each(function () {
   var $spy = $(this).scrollspy('refresh')
})
```
         */
// tslint:enable:jsdoc-format
        scrollspy(action: "refresh" | "dispose"): this;
        /**
         * Add scrollspy behavior to a topbar navigation.
         */
        scrollspy(options?: ScrollspyOption): this;

        /**
         * Call a method on the list item or tab element:
         * * `show` – Selects the given list item or tab and shows its associated pane.
         * Any other list item or tab that was previously selected becomes unselected and its associated pane is hidden.
         * * `dispose` – Destroys an element's tab.
         *
         * Returns to the caller before the tab pane has actually been shown (i.e. before the `shown.bs.tab` event occurs).
         */
        tab(action: "show" | "dispose"): this;

        /**
         * Call a method on the toast element:
         * * `show` – Reveals an element's toast. You have to manually call this method, instead your toast won't show.
         * * `hide` – Hides an element's toast. You have to manually call this method if you made `autohide` to false.
         * * `dispose` – Hides an element's toast. Your toast will remain on the DOM but won't show anymore.
         *
         * Returns to the caller before the toast has actually been shown or hidden (i.e. before the `shown.bs.toast` or `hidden.bs.toast` event occurs).
         */
        toast(action: "show" | "hide" | "dispose"): this;
        /**
         * Attaches a toast handler to an element collection.
         */
        toast(options?: ToastOption): this;

        /**
         * Call a method on the tooltip element:
         * * `show` – Reveals an element's tooltip. Tooltips with zero-length titles are never displayed.
         * * `hide` – Hides an element's tooltip.
         * * `toggle` – Toggles an element's tooltip.
         * * `dispose` – Hides and destroys an element's tooltip.
         * Tooltips that use delegation (which are created using `selector` option) cannot be individually destroyed on descendant trigger elements.
         * * `enable` – Gives an element's tooltip the ability to be shown. Tooltips are enabled by default.
         * * `disable` – Removes the ability for an element's tooltip to be shown. The tooltip will only be able to be shown if it is re-enabled.
         * * `toggleEnabled` – Toggles the ability for an element's tooltip to be shown or hidden.
         * * `update` – Updates the position of an element's tooltip.
         *
         * Returns to the caller before the tooltip has actually been shown or hidden (i.e. before the `shown.bs.tooltip` or `hidden.bs.tooltip` event occurs).
         * This is considered a "manual" triggering of the tooltip.
         */
        tooltip(action: "show" | "hide" | "toggle" | "dispose" | "enable" | "disable" | "toggleEnabled" | "update"): this;
        /**
         * Attaches a tooltip handler to an element collection.
         */
        tooltip(options?: TooltipOption): this;

        on(events: CarouselEvent, handler: JQuery.EventHandlerBase<TElement, CarouselEventHandler<TElement>>): this;
        on(events: DropdownEvent, handler: JQuery.EventHandlerBase<TElement, DropdownsEventHandler<TElement>>): this;
        on(events: ModalEvent, handler: JQuery.EventHandlerBase<TElement, ModalEventHandler<TElement>>): this;
        on(events: TapEvent, handler: JQuery.EventHandlerBase<TElement, TapEventHandler<TElement>>): this;
        on(
            events: AlertEvent | CollapseEvent | PopoverEvent | ScrollspyEvent | ToastEvent | TooltipEvent,
            handler: JQuery.EventHandler<TElement>
        ): this;
    }
}

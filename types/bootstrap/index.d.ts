// Type definitions for Bootstrap 4.1
// Project: https://github.com/twbs/bootstrap/
// Definitions by: denisname <https://github.com/denisname>
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
     * If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.
     * If set to false, hovering over the carousel won't pause it.
     * On touch-enabled devices, when set to "hover", cycling will pause on touchend (once the user finished interacting with the carousel)
     * for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.
     *
     * @default "hover"
     */
    pause?: "hover" | false;

    /**
     * Whether the carousel should cycle continuously or have hard stops.
     *
     * @default true
     */
    wrap?: boolean;
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
     * Alternatively, specify static for a backdrop which doesn't close the modal on click.
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
     * Default content value if data-content attribute isn't present.
     * If a function is given, it will be called with its this reference
     * set to the element that the popover is attached to.
     *
     * @default ""
     */
    content?: string | Element | ((this: Element) => string | Element);
}

export interface ScrollspyOption {
    /**
     * TODO: https://github.com/twbs/bootstrap/issues/25799
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
    target?: string | Element;
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
     * When auto is specified, it will dynamically reorient the tooltip or popover.
     * When a function is used to determine the placement, it is called with
     * the tooltip or popover DOM node as its first argument and the triggering element DOM node as its second.
     * The this context is set to the tooltip or popover instance.
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
     * Base HTML to use when creating the tooltip or popover. The tooltip's (resp., popover's) title will be injected into
     * the `.tooltip-inner` (resp., `.popover-header`). The `.arrow` will become the tooltip's (resp., popover's) arrow.
     * The outermost wrapper element should have the `.tooltip` (resp., .popover) class and `role="tooltip"`.
     *
     * @default '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
     * @default '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
     */
    template?: string;

    /**
     * Default title value if title attribute isn't present.
     * If a function is given, it will be called with its this reference set to the element
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
}

// --------------------------------------------------------------------------------------
// Events
// --------------------------------------------------------------------------------------

export interface CarouselEventHandler<TElement> extends JQuery.Event<TElement, undefined> {
    /**
     * The direction in which the carousel is sliding.
     */
    direction: "left" | "right";

    /**
     * The index of the current item.
     */
    from: number;

    /**
     * The index of the next item.
     */
    to: number;
}

export type AlertEvent = "close.bs.alert" | "closed.bs.alert";
export type CarouselEvent = "slide.bs.carousel" | "slid.bs.carousel";
export type CollapseEvent = "show.bs.collapse" | "shown.bs.collapse" | "hide.bs.collapse" | "hidden.bs.collapse";
export type DropdownEvent = "show.bs.dropdown" | "shown.bs.dropdown" | "hide.bs.dropdown" | "hidden.bs.dropdown";
export type ModalEvent = "show.bs.modal" | "shown.bs.modal" | "hide.bs.modal" | "hidden.bs.modal";
export type PopoverEvent = "show.bs.popover" | "shown.bs.popover" | "hide.bs.popover" | "hidden.bs.popover" | "inserted.bs.popover";
export type ScrollspyEvent = "activate.bs.scrollspy";
export type TapEvent = "show.bs.tab" | "shown.bs.tab" | "hide.bs.tab" | "hidden.bs.tab";
export type TooltipEvent = "show.bs.tooltip" | "shown.bs.tooltip" | "hide.bs.tooltip" | "hidden.bs.tooltip" | "inserted.bs.tooltip";

// --------------------------------------------------------------------------------------
// jQuery
// --------------------------------------------------------------------------------------

declare global {
    interface JQuery<TElement = HTMLElement> {
        alert(action?: "close" | "dispose"): this;

        button(action: "toggle" | "dispose"): this;

        carousel(action: "cycle" | "pause" | number | "prev" | "next" | "dispose"): this;
        carousel(options?: CarouselOption): this;

        collapse(action: "toggle" | "show" | "hide" | "dispose"): this;
        collapse(options?: CollapseOption): this;

        dropdown(action: "toggle" | "update" | "dispose"): this;
        dropdown(options?: DropdownOption): this;

        modal(action: "toggle" | "show" | "hide" | "handleUpdate" | "dispose"): this;
        modal(options?: ModalOption): this;

        popover(action: "show" | "hide" | "toggle" | "dispose" | "enable" | "disable" | "toggleEnabled" | "update"): this;
        popover(options?: PopoverOption): this;

        scrollspy(action: "refresh" | "dispose"): this;
        scrollspy(options?: ScrollspyOption): this;

        tab(action: "show" | "dispose"): this;

        tooltip(action: "show" | "hide" | "toggle" | "dispose" | "enable" | "disable" | "toggleEnabled" | "update"): this;
        tooltip(options?: TooltipOption): this;

        on(events: CarouselEvent, handler: JQuery.EventHandlerBase<TElement, CarouselEventHandler<TElement>>): this;
        on(events:
            AlertEvent | CollapseEvent | DropdownEvent | ModalEvent |
            PopoverEvent | ScrollspyEvent | TapEvent | TooltipEvent,
            handler: JQuery.EventHandler<TElement>): this;
    }
}

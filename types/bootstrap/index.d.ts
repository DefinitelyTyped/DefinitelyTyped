// Type definitions for Bootstrap 4.0
// Project: https://github.com/twbs/bootstrap/
// Definitions by: denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// TODO: collapse, tab (list-group, navs), popovers, scrollspy

/// <reference types="jquery" />

// --------------------------------------------------------------------------
// Some Types and Interfaces
// --------------------------------------------------------------------------

type BootstrapPlacement = "auto" | "top" | "bottom" | "left" | "right";
type PopperBehavior = "flip" | "clockwise" | "counterclockwise";

interface BootstrapDelay {
    show: number;
    hide: number;
}

interface BootstrapTooltipInstance {
    config: BootstrapTooltipOption;
    element: Element;
    tip: HTMLElement;
}

interface BootstrapOffsetExtend {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
}

interface BootstrapOffsetsExtend {
    popper?: BootstrapOffsetExtend;
    reference?: BootstrapOffsetExtend;
}

// --------------------------------------------------------------------------------------
// Options Interfaces
// --------------------------------------------------------------------------------------

interface BootstrapCarouselOption {
    /**
     * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
     *
     * @default 5000
     */
    interval?: number;

    /**
     * Whether the carousel should react to keyboard events.
     *
     * @default true
     */
    keyboard?: boolean;

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

interface BootstrapDropdownOption {
    /**
     * Offset of the dropdown relative to its target.
     * For more information refer to Popper.js's offset docs.
     *
     * @default 0
     */
    offset?: number | string | ((this: BootstrapDropdownOption, offset: BootstrapOffsetsExtend) => BootstrapOffsetsExtend);

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
    boundary?: "viewport" | "window" | "scrollParent" | HTMLElement;
}

interface BootstrapModalOption {
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

interface BootstrapTooltipOption {
    /**
     * Apply a CSS fade transition to the tooltip.
     *
     * @default true
     */
    animation?: boolean;

    /**
     * Appends the tooltip to a specific element. Example: `container: 'body'`.
     * This option is particularly useful in that it allows you to position the tooltip
     * in the flow of the document near the triggering element - which will prevent
     * the tooltip from floating away from the triggering element during a window resize.
     *
     * @default false
     */
    container?: string | Element | false;

    /**
     * Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
     * If a number is supplied, delay is applied to both hide/show.
     * Object structure is: `delay: { "show": 500, "hide": 100 }`.
     *
     * @default 0
     */
    delay?: number | BootstrapDelay;

    /**
     * Allow HTML in the tooltip.
     * If true, HTML tags in the tooltip's title will be rendered in the tooltip.
     * If false, jQuery's text method will be used to insert content into the DOM.
     * Use text if you're worried about XSS attacks.
     *
     * @default false
     */
    html?: boolean;

    /**
     * How to position the tooltip - auto | top | bottom | left | right.
     * When auto is specified, it will dynamically reorient the tooltip.
     * When a function is used to determine the placement, it is called with
     * the tooltip DOM node as its first argument and the triggering element DOM node as its second.
     * The this context is set to the tooltip instance.
     *
     * @default "top"
     */
    placement?: BootstrapPlacement | ((this: BootstrapTooltipInstance, tooltip: HTMLElement, trigger: Element) => BootstrapPlacement);

    /**
     * If a selector is provided, tooltip objects will be delegated to the specified targets.
     * In practice, this is used to enable dynamic HTML content to have popovers added.
     *
     * @default false
     */
    selector?: string | false;

    /**
     * Base HTML to use when creating the tooltip. The tooltip's title will be injected into
     * the `.tooltip-inner`. The `.arrow` will become the tooltip's arrow.
     * The outermost wrapper element should have the `.tooltip` class and `role="tooltip"`.
     *
     * @default '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
     */
    template?: string;

    /**
     * Default title value if title attribute isn't present.
     * If a function is given, it will be called with its this reference set to the element
     * that the tooltip is attached to.
     *
     * @default ""
     */
    title?: string | Element | ((this: Element) => string);

    /**
     * How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.
     * 'manual' indicates that the tooltip will be triggered programmatically via the .tooltip('show'), .tooltip('hide') and
     * .tooltip('toggle') methods; this value cannot be combined with any other trigger.
     * 'hover' on its own will result in tooltips that cannot be triggered via the keyboard, and should only be used if
     * alternative methods for conveying the same information for keyboard users is present.
     *
     * @default "hover focus"
     */
    trigger?: string;

    /**
     * Offset of the tooltip relative to its target.
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
    fallbackPlacement?: PopperBehavior | PopperBehavior[];

    /**
     * Overflow constraint boundary of the tooltip.
     * Accepts the values of 'viewport', 'window', 'scrollParent',
     * or an HTMLElement reference (JavaScript only).
     * For more information refer to Popper.js's preventOverflow docs.
     *
     * @default "scrollParent"
     */
    boundary?: "viewport" | "window" | "scrollParent" | HTMLElement;
}

// --------------------------------------------------------------------------------------
// Events
// --------------------------------------------------------------------------------------

interface BootstrapCarouselEventHandler<TElement> extends JQuery.Event<TElement, undefined> {
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

type BootstrapAlertEvent = "close.bs.alert" | "closed.bs.alert";
type BootstrapCarouselEvent = "slide.bs.carousel" | "slid.bs.carousel";
type BootstrapDropdownEvent = "show.bs.dropdown" | "shown.bs.dropdown" | "hide.bs.dropdown" | "hidden.bs.dropdown";
type BootstrapModalEvent = "show.bs.modal" | "shown.bs.modal" | "hide.bs.modal" |  "hidden.bs.modal";
type BootstrapTooltipEvent = "show.bs.tooltip" | "shown.bs.tooltip" | "hide.bs.tooltip" |  "hidden.bs.tooltip" | "inserted.bs.tooltip";

// --------------------------------------------------------------------------------------
// jQuery
// --------------------------------------------------------------------------------------

interface JQuery<TElement extends Node = HTMLElement> extends Iterable<TElement> {
    alert(action?: "close" | "dispose"): this;

    button(action: "toggle" | "dispose"): this;

    carousel(action: "cycle" | "pause" | number | "prev" | "next" | "dispose"): this;
    carousel(options?: BootstrapCarouselOption): this;

    dropdown(action: "toggle" | "update" | "dispose"): this;
    dropdown(options?: BootstrapDropdownOption): this;

    modal(action: "toggle" | "show" | "hide" | "handleUpdate" | "dispose"): this;
    modal(options?: BootstrapModalOption): this;

    tooltip(action: "show" | "hide" | "toggle" | "dispose" | "enable" | "disable" | "toggleEnabled" | "update"): this;
    tooltip(options?: BootstrapTooltipOption): this;

    on(events: BootstrapCarouselEvent, handler: JQuery.EventHandlerBase<TElement, BootstrapCarouselEventHandler<TElement>>): this;
    on(events: BootstrapAlertEvent | BootstrapDropdownEvent | BootstrapModalEvent | BootstrapTooltipEvent,
        handler: JQuery.EventHandler<TElement>): this;
}

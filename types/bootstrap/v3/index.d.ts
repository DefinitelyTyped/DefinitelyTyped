// Type definitions for Bootstrap 3.3
// Project: http://twitter.github.com/bootstrap/
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

// --------------------------------------------------------------------------
// Some Types and Interfaces
// --------------------------------------------------------------------------

type BootstrapPlacement = "auto" | "top" | "bottom" | "left" | "right";

type BootstrapTrigger = "click" | "hover" | "focus" | "manual" |
    "click hover" | "click focus" | "hover focus" |
    "click hover focus";

type BootstrapDynamicOffset = (elem: JQuery) => number;

interface BootstrapDelay {
    show?: number;
    hide?: number;
}

interface BootstrapOffset {
    top?: number | BootstrapDynamicOffset;
    bottom?: number | BootstrapDynamicOffset;
}

interface BootstrapViewport {
    padding?: number;
    selector: string;
}

interface TooltipInstance<T extends TooltipOptions> {
    options: T;
}

// --------------------------------------------------------------------------------------
// Options Interfaces
// --------------------------------------------------------------------------------------

interface ModalOptions {
    backdrop?: boolean | "static";
    keyboard?: boolean;
    show?: boolean;
    remote?: string;
}

interface ScrollSpyOptions {
    offset?: number;
    target?: string;
}

interface TooltipOptions {
    animation?: boolean;
    container?: string | false;
    delay?: number | BootstrapDelay;
    html?: boolean;
    placement?: BootstrapPlacement | ((this: TooltipInstance<this>, tooltip: HTMLElement, trigger: Element) => BootstrapPlacement);
    selector?: string;
    template?: string;
    title?: string | ((this: Element) => string);
    trigger?: BootstrapTrigger;
    viewport?: string | BootstrapViewport;
}

interface PopoverOptions extends TooltipOptions {
    content?: string | ((this: Element) => string);
}

interface CollapseOptions {
    parent?: string | false;
    toggle?: boolean;
}

interface CarouselOptions {
    interval?: number | false;
    pause?: "hover" | null;
    wrap?: boolean;
    keyboard?: boolean;
}

interface AffixOptions {
    offset?: number | BootstrapOffset;
    target?: string | Node | JQuery | Window;
}

// --------------------------------------------------------------------------------------
// Events
// --------------------------------------------------------------------------------------

interface CarouselEventHandler<TElement> extends JQuery.TriggeredEvent<TElement, undefined, HTMLElement, HTMLElement> {
    /**
     * The direction in which the carousel is sliding.
     */
    direction: "left" | "right";

    /**
     * The DOM element that is being slid into place as the active item.
     */
    relatedTarget: HTMLElement;
}

interface DropdownsEventHandler<TElement> extends JQuery.TriggeredEvent<TElement, undefined, HTMLElement, HTMLElement> {
    /**
     * The toggling anchor element.
     */
    relatedTarget: HTMLElement;
}

interface TapEventHandler<TElement> extends JQuery.TriggeredEvent<TElement, undefined, HTMLElement, HTMLElement> {
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

type AffixEvent = "affix.bs.affix" | "affixed.bs.affix" | "affix-top.bs.affix" | "affixed-top.bs.affix" | "affix-bottom.bs.affix" | "affixed-bottom.bs.affix";
type AlertEvent = "close.bs.alert" | "closed.bs.alert";
type CarouselEvent = "slide.bs.carousel" | "slid.bs.carousel";
type CollapseEvent = "show.bs.collapse" | "shown.bs.collapse" | "hide.bs.collapse" | "hidden.bs.collapse";
type DropdownEvent = "show.bs.dropdown" | "shown.bs.dropdown" | "hide.bs.dropdown" | "hidden.bs.dropdown";
type PopoverEvent = "show.bs.popover" | "shown.bs.popover" | "hide.bs.popover" | "hidden.bs.popover" | "inserted.bs.popover";
type ScrollspyEvent = "activate.bs.scrollspy";
type TapEvent = "show.bs.tab" | "shown.bs.tab" | "hide.bs.tab" | "hidden.bs.tab";
type TooltipEvent = "show.bs.tooltip" | "shown.bs.tooltip" | "hide.bs.tooltip" | "hidden.bs.tooltip" | "inserted.bs.tooltip";

// --------------------------------------------------------------------------------------
// jQuery
// --------------------------------------------------------------------------------------

interface JQuery {
    modal(action?: "toggle" | "show" | "hide" | "handleUpdate"): JQuery;
    modal(options: ModalOptions): JQuery;

    dropdown(action?: "toggle"): JQuery;

    scrollspy(action?: "refresh"): JQuery;
    scrollspy(options: ScrollSpyOptions): JQuery;

    tab(action?: "show"): JQuery;

    tooltip(action?: "show" | "hide" | "toggle" | "destroy"): JQuery;
    tooltip(options: TooltipOptions): JQuery;

    popover(action?: "show" | "hide" | "toggle" | "destroy"): JQuery;
    popover(options: PopoverOptions): JQuery;

    alert(action?: "close"): JQuery;

    button(action?: "toggle" | "reset" | string): JQuery;

    collapse(action?: "toggle" | "show" | "hide"): JQuery;
    collapse(options: CollapseOptions): JQuery;

    carousel(action?: "cycle" | "pause" | number | "prev" | "next"): JQuery;
    carousel(options: CarouselOptions): JQuery;

    affix(action?: "checkPosition"): JQuery;
    affix(options: AffixOptions): JQuery;

    on(events: CarouselEvent, handler: JQuery.EventHandlerBase<HTMLElement, CarouselEventHandler<HTMLElement>>): this;
    on(events: DropdownEvent, handler: JQuery.EventHandlerBase<HTMLElement, DropdownsEventHandler<HTMLElement>>): this;
    on(events: TapEvent, handler: JQuery.EventHandlerBase<HTMLElement, TapEventHandler<HTMLElement>>): this;
    on(
        events: AffixEvent | AlertEvent | CollapseEvent | PopoverEvent | ScrollspyEvent | TooltipEvent,
        handler: JQuery.EventHandler<HTMLElement>
    ): this;

    emulateTransitionEnd(duration: number): JQuery;
}

// --------------------------------------------------------------------------------------
// Other
// --------------------------------------------------------------------------------------

interface TransitionEventNames {
    end: string;
}

interface JQuerySupport {
    transition: boolean | TransitionEventNames;
}

declare module "bootstrap" {
}

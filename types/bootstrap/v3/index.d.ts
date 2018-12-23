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

// Type definitions for Bootstrap 3.3.5
// Project: http://twitter.github.com/bootstrap/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference types="jquery"/>

interface ModalOptions {
    backdrop?: boolean|string;
    keyboard?: boolean;
    show?: boolean;
    remote?: string;
}

interface ModalOptionsBackdropString {
    backdrop?: string; // for "static"
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
    html?: boolean;
    placement?: string | Function;
    selector?: string;
    title?: string | Function;
    trigger?: string;
    template?: string;
    delay?: number | Object;
    container?: string | boolean;
    viewport?: string | Function | Object;
}

interface PopoverOptions {
    animation?: boolean;
    html?: boolean;
    placement?: string | Function;
    selector?: string;
    trigger?: string;
    title?: string | Function;
    template?: string;
    content?: any;
    delay?: number | Object;
    container?: string | boolean;
    viewport?: string | Function | Object;
}

interface CollapseOptions {
    parent?: any;    
    toggle?: boolean;
}

interface CarouselOptions {
    interval?: number;
    pause?: string;
    wrap?: boolean;
    keybord?: boolean;
}

interface TypeaheadOptions {
    source?: any;
    items?: number;
    minLength?: number;
    matcher?: (item: any) => boolean;
    sorter?: (items: any[]) => any[];
    updater?: (item: any) => any;
    highlighter?: (item: any) => string;
}

interface AffixOptions {
    offset?: number | Function | Object;
    target?: any;
}

interface TransitionEventNames {
    end: string;
}

interface JQuery {
    modal(options?: ModalOptions): JQuery;
    modal(options?: ModalOptionsBackdropString): JQuery;
    modal(command: string): JQuery;

    dropdown(): JQuery;
    dropdown(command: string): JQuery;

    scrollspy(command: string): JQuery;
    scrollspy(options?: ScrollSpyOptions): JQuery;

    tab(): JQuery;
    tab(command: string): JQuery;

    tooltip(options?: TooltipOptions): JQuery;
    tooltip(command: string): JQuery;

    popover(options?: PopoverOptions): JQuery;
    popover(command: string): JQuery;

    alert(): JQuery;
    alert(command: string): JQuery;

    button(): JQuery;
    button(command: string): JQuery;

    collapse(options?: CollapseOptions): JQuery;
    collapse(command: string): JQuery;

    carousel(options?: CarouselOptions): JQuery;
    carousel(command: string): JQuery;

    typeahead(options?: TypeaheadOptions): JQuery;

    affix(options?: AffixOptions): JQuery;

    emulateTransitionEnd(duration: number): JQuery;
}

interface JQuerySupport {
    transition: boolean | TransitionEventNames;
}

declare module "bootstrap" {
}

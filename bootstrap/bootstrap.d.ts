// Type definitions for Bootstrap 2.2
// Project: http://twitter.github.com/bootstrap/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface ModalOptions {
    backdrop?: boolean;
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
}

interface TooltipOptions {
    animation?: boolean;
    html?: boolean;
    placement?: any;
    selector?: string;
    title?: any;
    trigger?: string;
    delay?: any;
    container?: any;
}

interface PopoverOptions {
    animation?: boolean;
    html?: boolean;
    placement?: any;
    selector?: string;
    trigger?: string;
    title?: any;
    content?: any;
    delay?: any;
    container?: any;
}

interface CollapseOptions {
    parent?: any;    
    toggle?: boolean;
}

interface CarouselOptions {
    interval?: number;
    pause?: string;
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
    offset?: any;
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
}

declare module "bootstrap" {
}

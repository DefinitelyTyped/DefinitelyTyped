/// <reference types="jquery" />

interface JQueryContextMenuOptions {
    selector: string;
    appendTo?: string | undefined;
    trigger?: string | undefined;
    autoHide?: boolean | undefined;
    delay?: number | undefined;
    determinePosition?: ((menu: JQuery) => void) | undefined;
    position?: ((opt: JQuery, x: number, y: number) => void) | undefined;
    positionSubmenu?: ((menu: JQuery) => void) | undefined;
    zIndex?: number | undefined;
    animation?: {
        duration?: number | undefined;
        show?: string | undefined;
        hide?: string | undefined;
    } | undefined;
    events?: {
        show?: ((options: any) => boolean) | undefined;
        hide?: ((options: any) => boolean) | undefined;
    } | undefined;
    callback?: ((key: any, options: any) => any) | undefined;
    items?: any;
    build?: ((triggerElement: JQuery, e: Event) => any) | undefined;
    reposition?: boolean | undefined;
    className?: string | undefined;
    itemClickEvent?: string | undefined;
}

interface JQueryStatic {
    contextMenu(options?: JQueryContextMenuOptions): JQuery;
    contextMenu(type: string, selector?: any): JQuery;
}

interface JQuery {
    contextMenu(options?: any): JQuery;
}

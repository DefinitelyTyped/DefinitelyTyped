// Type definitions for jQuery contextMenu 1.7.0
// Project: http://medialize.github.com/jQuery-contextMenu/
// Definitions by: Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQueryContextMenuOptions {
    selector: string;
    appendTo?: string;
    trigger?: string;
    autoHide?: boolean;
    delay?: number;
    determinePosition?: (menu: JQuery) => void;
    position?: (opt: JQuery, x: number, y: number) => void;
    positionSubmenu?: (menu: JQuery) => void;
    zIndex?: number;
    animation?: {
        duration?: number;
        show?: string;
        hide?: string;
    };
    events?: {
        show?: () => void;
        hide?: () => void;
    };
    callback?: (key: any, options: any) => any;
    items?: any;
    build?: (triggerElement: JQuery, e: Event) => any;
    reposition?: boolean;
    className?: string;
    itemClickEvent?: string;
}

interface JQueryStatic {
    contextMenu(options?: JQueryContextMenuOptions): JQuery;
    contextMenu(type: string, selector?: any): JQuery;
}

interface JQuery {
    contextMenu(options?: any): JQuery;
}

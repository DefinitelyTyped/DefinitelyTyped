// Type definitions for jQuery contextMenu 1.5.25
// Project: http://medialize.github.com/jQuery-contextMenu/
// Definitions by: Natan Vivo <https://github.com/nvivo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryContextMenuOptions {
    selector: string;
    appendTo?: string;
    trigger?: string;
    autoHide?: boolean;
    delay?: number;
    determinePosition?: (menu) => void;
    position?: (opt, x, y) => void;
    positionSubmenu?: (menu) => void;
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
    build?: (trigger: any, e: Event) => any;
    callback?: (key: any, options: any) => any;
    items: JQueryContextMenuItems;
}

interface JQueryContextMenuItems {
    [index: string]: JQueryContextMenuItemOptions
}

interface JQueryContextMenuItemOptions {
    name: string;
    icon?: string;
    disabled: boolean;
    accesskey?: string;
    items?: JQueryContextMenuItems;
}

interface JQueryStatic {
    contextMenu(options?: JQueryContextMenuOptions): JQuery;
}

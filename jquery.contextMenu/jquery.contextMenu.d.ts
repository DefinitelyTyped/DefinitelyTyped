// Type definitions for jQuery contextMenu 1.6.6
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
    callback?: (key: any, options: any) => any;
    items: any;
}

interface JQueryStatic {
    contextMenu(options?: JQueryContextMenuOptions): JQuery;
    contextMenu(type: string): JQuery;
}

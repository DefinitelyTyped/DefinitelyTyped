// Type definitions for PgwModal 2.0
// Project: http://pgwjs.com/pgwmodal/
// Definitions by: Pine Mizune <https://github.com/pine613>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PgwModalOption {
    content?: string;
    target?: string;
    url?: string;
    title?: string;
    titleBar?: boolean;
    mainClassName?: string;
    backdropClassName?: string;
    maxWidth?: number;
    angular?: boolean;
    modalData?: any;
    ajaxOptions?: any;
    closable?: boolean;
    closeContent?: string;
    closeOnEscape?: boolean;
    closeOnBackgroundClick?: boolean;
    loadingContent?: string;
    errorContent?: string;
    pushContent?: string;
}

interface PgwModalMethod {
    (option: PgwModalOption): boolean;
    (action: string): any;
    (action: "close"): boolean;
    (action: "reposition"): boolean;
    (action: "getData"): any;
    (action: "isOpen"): boolean;
}

interface ZeptoStatic {
    pgwModal: PgwModalMethod;
}


interface JQueryStatic {
    pgwModal: PgwModalMethod;
}

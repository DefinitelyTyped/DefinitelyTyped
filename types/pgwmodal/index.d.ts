interface PgwModalOption {
    content?: string | undefined;
    target?: string | undefined;
    url?: string | undefined;
    title?: string | undefined;
    titleBar?: boolean | undefined;
    mainClassName?: string | undefined;
    backdropClassName?: string | undefined;
    maxWidth?: number | undefined;
    angular?: boolean | undefined;
    modalData?: any;
    ajaxOptions?: any;
    closable?: boolean | undefined;
    closeContent?: string | undefined;
    closeOnEscape?: boolean | undefined;
    closeOnBackgroundClick?: boolean | undefined;
    loadingContent?: string | undefined;
    errorContent?: string | undefined;
    pushContent?: string | undefined;
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

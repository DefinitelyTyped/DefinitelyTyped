// Type definitions for fancyBox 2.1
// Project: https://github.com/fancyapps/fancyBox
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface FancyboxOptions extends FancyboxCallback {
    padding?: any; // number or []
    margin?: any; // number or []
    width?: any; // number or []
    height?: any; // number or []
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    autoSize?: boolean;
    autoHeight?: boolean;
    autoWidth?: boolean;
    autoResize?: boolean;
    autoCenter?: boolean;
    fitToView?: boolean;
    aspectRatio?: boolean;
    topRatio?: number;
    leftRatio?: number;
    scrolling?: string;
    wrapCSS?: string;
    arrows?: boolean;
    closeBtn?: boolean;
    closeClick?: boolean;
    nextClick?: boolean;
    mouseWheel?: boolean;
    autoPlay?: boolean;
    playSpeed?: number;
    preload?: number;
    modal?: boolean;
    loop?: boolean;
    ajax?: any;
    iframe?: any;
    swf?: any;
    keys?: any;
    direction?: any;
    scrollOutside?: boolean;
    index?: number;
    type?: string;
    href?: string;
    content?: string;
    title?: string;
    tpl?: any;

    openEffect?: string;
    closeEffect?: string;
    nextEffect?: string;
    prevEffect?: string;

    openSpeed?: number;
    closeSpeed?: number;
    nextSpeed?: number;
    prevSpeed?: number;

    openEasing?: string;
    closeEasing?: string;
    nextEasing?: string;
    prevEasing?: string;

    openOpacity?: boolean;
    closeOpacity?: boolean;

    openMethod?: string;
    closeMethod?: string;
    nextMethod?: string;
    prevMethod?: string;

    helpers?: any;
    live?: boolean;
    parent?: string;
}

interface FancyboxMethods {
    open(group?: any[], options?: FancyboxOptions): void;
    cancel(): void;
    close(force?: boolean): void;
    play(): void;
    next(): void;
    prev(): void;
    jumpto(index?: number): void;
    reposition(): void;
    update(): void;
    toggle(): void;
    showLoading(): void;
    hideLoading(): void;

    (options: FancyboxOptions): void;
    (selector: string, options?: FancyboxOptions): void;
    (selector: JQuery, options?: FancyboxOptions): void;
    (group?: any[], options?: FancyboxOptions): void;
}

interface FancyboxCallback {
    onCancel?: Function;
    beforeLoad?: Function;
    afterLoad?: Function;
    beforeShow?: Function;
    afterShow?: Function;
    beforeClose?: Function;
    afterClose?: Function;
    onUpdate?: Function;
    onPlayStart?: Function;
    onPlayEnd?: Function;
}

interface FancyboxThumbnailHelperOptions {
    width?: number;
    height?: number;
    source?: any;
    position?: string;
}

interface FancyboxButtonHelperOptions {
    tpl?: string;
    position?: string;
}

interface JQuery {
    fancybox: FancyboxMethods;
}

interface JQueryStatic {
    fancybox: FancyboxMethods;
}

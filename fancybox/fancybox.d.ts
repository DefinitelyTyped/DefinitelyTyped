// Type definitions for fancyBox 2.1
// Project: https://github.com/fancyapps/fancyBox
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

interface FancyboxOptions {
    padding?: any; // number or []
    margin?: any; // number or []
    width?: any; // number or []
    height?: any; // number or []
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    autoSize?: bool;
    autoHeight?: bool;
    autoWidth?: bool;
    autoResize?: bool;
    autoCenter?: bool;
    fitToView?: bool;
    aspectRatio?: bool;
    topRatio?: number;
    leftRatio?: number;
    scrolling?: string;
    wrapCSS?: string;
    arrows?: bool;
    closeBtn?: bool;
    closeClick?: bool;
    nextClick?: bool;
    mouseWheel?: bool;
    autoPlay?: bool;
    playSpeed?: number;
    preload?: number;
    modal?: bool;
    loop?: bool;
    ajax?: any;
    iframe?: any;
    swf?: any;
    keys?: any;
    direction?: any;
    scrollOutside?: bool;
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

    openOpacity?: bool;
    closeOpacity?: bool;

    openMethod?: string;
    closeMethod?: string;
    nextMethod?: string;
    prevMethod?: string;

    helpers?: any;
}

interface FancyboxMethods {
    open(group?: any[], options?: FancyboxOptions);
    cancel();
    close(force?: bool);
    play();
    next();
    prev();
    jumpto(index?: number);
    reposition();
    update();
    toggle();
    showLoading();
    hideLoading();

    (options: FancyboxOptions): void;
    (selector: string, options?: FancyboxOptions): void;
    (selector: JQuery, options?: FancyboxOptions): void;
    (group?: any[], options?: FancyboxOptions): void;
}

interface FancyboxCallback {
    onCancel;
    beforeLoad;
    afterLoad;
    beforeShow;
    afterShow;
    beforeClose;
    afterClose;
    onUpdate;
    onPlayStart;
    onPlayEnd;
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
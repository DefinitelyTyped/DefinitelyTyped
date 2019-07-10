// Type definitions for p-loading 1.2
// Project: http://joseshiru.github.io/p-loading/
// Definitions by: Soner Köksal <https://github.com/renjfk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface PLoadingOptions {
    action?: "show" | "hide" | "destroy";
    maskColor?: string;
    containerHTML?: string;
    containerAttrs?: object;
    containerClass?: string;
    spinnerHTML?: string;
    spinnerAttrs?: object;
    spinnerClass?: string;
    /**
     * @deprecated
     */
    onShowContainer?: ($pluginElement: JQuery, $container: JQuery) => void;
    /**
     * @deprecated
     */
    onHideContainer?: ($pluginElement: JQuery, $container: JQuery) => void;
    /**
     * @deprecated
     */
    onDestroyContainer?: ($container: JQuery) => void;
    hideAnimation?: ($container: JQuery) => void;
    showAnimation?: ($container: JQuery) => void;
    destroyAfterHide?: boolean;
    idPrefix?: string;
    pluginNameSpace?: string;
    useAddOns?: string [];
}

interface PLoading {
    (options: PLoadingOptions): void;

    defaults: PLoadingOptions;
}

interface JQuery {
    ploading: PLoading;
}

interface JQueryStatic {
    ploading: PLoading;
}

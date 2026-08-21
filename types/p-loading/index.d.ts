/// <reference types="jquery" />

interface PLoadingOptions {
    action?: "show" | "hide" | "destroy" | undefined;
    maskColor?: string | undefined;
    containerHTML?: string | undefined;
    containerAttrs?: object | undefined;
    containerClass?: string | undefined;
    spinnerHTML?: string | undefined;
    spinnerAttrs?: object | undefined;
    spinnerClass?: string | undefined;
    /**
     * @deprecated
     */
    onShowContainer?: (($pluginElement: JQuery, $container: JQuery) => void) | undefined;
    /**
     * @deprecated
     */
    onHideContainer?: (($pluginElement: JQuery, $container: JQuery) => void) | undefined;
    /**
     * @deprecated
     */
    onDestroyContainer?: (($container: JQuery) => void) | undefined;
    hideAnimation?: (($container: JQuery) => void) | undefined;
    showAnimation?: (($container: JQuery) => void) | undefined;
    destroyAfterHide?: boolean | undefined;
    idPrefix?: string | undefined;
    pluginNameSpace?: string | undefined;
    useAddOns?: string[] | undefined;
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

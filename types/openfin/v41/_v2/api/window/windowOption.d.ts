import { DownloadPreloadOption } from '../system/download-preload';
export interface WindowOption {
    accelerator?: object | undefined;
    alwaysOnTop?: boolean | undefined;
    api?: object | undefined;
    aspectRatio?: number | undefined;
    autoShow?: boolean | undefined;
    backgroundColor?: string | undefined;
    contentNavigation?: object | undefined;
    contextMenu?: boolean | undefined;
    cornerRounding?: object | undefined;
    customData?: string | undefined;
    customRequestHeaders?: Array<CustomRequestHeaders> | undefined;
    defaultCentered?: boolean | undefined;
    defaultHeight?: number | undefined;
    defaultLeft?: number | undefined;
    defaultTop?: number | undefined;
    defaultWidth?: number | undefined;
    frame?: boolean | undefined;
    hideOnClose?: boolean | undefined;
    icon?: string | undefined;
    maxHeight?: number | undefined;
    maximizable?: boolean | undefined;
    maxWidth?: number | undefined;
    minHeight?: number | undefined;
    minimizable?: boolean | undefined;
    minWidth?: number | undefined;
    name?: string | undefined;
    opacity?: number | undefined;
    preloadScripts?: Array<DownloadPreloadOption> | undefined;
    resizable?: boolean | undefined;
    resizeRegion?: object | undefined;
    saveWindowState?: boolean | undefined;
    shadow?: boolean | undefined;
    showTaskbarIcon?: boolean | undefined;
    smallWindow?: boolean | undefined;
    state?: string | undefined;
    taskbarIconGroup?: string | undefined;
    url?: string | undefined;
    uuid?: string | undefined;
    waitForPageLoad?: boolean | undefined;
}
export interface CustomRequestHeaders {
    urlPatterns: Array<string>;
    headers: Array<object>;
}
export declare type WindowOptionDiff = {
    [key in keyof WindowOption]: {
        oldVal: WindowOption[key];
        newVal: WindowOption[key];
    };
};

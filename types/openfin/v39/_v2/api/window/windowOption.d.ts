import { DownloadPreloadOption } from '../system/download-preload';
export interface WindowOption {
    accelerator?: object;
    alwaysOnTop?: boolean;
    api?: object;
    aspectRatio?: number;
    autoShow?: boolean;
    backgroundColor?: string;
    contentNavigation?: object;
    contextMenu?: boolean;
    cornerRounding?: object;
    customData?: string;
    customRequestHeaders?: Array<CustomRequestHeaders>;
    defaultCentered?: boolean;
    defaultHeight?: number;
    defaultLeft?: number;
    defaultTop?: number;
    defaultWidth?: number;
    frame?: boolean;
    hideOnClose?: boolean;
    icon?: string;
    maxHeight?: number;
    maximizable?: boolean;
    maxWidth?: number;
    minHeight?: number;
    minimizable?: boolean;
    minWidth?: number;
    name?: string;
    opacity?: number;
    preloadScripts?: Array<DownloadPreloadOption>;
    resizable?: boolean;
    resizeRegion?: object;
    saveWindowState?: boolean;
    shadow?: boolean;
    showTaskbarIcon?: boolean;
    smallWindow?: boolean;
    state?: string;
    taskbarIconGroup?: string;
    url?: string;
    uuid?: string;
    waitForPageLoad?: boolean;
}
export interface CustomRequestHeaders {
    urlPatterns: Array<string>;
    headers: Array<object>;
}

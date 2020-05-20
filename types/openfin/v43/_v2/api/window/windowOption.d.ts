import { DownloadPreloadOption } from '../system/download-preload';
import { RGB, ContextMenuSettings } from '../../shapes';
export interface WindowOption {
    accelerator?: object;
    alphaMask?: RGB;
    alwaysOnTop?: boolean;
    api?: object;
    applicationIcon?: string;
    aspectRatio?: number;
    autoShow?: boolean;
    backgroundColor?: string;
    contentNavigation?: object;
    contextMenu?: boolean;
    contextMenuSettings?: ContextMenuSettings;
    cornerRounding?: object;
    customData?: any;
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
export declare type WindowOptionDiff = {
    [key in keyof WindowOption]: {
        oldVal: WindowOption[key];
        newVal: WindowOption[key];
    };
};

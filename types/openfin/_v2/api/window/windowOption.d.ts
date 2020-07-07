import { DownloadPreloadOption } from '../system/download-preload';
import { RGB, ContextMenuSettings, Hotkey } from '../../shapes/shapes';
export interface WindowOption {
    accelerator?: Accelerator;
    alphaMask?: RGB;
    alwaysOnTop?: boolean;
    api?: Api;
    applicationIcon?: string;
    aspectRatio?: number;
    autoShow?: boolean;
    backgroundColor?: string;
    contentNavigation?: ContentNavigation;
    contentRedirect?: ContentRedirect;
    contextMenu?: boolean;
    contextMenuSettings?: ContextMenuSettings;
    cornerRounding?: CornerRounding;
    customContext?: any;
    customData?: any;
    customRequestHeaders?: Array<CustomRequestHeaders>;
    defaultCentered?: boolean;
    defaultHeight?: number;
    defaultLeft?: number;
    defaultTop?: number;
    defaultWidth?: number;
    frame?: boolean;
    hideOnClose?: boolean;
    hotkeys?: Hotkey[];
    icon?: string;
    layout?: GoldenLayout.Config;
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
    resizeRegion?: ResizeRegion;
    saveWindowState?: boolean;
    shadow?: boolean;
    showTaskbarIcon?: boolean;
    showBackgroundImages?: boolean;
    smallWindow?: boolean;
    state?: string;
    taskbarIconGroup?: string;
    url?: string;
    uuid?: string;
    waitForPageLoad?: boolean;
}
export interface CustomRequestHeaders {
    urlPatterns: Array<string>;
    headers: Array<any>;
}
export declare type WindowOptionDiff = {
    [key in keyof WindowOption]: {
        oldVal: WindowOption[key];
        newVal: WindowOption[key];
    };
};
export interface ResizeRegion {
    size?: number;
    bottomRightCorner?: number;
    sides?: {
        top?: boolean;
        bottom?: boolean;
        left?: boolean;
        right?: boolean;
    };
}
export interface Accelerator {
    devtools?: boolean;
    reload?: boolean;
    reloadIgnoringCache?: boolean;
    zoom?: boolean;
}
export interface Api {
    iframe?: {
        crossOriginInjection?: boolean;
        sameOriginInjection?: boolean;
    };
}
export interface ContentNavigation {
    whitelist?: string[];
    blacklist?: string[];
}
export interface ContentRedirect {
    whitelist?: string[];
    blacklist?: string[];
}
export interface CornerRounding {
    height?: number;
    width?: number;
}

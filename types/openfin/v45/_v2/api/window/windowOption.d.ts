import { DownloadPreloadOption } from '../system/download-preload';
import { RGB, ContextMenuSettings } from '../../shapes';
export interface WindowOption {
    accelerator?: Accelerator | undefined;
    alphaMask?: RGB | undefined;
    alwaysOnTop?: boolean | undefined;
    api?: Api | undefined;
    applicationIcon?: string | undefined;
    aspectRatio?: number | undefined;
    autoShow?: boolean | undefined;
    backgroundColor?: string | undefined;
    contentNavigation?: ContentNavigation | undefined;
    contextMenu?: boolean | undefined;
    contextMenuSettings?: ContextMenuSettings | undefined;
    cornerRounding?: CornerRounding | undefined;
    customData?: any;
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
    resizeRegion?: ResizeRegion | undefined;
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
export interface ResizeRegion {
    size?: number | undefined;
    bottomRightCorner?: number | undefined;
    sides?: {
        top?: boolean | undefined;
        bottom?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
    } | undefined;
}
export interface Accelerator {
    devtools?: boolean | undefined;
    reload?: boolean | undefined;
    reloadIgnoringCache?: boolean | undefined;
    zoom?: boolean | undefined;
}
export interface Api {
    iframe?: {
        crossOriginInjection?: boolean | undefined;
        sameOriginInjection?: boolean | undefined;
    } | undefined;
}
export interface ContentNavigation {
    whitelist?: string[] | undefined;
    blacklist?: string[] | undefined;
}
export interface CornerRounding {
    height?: number | undefined;
    width?: number | undefined;
}

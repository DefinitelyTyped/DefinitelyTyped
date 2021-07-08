import { EmitterBase } from '../base';
import { Identity } from '../../identity';
import Transport from '../../transport/transport';
import { WebContentsEventMapping } from '../events/webcontents';
import { PrintOptions, FindInPageOptions, PrinterInfo, Area } from '../window/window';
declare type ImageFormat = 'bmp' | 'jpg' | 'png';
export interface CapturePageOptions {
    area?: Area | undefined;
    format?: ImageFormat | undefined;
    quality?: number | undefined;
}
export declare class WebContents<T extends WebContentsEventMapping> extends EmitterBase<T> {
    entityType: string;
    constructor(wire: Transport, identity: Identity, entityType: string);
    capturePage(options?: CapturePageOptions): Promise<string>;
    executeJavaScript(code: string): Promise<void>;
    getZoomLevel(): Promise<number>;
    setZoomLevel(level: number): Promise<void>;
    navigate(url: string): Promise<void>;
    navigateBack(): Promise<void>;
    navigateForward(): Promise<void>;
    stopNavigation(): Promise<void>;
    reload(ignoreCache?: boolean): Promise<void>;
    print(options?: PrintOptions): Promise<void>;
    findInPage(searchTerm: string, options?: FindInPageOptions): Promise<void>;
    stopFindInPage(action: string): Promise<void>;
    getPrinters(): Promise<PrinterInfo>;
    focus({ emitSynthFocused }?: {
        emitSynthFocused: boolean;
    }): Promise<void>;
    showDeveloperTools(): Promise<void>;
}
export {};

import { EmitterBase } from '../base';
import { Identity } from '../../identity';
import Transport from '../../transport/transport';
import { WebContentsEventMapping } from '../events/webcontents';
export declare class WebContents<T extends WebContentsEventMapping> extends EmitterBase<T> {
    entityType: string;
    constructor(wire: Transport, identity: Identity, entityType: string);
    executeJavaScript(code: string): Promise<void>;
    getZoomLevel(): Promise<number>;
    setZoomLevel(level: number): Promise<void>;
    navigate(url: string): Promise<void>;
    navigateBack(): Promise<void>;
    navigateForward(): Promise<void>;
    stopNavigation(): Promise<void>;
    reload(ignoreCache?: boolean): Promise<void>;
}

import { WebContents } from '../webcontents/webcontents';
import { BaseEventMap } from '../events/base';
import Transport from '../../transport/transport';
import { Identity } from '../../identity';
import { Base } from '../base';
interface AutoResizeOptions {
    /**
     * If true, the view's width will grow and shrink together with the window. false
     * by default.
     */
    width: boolean;
    /**
     * If true, the view's height will grow and shrink together with the window. false
     * by default.
     */
    height: boolean;
}
export interface BrowserViewOptions {
    autoResize?: AutoResizeOptions;
}
export interface BrowserViewCreationOptions extends BrowserViewOptions {
    name: string;
    url: string;
    target: Identity;
    bounds?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
export declare class BrowserViewModule extends Base {
    create(options: BrowserViewCreationOptions): Promise<BrowserView>;
    wrapSync(identity: Identity): BrowserView;
}
export declare class BrowserView extends WebContents<BaseEventMap> {
    identity: Identity;
    constructor(wire: Transport, identity: Identity);
    setBounds: (bounds: any) => Promise<void>;
    getInfo: () => Promise<any>;
}
export {};

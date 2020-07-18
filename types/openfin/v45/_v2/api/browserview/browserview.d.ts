import { WebContents } from '../webcontents/webcontents';
import Transport from '../../transport/transport';
import { Identity } from '../../identity';
import { Base } from '../base';
import { ViewEvents } from '../events/browserview';
import { _Window } from '../window/window';
export interface AutoResizeOptions {
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
    /**
     * If true, the view's x position and width will grow and shrink proportionly with
     * the window. false by default.
     */
    horizontal: boolean;
    /**
     * If true, the view's y position and height will grow and shrink proportinaly with
     * the window. false by default.
     */
    vertical: boolean;
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
export declare class BrowserView extends WebContents<ViewEvents> {
    identity: Identity;
    constructor(wire: Transport, identity: Identity);
    attach: (target: Identity) => Promise<void>;
    /**
    * Destroys the current view
    * @return {Promise.<void>}
    * @tutorial BrowserView.destroy
    */
    destroy: () => Promise<void>;
    show: () => Promise<void>;
    hide: () => Promise<void>;
    setBounds: (bounds: any) => Promise<void>;
    getInfo: () => Promise<any>;
    /**
    * Retrieves the window the view is currently attached to.
    * @experimental
    * @return {Promise.<_Window>}
    * @tutorial BrowserView.getCurrentWindow
    */
    getCurrentWindow: () => Promise<_Window>;
}

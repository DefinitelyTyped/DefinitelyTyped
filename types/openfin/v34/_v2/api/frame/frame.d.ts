import { Base, EmitterBase } from '../base';
import { Identity } from '../../identity';
import Transport from '../../transport/transport';
export declare type EntityType = 'window' | 'iframe' | 'external connection' | 'unknown';
export interface FrameInfo {
    uuid: string;
    name: string;
    entityType: EntityType;
    parent: Identity;
}
export default class _FrameModule extends Base {
    /**
     * Gets a reference to the specified frame. The frame does not have to exist
     * @param {string} uuid - uuid of the frame you want to wrap
     * @param {string} name - name of the frame you want to wrap
     * @return {Promise.<_Frame>}
     */
    wrap(uuid: string, name: string): Promise<_Frame>;
    /**
     * Get a reference to the current frame
     * @return {Promise.<_Frame>}
     */
    getCurrent(): Promise<_Frame>;
}
/**
 * @classdesc Represents a way to interact with `iframes`. Facilitates discovery of current context
 * (iframe or main window) as well as the ability to listen for frame-specific events.
 * @class
 * @alias Frame
 */
export declare class _Frame extends EmitterBase {
    identity: Identity;
    constructor(wire: Transport, identity: Identity);
    /**
     * Returns a frame info object for the represented frame
     * @return {Promise.<FrameInfo>}
     * @tutorial Frame.getInfo
     */
    getInfo(): Promise<FrameInfo>;
    /**
     * Returns a frame info object representing the window that the referenced iframe is
     * currently embedded in
     * @return {Promise.<FrameInfo>}
     * @tutorial Frame.getParentWindow
     */
    getParentWindow(): Promise<FrameInfo>;
}
export interface _Frame {
    on(type: 'connected', listener: (eventType: string) => void): Promise<void>;
    on(type: 'disconnected', listener: (eventType: string) => void): Promise<void>;
}

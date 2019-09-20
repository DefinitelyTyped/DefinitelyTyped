import { Base, EmitterBase } from '../base';
import { Identity } from '../../identity';
import Transport from '../../transport/transport';
import { FrameEvents } from '../events/frame';
export declare type EntityType = 'window' | 'iframe' | 'external connection' | 'unknown';
export interface FrameInfo {
    uuid: string;
    name: string;
    entityType: EntityType;
    parent: Identity;
}
/**
 * @lends Frame
 */
export default class _FrameModule extends Base {
    /**
     * Asynchronously returns a reference to the specified frame. The frame does not have to exist
     * @param {Identity} identity - the identity of the frame you want to wrap
     * @return {Promise.<_Frame>}
     * @tutorial Frame.wrap
     * @static
     */
    wrap(identity: Identity): Promise<_Frame>;
    /**
     * Synchronously returns a reference to the specified frame. The frame does not have to exist
     * @param {Identity} identity - the identity of the frame you want to wrap
     * @return {_Frame}
     * @tutorial Frame.wrapSync
     * @static
     */
    wrapSync(identity: Identity): _Frame;
    /**
     * Asynchronously returns a reference to the current frame
     * @return {Promise.<_Frame>}
     * @tutorial Frame.getCurrent
     * @static
     */
    getCurrent(): Promise<_Frame>;
    /**
     * Synchronously returns a reference to the current frame
     * @return {_Frame}
     * @tutorial Frame.getCurrentSync
     * @static
     */
    getCurrentSync(): _Frame;
}
/**
 * @classdesc Represents a way to interact with `iframes`. Facilitates discovery of current context
 * (iframe or main window) as well as the ability to listen for frame-specific events.
 * @class
 * @alias Frame
 */
export declare class _Frame extends EmitterBase<FrameEvents> {
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

import { _Window } from '../window/window';
import { AnchorType, Bounds } from '../../shapes';
import { Base, EmitterBase } from '../base';
import { ExternalWindowEvents } from '../events/externalWindow';
import { Identity } from '../../identity';
import Transport from '../../transport/transport';
/**
 * @lends ExternalWindow
 */
export default class ExternalWindowModule extends Base {
    /**
     * Asynchronously returns an external window object that represents
     * an existing external window.
     * @param { Identity } identity
     * @return {Promise.<ExternalWindow>}
     * @static
     * @experimental
     */
    wrap(identity: Identity): Promise<ExternalWindow>;
    /**
     * Synchronously returns an external window object that represents an
     * existing external window.
     * This method is intended for debugging / experimentation only and should not be
     * used in production. It will not handle errors gracefully in cases such as an attempt
     * to wrap a non-existent window.
     * Use `ExternalWindow.wrap` instead.
     * @param { Identity } identity
     * @return {ExternalWindow}
     * @static
     * @experimental
     */
    wrapSync(identity: Identity): ExternalWindow;
}
/**
 * @classdesc An ExternalWindow object representing an adopted native window
 * on the system. Allows the developer to call actions on external windows as
 * well as listen to external window events.
 * @class
 * @hideconstructor
 */
export declare class ExternalWindow extends EmitterBase<ExternalWindowEvents> {
    identity: Identity;
    constructor(wire: Transport, identity: Identity);
    /**
     * Brings the external window to the front of the window stack.
     * @return {Promise.<void>}
     * @experimental
     */
    bringToFront(): Promise<void>;
    /**
     * Closes the external window.
     * @return {Promise.<void>}
     * @experimental
    */
    close(): Promise<void>;
    /**
     * Prevents a user from changing an external window's size/position
     * when using the window's frame.
     * @return {Promise.<void>}
     * @experimental
     */
    disableUserMovement(): Promise<void>;
    /**
     * Re-enables user changes to an external window's size/position
     * when using the window's frame.
     * @return {Promise.<void>}
     * @experimental
     */
    enableUserMovement(): Promise<void>;
    /**
     * Flashes the external window’s frame and taskbar icon until stopFlashing is called.
     * @return {Promise.<void>}
     * @experimental
     */
    flash(): Promise<void>;
    /**
     * Gives focus to the external window.
     * @return {Promise.<void>}
     * @emits ExternalWindow#focused
     * @experimental
     */
    focus(): Promise<void>;
    /**
     * Gets the current bounds (top, left, etc.) of the external window.
     * @return {Promise.<Bounds>}
     * @experimental
    */
    getBounds(): Promise<Bounds>;
    /**
     * Retrieves an array containing wrapped external windows that are grouped
     * with this external window. If a window is not in a group an empty array
     * is returned.
     * @return {Promise.<Array<ExternalWindow|_Window>>}
     * @experimental
     */
    getGroup(): Promise<Array<ExternalWindow | _Window>>;
    /**
     * Gets an information object for the window.
     * @return {Promise.<any>}
     * @experimental
     */
    getInfo(): Promise<any>;
    /**
     * Gets an external window's options.
     * @return {Promise.<any>}
     * @experimental
     */
    getOptions(): Promise<any>;
    /**
     * Gets the current state ("minimized", "maximized", or "restored") of
     * the external window.
     * @return {Promise.<string>}
     * @experimental
     */
    getState(): Promise<string>;
    /**
     * Hides the external window.
     * @return {Promise.<void>}
     * @experimental
     */
    hide(): Promise<void>;
    /**
     * Determines if the external window is currently showing.
     * @return {Promise.<boolean>}
     * @experimental
     */
    isShowing(): Promise<boolean>;
    /**
     * Joins the same window group as the specified window.
     * @param { _Window | ExternalWindow } target The window whose group is to be joined
     * @return {Promise.<void>}
     * @experimental
     */
    joinGroup(target: ExternalWindow | _Window): Promise<void>;
    /**
     * Leaves the current window group so that the window can be moved
     * independently of those in the group.
     * @return {Promise.<void>}
     * @experimental
     */
    leaveGroup(): Promise<void>;
    /**
     * Maximizes the external window.
     * @return {Promise.<void>}
     * @experimental
     */
    maximize(): Promise<void>;
    /**
     * Merges the instance's window group with the same window group as the specified window
     * @param { _Window | ExternalWindow } target The window whose group is to be merged with
     * @return {Promise.<void>}
     * @experimental
     */
    mergeGroups(target: ExternalWindow | _Window): Promise<void>;
    /**
     * Minimizes the external window.
     * @return {Promise.<void>}
     * @experimental
     */
    minimize(): Promise<void>;
    /**
     * Moves the external window by a specified amount.
     * @param { number } deltaLeft The change in the left position of the window
     * @param { number } deltaTop The change in the top position of the window
     * @return {Promise.<void>}
     * @experimental
     */
    moveBy(deltaLeft: number, deltaTop: number): Promise<void>;
    /**
     * Moves the external window to a specified location.
     * @param { number } left The left position of the window
     * @param { number } top The top position of the window
     * @return {Promise.<void>}
     * @experimental
     */
    moveTo(left: number, top: number): Promise<void>;
    /**
     * Resizes the external window by a specified amount.
     * @param { number } deltaWidth The change in the width of the window
     * @param { number } deltaHeight The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left".
     * @return {Promise.<void>}
     * @experimental
     */
    resizeBy(deltaWidth: number, deltaHeight: number, anchor: AnchorType): Promise<void>;
    /**
     * Resizes the external window to the specified dimensions.
     * @param { number } width The change in the width of the window
     * @param { number } height The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left".
     * @return {Promise.<void>}
     * @experimental
     */
    resizeTo(width: number, height: number, anchor: AnchorType): Promise<void>;
    /**
     * Restores the external window to its normal state (i.e. unminimized, unmaximized).
     * @return {Promise.<void>}
     * @experimental
     */
    restore(): Promise<void>;
    /**
     * Will bring the external window to the front of the entire stack and
     * give it focus.
     * @return {Promise.<void>}
     * @experimental
     */
    setAsForeground(): Promise<void>;
    /**
     * Sets the external window's size and position.
     * @property { Bounds } bounds
     * @return {Promise.<void>}
     * @experimental
     */
    setBounds(bounds: Bounds): Promise<void>;
    /**
     * Shows the external window if it is hidden.
     * @return {Promise.<void>}
     * @experimental
     */
    show(): Promise<void>;
    /**
     * Shows the external window, if it is hidden, at the specified location.
     * If the toggle parameter is set to true, the external window will
     * alternate between showing and hiding.
     * @param { number } left The left position of the window
     * @param { number } top The top position of the window
     * @return {Promise.<void>}
     * @experimental
     */
    showAt(left: number, top: number): Promise<void>;
    /**
     * Stops the taskbar icon from flashing.
     * @return {Promise.<void>}
     * @experimental
     */
    stopFlashing(): Promise<void>;
    /**
     * Updates the external window using the passed options
     * @param {*} options Changes an external window's options
     * @return {Promise.<void>}
     * @experimental
     */
    updateOptions(options: any): Promise<void>;
}

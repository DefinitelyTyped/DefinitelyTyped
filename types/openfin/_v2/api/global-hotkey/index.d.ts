import { EmitterBase } from '../base';
import Transport from '../../transport/transport';
import { GlobalHotkeyEvents } from '../events/globalHotkey';
export declare const enum nonHotkeyEvents {
    REGISTERED = "registered",
    UNREGISTERED = "unregistered"
}
/**
 * The GlobalHotkey module can register/unregister a global hotkeys.
 * @namespace
 */
export default class GlobalHotkey extends EmitterBase<GlobalHotkeyEvents> {
    constructor(wire: Transport);
    /**
     * Registers a global hotkey with the operating system.
     * @param { string } hotkey a hotkey string
     * @param { Function } listener called when the registered hotkey is pressed by the user.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.register
     */
    register(hotkey: string, listener: (...args: any[]) => void): Promise<void>;
    /**
     * Unregisters a global hotkey with the operating system.
     * @param { string } hotkey a hotkey string
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregister
     */
    unregister(hotkey: string): Promise<void>;
    /**
     * Unregisters all global hotkeys for the current application.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregisterAll
     */
    unregisterAll(): Promise<void>;
    /**
     * Checks if a given hotkey has been registered
     * @param { string } hotkey a hotkey string
     * @return {Promise.<boolean>}
     * @tutorial GlobalHotkey.isRegistered
     */
    isRegistered(hotkey: string): Promise<boolean>;
}

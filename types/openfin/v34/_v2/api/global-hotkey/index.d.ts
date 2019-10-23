import { EmitterBase } from '../base';
import Transport from '../../transport/transport';
/**
 * The GlobalHotkey module can register/unregister a global hotkeys.
 * @namespace
 */
export default class GlobalHotkey extends EmitterBase {
    constructor(wire: Transport);
    /**
     * Registers a global hotkey with the operating system.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.register
     */
    register(hotkey: string, listener: (...args: any[]) => void): Promise<void>;
    /**
     * Unregisters a global hotkey with the operating system.
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
     * @return {Promise.<bookean>}
     * @tutorial GlobalHotkey.isRegistered
     */
    isRegistered(hotkey: string): Promise<boolean>;
}

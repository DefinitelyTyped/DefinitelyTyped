/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class EmitterMap {
    private storage;
    constructor();
    private hashKeys;
    get(keys: EmitterAccessor): EventEmitter;
    has(keys: EmitterAccessor): boolean;
    delete(keys: EmitterAccessor): boolean;
}
export declare type SystemEmitterAccessor = ['system'];
export declare type ApplicationEmitterAccessor = ['application', string];
export declare type WindowEmitterAccessor = ['window', string, string];
export declare type HotkeyEmitterAccessor = ['global-hotkey'];
export declare type EmitterAccessor = SystemEmitterAccessor | ApplicationEmitterAccessor | WindowEmitterAccessor | HotkeyEmitterAccessor | string[];

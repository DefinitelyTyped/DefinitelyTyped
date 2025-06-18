import Particle from "../core/Particle";
import System from "../core/System";
import { Emitter } from "../emitter";

export type Listener = (event: any) => void;
export type EventTarget = Emitter | Particle | System;

/*
 * EventDispatcher
 * Visit http://createjs.com/ for documentation, updates and examples.
 */
export default class EventDispatcher {
    constructor();

    set listeners(listeners: Listener[]);

    get listeners(): Listener[];

    addEventListener(type: string, listener: Listener): Listener;

    removeEventListener(type: string, listener: Listener): void;

    removeAllEventListeners(type: string): void;

    dispatchEvent(eventName: string, eventTarget: EventTarget): void;

    hasEventListener(type: string): boolean;
}

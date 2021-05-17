import { Emitter as BaseEmitter, EmitterMixinDelegateChain } from "../emittermixin";
import EventInfo from "../eventinfo";
import { PriorityString } from "../priorities";
import * as engine from "@ckeditor/ckeditor5-engine";

export interface Emitter extends BaseEmitter {
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: engine.view.observer.DomEventData) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: engine.view.observer.DomEventData) => void): void;
    on: (
        event: string,
        callback: (info: EventInfo<Emitter>, data: engine.view.observer.DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: engine.view.observer.DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(
        emitter?: Emitter,
        event?: string,
        callback?: (info: EventInfo, data: engine.view.observer.DomEventData) => void,
    ): void;
}

declare const DomEmitterMixin: Emitter;

export default DomEmitterMixin;

import { Emitter as BaseEmitter, EmitterMixinDelegateChain } from "../emittermixin";
import EventInfo from "../eventinfo";
import { PriorityString } from "../priorities";

export interface Emitter extends BaseEmitter {
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: Function,
        options?: { priority?: PriorityString | number },
    ): void;
    off(event: string, callback?: Function): void;
    on: (event: string, callback: Function, options?: { priority: PriorityString | number }) => void;
    once(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: Function): void;
}

declare const DomEmitterMixin: Emitter;

export default DomEmitterMixin;

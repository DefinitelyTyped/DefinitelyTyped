import DomEventData from "@ckeditor/ckeditor5-engine/src/view/observer/domeventdata";
import { Emitter as BaseEmitter, EmitterMixinDelegateChain } from "../emittermixin";
import EventInfo from "../eventinfo";
import { PriorityString } from "../priorities";

export interface Emitter extends BaseEmitter {
    listenTo<S extends BaseEmitter | ProxyEmitter, N extends string>(
        emitter: S | Node | Window,
        event: N,
        callback: (info: EventInfo<N, S>, data: DomEventData) => void,
        options?: { useCapture?: boolean; usePassive?: boolean; priority?: PriorityString | number | undefined },
    ): void;

    stopListening<S extends BaseEmitter | ProxyEmitter, N extends string>(
        emitter?: S | Node | Window,
        event?: N,
        callback?: (info: EventInfo<N, S>, data: DomEventData) => void,
    ): void;
}

declare const DomEmitterMixin: Emitter;

export default DomEmitterMixin;

export class ProxyEmitter implements BaseEmitter {
    on<N extends string>(
        event: N,
        callback: (info: EventInfo<N, BaseEmitter>, ...data: unknown[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: (info: EventInfo<N, BaseEmitter>, ...data: unknown[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: (info: EventInfo<N, BaseEmitter>, ...data: unknown[]) => void): void;
    listenTo<S extends BaseEmitter, N extends string>(
        emitter: S,
        event: N,
        callback: (info: EventInfo<N, S>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<S extends BaseEmitter, N extends string>(
        emitter?: S,
        event?: N,
        callback?: (info: EventInfo<N, S>, ...data: unknown[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo<"", BaseEmitter>, ...args: unknown[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: BaseEmitter): void;
    /**
     * Registers a callback function to be executed when an event is fired.
     *
     * It attaches a native DOM listener to the DOM Node. When fired,
     * a corresponding Emitter event will also fire with DOM Event object as an argument.
     */
    attach<N extends string>(
        event: N,
        callback: (info: EventInfo<N, ProxyEmitter>, ...data: unknown[]) => void,
        options?: { useCapture?: boolean; usePassive?: boolean },
    ): void;

    /**
     * Stops executing the callback on the given event.
     */
    detach(event: string): void;
}

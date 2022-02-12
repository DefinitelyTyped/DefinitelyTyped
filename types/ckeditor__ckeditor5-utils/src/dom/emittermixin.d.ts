import ViewDocument from '@ckeditor/ckeditor5-engine/src/view/document';
import { Emitter as BaseEmitter, EmitterMixinDelegateChain } from '../emittermixin';
import EventInfo from '../eventinfo';
import { PriorityString } from '../priorities';

export interface Emitter extends BaseEmitter {
    on<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
        options?: { priority?: PriorityString | number | undefined; useCapture?: boolean; usePassive?: boolean },
    ): void;
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    once<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
        options?: { priority?: PriorityString | number | undefined; useCapture?: boolean; usePassive?: boolean },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    off<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    fire<K extends keyof HTMLElementEventMap>(name: K, event: HTMLElementEventMap[K]): unknown;
    fire(event: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(...events: string[]): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    listenTo<K extends keyof HTMLElementEventMap, E extends BaseEmitter | Node | Window | ViewDocument>(
        emitter: E,
        event: K,
        callback: (this: this, info: EventInfo<E, K>, event: HTMLElementEventMap[K]) => void,
        options?: { priority?: PriorityString | number | undefined; useCapture?: boolean; usePassive?: boolean },
    ): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    stopListening<K extends keyof HTMLElementEventMap, E extends BaseEmitter | Node | Window | ViewDocument>(
        emitter?: E,
        event?: K,
        callback?: (this: this, info: EventInfo<E, K>, event: HTMLElementEventMap[K]) => void,
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
}

declare const DomEmitterMixin: Emitter;

export default DomEmitterMixin;

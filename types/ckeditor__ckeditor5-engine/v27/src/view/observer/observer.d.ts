import { Emitter as DomEmitter, ProxyEmitter } from '@ckeditor/ckeditor5-utils/src/dom/emittermixin';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Document from '../document';
import View from '../view';
import DomEventData from './domeventdata';

export default abstract class Observer implements DomEmitter {
    readonly document: Document;
    readonly isEnabled: boolean;
    readonly view: View;

    constructor(view: View);
    checkShouldIgnoreEventFromTarget(domTarget: Node): boolean;
    destroy(): void;
    disable(): void;
    enable(): void;
    observe(domElement: HTMLElement, name?: string): void;

    listenTo<S extends Emitter | ProxyEmitter, N extends string>(
        emitter: S | Node | Window,
        event: N,
        callback: (info: EventInfo<N, S>, data: DomEventData) => void,
        options?: {
            useCapture?: boolean | undefined;
            usePassive?: boolean | undefined;
            priority?: number | PriorityString | undefined;
        },
    ): void;
    stopListening<S extends Emitter | ProxyEmitter, N extends string>(
        emitter?: Node | Window | S,
        event?: N,
        callback?: (info: EventInfo<N, S>, data: DomEventData) => void,
    ): void;
    on<N extends string>(
        event: N,
        callback: (info: EventInfo<N, Emitter>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: (info: EventInfo<N, Emitter>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: (info: EventInfo<N, Emitter>, ...data: unknown[]) => void): void;
    fire(eventOrInfo: string | EventInfo<'', Emitter>, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Document from "../document";
import View from "../view";
import DomEventData from "./domeventdata";

export default abstract class Observer {
    readonly document: Document;
    readonly isEnabled: boolean;
    readonly view: View;

    constructor(view: View);
    checkShouldIgnoreEventFromTarget(domTarget: Node): boolean;
    destroy(): void;
    disable(): void;
    enable(): void;
    observe(domElement: HTMLElement, name?: string): void;

    listenTo<S extends Emitter, N extends string>(
        emitter: S | Node | Window,
        event: N,
        callback: (info: EventInfo<S, N>, domEvt: Event, ...rest: any[]) => void,
        options?: {
            useCapture?: boolean | undefined;
            usePassive?: boolean | undefined;
            priority?: number | PriorityString | undefined;
        },
    ): void;
    stopListening<S extends Emitter, N extends string>(
        emitter?: Node | Window | S,
        event?: N,
        callback?: (info: EventInfo<S, N>, data: Event, ...rest: any[]) => void,
    ): void;
    on<N extends string>(
        event: N,
        callback: (info: EventInfo<Emitter, N>, domEvt: Event, ...rest: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: (info: EventInfo<Emitter, N>, domEvt: Event, ...rest: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(
        event: N,
        callback?: (info: EventInfo<Emitter, N>, domEvt: Event, ...rest: any[]) => void,
    ): void;
    fire<N extends string>(eventOrInfo: N | EventInfo<Emitter, N>, domEvt: Event, ...rest: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

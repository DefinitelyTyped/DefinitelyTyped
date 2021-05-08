import * as engine from "@ckeditor/ckeditor5-engine";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { Observable as ObservableBase } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import { BindChain } from "../template";
import View from "../view";

interface Observable extends Omit<ObservableBase, "bind"> {
    bind(...bindProperties: string[]): BindChain;
}

export default class TooltipView extends View implements Emitter, Observable {
    position: "s" | "n" | "e" | "w" | "sw" | "se";
    text: string;

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
    off(event: string, callback?: (info: EventInfo, data: engine.view.observer.DomEventData) => void): void;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: engine.view.observer.DomEventData) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    stopListening(
        emitter?: Emitter,
        event?: string,
        callback?: (info: EventInfo, data: engine.view.observer.DomEventData) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

export {};

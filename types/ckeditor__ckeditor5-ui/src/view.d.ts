import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { Observable as ObservableBase } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import * as engine from "@ckeditor/ckeditor5-engine";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import { Locale } from "@ckeditor/ckeditor5-utils";
import Template, { BindChain, TemplateDefinition } from "./template";
import ViewCollection from "./viewcollection";

interface Observable extends Omit<ObservableBase, "bind"> {
    bind(...bindProperties: string[]): BindChain;
}

export default class View implements Emitter, Observable {
    element: HTMLElement | null;
    readonly isRendered: boolean;
    readonly locale?: Locale;
    template: Template;

    constructor(locale?: Locale);
    bindTemplate: BindChain;
    createCollection(views?: Iterable<View>): ViewCollection;
    deregisterChild(children: View | Iterable<View>): void;
    destroy(): void;
    extendTemplate(definition: TemplateDefinition): void;
    registerChild(children: View | Iterable<View>): void;
    render(): void;
    setTemplate(definition: TemplateDefinition | View | Node): void;
    t: Locale["t"];

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

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

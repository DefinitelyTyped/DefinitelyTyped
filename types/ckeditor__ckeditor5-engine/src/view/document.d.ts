import { Collection } from "@ckeditor/ckeditor5-utils";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DocumentSelection from "./documentselection";
import DowncastWriter from "./downcastwriter";
import { BubblingEmitter } from "./observer/bubblingemittermixin";
import DomEventData from "./observer/domeventdata";
import RootEditableElement from "./rooteditableelement";
import { StylesProcessor } from "./stylesmap";

export default class Document implements BubblingEmitter, Emitter, Observable {
    readonly isComposing: boolean;
    readonly isFocused: boolean;
    isReadOnly: boolean;
    readonly roots: Collection<RootEditableElement>;
    readonly selection: DocumentSelection;
    readonly stylesProcessor: StylesProcessor;

    constructor(stylesProcessor: StylesProcessor);
    destroy(): void;
    getRoot(name?: string): RootEditableElement | null;
    registerPostFixer(postFixer: (writer: DowncastWriter) => boolean | void): void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

    on: (
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

export type ChangeType = "children" | "attributes" | "text";

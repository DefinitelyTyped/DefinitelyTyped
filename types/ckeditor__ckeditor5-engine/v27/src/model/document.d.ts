import { Collection } from "@ckeditor/ckeditor5-utils";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DomEventData from "../view/observer/domeventdata";
import Differ from "./differ";
import DocumentSelection from "./documentselection";
import Model from "./model";
import RootElement from "./rootelement";
import Writer from "./writer";

export default class Document implements Emitter {
    readonly differ: Differ;
    readonly graveyard: RootElement;
    readonly history: History;
    readonly model: Model;
    readonly roots: Collection<RootElement>;
    readonly selection: DocumentSelection;
    version: number;

    constructor();
    createRoot(elementName?: string, rootName?: string): RootElement;
    destroy(): void;
    getRoot(name?: string): RootElement | null;
    getRootNames(): string[];
    registerPostFixer(postFixer: (writer: Writer) => void): void;
    toJSON(): Omit<this, "selection" | "model"> & {
        selection: "[engine.model.DocumentSelection]";
        model: "[engine.model.Model]";
    };

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
        options?: { priority?: PriorityString | number | undefined },
    ): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

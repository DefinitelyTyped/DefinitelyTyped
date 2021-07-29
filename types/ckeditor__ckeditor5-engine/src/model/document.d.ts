import { Collection } from "@ckeditor/ckeditor5-utils";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
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

    createRoot(elementName?: string, rootName?: string): RootElement;
    destroy(): void;
    getRoot(name?: string): RootElement | null;
    getRootNames(): string[];
    registerPostFixer(postFixer: (writer: Writer) => void): void;
    toJSON(): Omit<this, "selection" | "model"> & {
        selection: "[engine.model.DocumentSelection]";
        model: "[engine.model.Model]";
    };

    on<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: (info: EventInfo<N>, ...data: unknown[]) => void): void;
    listenTo<S extends Emitter, N extends string>(
        emitter: S,
        event: N,
        callback: (info: EventInfo<N, S>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<S extends Emitter, N extends string>(
        emitter?: S,
        event?: N,
        callback?: (info: EventInfo<N, S>, ...data: unknown[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

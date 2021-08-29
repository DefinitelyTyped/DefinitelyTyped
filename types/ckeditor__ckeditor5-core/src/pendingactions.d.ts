import ContextPlugin from "./contextplugin";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import Editor from "./editor/editor";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { DomEventData } from "@ckeditor/ckeditor5-engine";

export default class PendingActions
    extends ContextPlugin
    implements Emitter, Observable, Iterable<Observable & { message: string }> {
    readonly first: null | (Observable & { message: string });
    readonly hasAny: boolean;

    static pluginName: "PendingActions";

    constructor(editor: Editor);
    [Symbol.iterator](): Iterator<Observable & { message: string }>;
    add(message: string): Observable & { message: string };
    remove(action: Observable & { message: string }): void;

    init(): void;

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
        options?: { priority?: PriorityString | number | undefined },
    ): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PendingActions: PendingActions;
    }
}

import { DomEventData } from "@ckeditor/ckeditor5-engine";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import ContextPlugin from "./contextplugin";
import Editor from "./editor/editor";
import { EditorWithUI } from "./editor/editorwithui";

export default abstract class Plugin implements Emitter, Observable {
    static readonly pluginName?: string | undefined;
    static readonly isContextPlugin: false;
    static readonly requires?: Array<typeof Plugin | typeof ContextPlugin | string> | undefined;

    readonly editor: Editor & EditorWithUI;
    isEnabled: boolean;

    constructor(editor: Editor);
    afterInit?(): Promise<any> | void;
    bind(bindProperties: string): BindChain;
    clearForceDisabled(id: string): void;
    decorate(methodName: string): void;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    destroy(): void | Promise<any>;
    fire<T>(eventOrInfo: string | EventInfo, ...args: T[]): T;
    forceDisabled(id: string): void;
    init?(): Promise<void> | void;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    on: (
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: number | PriorityString },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: number | PriorityString },
    ): void;
    set(name: string, value: unknown): void;
    set(option: Record<string, string>): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(
        emitter?: Emitter,
        event?: string,
        callback?: (info: EventInfo, data: DomEventData) => void,
    ): void;
    unbind(...unbindProperties: string[]): void;
}

// Beware that this defines a class constructor, not the class instance.
export interface PluginInterface<T = Plugin> {
    new (editor: Editor): T;
}

export type LoadedPlugins = Array<typeof Plugin|typeof ContextPlugin>;

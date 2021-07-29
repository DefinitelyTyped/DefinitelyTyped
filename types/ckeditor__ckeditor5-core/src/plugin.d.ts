import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import ContextPlugin from "./contextplugin";
import Editor from "./editor/editor";
import { EditorWithUI } from "./editor/editorwithui";

export default abstract class Plugin implements Observable {
    static readonly pluginName?: string | undefined;
    static readonly isContextPlugin: boolean;
    static readonly requires?: Array<typeof Plugin | typeof ContextPlugin | string> | undefined;

    readonly editor: EditorWithUI;
    isEnabled: boolean;

    afterInit?(): Promise<unknown> | void;
    clearForceDisabled(id: string): void;
    destroy?(): void | Promise<unknown>;
    forceDisabled(id: string): void;
    init?(): Promise<void> | void;

    constructor(editor: Editor);

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

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}

// Beware that this defines a class constructor, not the class instance.
export interface PluginInterface<T = Plugin> {
    new (editor: Editor): T;
}

export type LoadedPlugins = Array<typeof Plugin | typeof ContextPlugin>;

import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import Editor from "./editor/editor";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { DomEventData } from "@ckeditor/ckeditor5-engine";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import ContextPlugin from "./contextplugin";

export default abstract class Plugin implements Emitter, Observable {
    static readonly pluginName?: string;
    static readonly isContextPlugin: boolean;
    static readonly requires?: Array<typeof Plugin | typeof ContextPlugin | string>;

    readonly editor: Editor;
    isEnabled: boolean;

    constructor(editor: Editor);
    afterInit?(): Promise<any> | void;
    bind(bindProperties: string): BindChain;
    clearForceDisabled(id: string): void;
    decorate(methodName: string): void;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    destroy?(): void | Promise<any>;
    fire<T>(eventOrInfo: string | EventInfo, ...args: T[]): T;
    forceDisabled(id: string): void;
    init?(): Promise<void> | void;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: number | PriorityString },
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
// These readonly properties are static properties.
export interface PluginInterface {
    new (editor: Editor): {
        init?(): Promise<void> | void;
        afterInit?(): Promise<void> | void;
        destroy?(): Promise<void> | void;
    };
    readonly pluginName?: string;
    readonly isContextPlugin?: boolean;
    readonly requires?: Array<typeof Plugin | typeof ContextPlugin | string>;
}

export type LoadedPlugins = Array<typeof Plugin|typeof ContextPlugin>;

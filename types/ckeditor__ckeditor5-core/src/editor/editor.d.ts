import { Conversion, DataController, EditingController, Model } from "@ckeditor/ckeditor5-engine";
import Config from "@ckeditor/ckeditor5-utils/src/config";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import Locale from "@ckeditor/ckeditor5-utils/src/locale";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import CommandCollection from "../commandcollection";
import ContextPlugin from "../contextplugin";
import EditingKeystrokeHandler from "../editingkeystrokehandler";
import Plugin, { LoadedPlugins } from "../plugin";
import PluginCollection from "../plugincollection";
import { EditorConfig } from "./editorconfig";

export default abstract class Editor implements Observable {
    readonly commands: CommandCollection;
    readonly config: Config;
    readonly conversion: Conversion;
    readonly data: DataController;
    readonly editing: EditingController;
    isReadOnly: boolean;
    readonly keystrokes: EditingKeystrokeHandler;
    readonly locale: Locale;
    readonly model: Model;
    readonly plugins: PluginCollection;
    readonly state: "initializing" | "ready" | "destroyed";

    static builtinPlugins: Array<typeof Plugin | typeof ContextPlugin | string>;
    static defaultConfig?: EditorConfig | undefined;

    constructor(config?: EditorConfig);
    destroy(): Promise<void>;
    execute(commandName: string, ...args: unknown[]): any;
    focus(): void;
    initPlugins(): Promise<LoadedPlugins>;
    t: Locale["t"];

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

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

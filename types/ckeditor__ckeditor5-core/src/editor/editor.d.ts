import * as engine from "@ckeditor/ckeditor5-engine";
import Config from "@ckeditor/ckeditor5-utils/src/config";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import Locale from "@ckeditor/ckeditor5-utils/src/locale";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import CommandCollection from "../commandcollection";
import EditingKeystrokeHandler from "../editingkeystrokehandler";
import Plugin, { LoadedPlugins } from "../plugin";
import PluginCollection from "../plugincollection";
import { EditorConfig } from "./editorconfig.d";

export default abstract class Editor implements Emitter, Observable {
    readonly commands: CommandCollection;
    readonly config: Config;
    readonly conversion: engine.conversion.Conversion;
    readonly data: engine.controller.DataController;
    readonly editing: engine.controller.EditingController;
    isReadOnly: boolean;
    readonly keystrokes: EditingKeystrokeHandler;
    readonly locale: Locale;
    readonly model: engine.model.Model;
    readonly plugins: PluginCollection;
    readonly state: "initializing" | "ready" | "destroyed";

    static builtinPlugins: Array<typeof Plugin>;
    static defaultConfig: Record<string, unknown>;

    constructor(config?: EditorConfig);
    destroy(): Promise<void>;
    execute(commandName: string, ...args: unknown[]): any;
    focus(): void;
    initPlugins(): Promise<LoadedPlugins>;
    t: Locale["t"];

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

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}

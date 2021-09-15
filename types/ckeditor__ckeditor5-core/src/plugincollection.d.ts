import { DomEventData } from "@ckeditor/ckeditor5-engine";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Context from "./context";
import ContextPlugin from "./contextplugin";
import Editor from "./editor/editor";
import Plugin, { PluginInterface, LoadedPlugins } from "./plugin";

// tslint:disable-next-line:no-empty-interface
export interface Plugins {}

export default class PluginCollection implements Emitter, Iterable<[typeof Plugin, Plugin]> {
    constructor(
        context: Editor | Context,
        availablePlugins?: Array<typeof Plugin>,
        contextPlugins?: Iterable<[typeof Plugin, Plugin]>,
    );

    [Symbol.iterator](): Iterator<[typeof Plugin, Plugin]>;
    destroy(): Promise<void>;

    get<T extends Plugin>(key: PluginInterface<T>): T;
    get<T extends ContextPlugin>(key: PluginInterface<T>): T;
    get<T extends keyof Plugins>(key: T): Plugins[T];
    get(key: string): Plugin | ContextPlugin;

    has(key: PluginInterface | string): boolean;

    init(
        plugins: Array<(() => Plugin) | string>,
        pluginsToRemove: Array<(() => Plugin) | string>,
        pluginsSubstitutions: Array<() => Plugin>,
    ): Promise<LoadedPlugins>;

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

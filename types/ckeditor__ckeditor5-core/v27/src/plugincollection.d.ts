import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Context from "./context";
import ContextPlugin from "./contextplugin";
import Editor from "./editor/editor";
import Plugin, { PluginInterface, LoadedPlugins } from "./plugin";

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
    get(key: string): Plugin | ContextPlugin;

    has(key: PluginInterface | string): boolean;

    init(
        plugins: Array<(() => Plugin) | string>,
        pluginsToRemove: Array<(() => Plugin) | string>,
        pluginsSubstitutions: Array<() => Plugin>,
    ): Promise<LoadedPlugins>;

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

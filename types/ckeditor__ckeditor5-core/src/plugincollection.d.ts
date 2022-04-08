import * as engine from "@ckeditor/ckeditor5-engine";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Context from "./context";
import Editor from "./editor/editor";
import Plugin, { LoadedPlugins } from "./plugin";

export default class PluginCollection implements Emitter, Iterable<[typeof Plugin, Plugin]> {
    constructor(
        context: Editor | Context,
        availablePlugins?: Array<typeof Plugin>,
        contextPlugins?: Iterable<[typeof Plugin, Plugin]>,
    );

    [Symbol.iterator](): Iterator<[typeof Plugin, Plugin]>;
    destroy(): Promise<void>;
    get(key: (() => Plugin) | string): Plugin;
    has(key: (() => Plugin) | string): boolean;
    init(
        plugins: Array<(() => Plugin) | string>,
        pluginsToRemove: Array<(() => Plugin) | string>,
        pluginsSubstitutions: Array<() => Plugin>,
    ): Promise<LoadedPlugins>;

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
}

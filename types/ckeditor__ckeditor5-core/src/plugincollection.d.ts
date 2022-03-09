import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Context from './context';
import ContextPlugin, { ContextPluginInterface } from './contextplugin';
import Editor from './editor/editor';
import Plugin, { PluginInterface, LoadedPlugins } from './plugin';

// tslint:disable-next-line:no-empty-interface
export interface Plugins {}

// prettier-ignore
/**
 * Manages a list of CKEditor plugins, including loading, resolving dependencies and initialization.
 */
export default class PluginCollection implements Emitter, Iterable<[typeof Plugin, Plugin] | [typeof ContextPlugin, ContextPlugin]> {
    /**
     * Creates an instance of the plugin collection class.
     * Allows loading and initializing plugins and their dependencies.
     * Allows providing a list of already loaded plugins. These plugins will not be destroyed along with this collection.
     */
    constructor(
        context: Editor | Context,
        availablePlugins?: Array<typeof Plugin | typeof ContextPlugin>,
        contextPlugins?: Array<[typeof Plugin, Plugin] | [typeof ContextPlugin, ContextPlugin]>,
    );
    /* Iterable interface.
     *
     * Returns `[ PluginConstructor, pluginInstance ]` pairs.
     */
    [Symbol.iterator](): Iterator<[typeof Plugin, Plugin] | [typeof ContextPlugin, ContextPlugin]>;
    /**
     * Gets the plugin instance by its constructor or name.
     *
     *    // Check if 'Clipboard' plugin was loaded.
     *    if ( editor.plugins.has( 'ClipboardPipeline' ) ) {
     *      // Get clipboard plugin instance
     *      const clipboard = editor.plugins.get( 'ClipboardPipeline' );
     *
     *      this.listenTo( clipboard, 'inputTransformation', ( evt, data ) => {
     *        // Do something on clipboard input.
     *      } );
     *    }
     *
     * **Note**: This method will throw an error if a plugin is not loaded. Use `{@link #has editor.plugins.has()}`
     * to check if a plugin is available.
     */
    get<T extends Plugin>(key: PluginInterface<T>): T;
    get<T extends ContextPlugin>(key: ContextPluginInterface<T>): T;
    get<T extends keyof Plugins>(key: T): Plugins[T];
    get(key: string): Plugin | ContextPlugin;
    /**
     * Checks if a plugin is loaded.
     *
     *    // Check if the 'Clipboard' plugin was loaded.
     *    if ( editor.plugins.has( 'ClipboardPipeline' ) ) {
     *      // Now use the clipboard plugin instance:
     *      const clipboard = editor.plugins.get( 'ClipboardPipeline' );
     *
     *      // ...
     *    }
     */
    has(key: PluginInterface | ContextPluginInterface | string): boolean;
    /**
     * Initializes a set of plugins and adds them to the collection.
     */
    init(
        plugins: Array<((() => Plugin) | (() => ContextPlugin)) | string>,
        pluginsToRemove: Array<((() => Plugin) | (() => ContextPlugin)) | string>,
        pluginsSubstitutions: Array<(() => Plugin) | (() => ContextPlugin)>,
    ): Promise<LoadedPlugins>;
    /**
     * Destroys all loaded plugins.
     */
    destroy(): Promise<void>;

    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

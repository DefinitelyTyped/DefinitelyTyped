import * as engine from '@ckeditor/ckeditor5-engine';
import Config from '@ckeditor/ckeditor5-utils/src/config';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import Locale from '@ckeditor/ckeditor5-utils/src/locale';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import CommandCollection from '../commandcollection';
import ContextPlugin from '../contextplugin';
import EditingKeystrokeHandler from '../editingkeystrokehandler';
import Plugin, { LoadedPlugins } from '../plugin';
import PluginCollection from '../plugincollection';
import { EditorConfig } from './editorconfig';

export default abstract class Editor implements Observable {
    constructor(config?: EditorConfig);
    readonly config: Config;
    readonly plugins: PluginCollection;
    readonly locale: Locale;
    t: Locale['t'];
    readonly commands: CommandCollection;
    get state(): 'initializing' | 'ready' | 'destroyed';
    protected set state(value: 'initializing' | 'ready' | 'destroyed');
    get isReadOnly(): boolean;
    protected set isReadOnly(value: boolean);
    readonly model: engine.Model;
    readonly data: engine.DataController;
    readonly editing: engine.EditingController;
    readonly conversion: engine.Conversion;
    readonly keystrokes: EditingKeystrokeHandler;
    initPlugins(): Promise<LoadedPlugins>;
    destroy(): Promise<void>;
    execute(commandName: string, ...args: unknown[]): any;
    focus(): void;

    static builtinPlugins: Array<typeof Plugin | typeof ContextPlugin | string>;
    static defaultConfig?: EditorConfig | undefined;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
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

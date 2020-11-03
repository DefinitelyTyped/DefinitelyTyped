// Type definitions for @ckeditor/ckeditor5-core 11.0
// Project: https://github.com/ckeditor/ckeditor5-core, https://ckeditor.com/ckeditor-5
// Definitions by: denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as engine from "@ckeditor/ckeditor5-engine";
import * as ckutils from "@ckeditor/ckeditor5-utils";

// TODO: depends on other libraries
export interface AlignmentConfig {}
export interface AutosaveConfig {}
export interface CKFinderAdapterConfig {}
export interface CloudServicesConfig {}
export interface FontFamilyConfig {}
export interface FontSizeConfig {}
export interface HeadingConfig {}
export interface HighlightConfig {}
export interface ImageConfig {}
export interface MediaEmbedConfig {}
export interface TypingConfig {}
export interface ComponentFactory {} // CKEditor 5 UI
export interface EditorUIView {} // CKEditor 5 UI

export namespace editor {
    namespace utils {
        // core/editor/utils/attachtoform

        function attachToForm(editor: Editor & ElementApi): void;

        // core/editor/utils/dataapimixin

        const DataApiMixin: DataApi;

        interface DataApi {
            getData(): string;
            setData(data: string): void;
        }

        // core/editor/utils/elementapimixin

        const ElementApiMixin: ElementApi;

        interface ElementApi {
            readonly sourceElement: HTMLElement;
            updateSourceElement(): void;
        }
    }

    // core/editor/editor

    class Editor implements ckutils.Emitter, ckutils.Observable {
        readonly commands: CommandCollection;
        readonly config: ckutils.Config;
        readonly conversion: engine.conversion.Conversion;
        readonly data: engine.controller.DataController;
        readonly editing: engine.controller.EditingController;
        isReadOnly: boolean;
        readonly keystrokes: EditingKeystrokeHandler;
        readonly locale: ckutils.Locale;
        readonly model: engine.model.Model;
        readonly plugins: PluginCollection<Plugin<any>>;
        state: "initializing" | "ready" | "destroyed";

        static builtinPlugins: Array<Plugin<any>>;
        static defaultConfig: object;

        constructor(config?: object);
        destroy(): Promise<void>;
        execute(commandName: string, ...commandParams: any[]): void;
        initPlugins(): Promise<void>;
        t(str: string, values?: string[]): string;

        static create(config: object): Promise<any>;

        // Emitter
        delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
        fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
        listenTo(emitter: ckutils.Emitter, event: string, callback: Function, options?: {priority?: ckutils.PriorityString | number }): void;
        off(event: string, callback?: Function): void;
        on(event: string, callback: Function, options?: {priority: ckutils.PriorityString | number}): void;
        once(event: string, callback: Function, options?: {priority: ckutils.PriorityString | number}): void;
        stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
        stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;

        // Observable
        bind(...bindProperties: string[]): ckutils.BindChain;
        decorate(methodName: string): void;
        set(name: object): void;
        set(name: string, value: any): void;
        unbind(...unbindProperties: string[]): void;
    }

    // core/editor/editorconfig

    interface EditorConfig {
        alignment: AlignmentConfig;
        autosave: AutosaveConfig;
        balloonToolbar: string[];
        blockToolbar: string[];
        ckfinder: CKFinderAdapterConfig;
        cloudServices: CloudServicesConfig;
        fontFamily: FontFamilyConfig;
        fontSize: FontSizeConfig;
        heading: HeadingConfig;
        highlight: HighlightConfig;
        image: ImageConfig;
        language: string;
        mediaEmbed: MediaEmbedConfig;
        plugins: Array<string | Plugin>;
        removePlugins: string[];
        toolbar: string[] | {items: string[]; viewportTopOffset: number; };
        typing: TypingConfig;
    }

    // core/editor/editorui

    class EditorUI implements ckutils.Emitter {
        readonly componentFactory: ComponentFactory;
        readonly editor: Editor;
        readonly focusTracker: ckutils.FocusTracker;
        readonly view: EditorUIView;

        constructor(editor: Editor, view: EditorUIView);
        destroy(): void;
        update(): void;

        // Emitter
        delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
        fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
        listenTo(emitter: ckutils.Emitter, event: string, callback: Function, options?: {priority?: ckutils.PriorityString | number }): void;
        off(event: string, callback?: Function): void;
        on(event: string, callback: Function, options?: {priority: ckutils.PriorityString | number}): void;
        once(event: string, callback: Function, options?: {priority: ckutils.PriorityString | number}): void;
        stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
        stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;
    }

    // core/editor/editorwithui

    interface EditorWithUI {
        readonly element: HTMLElement | null;
        readonly ui: EditorUI;
    }
}

// core/command

export class Command<T = undefined> implements ckutils.Emitter, ckutils.Observable {
    readonly editor: editor.Editor;
    readonly isEnabled: boolean;
    readonly value: T | undefined;

    constructor(editor: editor.Editor);
    destroy(): void;
    execute(): void;
    refresh(): void;

    // Emitter
    delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
    fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
    listenTo(emitter: ckutils.Emitter, event: string, callback: Function, options?: {priority?: ckutils.PriorityString | number }): void;
    off(event: string, callback?: Function): void;
    on(event: string, callback: Function, options?: {priority: ckutils.PriorityString | number}): void;
    once(event: string, callback: Function, options?: {priority: ckutils.PriorityString | number}): void;
    stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
    stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;

    // Observable
    bind(...bindProperties: string[]): ckutils.BindChain;
    decorate(methodName: string): void;
    set(name: object): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;
}

// core/commandcollection

export class CommandCollection {
    constructor();
    [Symbol.iterator](): Iterator<[string, Command]>;
    add(commandName: string, command: Command): void;
    commands(): IterableIterator<Command>;
    destroy(): void;
    execute(commandName: string, ...commandParams: any[]): void;
    get(commandName: string): Command;
    names(): IterableIterator<string>;
}

// core/editingkeystrokehandler

export class EditingKeystrokeHandler extends ckutils.KeystrokeHandler {
    readonly editor: editor.Editor;

    constructor(editor: editor.Editor);
    set(
        keystroke: string | Array<string | number>,
        callback: string | ((keyEvtData: engine.view.observer.KeyEventData, cancel: () => void) => void),
        options?: {priority: ckutils.PriorityString | number}
    ): void;
}

// core/pendingactions

export class PendingActions extends Plugin {
    static readonly pluginName: "PendingActions";

    first: null | ckutils.Observable & {message: string};
    readonly hasAny: boolean;

    [Symbol.iterator](): Iterator<ckutils.Observable & {message: string}>;
    add(message: string): ckutils.Observable & {message: string};
    remove(action: ckutils.Observable & {message: string}): void;
}

// core/plugin

export abstract class Plugin<T = void> implements ckutils.Emitter, ckutils.Observable {
    readonly editor: editor.Editor;

    static readonly pluginName?: string;
    static readonly requires?: Array<new(editor: editor.Editor) => Plugin>;

    constructor(editor: editor.Editor);
    afterInit?(): null | Promise<T>;
    destroy?(): null | Promise<T>;
    init?(): null | Promise<T>;

    // Emitter
    delegate(...events: string[]): ckutils.EmitterMixinDelegateChain;
    fire(eventOrInfo: string | ckutils.EventInfo<ckutils.Emitter>, ...args: any[]): any;
    listenTo(emitter: ckutils.Emitter, event: string, callback: Function, options?: {priority?: ckutils.PriorityString | number }): void;
    off(event: string, callback?: Function): void;
    on(event: string, callback: Function, options?: {priority: ckutils.PriorityString | number}): void;
    once(event: string, callback: Function, options?: {priority: ckutils.PriorityString | number}): void;
    stopDelegating(event?: string, emitter?: ckutils.Emitter): void;
    stopListening(emitter?: ckutils.Emitter, event?: string, callback?: Function): void;

    // Observable
    bind(...bindProperties: string[]): ckutils.BindChain;
    decorate(methodName: string): void;
    set(name: object): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;
}

// PluginInterface, see Plugin

// core/plugincollection

export class PluginCollection<P extends Plugin<any>> {
    constructor(
        editor: editor.Editor,
        availablePlugins?: Array<new(editor: editor.Editor) => P>
    );

    [Symbol.iterator](): Iterator<[new(editor: editor.Editor) => P, P]>;

    destroy(): Promise<Array<P & {destroy(): void | null | Promise<any>}>>;

    get(
        key: string | (new(editor: editor.Editor) => P)
    ): P | undefined;

    load(
        plugins: Array<string | (new(editor: editor.Editor) => P)>,
        removePlugins?: Array<string | (new(editor: editor.Editor) => P)>
    ): Promise<P[]>;
}

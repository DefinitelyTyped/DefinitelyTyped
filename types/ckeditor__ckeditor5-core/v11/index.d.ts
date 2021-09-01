// Type definitions for @ckeditor/ckeditor5-core 11.0
// Project: https://github.com/ckeditor/ckeditor5-core, https://ckeditor.com/ckeditor-5
// Definitions by: denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

import { Conversion, DataController, EditingController, Model } from "@ckeditor/ckeditor5-engine";
import { KeyEventData } from "@ckeditor/ckeditor5-engine/src/view/observer/keyobserver";
import { FocusTracker, KeystrokeHandler, Locale } from "@ckeditor/ckeditor5-utils";
import Config from "@ckeditor/ckeditor5-utils/src/config";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";

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

interface Message extends Observable, Emitter {
    message: string;
}

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

    class Editor implements Emitter, Observable {
        readonly commands: CommandCollection;
        readonly config: Config;
        readonly conversion: Conversion;
        readonly data: DataController;
        readonly editing: EditingController;
        isReadOnly: boolean;
        readonly keystrokes: EditingKeystrokeHandler;
        readonly locale: Locale;
        readonly model: Model;
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
        delegate(...events: string[]): EmitterMixinDelegateChain;
        fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
        listenTo(
            emitter: Emitter,
            event: string,
            callback: Function,
            options?: { priority?: PriorityString | number | undefined },
        ): void;
        off(event: string, callback?: Function): void;
        on(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
        once(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
        stopDelegating(event?: string, emitter?: Emitter): void;
        stopListening(emitter?: Emitter, event?: string, callback?: Function): void;

        // Observable
        bind(...bindProperties: string[]): BindChain;
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
        toolbar: string[] | { items: string[]; viewportTopOffset: number };
        typing: TypingConfig;
    }

    // core/editor/editorui

    class EditorUI implements Emitter {
        readonly componentFactory: ComponentFactory;
        readonly editor: Editor;
        readonly focusTracker: FocusTracker;
        readonly view: EditorUIView;

        constructor(editor: Editor, view: EditorUIView);
        destroy(): void;
        update(): void;

        // Emitter
        delegate(...events: string[]): EmitterMixinDelegateChain;
        fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
        listenTo(
            emitter: Emitter,
            event: string,
            callback: Function,
            options?: { priority?: PriorityString | number | undefined },
        ): void;
        off(event: string, callback?: Function): void;
        on(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
        once(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
        stopDelegating(event?: string, emitter?: Emitter): void;
        stopListening(emitter?: Emitter, event?: string, callback?: Function): void;
    }

    // core/editor/editorwithui

    interface EditorWithUI {
        readonly element: HTMLElement | null;
        readonly ui: EditorUI;
    }
}

// core/command

export class Command<T = undefined> implements Emitter, Observable {
    readonly editor: editor.Editor;
    readonly isEnabled: boolean;
    readonly value: T | undefined;

    constructor(editor: editor.Editor);
    destroy(): void;
    execute(): void;
    refresh(): void;

    // Emitter
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: Function,
        options?: { priority?: PriorityString | number | undefined },
    ): void;
    off(event: string, callback?: Function): void;
    on(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
    once(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: Function): void;

    // Observable
    bind(...bindProperties: string[]): BindChain;
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

export class EditingKeystrokeHandler extends KeystrokeHandler {
    readonly editor: editor.Editor;

    constructor(editor: editor.Editor);
    set(
        keystroke: string | Array<string | number>,
        callback: string | ((keyEvtData: KeyEventData, cancel: () => void) => void),
        options?: { priority: PriorityString | number },
    ): void;
}

// core/pendingactions

export class PendingActions extends Plugin {
    static readonly pluginName: "PendingActions";

    first: null | Message;
    readonly hasAny: boolean;

    [Symbol.iterator](): Iterator<Message>;
    add(message: string): Message;
    remove(action: Message): void;
}

// core/plugin

export abstract class Plugin<T = void> implements Emitter, Observable {
    readonly editor: editor.Editor;

    static readonly pluginName?: string | undefined;
    static readonly requires?: Array<new (editor: editor.Editor) => Plugin> | undefined;

    constructor(editor: editor.Editor);
    afterInit?(): null | Promise<T>;
    destroy?(): null | Promise<T>;
    init?(): null | Promise<T>;

    // Emitter
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: Function,
        options?: { priority?: PriorityString | number | undefined },
    ): void;
    off(event: string, callback?: Function): void;
    on(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
    once(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: Function): void;

    // Observable
    bind(...bindProperties: string[]): BindChain;
    decorate(methodName: string): void;
    set(name: object): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;
}

// PluginInterface, see Plugin

// core/plugincollection

export class PluginCollection<P extends Plugin<any>> {
    constructor(editor: editor.Editor, availablePlugins?: Array<new (editor: editor.Editor) => P>);

    [Symbol.iterator](): Iterator<[new (editor: editor.Editor) => P, P]>;

    destroy(): Promise<Array<P & { destroy(): void | null | Promise<any> }>>;

    get(key: string | (new (editor: editor.Editor) => P)): P | undefined;

    load(
        plugins: Array<string | (new (editor: editor.Editor) => P)>,
        removePlugins?: Array<string | (new (editor: editor.Editor) => P)>,
    ): Promise<P[]>;
}

export {};

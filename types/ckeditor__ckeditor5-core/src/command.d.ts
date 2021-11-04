import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import Editor from './editor/editor';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import { EditorWithUI } from './editor/editorwithui';

export default abstract class Command implements Observable {
    constructor(editor: Editor);
    readonly editor: Editor | EditorWithUI;
    get value(): unknown | undefined;
    protected set value(value: unknown | undefined);
    get isEnabled(): boolean;
    protected set isEnabled(value: boolean);
    /**
     * A flag indicating whether a command execution changes the editor data or not.
     *
     * Commands with `affectsData` set to `false` will not be automatically disabled in
     * {@link module:core/editor/editor~Editor#isReadOnly read-only mode} and
     * {@glink features/read-only#related-features other editor modes} with restricted user write permissions.
     *
     * **Note:** You do not have to set it for your every command. It will be `true` by default.
     */
    readonly affectsData: boolean;
    refresh(): void;
    forceDisabled(id: string): void;
    clearForceDisabled(id: string): void;
    execute(...options: any[]): void;
    destroy(): void;

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

// Beware that this defines a command constructor, not the class instance.
export interface CommandInterface<T = Command> {
    new (editor: Editor): T;
}

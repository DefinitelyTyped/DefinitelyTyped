import { Collection } from '@ckeditor/ckeditor5-utils';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import DocumentSelection from './documentselection';
import DowncastWriter from './downcastwriter';
import { BubblingEmitter } from './observer/bubblingemittermixin';
import RootEditableElement from './rooteditableelement';
import { StylesProcessor } from './stylesmap';

export default class Document implements BubblingEmitter, Observable {
    constructor(stylesProcessor: StylesProcessor);
    readonly selection: DocumentSelection;
    readonly roots: Collection<RootEditableElement>;
    readonly stylesProcessor: StylesProcessor;
    get isReadOnly(): boolean;
    protected set isReadOnly(value: boolean);
    isFocused: boolean;
    isSelecting: boolean;
    get isComposing(): boolean;
    protected set isComposing(value: boolean);
    /**
     * Gets a {@link module:engine/view/document~Document#roots view root element} with the specified name. If the name is not
     * specific "main" root is returned.
     */
    getRoot(name?: string): RootEditableElement | null;
    /**
     * Allows registering post-fixer callbacks. A post-fixers mechanism allows to update the view tree just before it is rendered
     * to the DOM.
     *
     * Post-fixers are executed right after all changes from the outermost change block were applied but
     * before the {@link module:engine/view/view~View#event:render render event} is fired. If a post-fixer callback made
     * a change, it should return `true`. When this happens, all post-fixers are fired again to check if something else should
     * not be fixed in the new document tree state.
     *
     * View post-fixers are useful when you want to apply some fixes whenever the view structure changes. Keep in mind that
     * changes executed in a view post-fixer should not break model-view mapping.
     *
     * The types of changes which should be safe:
     *
     * * adding or removing attribute from elements,
     * * changes inside of {@link module:engine/view/uielement~UIElement UI elements},
     * * {@link module:engine/model/differ~Differ#refreshItem marking some of the model elements to be re-converted}.
     *
     * Try to avoid changes which touch view structure:
     *
     * * you should not add or remove nor wrap or unwrap any view elements,
     * * you should not change the editor data model in a view post-fixer.
     *
     * As a parameter, a post-fixer callback receives a {@link module:engine/view/downcastwriter~DowncastWriter downcast writer}.
     *
     * Typically, a post-fixer will look like this:
     *
     *    editor.editing.view.document.registerPostFixer( writer => {
     *      if ( checkSomeCondition() ) {
     *        writer.doSomething();
     *
     *        // Let other post-fixers know that something changed.
     *        return true;
     *      }
     *    } );
     *
     * Note that nothing happens right after you register a post-fixer (e.g. execute such a code in the console).
     * That is because adding a post-fixer does not execute it.
     * The post-fixer will be executed as soon as any change in the document needs to cause its rendering.
     * If you want to re-render the editor's view after registering the post-fixer then you should do it manually by calling
     * {@link module:engine/view/view~View#forceRender `view.forceRender()`}.
     *
     * If you need to register a callback which is executed when DOM elements are already updated,
     * use {@link module:engine/view/view~View#event:render render event}.
     */
    registerPostFixer(postFixer: (writer: DowncastWriter) => boolean | void): void;
    /**
     * Destroys this instance. Makes sure that all observers are destroyed and listeners removed.
     */
    destroy(): void;

    set(...args: [option: Record<string, unknown>] | [name: string, value: unknown] | [name: string]): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined; context?: string | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined; context?: string | undefined },
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

export type ChangeType = 'children' | 'attributes' | 'text';

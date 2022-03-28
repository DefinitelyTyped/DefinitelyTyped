import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import DowncastDispatcher from '../conversion/downcastdispatcher';
import Mapper from '../conversion/mapper';
import UpcastDispatcher from '../conversion/upcastdispatcher';
import HtmlDataProcessor from '../dataprocessor/htmldataprocessor';
import DocumentFragment from '../model/documentfragment';
import ModelElement from '../model/element';
import Model from '../model/model';
import { SchemaContextDefinition } from '../model/schema';
import ViewDocument from '../view/document';
import ViewDocumentFragment from '../view/documentfragment';
import ViewElement from '../view/element';
import { MatcherPattern } from '../view/matcher';
import { StylesProcessor } from '../view/stylesmap';

/**
 * Controller for the data pipeline. The data pipeline controls how data is retrieved from the document
 * and set inside it. Hence, the controller features two methods which allow to {@link ~DataController#get get}
 * and {@link ~DataController#set set} data of the {@link ~DataController#model model}
 * using given:
 *
 * * {@link module:engine/dataprocessor/dataprocessor~DataProcessor data processor},
 * * downcast converters,
 * * upcast converters.
 *
 * An instance of the data controller is always available in the {@link module:core/editor/editor~Editor#data `editor.data`}
 * property:
 *
 *    editor.data.get( { rootName: 'customRoot' } ); // -> '<p>Hello!</p>'
 * XXX: DataController implements `Observable`, but since it overrides the `set` method,
 * we can't say that it `implements Observable`.
 */
export default class DataController {
    /**
     * Creates a data controller instance.
     */
    constructor(model: Model, stylesProcessor: StylesProcessor);
    /**
     * Data Model
     */
    readonly model: Model;
    /**
     * Mapper used for the conversion. It has no permanent bindings, because they are created when getting data and
     * cleared directly after the data are converted. However, the mapper is defined as a class property, because
     * it needs to be passed to the `DowncastDispatcher` as a conversion API.
     */
    readonly mapper: Mapper;
    /**
     * Downcast dispatcher used by the {@link #get get method}. Downcast converters should be attached to it.
     */
    readonly downcastDispatcher: DowncastDispatcher;
    /**
     * Upcast dispatcher used by the {@link #set set method}. Upcast converters should be attached to it.
     */
    readonly upcastDispatcher: UpcastDispatcher;
    /**
     * The view document used by the data controller.
     */
    readonly viewDocument: ViewDocument;
    /**
     * Styles processor used during the conversion.
     */
    readonly stylesProcessor: StylesProcessor;
    /**
     * Data processor used specifically for HTML conversion.
     */
    readonly htmlProcessor: HtmlDataProcessor;
    /**
     * Data processor used during the conversion.
     * Same instance as {@link #htmlProcessor} by default. Can be replaced at run time to handle different format, e.g. XML or Markdown.
     */
    processor: HtmlDataProcessor;
    /**
     * Returns the model's data converted by downcast dispatchers attached to {@link #downcastDispatcher} and
     * formatted by the {@link #processor data processor}.
     */
    get(options?: { rootName?: string | undefined; trim?: 'empty' | 'none' | undefined }): string;
    /**
     * Returns the content of the given {@link module:engine/model/element~Element model's element} or
     * {@link module:engine/model/documentfragment~DocumentFragment model document fragment} converted by the downcast converters
     * attached to {@link #downcastDispatcher} and formatted by the {@link #processor data processor}.
     */
    stringify(modelElementOrFragment: ModelElement | DocumentFragment, options?: Record<string, any>): string;
    /**
     * Returns the content of the given {@link module:engine/model/element~Element model element} or
     * {@link module:engine/model/documentfragment~DocumentFragment model document fragment} converted by the downcast
     * converters attached to {@link #downcastDispatcher} to a
     * {@link module:engine/view/documentfragment~DocumentFragment view document fragment}.
     */
    toView(
        modelElementOrFragment: ModelElement | DocumentFragment,
        options?: Record<string, any>,
    ): ViewDocumentFragment;
    /**
     * Sets initial input data parsed by the {@link #processor data processor} and
     * converted by the {@link #upcastDispatcher view-to-model converters}.
     * Initial data can be set only to document that {@link module:engine/model/document~Document#version} is equal 0.
     *
     * **Note** This method is {@link module:utils/observablemixin~ObservableMixin#decorate decorated} which is
     * used by e.g. collaborative editing plugin that syncs remote data on init.
     *
     * When data is passed as a string it is initialized on a default `main` root:
     *
     *    dataController.init( '<p>Foo</p>' ); // Initializes data on the `main` root.
     *
     * To initialize data on a different root or multiple roots at once, object containing `rootName` - `data` pairs should be passed:
     *
     *    dataController.init( { main: '<p>Foo</p>', title: '<h1>Bar</h1>' } ); // Initializes data on the `main` and `title` roots.
     */
    init(data: string | Record<string, string>): Promise<void>;
    /**
     * Sets input data parsed by the {@link #processor data processor} and
     * converted by the {@link #upcastDispatcher view-to-model converters}.
     * This method can be used any time to replace existing editor data by the new one without clearing the
     * {@link module:engine/model/document~Document#history document history}.
     *
     * This method also creates a batch with all the changes applied. If all you need is to parse data, use
     * the {@link #parse} method.
     *
     * When data is passed as a string it is set on a default `main` root:
     *
     *    dataController.set( '<p>Foo</p>' ); // Sets data on the `main` root.
     *
     * To set data on a different root or multiple roots at once, object containing `rootName` - `data` pairs should be passed:
     *
     *    dataController.set( { main: '<p>Foo</p>', title: '<h1>Bar</h1>' } ); // Sets data on the `main` and `title` roots.
     *
     * To set the data with preserved undo stacks and set the current change to this stack, use the `{ batchType: 'default' }` option.
     *
     *    dataController.set( '<p>Foo</p>', { batchType: 'default' } ); // Sets data as a new change.
     */
    set(data: string | Record<string, string>, options?: { batchType?: 'default' | 'transparent' }): void;
    /**
     * Returns the data parsed by the {@link #processor data processor} and then converted by upcast converters
     * attached to the {@link #upcastDispatcher}.
     */
    parse(data: string, context?: SchemaContextDefinition): DocumentFragment;
    /**
     * Returns the result of the given {@link module:engine/view/element~Element view element} or
     * {@link module:engine/view/documentfragment~DocumentFragment view document fragment} converted by the
     * {@link #upcastDispatcher view-to-model converters}, wrapped by {@link module:engine/model/documentfragment~DocumentFragment}.
     *
     * When marker elements were converted during the conversion process, it will be set as a document fragment's
     * {@link module:engine/model/documentfragment~DocumentFragment#markers static markers map}.
     */
    toModel(
        viewElementOrFragment: ViewElement | ViewDocumentFragment,
        context?: SchemaContextDefinition,
    ): DocumentFragment;
    /**
     * Adds a style processor normalization rules.
     *
     * You can implement your own rules as well as use one of the available processor rules:
     *
     * * background: {@link module:engine/view/styles/background~addBackgroundRules}
     * * border: {@link module:engine/view/styles/border~addBorderRules}
     * * margin: {@link module:engine/view/styles/margin~addMarginRules}
     * * padding: {@link module:engine/view/styles/padding~addPaddingRules}
     */
    addStyleProcessorRules(
        callback: (stylesProcessor: StylesProcessor) => Record<string, Record<string, string> | string>,
    ): void;
    /**
     * Registers a {@link module:engine/view/matcher~MatcherPattern} on {@link #htmlProcessor htmlProcessor}
     * and {@link #processor processor} for view elements whose content should be treated as a raw data
     * and not processed during conversion from DOM to view elements.
     *
     * The raw data can be later accessed by {@link module:engine/view/element~Element#getCustomProperty view element custom property}
     * `"$rawContent"`.
     */
    registerRawContentMatcher(pattern: MatcherPattern): void;
    /**
     * Removes all event listeners set by the DataController.
     */
    destroy(): void;

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

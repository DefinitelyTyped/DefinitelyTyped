import Observable from "@ckeditor/ckeditor5-utils/src/observablemixin";
import Model from "../model/model";
import { StylesProcessor } from "../view/stylesmap";
import Mapper from "../conversion/mapper";
import DowncastDispatcher from "../conversion/downcastdispatcher";
import UpcastDispatcher from "../conversion/upcastdispatcher";
import ViewDocument from "../view/document";
import HtmlDataProcessor from "../dataprocessor/htmldataprocessor";
import { DataProcessor } from "../dataprocessor/dataprocessor";
import DocumentFragment from "../model/documentfragment";
import Element from "../model/element";
import { MatcherPattern } from "../view/matcher";

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
 *        editor.data.get( { rootName: 'customRoot' } ); // -> '<p>Hello!</p>'
 *
 */
export default class DataController extends Observable {
    /**
     * Creates a data controller instance.
     *
     */
    constructor(model: Model, stylesProcessor: StylesProcessor);

    /**
     * Data model.
     */
    model: Model;
    /**
     * Mapper used for the conversion. It has no permanent bindings, because they are created when getting data and
     * cleared directly after the data are converted. However, the mapper is defined as a class property, because
     * it needs to be passed to the `DowncastDispatcher` as a conversion API.
     */
    mapper: Mapper;

    /**
     * Downcast dispatcher used by the {@link #get get method}. Downcast converters should be attached to it.
     */
    downcastDispatcher: DowncastDispatcher;

    /**
     * Upcast dispatcher used by the {@link #set set method}. Upcast converters should be attached to it.
     *
     */
    upcastDispatcher: UpcastDispatcher;

    /**
     * The view document used by the data controller.
     *
     */
    viewDocument: ViewDocument;

    /**
     * Styles processor used during the conversion.
     *
     */
    stylesProcessor: StylesProcessor;

    /**
     * Data processor used specifically for HTML conversion.
     *
     */
    htmlProcessor: HtmlDataProcessor;

    /**
     * Data processor used during the conversion.
     * Same instance as {@link #htmlProcessor} by default. Can be replaced at run time to handle different format, e.g. XML or Markdown.
     *
     */
    processor: DataProcessor;

    /**
     * Returns the model's data converted by downcast dispatchers attached to {@link #downcastDispatcher} and
     * formatted by the {@link #processor data processor}.
     */
    get(options?: { rootName?: string; trim?: "empty" | "none" }): string;

    /**
     * Returns the content of the given {@link module:engine/model/element~Element model's element} or
     * {@link module:engine/model/documentfragment~DocumentFragment model document fragment} converted by the downcast converters
     * attached to {@link #downcastDispatcher} and formatted by the {@link #processor data processor}.
     */
    stringify(modelElementOrFragment: DocumentFragment | Element, options?: object): string;

    /**
     * Returns the content of the given {@link module:engine/model/element~Element model element} or
     * {@link module:engine/model/documentfragment~DocumentFragment model document fragment} converted by the downcast
     * converters attached to {@link #downcastDispatcher} to a
     * {@link module:engine/view/documentfragment~DocumentFragment view document fragment}.
     *
     * Element or document fragment whose content will be converted.
     * {@link module:engine/conversion/downcastdispatcher~DowncastConversionApi#options} during the conversion process.
     */
    toView(modelElementOrFragment: DocumentFragment | Element, options?: object): string;

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
     *        dataController.init( '<p>Foo</p>' ); // Initializes data on the `main` root.
     *
     * To initialize data on a different root or multiple roots at once, object containing `rootName` - `data` pairs should be passed:
     *
     *        dataController.init( { main: '<p>Foo</p>', title: '<h1>Bar</h1>' } ); // Initializes data on the `main` and `title` roots.
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
     *        dataController.set( '<p>Foo</p>' ); // Sets data on the `main` root.
     *
     * To set data on a different root or multiple roots at once, object containing `rootName` - `data` pairs should be passed:
     *
     *        dataController.set( { main: '<p>Foo</p>', title: '<h1>Bar</h1>' } ); // Sets data on the `main` and `title` roots.
     */
    set(data: string | Record<string, string>): void;

    /**
     * Returns the data parsed by the {@link #processor data processor} and then converted by upcast converters
     * attached to the {@link #upcastDispatcher}.
     *
     * be converted to the model. See: {@link module:engine/conversion/upcastdispatcher~UpcastDispatcher#convert}.
     */
    parse(data: string, context?: string): DocumentFragment;

    /**
     * Returns the result of the given {@link module:engine/view/element~Element view element} or
     * {@link module:engine/view/documentfragment~DocumentFragment view document fragment} converted by the
     * {@link #upcastDispatcher view-to-model converters}, wrapped by {@link module:engine/model/documentfragment~DocumentFragment}.
     *
     * When marker elements were converted during the conversion process, it will be set as a document fragment's
     * {@link module:engine/model/documentfragment~DocumentFragment#markers static markers map}.
     */
    toModel(viewElementOrFragment: Element | DocumentFragment, context?: string): DocumentFragment;

    /**
     * Adds a style processor normalization rules.
     *
     * You can implement your own rules as well as use one of the available processor rules:
     *
     * * background: {@link module:engine/view/styles/background~addBackgroundRules}
     * * border: {@link module:engine/view/styles/border~addBorderRules}
     * * margin: {@link module:engine/view/styles/margin~addMarginRules}
     * * padding: {@link module:engine/view/styles/padding~addPaddingRules}
     *
     */
    addStyleProcessorRules(callback: (styles: StylesProcessor) => void): void;

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
}

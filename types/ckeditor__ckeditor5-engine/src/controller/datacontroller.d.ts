import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DowncastDispatcher from "../conversion/downcastdispatcher";
import Mapper from "../conversion/mapper";
import UpcastDispatcher from "../conversion/upcastdispatcher";
import { DataProcessor } from "../dataprocessor/dataprocessor";
import HtmlDataProcessor from "../dataprocessor/htmldataprocessor";
import DocumentFragment from "../model/documentfragment";
import Element from "../model/element";
import ViewElement from "../view/element";
import Model from "../model/model";
import { SchemaContextDefinition } from "../model/schema";
import Document from "../view/document";
import ViewDocumentFragment from "../view/documentfragment";
import { MatcherPattern } from "../view/matcher";
import DomEventData from "../view/observer/domeventdata";
import { StylesProcessor } from "../view/stylesmap";

export default class DataController implements Emitter, Observable {
    readonly downcastDispatcher: DowncastDispatcher;
    readonly htmlProcessor: HtmlDataProcessor;
    readonly mapper: Mapper;
    readonly model: Model;
    readonly processor: DataProcessor;
    readonly stylesProcessor: StylesProcessor;
    readonly upcastDispatcher: UpcastDispatcher;
    readonly viewDocument: Document;

    constructor(model: Model, stylesProcessor: StylesProcessor);
    addStyleProcessorRules(
        callback: (stylesProcessor: StylesProcessor) => Record<string, Record<string, string> | string>,
    ): void;
    destroy(): void;
    get(options?: { rootName?: string | undefined; trim?: "empty" | "none" | undefined }): string;
    init(data: string | Record<string, string>): Promise<void>;
    parse(data: string, context?: SchemaContextDefinition): DocumentFragment;
    registerRawContentMatcher(pattern: MatcherPattern): void;
    stringify(modelElementOrFragment: Element | DocumentFragment, options?: Record<string, any>): string;
    toModel(
        viewElementOrFragment: ViewElement | ViewDocumentFragment,
        context?: SchemaContextDefinition,
    ): DocumentFragment;
    toView(modelElementOrFragment: Element | DocumentFragment, options?: Record<string, any>): ViewDocumentFragment;

    set(option: Record<string, unknown>|string, options?: {
        batchType?: "default" | "transparent"
    }): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

    on: (
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: PriorityString | number | undefined },
    ): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

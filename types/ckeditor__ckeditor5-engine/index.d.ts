// Type definitions for @ckeditor/ckeditor5-engine 11.0
// Project: https://github.com/ckeditor/ckeditor5-engine, https://ckeditor.com/ckeditor-5
// Definitions by: denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import Collection from "@ckeditor/ckeditor5-utils/src/collection";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { KeystrokeInfo } from "@ckeditor/ckeditor5-utils/src/keyboard";

export namespace controller {
    // engine/controller/datacontroller

    class DataController implements Emitter, Observable {
        readonly downcastDispatcher: conversion.DowncastDispatcher;
        readonly mapper: conversion.Mapper;
        readonly model: model.Model;
        readonly processor: dataprocessor.DataProcessor;
        readonly upcastDispatcher: conversion.UpcastDispatcher;

        constructor(model: model.Model, dataProcessor?: dataprocessor.DataProcessor);
        destroy(): void;
        get(rootName?: string): string;
        init(data: string, rootName?: string): Promise<any>;
        parse(data: string, context?: model.SchemaContextDefinition): model.DocumentFragment;
        stringify(modelElementOrFragment: Element | model.DocumentFragment): string;
        toModel(
            viewElementOrFragment: Element | model.DocumentFragment,
            context?: model.SchemaContextDefinition,
        ): model.DocumentFragment;
        toView(modelElementOrFragment: Element | model.DocumentFragment): model.DocumentFragment;

        // Emitter
        delegate(...events: string[]): EmitterMixinDelegateChain;
        fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
        listenTo(
            emitter: Emitter,
            event: string,
            callback: Function,
            options?: { priority?: PriorityString | number },
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

    // engine/controller/editingcontroller

    class EditingController implements Emitter, Observable {
        readonly downcastDispatcher: conversion.DowncastDispatcher;
        readonly mapper: conversion.Mapper;
        readonly model: model.Model;
        readonly view: view.View;

        constructor(model: model.Model);
        destroy(): void;

        // Emitter
        delegate(...events: string[]): EmitterMixinDelegateChain;
        fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
        listenTo(
            emitter: Emitter,
            event: string,
            callback: Function,
            options?: { priority?: PriorityString | number },
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
}

export namespace conversion {
    // engine/conversion/conversion

    class Conversion {
        constructor();
        attributeToAttribute(definition?: {
            model: string | Object;
            view?: string | Object;
            upcastAlso?: view.MatcherPattern | view.MatcherPattern[];
        }): void;
        attributeToElement(definition: ConverterDefinition): void;
        elementToElement(definition: ConverterDefinition): void;
        for(groupName: string): { add: () => void };
        register(groupName: string, dispatchers: Array<DowncastDispatcher | UpcastDispatcher>): void;
    }

    interface ConverterDefinition {
        converterPriority: PriorityString;
        model: any;
        upcastAlso: view.MatcherPattern | view.MatcherPattern[];
        view: view.ElementDefinition | Object;
    }

    // engine/conversion/downcast-converters

    interface HighlightDescriptor {
        attributes: Object;
        classes: string | string[];
        id: string;
        priority: number;
    }

    // engine/conversion/downcast-selection-converters

    function clearAttributes(): Function;

    function convertCollapsedSelection(): Function;

    function convertRangeSelection(): Function;

    // engine/conversion/downcastdispatcher

    class DowncastDispatcher {
        // TODO
    }

    // engine/conversion/mapper

    class Mapper {
        constructor();
        bindElementToMarker(element: view.Element, name: string): void;
        bindElements(modelElement: model.Element, viewElement: view.Element): void;
        clearBindings(): void;
        getModelLength(viewNode: view.Element): number;
        markerNameToElements(name: string): Set<view.Element> | null;
        registerViewToModelLength(viewElementName: string, lengthCallback: Function): void;
        toModelElement(viewElement: view.Element): model.Element | undefined;
        toModelPosition(viewPosition: view.Position): model.Position;
        toModelRange(viewRange: view.Range): model.Range;
        toViewElement(modelElement: model.Element): view.Element | undefined;
        toViewPosition(modelPosition: model.Position, options?: { isPhantom: boolean }): view.Position;
        toViewRange(modelRange: model.Range): view.Range;
        unbindElementsFromMarkerName(name: string): void;
        unbindModelElement(modelElement: model.Element): void;
        unbindViewElement(viewElement: view.Element): void;
    }

    // engine/conversion/modelconsumable

    class ModelConsumable {
        constructor();
        add(item: model.Item | model.Selection | model.Range, type: string): void;
        consume(item: model.Item | model.Selection | model.Range, type: string): boolean;
        revert(item: model.Item | model.Selection | model.Range, type: string): null | boolean;
        test(item: model.Item | model.Selection | model.Range, type: string): null | boolean;
    }

    // engine/conversion/upcast-converters

    function convertText(): Function;

    function convertToModelFragment(): Function;

    function upcastAttributeToAttribute(config: {
        view: string | { key: string; name: string; value: string | RegExp | Function };
        model: string | { key: string; value: string | Function };
        converterPriority?: PriorityString;
    }): Function;

    function upcastElementToAttribute(config: {
        view: view.MatcherPattern;
        model: string | { key: string; value: string | Function };
        converterPriority?: PriorityString;
    }): Function;

    function upcastElementToElement(config: {
        view: view.MatcherPattern;
        model: string | Element | Function;
        converterPriority?: PriorityString;
    }): Function;

    function upcastElementToMarker(config: {
        view: view.MatcherPattern;
        model: string | Function;
        converterPriority?: PriorityString;
    }): Function;

    // engine/conversion/upcast-selection-converters

    function convertSelectionChange(model: model.Model, mapper: Mapper): Function;

    // engine/conversion/upcastdispatcher

    class UpcastDispatcher {
        // TODO
    }

    interface ViewConversionApi {
        // TODO
    }

    // engine/conversion/viewconsumable

    class ViewConsumable {
        // TODO
    }
}

export namespace dataprocessor {
    // engine/dataprocessor/basichtmlwriter

    class BasicHtmlWriter implements HtmlWriter {
        getHtml(fragment: model.DocumentFragment): string;
    }

    // engine/dataprocessor/dataprocessor

    interface DataProcessor {
        // TODO
    }

    // engine/dataprocessor/htmldataprocessor

    class HtmlDataProcessor implements DataProcessor {
        // TODO
    }

    // engine/dataprocessor/htmlwriter

    interface HtmlWriter {
        getHtml(fragment: model.DocumentFragment): string;
    }

    // engine/dataprocessor/xmldataprocessor

    class XmlDataProcessor implements DataProcessor {
        // TODO
    }
}

export namespace devUtils {
    // engine/dev-utils/enableenginedebug

    class DebugPlugin {}

    function disableEngineDebug(): void;

    function enableEngineDebug(_logger: {
        log: (...arg: any[]) => string;
        error: (...arg: any[]) => string;
    }): DebugPlugin;

    // engine/dev-utils/model

    namespace devmodel {
        function getData(
            model: model.Model,
            options?: {
                withoutSelection?: boolean;
                rootName?: string;
                convertMarkers?: boolean;
            },
        ): string;

        function parse(
            data: string,
            schema: model.Schema,
            batch: model.Batch,
            options?: {
                selectionAttributes?: Object[];
                lastRangeBackward?: boolean;
                context?: model.SchemaContextDefinition;
            },
        ): model.Element | model.Text | model.DocumentFragment | Object;

        function setData(
            model: string,
            data: Object,
            options: {
                rootName?: string;
                selectionAttributes?: Object[];
                lastRangeBackward?: boolean;
                batchType?: string;
            },
        ): void;

        function stringify(
            node: model.RootElement | model.Element | model.Text | model.DocumentFragment,
            selectionOrPositionOrRange: model.Selection | model.Position | model.Range, // TODO optional
            markers: Iterable<model.Marker> | null,
        ): string;
    }

    // engine/dev-utils/operationreplayer

    class OperationReplayer {
        // TODO
    }

    // engine/dev-utils/view

    function getData(
        view: view.View,
        options?: {
            withoutSelection?: boolean;
            rootName?: boolean;
            showType?: boolean;
            showPriority?: boolean;
            showAttributeElementId?: boolean;
            renderUIElements?: boolean;
        },
    ): string;

    function parse(
        data: string,
        options: {
            order?: number[];
            lastRangeBackward?: boolean;
            rootElement?: view.Element | view.DocumentFragment;
            sameSelectionCharacters?: boolean;
        },
    ): view.Text | view.Element | view.DocumentFragment | Object;

    function setData(view: view.View, data: string, options: { rootName?: string }): void;

    function stringify(
        node: view.Text | view.Element | view.DocumentFragment,
        selectionOrPositionOrRange?: view.DocumentSelection | view.Position | view.Range,
        options?: {
            showType?: boolean;
            showPriority?: boolean;
            showAttributeElementId?: boolean;
            ignoreRoot?: boolean;
            sameSelectionCharacters?: boolean;
            renderUIElements?: boolean;
        },
    ): string;
}

export namespace model {
    namespace operation {
        // engine/model/operation/attributeoperation

        class AttributeOperation {
            // TODO
        }

        // engine/model/operation/detachoperation

        class DetachOperation {
            // TODO
        }

        // engine/model/operation/insertoperation

        class InsertOperation {
            // TODO
        }

        // engine/model/operation/markeroperation

        class MarkerOperation {
            // TODO
        }

        // engine/model/operation/mergeoperation

        class MergeOperation {
            // TODO
        }

        // engine/model/operation/moveoperation

        class MoveOperation {
            // TODO
        }

        // engine/model/operation/nooperation

        class NoOperation {
            // TODO
        }

        // engine/model/operation/operation

        class Operation {
            // TODO
        }

        // engine/model/operation/operationfactory

        class OperationFactory {
            // TODO
        }

        // engine/model/operation/renameoperation

        class RenameOperation {
            // TODO
        }

        // engine/model/operation/rootattributeoperation

        class RootAttributeOperation {
            // TODO
        }

        // engine/model/operation/splitoperation

        class SplitOperation {
            // TODO
        }

        // engine/model/operation/transform

        class TransformationContext {
            // TODO
        }

        function transform(a: Operation, b: Operation, context: TransformationContext): Operation[];

        function transformSets(
            operationsA: Operation[],
            operationsB: Operation[],
            options: { document: Document | null; useRelations: boolean; padWithNoOps: boolean },
        ): object;
    }

    namespace utils {
        function deleteContent(
            model: Model,
            selection: Selection | DocumentSelection,
            batch: Batch,
            options?: { leaveUnmerged: boolean; doNotResetEntireContent: boolean },
        ): void;

        function getSelectedContent(model: Model, selection: Selection | DocumentSelection): DocumentFragment;

        function insertContent(
            model: Model,
            content: DocumentFragment | Item,
            selectable?: Selection | DocumentSelection | Position | Element | Iterable<Range> | Range | null,
        ): void;

        function modifySelection(
            model: Model,
            selection: Selection | DocumentSelection,
            options?: { direction?: "forward" | "backward"; unit?: "character" | "codePoint" | "word" },
        ): void;

        function injectSelectionPostFixer(model: Model): void;
    }

    // engine/model/batch

    class Batch {
        // TODO
    }

    // engine/model/differ

    class Differ {
        // TODO
    }

    // engine/model/document

    class Document {
        // TODO
    }

    // engine/model/documentfragment

    class DocumentFragment {
        readonly childCount: number;
        readonly isEmpty: boolean;
        readonly markers: Map<string, Range>;
        readonly maxOffset: number;
        readonly parent: null;
        readonly root: DocumentFragment;

        protected constructor(children?: Node | Iterable<Node>);
        [Symbol.iterator](): Iterator<Node>;
        getChild(index: number): Node | null;
        getChildIndex(node: Node): number | null;
        getChildStartOffset(node: Node): number | null;
        getChildren(): Iterable<Node>;
        getNodeByPath(relativePath: number[]): Node | DocumentFragment;
        getPath(): number[]; /*TS3.0: []*/
        is(type: string): boolean;
        offsetToIndex(offset: number): number;
        toJSON(): Object;
        protected _appendChild(items: Item | Iterable<Item>): void;
        protected _insertChild(index: number, items: Item | Iterable<Item>): void;
        protected _removeChildren(index: number, howMany?: number): Node[];

        static fromJSON(json: object): DocumentFragment;
    }

    // engine/model/documentselection

    class DocumentSelection {
        // TODO
    }

    // engine/model/element

    class Element extends Node {
        readonly childCount: number;
        readonly isEmpty: boolean;
        readonly maxOffset: number;
        readonly name: string;

        protected constructor(
            name: string,
            attrs?: Map<string, any> | ReadonlyArray<[string, any]>,
            children?: Node | Iterable<Node>,
        );
        getChild(index: number): Node;
        getChildIndex(node: Node): number;
        getChildStartOffset(node: Node): number;
        getChildren(): Iterable<Node>;
        getNodeByPath(relativePath: number[]): Node;
        is(type: string, name?: string): boolean;
        offsetToIndex(offset: number): number;
        toJSON(): object;
        protected _appendChild(nodes: Item | Iterable<Item>): void;
        protected _clone(deep?: boolean): Element;
        protected _insertChild(index: number, items: Item | Iterable<Item>): void;
        protected _removeChildren(index: number, howMany?: number): Node[];

        static fromJSON(json: object): Element;
    }

    // engine/model/history

    class History {
        // TODO
    }

    // engine/model/item

    type Item = Node | TextProxy;

    // engine/model/liveposition

    class LivePosition {
        // TODO
    }

    // engine/model/liverange

    class LiveRange {
        // TODO
    }

    // engine/model/markercollection

    class Marker {
        // TODO
    }

    class MarkerCollection {
        // TODO
    }

    // engine/model/model

    class Model implements Emitter, Observable {
        readonly document: Document;
        readonly markers: MarkerCollection;
        readonly schema: Schema;

        applyOperation(operation: operation.Operation): void;
        change(callback: Function): any;
        deleteContent(
            selection: Selection | DocumentSelection,
            batch: Batch,
            options: { leaveUnmerged?: boolean; doNotResetEntireContent?: boolean },
        ): void;
        destroy(): void;
        enqueueChange(batchOrType: Batch | "transparent" | "default", callback: Function): void;
        getSelectedContent(selection: Selection | DocumentSelection): DocumentFragment;
        hasContent(rangeOrElement: Range | Element): boolean;
        insertContent(
            content: DocumentFragment | Item,
            selectable?: Selection | DocumentSelection | Position | Element | Iterable<Range> | Range | null,
        ): void;
        modifySelection(
            selection: Selection | DocumentSelection,
            options?: { direction?: "forward" | "backward"; unit?: "character" | "codePoint" | "word" },
        ): void;

        // Emitter
        delegate(...events: string[]): EmitterMixinDelegateChain;
        fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
        listenTo(
            emitter: Emitter,
            event: string,
            callback: Function,
            options?: { priority?: PriorityString | number },
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

    // engine/model/node

    class Node {
        readonly document: Document | null;
        readonly endOffset: number | null;
        readonly index: number | null;
        readonly nextSibling: Node | null;
        readonly offsetSize: number;
        readonly parent: Element | DocumentFragment | null;
        readonly previousSibling: Node | null;
        readonly root: Node | DocumentFragment;
        readonly startOffset: number | null;

        constructor(attrs?: Map<string, any> | ReadonlyArray<[string, any]>);
        getAncestors(options: { includeSelf: boolean; parentFirst: boolean }): Node[];
        getAttribute(key: string): any /*| undefined*/;
        getAttributeKeys(): Iterable<string>;
        getAttributes(): Iterable<any>;
        getCommonAncestor(node: Node, options?: { includeSelf: boolean }): Element | DocumentFragment | null;
        getPath(): number[];
        hasAttribute(key: string): boolean;

        is(type: "element"): this is Element;
        is(type: "rootElement"): this is RootElement;
        is(type: "text"): this is Text;
        is(type: "textProxy"): this is TextProxy;
        is(type: "documentFragment"): this is DocumentFragment;
        is(type: string, name: string): boolean;

        isAfter(node: Node): boolean;
        isBefore(node: Node): boolean;
        toJSON(): object;
    }

    type NodeSet = Node | TextProxy | string | NodeList | DocumentFragment | Iterable<any>;

    // engine/model/nodelist

    class NodeList implements Iterable<Node> {
        readonly length: number;
        readonly maxOffset: number;

        [Symbol.iterator](): Iterator<Node>;
        getNode(index: number): Node | null;
        getNodeIndex(node: Node): number | null;
        getNodeStartOffset(node: Node): number | null;
        indexToOffset(index: number): number;
        offsetToIndex(offset: number): number;
        toJSON(): Node[];
    }

    // engine/model/position

    class Position {
        readonly index: number;
        readonly isAtEnd: boolean;
        readonly isAtStart: boolean;
        readonly nodeAfter: Node | null;
        readonly nodeBefore: Node;
        offset: number;
        readonly parent: Element;
        readonly path: number[];
        readonly root: Element | DocumentFragment;
        stickiness: PositionStickiness;
        readonly textNode: Text | null;

        constructor(root: Element | DocumentFragment, path: number[], stickiness?: PositionStickiness);
        compareWith(otherPosition: Position): PositionRelation;
        getAncestors(): Item[];
        getCommonAncestor(position: Position): Element | DocumentFragment | null;
        getCommonPath(position: Position): number[];
        getLastMatchingPosition(skip: (t: TreeWalkerValue) => boolean, options: object): Position;
        getParentPath(): number[];
        getShiftedBy(shift: number): Position;
        getTransformedByOperation(operation: operation.Operation): Position;
        hasSameParentAs(position: Position): boolean;
        isAfter(otherPosition: Position): boolean;
        isBefore(otherPosition: Position): boolean;
        isEqual(otherPosition: Position): boolean;
        isTouching(otherPosition: Position): boolean;
        toJSON(): object;

        static createAfter(item: Item): Position;
        static createAt(itemOrPosition: Item | Position, offset?: number | "end" | "before" | "after"): void;
        static createBefore(item: Item): Position;
        static createFromParentAndOffset(parent: Element | DocumentFragment, offset: number): Position;
        static createFromPosition(position: Position): Position;
        static fromJSON(json: object, doc: Document): Position;
    }

    type PositionRelation = "before" | "after" | "same";

    type PositionStickiness = "toNone" | "toNext" | "toPrevious";

    // engine/model/range

    class Range implements Iterable<Node> {
        readonly end: Position;
        isCollapsed: boolean;
        isFlat: boolean;
        root: Element | DocumentFragment;
        readonly start: Position;

        constructor(start: Position, end?: Position);
        [Symbol.iterator](): Iterator<Node>;
        containsItem(item: Item): void;
        containsPosition(position: Position): boolean;
        containsRange(otherRange: Range, loose?: boolean): boolean;
        getCommonAncestor(): Element | DocumentFragment | null;
        getDifference(otherRange: Range): Range[];
        getIntersection(otherRange: Range): Range | null;
        getMinimalFlatRanges(): Range[];
        getPositions(options: object): Iterable<Position>;
        getTransformedByOperation(operation: operation.Operation): Range[];
        getTransformedByOperations(operations: Iterable<operation.Operation>): Range[];
        getWalker(options: {
            startPosition: Position;
            singleCharacters: boolean;
            shallow: boolean;
            ignoreElementEnd: boolean;
        }): void;
        isEqual(otherRange: Range): boolean;
        isIntersecting(otherRange: Range): boolean;
        toJSON(): object;
    }

    function getItems(options: object): Iterable<Item>;

    // engine/model/rootelement

    class RootElement extends Element {
        readonly document: Document | null;
        readonly rootName: string;

        constructor(doc: Document, name: string, rootName: string);
        // TODO: toJSON(): string;
    }

    // engine/model/schema

    class Schema {
        // TODO
    }

    class SchemaContext {
        // TODO
    }

    interface SchemaCompiledItemDefinition {
        name: string;
        allowIn: string | string[];
        allowAttributes: string | string[];
        isBlock: boolean;
        isLimit: boolean;
        isObject: boolean;
    }

    type SchemaContextDefinition = Node | Position | SchemaContext | string | Array<string | Node>;

    interface SchemaContextItem {
        name: string;
        getAttributeKeys: Iterable<string>;
        getAttribute: (key: string) => string;
    }

    interface SchemaItemDefinition {
        allowIn: string | string[];
        allowAttributes: string | string[];
        allowContentOf: string | string[];
        allowWhere: string | string[];
        allowAttributesOf: string | string[];
        inheritTypesFrom: string | string[];
        inheritAllFrom: string | string[];
        isBlock: boolean;
        isLimit: boolean;
        isObject: boolean;
    }

    // engine/model/selection

    class Selection implements Emitter {
        // TODO

        // Emitter
        delegate(...events: string[]): EmitterMixinDelegateChain;
        fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
        listenTo(
            emitter: Emitter,
            event: string,
            callback: Function,
            options?: { priority?: PriorityString | number },
        ): void;
        off(event: string, callback?: Function): void;
        on(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
        once(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
        stopDelegating(event?: string, emitter?: Emitter): void;
        stopListening(emitter?: Emitter, event?: string, callback?: Function): void;
    }

    // engine/model/text

    class Text extends Node {
        readonly data: string;
        protected _data: string;

        protected constructor(data: string, attrs?: Map<string, any> | ReadonlyArray<[string, any]>);
        toJSON(): object;
        protected _clone(): Text;

        static fromJSON(json: object): Text;
    }

    // engine/model/textproxy

    class TextProxy {
        readonly data: string;
        readonly document: Document | null;
        readonly endOffset: number;
        readonly isPartial: boolean;
        readonly offsetInText: number;
        readonly offsetSize: number;
        readonly parent: Element | DocumentFragment | null;
        readonly root: Node | DocumentFragment;
        readonly startOffset: number;
        readonly textNode: Text;

        protected constructor(textNode: Text, offsetInText: number, length: number);
        getAncestors(options: {
            includeSelf?: boolean;
            parentFirst?: boolean;
        }): Array<TextProxy | Element | DocumentFragment>;
        getAttribute(key: string): any;
        getAttributeKeys(): Iterable<string>;
        getAttributes(): Iterable<any>;
        getPath(): number[];
        hasAttribute(key: string): boolean;
        is(type: "textProxy"): this is TextProxy;
        is(type: string): boolean;
    }

    // engine/model/treewalker

    class TreeWalker implements Iterable<TreeWalkerValue> {
        readonly boundaries: Range;
        readonly direction: "backward" | "forward";
        readonly ignoreElementEnd: boolean;
        readonly position: Position;
        readonly shallow: boolean;
        readonly singleCharacters: boolean;

        constructor(options?: {
            direction?: "forward" | "backward";
            boundaries?: Range;
            startPosition: Position;
            singleCharacters?: boolean;
            shallow?: boolean;
            ignoreElementEnd?: boolean;
        });
        [Symbol.iterator](): Iterator<TreeWalkerValue>;
        next(): TreeWalkerValue;
        skip(skip: (t: TreeWalkerValue) => boolean): void;
    }

    interface TreeWalkerValue {
        item: Item;
        length: number;
        nextPosition: Position;
        previousPosition: Position;
        type: TreeWalkerValueType;
    }

    type TreeWalkerValueType = "elementStart" | "elementEnd" | "character" | "text";

    // engine/model/writer

    class Writer {
        // TODO
    }
}

export namespace utils {
    // engine/utils/bindtwostepcarettoattribute

    function bindTwoStepCaretToAttribute(
        view: view.View,
        model: model.Model,
        emitter: Emitter,
        attribute: string,
    ): void;
}

export namespace view {
    namespace observer {
        // engine/view/observer/clickobserver

        class ClickObserver extends DomEventObserver {
            // TODO
        }

        // engine/view/observer/compositionobserver

        class CompositionObserver extends DomEventObserver {
            // TODO
        }

        // engine/view/observer/domeventdata

        class DomEventData {
            // TODO
        }

        // engine/view/observer/domeventobserver

        class DomEventObserver extends Observer {
            readonly domEventType: string | string[];
            useCapture: boolean;

            fire(eventType: string, domEvent: Event, additionalData?: Object): void;
            onDomEvent(): void;
        }

        // engine/view/observer/fakeselectionobserver

        class FakeSelectionObserver extends Observer {
            constructor(view: View);
            destroy(): void;
            observe(): void;
        }

        // engine/view/observer/focusobserver

        class FocusObserver extends DomEventObserver {
            // TODO
        }

        // engine/view/observer/keyobserver

        class KeyEventData extends DomEventData implements KeystrokeInfo {
            // KeystrokeInfo
            altKey?: boolean;
            ctrlKey?: boolean;
            keyCode: number;
            keystroke: number;
            shiftKey?: boolean;
        }

        class KeyObserver extends DomEventObserver {
            // TODO
        }

        // engine/view/observer/mouseobserver

        class MouseObserver extends DomEventObserver {
            // TODO
        }

        // engine/view/observer/mutationobserver

        class MutationObserver extends Observer {
            domConverter: DomConverter;
            renderer: Renderer;
        }

        interface MutatedChildren {
            newChildren: Node[];
            node: Element;
            oldChildren: Node[];
            type: string;
        }

        interface MutatedText {
            newText: string;
            node: Text;
            oldText: string;
            type: string;
        }

        // engine/view/observer/observer

        class Observer {
            readonly document: Document;
            readonly isEnabled: boolean;
            readonly view: View;

            constructor(view: View);
            destroy(): void;
            disable(): void;
            enable(): void;
            observe(domElement: HTMLElement, name: string): void;
        }

        // engine/view/observer/selectionobserver

        class SelectionObserver extends Observer {
            readonly domConverter: DomConverter;
            readonly mutationObserver: MutationObserver;
            readonly selection: DocumentSelection;
        }
    }

    // engine/view/attributeelement

    class AttributeElement extends Element {
        readonly id: string | number;
        readonly priority: number;
        protected _clonesGroup: Set<AttributeElement> | null;
        protected _id: string | number;
        protected _priority: number;

        static DEFAULT_PRIORITY: number;

        protected constructor(
            name: string,
            attrs?: object | Iterable<[string, string]> | Map<string, string>,
            children?: Node | Iterable<Node>,
        );
        getElementsWithSameId(): Set<AttributeElement>;
        getFillerOffset(): number | null;
        isSimilar(otherElement: Element): boolean;
        protected _clone(deep: boolean): AttributeElement;
    }

    // engine/view/containerelement

    class ContainerElement extends Element {
        protected constructor(
            name: string,
            attrs?: object | Iterable<[string, string]> | Map<string, string>,
            children?: Node | Iterable<Node>,
        );
        getFillerOffset(): number | null;
    }

    // engine/view/document

    class Document implements Emitter, Observable {
        readonly isComposing: boolean;
        readonly isFocused: boolean;
        isReadOnly: boolean;
        readonly roots: Collection<RootEditableElement>;
        readonly selection: DocumentSelection;

        constructor();
        getRoot(name?: string): RootEditableElement | null;
        registerPostFixer(postFixer: (downcastWriter: DowncastWriter) => boolean): void;
        protected _callPostFixers(writer: DowncastWriter): void;

        // Emitter
        delegate(...events: string[]): EmitterMixinDelegateChain;
        fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
        listenTo(
            emitter: Emitter,
            event: string,
            callback: Function,
            options?: { priority?: PriorityString | number },
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

    type ChangeType = "children" | "attributes" | "text";

    // engine/view/documentfragment

    class DocumentFragment {
        readonly childCount: number;
        readonly isEmpty: boolean;
        readonly parent: null;
        readonly root: DocumentFragment;
        protected _children: Element[];

        protected constructor(children?: Node | Iterable<Node>);
        [Symbol.iterator](): Iterator<Node>;
        _appendChild(items: Item | Iterable<Item>): number;
        _insertChild(index: number, items: Item | Iterable<Item>): number;
        _removeChildren(index: number, howMany?: number): Node[];
        getChild(index: number): Node;
        getChildIndex(node: Node): number;
        getChildren(): Iterable<Node>;
        is(type: string): boolean;
    }

    // engine/view/documentselection

    class DocumentSelection {
        // TODO
    }

    // engine/view/domconverter

    class DomConverter {
        // TODO
    }

    // engine/view/downcastwriter

    class DowncastWriter {
        // TODO
    }

    // engine/view/editableelement

    class EditableElement extends ContainerElement {
        // TODO
    }

    // engine/view/element

    class Element extends Node {
        readonly childCount: number;
        readonly isEmpty: boolean;
        readonly name: string;
        protected _attrs: Map<string, string>;
        protected _children: Node[];
        protected _classes: Set<string>;
        protected _customProperties: Map<string, any>;
        protected _styles: Map<string, string>;

        protected constructor(
            name: string,
            attrs?: object | Iterable<[string, string]> | Map<string, string>,
            children?: Node | Iterable<Node>,
        );
        _removeChildren(index: number, howMany?: number): Node[];
        _removeClass(className: string[] | string): void;
        findAncestor(patterns: Object | string | RegExp | Function): Element | null;
        getAttribute(key: string): string | undefined;
        getAttributeKeys(): Iterable<string>;
        getAttributes(): Iterable<any>;
        getChild(index: number): Node;
        getChildIndex(node: Node): number;
        getChildren(): Iterable<Node>;
        getClassNames(): Iterable<string>;
        getCustomProperties(): Iterable<any>;
        getCustomProperty(key: string | symbol): any;
        getFillerOffset(): void;
        getIdentity(): string;
        getStyle(property: string): string | undefined;
        getStyleNames(): Iterable<string>;
        hasAttribute(key: string): boolean;
        hasClass(className: string): void;
        hasStyle(property: string): void;
        is(type: string, name?: string): boolean;
        isSimilar(otherElement: Element): boolean;
        protected _addClass(className: string[] | string): void;
        protected _appendChild(items: Item | Iterable<Item>): number;
        protected _clone(deep?: boolean): Element;
        protected _insertChild(index: number, items: Item | Iterable<Item>): number;
        protected _removeAttribute(key: string): boolean;
        protected _removeCustomProperty(key: string | symbol): boolean;
        protected _removeStyle(property: string[] | string): void;
        protected _setAttribute(key: string, value: string): void;
        protected _setCustomProperty(key: string | symbol, value: any): void;
        protected _setStyle(property: string | { [key: string]: string }, value?: string): void;
    }

    // engine/view/elementdefinition

    type ElementDefinition =
        | string
        | {
              attributes?: { [key: string]: string };
              classes?: string | string[];
              name: string;
              priority?: number;
              styles?: { [key: string]: string };
          };

    // engine/view/emptyelement

    class EmptyElement extends Element {
        protected constructor(
            name: string,
            attrs?: object | Iterable<[string, string]> | Map<string, string>,
            children?: Node | Iterable<Node>,
        );
        getFillerOffset(): null;
    }

    // engine/view/filler

    const INLINE_FILLER_LENGTH: number;

    const INLINE_FILLER: string;

    function BR_FILLER(): void;

    function NBSP_FILLER(): void;

    function getDataWithoutFiller(domText: Text): string;

    function injectQuirksHandling(view: View): void;

    function isBlockFiller(domNode: /*TODO globals.*/ Node, blockFiller: Function): boolean;

    function isInlineFiller(domText: /*TODO globals.*/ Text): boolean;

    function startsWithFiller(domNode: /*TODO globals.*/ Text): boolean;

    // engine/view/item

    type Item = Node | TextProxy;

    // engine/view/matcher

    class Matcher {
        // TODO
    }

    type MatcherPattern =
        | ((element: Element) => null | { name: boolean; attribute?: string[] })
        | string
        | RegExp
        | {
              attributes?: { [key: string]: string | RegExp | boolean };
              classes?: string | RegExp | Array<string | RegExp>;
              name?: string | RegExp;
              styles?: { [key: string]: string | RegExp };
          };

    // engine/view/node

    class Node {
        readonly document: Document | null;
        readonly index: number | null;
        readonly nextSibling: Node | null;
        readonly parent: Element | DocumentFragment | null;
        readonly previousSibling: Node | null;
        readonly root: Node | DocumentFragment;

        constructor();
        _fireChange(type: ChangeType, node: Node): void;
        getAncestors(options: { includeSelf: boolean; parentFirst?: boolean }): Array<Element | DocumentFragment>;
        getCommonAncestor(node: Node, options: { includeSelf?: boolean }): Element | DocumentFragment | null;
        getPath(): number[];

        is(type: "element"): this is Element;
        is(type: "containerElement"): this is ContainerElement;
        is(type: "attributeElement"): this is AttributeElement;
        is(type: "emptyElement"): this is EmptyElement;
        is(type: "uiElement"): this is UIElement;
        is(type: "documentFragment"): this is DocumentFragment;
        is(type: "text"): this is Text;
        is(type: "textProxy"): this is TextProxy;
        is(type: string, name: string): boolean;

        isAfter(node: Node): boolean;
        isBefore(node: Node): boolean;
        isSimilar(otherElement: Node): boolean;
        toJSON(): object;
        protected _clone(): Node;
        protected _remove(): void;
    }

    // engine/view/placeholder

    function attachPlaceholder(view: View, element: Element, placeholderText: string, checkFunction?: Function): void;

    function detachPlaceholder(view: View, element: Element): void;

    // engine/view/position

    class Position {
        // TODO
    }

    type PositionRelation = "before" | "after" | "same" | "different";

    // engine/view/range

    class Range {
        // TODO
    }

    // engine/view/renderer

    class Renderer {
        // TODO
    }

    // engine/view/rooteditableelement

    class RootEditableElement extends EditableElement {
        // TODO
    }

    // engine/view/selection

    class Selection {
        // TODO
    }

    // engine/view/text

    class Text extends Node {
        readonly data: string;
        protected _data: string;
        protected _textData: string;

        protected constructor(data: string);
        isSimilar(otherNode: Text): boolean;
        protected _clone(): Text;
    }

    // engine/view/textproxy

    class TextProxy {
        readonly data: string;
        readonly document: Document | null;
        readonly isPartial: boolean;
        readonly offsetInText: number;
        readonly offsetSize: number;
        readonly parent: Element | DocumentFragment | null;
        readonly root: Node | DocumentFragment;
        readonly textNode: Text;

        protected constructor(textNode: Text, offsetInText: number, length: number);
        getAncestors(options: {
            includeSelf?: boolean;
            parentFirst?: boolean;
        }): Array<Text | Element | DocumentFragment>;
        is(type: "textProxy"): this is TextProxy;
        is(type: string): boolean;
    }

    // engine/view/treewalker

    class TreeWalker {
        readonly boundaries: Range;
        readonly direction: TreeWalkerDirection;
        readonly ignoreElementEnd: boolean;
        readonly position: Position;
        readonly shallow: boolean;
        readonly singleCharacters: boolean;

        constructor(options: {
            boundaries?: Range;
            startPosition?: Position;
            direction?: TreeWalkerDirection;
            singleCharacters?: boolean;
            shallow?: boolean;
            ignoreElementEnd?: boolean;
        });
        [Symbol.iterator](): Iterator<TreeWalkerValue>;
        next(): TreeWalkerValue;
        skip(skip: (treeWalkerValue: TreeWalkerValue) => boolean): void;
    }

    type TreeWalkerDirection = "forward" | "backward";

    interface TreeWalkerValue {
        item: Item;
        length: number;
        nextPosition: Position;
        previousPosition: Position;
        type: TreeWalkerValueType;
    }

    type TreeWalkerValueType = "elementStart" | "elementEnd" | "text";

    // engine/view/uielement

    class UIElement extends Element {
        protected constructor(
            name: string,
            attrs?: object | Iterable<[string, string]> | Map<string, string>,
            children?: Node | Iterable<Node>,
        );
        getFillerOffset(): null;
        render(domDocument: /*TODO: globals.*/ Document): HTMLElement;
        toDomElement(domDocument: /*TODO: globals.*/ Document): HTMLElement;
    }

    // engine/view/upcastwriter

    class UpcastWriter {
        // TODO
    }

    // engine/view/view

    class View implements Emitter, Observable {
        // TODO

        // Emitter
        delegate(...events: string[]): EmitterMixinDelegateChain;
        fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
        listenTo(
            emitter: Emitter,
            event: string,
            callback: Function,
            options?: { priority?: PriorityString | number },
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
}

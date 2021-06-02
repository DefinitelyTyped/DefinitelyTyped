import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DomEventData from "../view/observer/domeventdata";
import DocumentSelection from "./documentselection";
import Element from "./element";
import { Item } from "./item";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import Selection from "./selection";
import Writer from "./writer";

export default class Schema implements Emitter, Observable {
    addAttributeCheck(callback: (context: SchemaContext, name: string) => boolean): void;
    addChildCheck(callback: (context: SchemaContext, item: SchemaCompiledItemDefinition) => boolean): void;
    checkAttribute(context: SchemaContextDefinition, attributeName: string): boolean;
    checkAttributeInSelection(selection: Selection | DocumentSelection, attribute: string): boolean;
    checkChild(context: SchemaContextDefinition, def: Node | string): void;
    checkMerge(positionOrBaseElement: Position | Element, elementToMerge: Element): boolean;
    createContext(context: SchemaContextDefinition): SchemaContext;
    extend(itemName: string, definition: SchemaItemDefinition): void;
    findAllowedParent(position: Position, node: Node | string): Element | null;
    getAttributeProperties(attributeName: string): AttributeProperties;
    getDefinition(item: Item | SchemaContextItem | string): SchemaCompiledItemDefinition;
    getDefinitions(): Record<string, SchemaCompiledItemDefinition>;
    getLimitElement(selectionOrRangeOrPosition: Selection | DocumentSelection | Range | Position): Element;
    getNearestSelectionRange(position: Position, direction?: "both" | "forward" | "backward"): Range | null;
    getValidRanges(ranges: Range[], attribute: string): Generator<Range>;
    isBlock(item: Item | SchemaContextItem | string): boolean;
    isContent(item: Item | SchemaContextItem | string): boolean;
    isInline(item: Item | SchemaContextItem | string): boolean;
    isLimit(item: Item | SchemaContextItem | string): boolean;
    isObject(item: Item | SchemaContextItem | string): boolean;
    isRegistered(item: Item | SchemaContextItem | string): boolean;
    isSelectable(item: Item | SchemaContextItem | string): boolean;
    register(itemName: string, definition: SchemaItemDefinition): void;
    removeDisallowedAttributes(nodes: Iterable<Node>, writer: Writer): void;
    setAttributeProperties(attributeName: string, properties: AttributeProperties): void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
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
        options?: { priority?: PriorityString | number },
    ): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

export interface SchemaItemDefinition {
    allowAttributes?: string | string[];
    allowAttributesOf?: string | string[];
    allowContentOf?: string | string[];
    allowIn?: string | string[];
    allowWhere?: string | string[];
    inheritAllFrom?: string;
    inheritTypesFrom?: string | string[];
    isblock?: boolean;
    isContent?: boolean;
    isInline?: boolean;
    isLimit?: boolean;
    isObject?: boolean;
    isSelectable?: boolean;
}

export interface SchemaContextItem {
    name: string;
    getAttributeKeys(): Generator<string>;
    getAttribute(keyName: string): boolean | string | number;
}

export type SchemaContextDefinition = Node | Position | SchemaContext | string | Array<string | Node>;

export interface SchemaCompiledItemDefinition {
    name: string;
    isblock: boolean;
    isContent: boolean;
    isInline: boolean;
    isLimit: boolean;
    isObject: boolean;
    isSelectable: boolean;
    allowIn: string[];
    allowAttributes: string[];
}

export interface AttributeProperties {
    copyOnEnter?: boolean;
    isFormatting?: boolean;
}

export class SchemaContext implements Iterable<SchemaContextItem> {
    last: SchemaContextItem;
    length: number;

    constructor(context: SchemaContextDefinition);
    [Symbol.iterator](): Iterator<SchemaContextItem>;
    endsWith(query: string): boolean;
    getItem(): SchemaContextItem;
    getNames(): Generator<string>;
    push(item: string | Node | Array<string | Node>): SchemaContext;
    startsWith(query: string): boolean;
}

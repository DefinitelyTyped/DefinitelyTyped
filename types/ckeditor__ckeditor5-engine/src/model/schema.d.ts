import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import DocumentSelection from './documentselection';
import Element from './element';
import { Item } from './item';
import Node from './node';
import Position from './position';
import Range from './range';
import Selection from './selection';
import Writer from './writer';

export default class Schema implements Observable {
    addAttributeCheck(callback: (context: SchemaContext, name: string) => any): void;
    addChildCheck(callback: (context: SchemaContext, item: SchemaCompiledItemDefinition) => boolean): void;
    checkAttribute(context: SchemaContextDefinition, attributeName: string): boolean;
    checkAttributeInSelection(selection: Selection | DocumentSelection, attribute: string): boolean;
    checkChild(context: SchemaContextDefinition, def: Node | string): boolean;
    checkMerge(positionOrBaseElement: Position | Element, elementToMerge: Element): boolean;
    createContext(context: SchemaContextDefinition): SchemaContext;
    extend(itemName: string, definition: SchemaItemDefinition): void;
    findAllowedParent(position: Position, node: Node | string): Element | null;
    getAttributeProperties(attributeName: string): AttributeProperties;
    getDefinition(item: Item | SchemaContextItem | string): SchemaCompiledItemDefinition;
    getDefinitions(): Record<string, SchemaCompiledItemDefinition>;
    getLimitElement(selectionOrRangeOrPosition: Selection | DocumentSelection | Range | Position): Element;
    getNearestSelectionRange(position: Position, direction?: 'both' | 'forward' | 'backward'): Range | null;
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

export interface SchemaItemDefinition {
    allowAttributes?: string | string[] | undefined;
    allowAttributesOf?: string | string[] | undefined;
    allowChildren?: string | string[] | undefined;
    allowContentOf?: string | string[] | undefined;
    allowIn?: string | string[] | undefined;
    allowWhere?: string | string[] | undefined;
    inheritAllFrom?: string | undefined;
    inheritTypesFrom?: string | string[] | undefined;
    isBlock?: boolean | undefined;
    isContent?: boolean | undefined;
    isInline?: boolean | undefined;
    isLimit?: boolean | undefined;
    isObject?: boolean | undefined;
    isSelectable?: boolean | undefined;
}

export interface SchemaContextItem {
    name: string;
    getAttributeKeys(): Generator<string>;
    getAttribute(keyName: string): boolean | string | number;
}

export type SchemaContextDefinition = Item | Position | SchemaContext | string | Array<string | Item>;

export interface SchemaCompiledItemDefinition {
    name: string;
    isBlock: boolean;
    isContent: boolean;
    isInline: boolean;
    isLimit: boolean;
    isObject: boolean;
    isSelectable: boolean;
    allowIn: string[];
    allowAttributes: string[];
}

export interface AttributeProperties {
    copyOnEnter?: boolean | undefined;
    isFormatting?: boolean | undefined;
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

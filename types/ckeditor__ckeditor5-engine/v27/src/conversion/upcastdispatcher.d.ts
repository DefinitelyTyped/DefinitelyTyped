import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Element from "../model/element";
import Node from "../model/node";
import Position from "../model/position";
import Range from "../model/range";
import Schema, { SchemaContextDefinition } from "../model/schema";
import Writer from "../model/writer";
import { Item } from "../view/item";
import DomEventData from "../view/observer/domeventdata";
import ViewConsumable from "./viewconsumable";

export interface UpcastConversionData {
    modelCursor: Position;
    modelRange: Range;
    viewItem: Item;
}

export interface UpcastConversionApi {
    consumable: ViewConsumable;
    schema: Schema;
    store: Record<string, any>;
    writer: Writer;

    convertChildren(
        viewItem: Item,
        positionOrElement: Position | Element,
    ): {
        modelRange: Range;
        modelCursor: Position;
    };
    convertItem(
        viewItem: Item,
        modelCursor: Position,
    ): {
        modelRange: Range;
        modelCursor: Position;
    };
    getSplitParts(element: Element): Element[];
    safeInsert(node: Node, position: Position): boolean;
    splitToAllowedParent(
        position: Position,
        node: Node,
    ): null | {
        position: Position;
        cursorParent: Element;
    };
    updateConversionResult(element: Element, data: UpcastConversionData, conversionApi: UpcastConversionApi): void;
}

export default class UpcastDispatcher implements Emitter {
    conversionApi: UpcastConversionApi;
    constructor(conversionApi?: Partial<UpcastConversionApi>);
    convert(viewItem: Item, writer: Writer, context?: SchemaContextDefinition): DocumentFragment;

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

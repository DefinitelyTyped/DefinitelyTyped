import Differ from "../model/differ";
import Element from "../model/element";
import MarkerCollection from "../model/markercollection";
import Position from "../model/position";
import Range from "../model/range";
import Schema from "../model/schema";
import Selection from "../model/selection";
import DowncastWriter from "../view/downcastwriter";
import Mapper from "./mapper";
import ModelConsumable from "../conversion/modelconsumable";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import DomEventData from "../view/observer/domeventdata";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";

export interface DowncastConversionApi<T = any> {
    consumable: ModelConsumable;
    dispatcher: DowncastDispatcher;
    mapper: Mapper;
    options?: T;
    schema: Schema;
    writer: DowncastWriter;
}

export default class DowncastDispatcher<T = {}> implements Emitter {
    conversionApi: DowncastConversionApi<T>;
    constructor(conversionApi: Partial<DowncastConversionApi<T>>);
    convertAttribute(range: Range, key: string, oldValue: any, newValue: any, writer: DowncastWriter): void;
    convertChanges(differ: Differ, markers: MarkerCollection, writer: DowncastWriter): void;
    convertInsert(range: Range, writer: DowncastWriter): void;
    convertMarkerAdd(markerName: string, markerRange: Range, writer: DowncastWriter): void;
    convertMarkerRemove(markerName: string, markerRange: Range, writer: DowncastWriter): void;
    convertRemove(position: Position, length: number, name: string, writer: DowncastWriter): void;
    convertSelection(selection: Selection, markers: MarkerCollection, writer: DowncastWriter): void;
    reconvertElement(element: Element, writer: DowncastWriter): void;

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

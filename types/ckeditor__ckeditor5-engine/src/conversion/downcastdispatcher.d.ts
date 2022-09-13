import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import ModelConsumable from '../conversion/modelconsumable';
import Differ from '../model/differ';
import DocumentSelection from '../model/documentselection';
import Element from '../model/element';
import MarkerCollection from '../model/markercollection';
import Position from '../model/position';
import Range from '../model/range';
import Schema from '../model/schema';
import Selection from '../model/selection';
import TextProxy from '../model/textproxy';
import DowncastWriter from '../view/downcastwriter';
import Mapper from './mapper';

export interface DowncastEventDataTypes {
    attribute: {
        item: Element;
        range: Range;
        attributeKey: string;
        attributeOldValue: any;
        attributeNewValue: any;
    };
    remove: {
        position: Position;
        length: number;
    };
    insert: {
        item: Element | TextProxy;
        range: Range;
    };
    selection: {
        selection: Selection;
    };
    removeMarker: {
        markerName: string;
        markerRange: Range;
    };
    addMarker: {
        item?: Selection;
        range?: Range;
        markerName: string;
        markerRange: Range;
    };
}

export type DowncastEventArgs<K extends string, T = {}> = K extends keyof DowncastEventDataTypes
    ? [DowncastEventDataTypes[K], DowncastConversionApi<T>]
    : K extends `attribute:${infer N}:$text`
    ? [
          {
              item: DocumentSelection | TextProxy;
              range: Range;
              attributeKey: N;
              attributeOldValue: any;
              attributeNewValue: any;
          },
          DowncastConversionApi<T>,
      ]
    : K extends `attribute:${infer N}`
    ? [
          {
              item: Element;
              range: Range;
              attributeKey: N;
              attributeOldValue: any;
              attributeNewValue: any;
          },
          DowncastConversionApi<T>,
      ]
    : K extends 'insert:$text'
    ? [{ item: TextProxy; range: Range }, DowncastConversionApi<T>]
    : K extends `insert:${infer N}`
    ? [{ item: Element & { name: N }; range: Range }, DowncastConversionApi<T>]
    : K extends `removeMarker:${infer N}`
    ? [{ markerName: N; markerRange: Range }, DowncastConversionApi<T>]
    : K extends `addMarker:${infer N}`
    ? [
          {
              item?: Selection;
              range?: Range;
              markerName: N;
              markerRange: Range;
          },
          DowncastConversionApi<T>,
      ]
    : K extends `${infer NS}:${string}`
    ? NS extends keyof DowncastEventDataTypes
        ? [DowncastEventDataTypes[NS], DowncastConversionApi<T>]
        : any[]
    : any[];

export interface DowncastConversionApi<T = any> {
    consumable: ModelConsumable;
    dispatcher: DowncastDispatcher;
    mapper: Mapper;
    options?: T | undefined;
    schema: Schema;
    writer: DowncastWriter;
}

export type DowncastDispatcherCallback<N extends string = string, T = {}, S extends Emitter = Emitter> = (
    info: EventInfo<S, N>,
    ...args: DowncastEventArgs<N, T>
) => void;

export default class DowncastDispatcher<T = {}> implements Emitter {
    constructor(conversionApi: Partial<DowncastConversionApi<T>>);
    conversionApi: DowncastConversionApi<T>;
    convertAttribute(range: Range, key: string, oldValue: any, newValue: any, writer: DowncastWriter): void;
    convertChanges(differ: Differ, markers: MarkerCollection, writer: DowncastWriter): void;
    convertInsert(range: Range, writer: DowncastWriter): void;
    convertMarkerAdd(markerName: string, markerRange: Range, writer: DowncastWriter): void;
    convertMarkerRemove(markerName: string, markerRange: Range, writer: DowncastWriter): void;
    convertRemove(position: Position, length: number, name: string, writer: DowncastWriter): void;
    convertSelection(selection: Selection | DocumentSelection, markers: MarkerCollection, writer: DowncastWriter): void;
    reconvertElement(element: Element, writer: DowncastWriter): void;

    on<N extends string>(
        event: N,
        callback: DowncastDispatcherCallback<N, T, this>,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: DowncastDispatcherCallback<N, T, this>,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: DowncastDispatcherCallback<N, T, this>): void;
    listenTo<N extends string, S extends Emitter>(
        emitter: S,
        event: N,
        callback: DowncastDispatcherCallback<N, T, S>,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<N extends string, S extends Emitter>(
        emitter?: S,
        event?: N,
        callback?: DowncastDispatcherCallback<N, T, S>,
    ): void;
    fire<N extends string>(eventOrInfo: N | EventInfo, ...args: DowncastEventArgs<N, T>): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

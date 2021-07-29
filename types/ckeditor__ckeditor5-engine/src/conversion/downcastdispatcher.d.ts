import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import ModelConsumable from '../conversion/modelconsumable';
import Differ from '../model/differ';
import Element from '../model/element';
import MarkerCollection from '../model/markercollection';
import Position from '../model/position';
import Range from '../model/range';
import Schema from '../model/schema';
import Selection from '../model/selection';
import DowncastWriter from '../view/downcastwriter';
import Mapper from './mapper';

export interface DowncastConversionApi<T = undefined> {
    consumable: ModelConsumable;
    dispatcher: DowncastDispatcher;
    mapper: Mapper;
    options?: T | undefined;
    schema: Schema;
    writer: DowncastWriter;
}

export default class DowncastDispatcher<T = {}> implements Emitter {
    constructor(conversionApi: Partial<DowncastConversionApi<T>>);
    conversionApi: DowncastConversionApi<T>;
    convertAttribute(range: Range, key: string, oldValue: any, newValue: any, writer: DowncastWriter): void;
    convertChanges(differ: Differ, markers: MarkerCollection, writer: DowncastWriter): void;
    convertInsert(range: Range, writer: DowncastWriter): void;
    convertMarkerAdd(markerName: string, markerRange: Range, writer: DowncastWriter): void;
    convertMarkerRemove(markerName: string, markerRange: Range, writer: DowncastWriter): void;
    convertRemove(position: Position, length: number, name: string, writer: DowncastWriter): void;
    convertSelection(selection: Selection, markers: MarkerCollection, writer: DowncastWriter): void;
    reconvertElement(element: Element, writer: DowncastWriter): void;

    on<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: (info: EventInfo<N>, ...data: unknown[]) => void): void;
    listenTo<S extends Emitter, N extends string>(
        emitter: S,
        event: N,
        callback: (info: EventInfo<N, S>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<S extends Emitter, N extends string>(
        emitter?: S,
        event?: N,
        callback?: (info: EventInfo<N, S>, ...data: unknown[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

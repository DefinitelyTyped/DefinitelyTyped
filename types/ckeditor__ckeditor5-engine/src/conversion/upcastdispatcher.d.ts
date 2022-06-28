import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Element from '../model/element';
import Node from '../model/node';
import Position from '../model/position';
import Range from '../model/range';
import Schema, { SchemaContextDefinition } from '../model/schema';
import Writer from '../model/writer';
import ViewDocumentFragment from '../view/documentfragment';
import DocumentSelection from '../view/documentselection';
import ViewElement from '../view/element';
import ViewSelection from '../view/selection';
import ViewText from '../view/text';
import ViewConsumable from './viewconsumable';

export type ViewItem = ViewElement | ViewText | ViewDocumentFragment;

export interface UpcastConversionData<T extends ViewItem = ViewItem> {
    modelCursor: Position;
    modelRange: Range;
    viewItem: T;
}

export interface UpcastConversionApi {
    consumable: ViewConsumable;
    schema: Schema;
    store: Record<string, any>;
    writer: Writer;

    convertChildren(
        viewItem: ViewItem,
        positionOrElement: Position | Element,
    ): {
        modelRange: Range;
        modelCursor: Position;
    };
    convertItem(
        viewItem: ViewItem,
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
    updateConversionResult(element: Element, data: UpcastConversionData): void;
}

export interface UpcastEventDataTypes {
    element: UpcastConversionData<ViewElement>;
    text: UpcastConversionData<ViewText>;
    documentFragment: UpcastConversionData<ViewDocumentFragment>;
}

export type UpcastEventArgs<K extends string = string> = K extends keyof UpcastEventDataTypes
    ? [UpcastEventDataTypes[K], UpcastConversionApi]
    : K extends 'viewCleanup'
    ? [ViewDocumentFragment | ViewElement]
    : K extends 'selectionChange'
    ? [
          {
              oldSelection: DocumentSelection | ViewSelection;
              newSelection: DocumentSelection | ViewSelection;
              domSelection: Selection;
          },
      ]
    : K extends `element:${infer N}`
    ? [UpcastConversionData<ViewElement & { name: N }>, UpcastConversionApi]
    : K extends `${infer NS}:${string}`
    ? NS extends keyof UpcastEventDataTypes
        ? [UpcastEventDataTypes[NS], UpcastConversionApi]
        : any[]
    : any[];

export type UpcastDispatcherCallback<N extends string, S extends Emitter = Emitter> = (
    info: EventInfo<S, N>,
    ...args: UpcastEventArgs<N>
) => void;

export default class UpcastDispatcher implements Emitter {
    constructor(conversionApi?: Partial<UpcastConversionApi>);
    conversionApi: UpcastConversionApi;
    convert(viewItem: ViewItem, writer: Writer, context?: SchemaContextDefinition): ViewDocumentFragment;

    on<N extends string>(
        event: N,
        callback: UpcastDispatcherCallback<N, this>,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: UpcastDispatcherCallback<N, this>,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: UpcastDispatcherCallback<N, this>): void;
    listenTo<S extends Emitter, N extends string>(
        emitter: S,
        event: N,
        callback: UpcastDispatcherCallback<N, S>,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<N extends string, S extends Emitter>(
        emitter?: S,
        event?: N,
        callback?: UpcastDispatcherCallback<N, S>,
    ): void;
    fire<N extends string>(eventOrInfo: N | EventInfo, ...args: UpcastEventArgs<N>): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

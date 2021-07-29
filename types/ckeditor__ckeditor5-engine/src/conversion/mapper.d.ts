import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import ModelElement from '../model/element';
import ModelPosition from '../model/position';
import ModelRange from '../model/range';
import Element from '../view/element';
import Position from '../view/position';
import Range from '../view/range';

export default class Mapper implements Emitter {
    bindElementToMarker(element: Element, name: string): void;
    bindElements(modelElement: ModelElement, viewElement: Element): void;
    clearBindings(): void;
    findMappedViewAncestor(viewPosition: Position): Element;
    findPositionIn(viewParent: Element, expectedOffset: number): Position;
    flushUnboundMarkerNames(): string[];
    getModelLength(viewNode: Element): number;
    markerNameToElements(name: string): Set<Element> | null;
    registerViewToModelLength(viewElementName: string, lengthCallback: (element: Element) => number): void;
    toModelElement(viewElement: Element): ModelElement | undefined;
    toModelPosition(viewPosition: Position): ModelPosition;
    toModelRange(viewRange: Range): ModelRange;
    toViewElement(modelElement: ModelElement): Element | undefined;
    toViewPosition(modelPosition: ModelPosition, options?: { isPhantom?: boolean | undefined }): Position;
    toViewRange(modelRange: ModelRange): Range;
    unbindElementFromMarkerName(element: Element, name: string): void;
    unbindModelElement(modelElement: ModelElement): void;
    unbindViewElement(viewElement: Element): void;

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

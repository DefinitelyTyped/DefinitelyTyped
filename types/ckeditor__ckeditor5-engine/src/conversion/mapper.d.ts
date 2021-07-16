import { DomEventData } from '@ckeditor/ckeditor5-engine';
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

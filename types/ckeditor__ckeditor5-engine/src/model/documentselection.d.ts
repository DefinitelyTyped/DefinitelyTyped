import { Collection } from "@ckeditor/ckeditor5-utils";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DomEventData from "../view/observer/domeventdata";
import Document from "./document";
import Element from "./element";
import Position from "./position";
import Range from "./range";
import { Marker } from "./markercollection";
import Selection from "./selection";

export default class DocumentSelection implements Emitter {
    readonly anchor: Position | null;
    readonly focus: Position | null;
    readonly hasOwnRange: boolean;
    readonly isBackward: boolean;
    readonly isCollapsed: boolean;
    readonly isGravityOverridden: boolean;
    readonly markers: Collection<Marker>;
    readonly rangeCount: number;

    constructor(doc: Document);
    containsEntireContent(element?: Element): boolean;
    destroy(): void;
    getAttribute(key: string): string | number | boolean | undefined;
    getAttributeKeys(): IterableIterator<string>;
    getAttributes(): IterableIterator<[string, string | number | boolean]>;
    getFirstPosition(): Position | null;
    getFirstRange(): Range | null;
    getLastPosition(): Position | null;
    getLastRange(): Range | null;
    getRanges(): Generator<Range>;
    getSelectedBlocks(): ReturnType<Selection["getSelectedBlocks"]>;
    getSelectedElement(): Element | null;
    hasAttribute(key: string): boolean;
    is(type: string): boolean;
    observeMarkers(prefixOrName: string): void;
    refresh(): void;

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

import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DocumentFragment from "./documentfragment";
import DocumentSelection from "./documentselection";
import Element from "./element";
import LivePosition from "./liveposition";
import LiveRange from "./liverange";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import RootElement from "./rootelement";
import Selection from "./selection";
import Text from "./text";
import TextProxy from "./textproxy";

export default class MarkerCollection implements Iterable<Marker>, Emitter {
    [Symbol.iterator](): Iterator<Marker>;
    destroy(): void;
    get(markerName: string): Marker | null;
    getMarkersAtPosition(position: Position): Generator<Marker>;
    getMarkersGroup(prefix: string): Generator<Marker>;
    getMarkersIntersectingRange(range: Range): Generator<Marker>;
    has(markerName: string): boolean;

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

export class Marker {
    readonly affectsData: boolean;
    readonly managedUsingOperations: boolean;
    readonly name: string;

    constructor(name: string, liveRange: LiveRange, managedUsingOperations: boolean, affectsData: boolean);
    getEnd(): Position;
    getRange(): Range;
    getStart(): Position;
    is(type: "position" | "model:position"): this is Position | LivePosition;
    is(type: "livePosition" | "model:livePosition"): this is LivePosition;
    is(type: "range" | "model:range"): this is Range | LiveRange;
    is(type: "liveRange" | "model:liveRange"): this is LiveRange;
    is(type: "marker" | "model:marker"): this is Marker;
    is(type: "$textProxy" | "model:$textProxy" | "textProxy" | "model:textProxy"): this is TextProxy;
    is(type: "documentFragment" | "model:documentFragment"): this is DocumentFragment;
    is(type: "selection" | "model:selection"): this is Selection | DocumentSelection;
    is(type: "documentSelection" | "model:documentSelection"): this is DocumentSelection;
    is(type: "node" | "model:node"): this is Node | Element | Text | RootElement;
    is(type: "$text" | "model:$text" | "text" | "model:text"): this is Text;
    is(type: "element" | "model:element", name?: string): this is Element | RootElement;
    is(type: "rootElement" | "model:rootElement", name?: string): this is RootElement;
    is(type: string, name?: string): boolean;
}

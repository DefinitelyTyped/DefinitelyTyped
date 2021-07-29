import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DocumentFragment from "./documentfragment";
import DocumentSelection from "./documentselection";
import Element from "./element";
import { Item } from "./item";
import LivePosition from "./liveposition";
import LiveRange from "./liverange";
import { Marker } from "./markercollection";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import RootElement from "./rootelement";
import Text from "./text";
import TextProxy from "./textproxy";

export type Selectable =
    | Selection
    | DocumentSelection
    | Position
    | LivePosition
    | Range
    | LiveRange
    | Node
    | Element
    | RootElement
    | Text
    | null
    | Iterable<Range>;

export default class Selection implements Emitter {
    readonly anchor: Position | null;
    readonly focus: Position | null;
    readonly isBackward: boolean;
    readonly isCollapsed: boolean;
    readonly rangeCount: number;

    constructor(
        selectable?: Selectable | null,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean | undefined },
    );
    containsEntireContent(element: Element): boolean;
    getAttribute(key: string): string | boolean | number | undefined;
    getAttributeKeys(): IterableIterator<string>;
    getAttributes(): IterableIterator<[string, string | boolean | number]>;
    getFirstPosition(): Position | null;
    getFirstRange(): Range | null;
    getLastPosition(): Position | null;
    getLastRange(): Range | null;
    getRanges(): Generator<Range>;
    getSelectedBlocks(): Generator<Element>;
    getSelectedElement(): Element | null;
    hasAttribute(key: string): boolean;
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
    isEqual(otherSelection: Selection): boolean;
    removeAttribute(key: string): void;
    setAttribute(key: string, value: string | boolean | number): void;
    setFocus(itemOrPosition: Position): void;
    setFocus(itemOrPosition: Item, offset?: number | "end" | "before" | "after"): void;
    setTo(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean | undefined },
    ): void;

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

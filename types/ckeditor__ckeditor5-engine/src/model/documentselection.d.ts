import { Collection } from "@ckeditor/ckeditor5-utils";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DomEventData from "../view/observer/domeventdata";
import Document from "./document";
import DocumentFragment from "./documentfragment";
import Element from "./element";
import LivePosition from "./liveposition";
import LiveRange from "./liverange";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import { Marker } from "./markercollection";
import RootElement from "./rootelement";
import Selection from "./selection";
import Text from "./text";
import TextProxy from "./textproxy";

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
    getAttributeKeys(): string[];
    getAttributes(): IterableIterator<[string, string | number | boolean]>;
    getFirstPosition(): Position | null;
    getFirstRange(): Range | null;
    getLastPosition(): Position | null;
    getLastRange(): Range | null;
    getRanges(): Generator<Range>;
    getSelectedBlocks(): ReturnType<Selection["getSelectedBlocks"]>;
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
    is(type: "element" | "model:element"): this is Element | RootElement;
    is(type: "rootElement" | "model:rootElement"): this is RootElement;
    is<K extends string>(type: "element" | "model:element", name: K): this is (Element | RootElement) & { name: K };
    is<K extends string>(type: "rootElement" | "model:rootElement", name: K): this is RootElement & { name: K };
    is(type: string, name?: string): boolean;
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
        options?: { priority?: PriorityString | number | undefined },
    ): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

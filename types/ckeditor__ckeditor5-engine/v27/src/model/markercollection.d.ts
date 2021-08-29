import TextProxy from "./textproxy";
import DocumentFragment from "./documentfragment";
import DocumentSelection from "./documentselection";
import Element from "./element";
import LivePosition from "./liveposition";
import LiveRange from "./liverange";
import Node from "./node";
import Range from "./range";
import RootElement from "./rootelement";
import Selection from "./selection";
import Text from "./text";
import Position from "./position";

export default class MarkerCollection implements Iterable<Marker> {
    constructor();
    [Symbol.iterator](): Iterator<Marker>;
    destroy(): void;
    get(markerName: string): Marker | null;
    getMarkersAtPosition(position: Position): Generator<Marker>;
    getMarkersGroup(prefix: string): Generator<Marker>;
    getMarkersIntersectingRange(range: Range): Generator<Marker>;
    has(markerName: string): boolean;
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
    is(type: "element" | "model:element"): this is Element | RootElement;
    is(type: "rootElement" | "model:rootElement"): this is RootElement;
    is<K extends string>(type: "element" | "model:element", name: K): this is (Element | RootElement) & { name: K };
    is<K extends string>(type: "rootElement" | "model:rootElement", name: K): this is RootElement & { name: K };
    is(type: string, name?: string): boolean;
}

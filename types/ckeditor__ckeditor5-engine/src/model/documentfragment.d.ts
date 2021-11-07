import DocumentSelection from "./documentselection";
import Element from "./element";
import LivePosition from "./liveposition";
import LiveRange from "./liverange";
import { Marker } from "./markercollection";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import RootElement from "./rootelement";
import Selection from "./selection";
import Text from "./text";
import TextProxy from "./textproxy";

export default class DocumentFragment implements Iterable<Element | Text> {
    readonly childCount: number;
    readonly isEmpty: boolean;
    readonly markers: Map<string, Range>;
    readonly maxOffset: number;
    readonly parent: null;
    readonly root: DocumentFragment;

    [Symbol.iterator](): Iterator<Element | Text>;
    getChild(index: number): Node | null;
    getChildIndex(node: Node): number | null;
    getChildStartOffset(node: Node): number | null;
    getChildren(): IterableIterator<Element | Text>;
    getNodeByPath(relativePath: number[]): Node | DocumentFragment;
    getPath(): [];
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
    offsetToIndex(offset: number): number;
    toJSON(): Pick<DocumentFragment, "childCount" | "isEmpty" | "markers" | "maxOffset" | "parent" | "root">;

    static fromJSON(json: FromJSONArg[]): DocumentFragment;
}

interface FromJSONArg {
    name?: string | undefined;
    data?: string | undefined;
    attributes?: Record<string, string> | Array<[string, string]> | undefined;
    children?: FromJSONArg[] | undefined;
}

export {};

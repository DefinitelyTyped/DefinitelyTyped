import { NodeSet } from "../node";
import NodeList from "../nodelist";
import Position from "../position";
import Operation from "./operation";
import MoveOperation from "./moveoperation";
import Document from "../document";

export default class InsertOperation extends Operation {
    howMany: number;
    readonly nodeList: NodeList;
    readonly position: Position;
    shouldReceiveAttributes: boolean;
    readonly type: "insert";
    readonly nodes: NodeList;

    static readonly className: "InsertOperation";

    constructor(position: Position, nodes: NodeSet, baseVersion: number | null);
    clone(): this;
    getReversed(): MoveOperation;
    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "InsertOperation";
        nodes: ReturnType<NodeList["toJSON"]>;
        position: ReturnType<Position["toJSON"]>;
        shouldReceiveAttributes: boolean;
    };

    static fromJSON(json: Partial<ReturnType<InsertOperation["toJSON"]>>, document?: Document): InsertOperation;
}

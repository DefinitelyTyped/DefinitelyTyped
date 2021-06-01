import Document from "../document";
import Position from "../position";
import Range from "../range";
import MergeOperation from "./mergeoperation";
import Operation from "./operation";

export default class SplitOperation extends Operation {
    graveyardPosition: Position | null;
    howMany: number;
    insertionPosition: Position;
    readonly moveTargetPosition: Position;
    readonly movedRange: Range;
    splitPosition: Position;

    static readonly className: "SplitOperation";

    constructor(
        splitPosition: Position,
        howMany: number,
        insertionPosition: Position,
        graveyardPosition: Position,
        baseVersion: number | null,
    );
    clone(): this;
    getReversed(): MergeOperation;
    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "SplitOperation";
        howMany: number;
        splitPosition: ReturnType<Position["toJSON"]>;
        insertionPosition: ReturnType<Position["toJSON"]>;
        graveyardPosition: ReturnType<Position["toJSON"]>;
    };

    static fromJSON(json: Partial<ReturnType<SplitOperation["toJSON"]>>, document: Document): SplitOperation;
    static getInsertionPosition(splitPosition: Position): Position;
}

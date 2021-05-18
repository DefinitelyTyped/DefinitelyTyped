import Document from "../document";
import Position from "../position";
import Range from "../range";
import Operation from "./operation";
import SplitOperation from "./splitoperation";

export default class MergeOperation extends Operation {
    readonly deletionPosition: Position;
    graveyardPosition: Position;
    howMany: number;
    readonly movedRange: Range;
    sourcePosition: Position;
    targetPosition: Position;
    static readonly className: "MergeOperation";

    constructor(
        sourcePosition: Position,
        howMany: number,
        targetPosition: Position,
        graveyardPosition: Position,
        baseVersion: number | null,
    );
    clone(): this;
    getReversed(): SplitOperation;
    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "MergeOperation";
        howMany: number;
        sourcePosition: ReturnType<Position["toJSON"]>;
        targetPosition: ReturnType<Position["toJSON"]>;
        graveyardPosition: ReturnType<Position["toJSON"]>;
    };

    static fromJSON(json: Partial<ReturnType<MergeOperation["toJSON"]>>, document?: Document): MergeOperation;
}

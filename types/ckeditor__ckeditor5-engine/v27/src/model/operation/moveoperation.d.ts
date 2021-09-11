import Document from "../document";
import Position from "../position";
import Operation from "./operation";

export default class MoveOperation extends Operation {
    howMany: number;
    sourcePosition: Position;
    targetPosition: Position;
    static readonly className: "MoveOperation";

    constructor(sourcePosition: Position, howMany: number, targetPosition: Position, baseVersion: number | null);
    clone(): this;
    getMovedRangeStart(): Position;
    getReversed(): MoveOperation;
    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "MoveOperation";
        howMany: number;
        sourcePosition: ReturnType<Position["toJSON"]>;
        targetPosition: ReturnType<Position["toJSON"]>;
    };

    static fromJSON(json: Partial<ReturnType<MoveOperation["toJSON"]>>, document?: Document): MoveOperation;
}

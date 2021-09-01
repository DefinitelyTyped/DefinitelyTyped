import Position from "../position";
import Operation from "./operation";

export default class DetachOperation extends Operation {
    howMany: number;
    sourcePosition: Position;
    type: "detach";

    static readonly className: "DetachOperation";

    constructor(sourcePosition: Position, howMany: number);
    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "DetachOperation";
        sourcePosition: ReturnType<Position["toJSON"]>;
        howMany: number;
    };
}

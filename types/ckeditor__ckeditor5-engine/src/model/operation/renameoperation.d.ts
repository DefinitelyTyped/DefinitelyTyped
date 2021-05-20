import Document from "../document";
import Position from "../position";
import Operation from "./operation";

export default class RenameOperation extends Operation {
    newName: string;
    oldName: string;
    position: Position;

    constructor(position: Position, oldName: string, newName: string, baseVersion: number | null);
    clone(): this;
    getReversed(): RenameOperation;
    toJSON(): ReturnType<Operation["toJSON"]> & {
        __className: "RenameOperation";
        position: ReturnType<Position["toJSON"]>;
        newName: string;
        oldName: string;
    };

    fromJSON(json: Partial<ReturnType<RenameOperation["toJSON"]>>, document: Document): RenameOperation;
}

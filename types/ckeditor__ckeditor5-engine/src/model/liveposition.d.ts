import Position, { PositionStickiness } from "./position";
import RootElement from "./rootelement";

export default class LivePosition extends Position {
    constructor(root: RootElement, path: number[], stickiness?: PositionStickiness);
    detach(): void;
    toPosition(): Position;

    static fromPosition(position: Position, stickiness?: PositionStickiness): LivePosition;
}

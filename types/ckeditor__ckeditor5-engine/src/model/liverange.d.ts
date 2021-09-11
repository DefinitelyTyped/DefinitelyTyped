import Range from "./range";

export default class LiveRange extends Range {
    detach(): void;
    toRange(): Range;

    static fromRange(range: Range): LiveRange;
}

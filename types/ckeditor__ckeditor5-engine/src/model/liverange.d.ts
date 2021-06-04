import Range from "./range";

export default class LiveRange extends Range {
    detach(): void;
    is(type: string): boolean;
    toRange(): Range;

    static fromRange(range: Range): LiveRange;
}

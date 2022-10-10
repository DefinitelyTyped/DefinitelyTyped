export default class Interval {
    static readonly INVALID_INTERVAL: Interval;

    readonly start: number;
    readonly stop: number;

    constructor(start: number, stop: number);

    clone(): Interval;

    contains(item: number): boolean;

    toString(): string;

    get length(): number;
}

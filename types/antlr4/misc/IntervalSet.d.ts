import Interval from "./Interval";

export default class IntervalSet {
    readonly intervals: Interval[] | null;
    readonly readOnly: false;

    first(): number;

    addOne(v: number): void;

    addRange(l: number, h: number): void;

    addInterval(toAdd: Interval): void;

    addSet(other: IntervalSet): IntervalSet;

    reduce(pos: number): void;

    complement(start: number, stop: number): IntervalSet;

    contains(item: number): boolean;

    removeRange(toRemove: Interval): void;

    removeOne(value: number): void;

    toString(literalNames?: string[], symbolicNames?: string[], elemsAreChar?: boolean): string;

    toCharString(): string;

    toIndexString(): string;

    toTokenString(literalNames: string[], symbolicNames: string[]): string;

    elementName(literalNames: string[], symbolicNames: string[], token: number): string;

    get length(): number;
}

import { Token } from './Token';

export class Interval {
    readonly length: number;
    readonly start: number;
    readonly stop: number;

    constructor(start: number, stop: number);

    contains(item: number): boolean;

    toString(): string;
}

export class IntervalSet {
    readonly readOnly: boolean;
    readonly intervals: Interval[];
    readonly length: boolean;

    first(): number;

    addOne(v: number): void;

    addRange(l: number, h: number): void;

    addInterval(interval: Interval): void;

    addSet(other: IntervalSet): void;

    reduce(k: number): void;

    complement(start: number, stop: number): IntervalSet;

    contains(item: number): boolean;

    removeRange(interval: Interval): boolean;

    removeOne(v: number): boolean;

    toString(literalNames?: string[], symbolicNames?: string[], elemsAreChar?: boolean): string;

    toCharString(): string;

    toIndexString(): string;

    toTokenString(literalNames: string[], symbolicNames: string[]): string;

    elementName(literalNames: string[], symbolicNames: string[], token: Token): string;
}

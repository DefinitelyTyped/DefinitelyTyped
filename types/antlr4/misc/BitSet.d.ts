export default class BitSet {
    readonly data: boolean[];

    add(value: number): void;

    or(set: BitSet): void;

    remove(value: number): void;

    has(value: number): boolean;

    values(): string[];

    minValue(): number;

    hashCode(): number;

    equals(other: BitSet): boolean;

    toString(): string;

    get length(): number;
}

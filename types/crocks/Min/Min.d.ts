declare function Min(val: unknown): Min;

declare class Min {
    equals(val: unknown): boolean;
    concat(val: Min): Min;
    valueOf(): number;
    static empty(): Min;
}

export default Min;

declare function Sum(val: unknown): Sum;

declare class Sum {
    equals(val: unknown): boolean;
    concat(val: Sum): Sum;
    valueOf(): number;
    static empty(): Sum;
}

export default Sum;

declare function Max(val: unknown): Max;

declare class Max {
    equals(val: unknown): boolean;
    concat(val: Max): Max;
    valueOf(): number;
    static empty(): Max;
}

export default Max;

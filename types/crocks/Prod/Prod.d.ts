declare function Prod(val: unknown): Prod;

declare class Prod {
    equals(val: unknown): boolean;
    concat(val: Prod): Prod;
    valueOf(): number;
    static empty(): Prod;
}

export default Prod;

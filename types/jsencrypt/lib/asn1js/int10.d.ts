export declare class Int10 {
    constructor(value?: string | number);
    mulAdd(m: number, c: number): void;
    sub(c: number): void;
    toString(base?: number): string;
    valueOf(): number;
    simplify(): number | this;
    private buf;
}

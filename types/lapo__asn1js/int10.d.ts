declare class Int10 {
    constructor(value?: number);

    buf: number[];

    mulAdd(multiplier: number, value: number): void;
    sub(value: number): void;
    toString(base?: 10): string;
    valueOf(): number;
    simplify(): number | this;
}

export = Int10;

export as namespace int10;

declare class Int10 {
    /**
     * Base 10 value of any length
     * @param [value] Initial value, defaults to 0
     */
    constructor(value?: number);

    buf: number[];

    /**
     * Multiply value by `multiplier` and add `add`
     * @param multiplier A multiplier <=256
     * @param add The value to add
     */
    mulAdd(multiplier: number, add: number): void;
    /**
     * Subtract value
     * @param value The value to subtract
     */
    sub(value: number): void;
    /**
     * Convert to decimal string representation
     * @param [base] The base. The only accepted value is 10
     */
    toString(base?: 10): string;
    /**
     * Convert to a number
     */
    valueOf(): number;
    /**
     * Return as a number if less than 10,000,000,000,000,
     * otherwise return self
     */
    simplify(): number | this;
}

export = Int10;

export as namespace int10;

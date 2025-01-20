interface MoneyOptions {
    // Decimal precision -> "90"
    precision?: number | undefined;

    // Decimal separator -> ",90"
    separator?: string | undefined;

    // Number delimiter -> "12.345.678"
    delimiter?: string | undefined;

    // Money unit -> "R$ 12.345.678,90"
    unit?: string | undefined;

    // Money unit -> "12.345.678,90 R$"
    suffixUnit?: string | undefined;

    // Force type only number instead decimal,
    // masking decimals with ",00"
    // Zero cents -> "R$ 1.234.567.890,00"
    zeroCents?: boolean | undefined;
}

interface PatternOptions {
    // Pattern to mask value against.
    pattern?: string | undefined;

    // Placeholder option to represent remaining characters to be entered
    placeholder?: string | undefined;
}

declare const VMasker: {
    (el: Element | NodeListOf<Element>): {
        maskMoney: (options?: MoneyOptions) => void;
        maskNumber: () => void;
        maskAlphaNum: () => void;
        maskPattern: (pattern: string) => void;
        unMask: () => void;
    };
    toMoney: (value: string | number, options?: MoneyOptions) => string;
    toPattern: (value: string | number, options?: string | PatternOptions) => string;
    toNumber: (value: string | number) => string;
    toAlphaNumeric: (value: string | number) => string;
};

export = VMasker;

// Type definitions for vanilla-masker 1.2
// Project: https://fleury.io/vanilla-masker/
// Definitions by: BenLorantfy <https://github.com/BenLorantfy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MoneyOptions {
    // Decimal precision -> "90"
    precision?: number;

    // Decimal separator -> ",90"
    separator?: string;

    // Number delimiter -> "12.345.678"
    delimiter?: string;

    // Money unit -> "R$ 12.345.678,90"
    unit?: string;

    // Money unit -> "12.345.678,90 R$"
    suffixUnit?: string;

    // Force type only number instead decimal,
    // masking decimals with ",00"
    // Zero cents -> "R$ 1.234.567.890,00"
    zeroCents?: boolean;
}

interface PatternOptions {
    // Pattern to mask value against.
    pattern?: string;

    // Placeholder option to represent remaining characters to be entered
    placeholder?: string;
}

declare const VMasker: {
    (el: Element|NodeListOf<Element>): {
        maskMoney: (options?: MoneyOptions) => void;
        maskNumber: () => void;
        maskAlphaNum: () => void;
        maskPattern: (pattern: string) => void;
        unMask: () => void;
    }
    toMoney: (value: string|number, options?: MoneyOptions) => string;
    toPattern: (value: string|number, options?: string|PatternOptions) => string;
    toNumber: (value: string|number) => string;
    toAlphaNumeric: (value: string|number) => string;
};

export = VMasker;

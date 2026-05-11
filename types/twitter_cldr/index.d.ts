export type CldrData = Record<string, any>;

export type TimeUnit = "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
export type PluralRule = "zero" | "one" | "two" | "few" | "many" | "other";
export type RbnfGroupName = "SpelloutRules" | "OrdinalRules";

export interface BidiString {
    toString(): string;
    reorder_visually(): BidiString;
}

export interface Currency {
    country: string;
    cldr_symbol: string;
    symbol: string;
    currency: string;
    name: string;
    code_points: number[];
}

export interface UnicodeRegex {
    match(str: string): string[];
    to_regexp(): RegExp;
}

export interface TwitterCldr {
    Settings: {
        locale(): string;
    };

    set_data(data: CldrData): null;
    get_data(): CldrData;

    DateTimeFormatter: {
        new(): {
            format(
                date: Date,
                options:
                    | {
                        format?: "date" | "time";
                        type?: "full" | "long" | "medium" | "short";
                    }
                    | {
                        format: "additional";
                        type: string;
                    },
            ): string;
        };

        additional_formats(): string[];
    };

    TimespanFormatter: {
        new(): {
            format(
                timeSpanSeconds: number,
                options?:
                    | {
                        unit?: TimeUnit;
                        approximate?: boolean;
                    }
                    | {
                        direction: "none";
                        unit?: TimeUnit;
                        approximate?: boolean;
                        type?: "short" | "abbreviated";
                    },
            ): string;
        };
    };

    DecimalFormatter: {
        new(): {
            format(num: number, options?: { precision?: number }): string;
        };
    };

    ShortDecimalFormatter: {
        new(): {
            format(num: number, options?: { precision?: number }): string;
        };
    };

    LongDecimalFormatter: {
        new(): {
            format(num: number, options?: { precision?: number }): string;
        };
    };

    CurrencyFormatter: {
        new(): {
            format(
                num: number,
                options?: {
                    currency?: string;
                    precision?: number;
                },
            ): string;
        };
    };

    PercentFormatter: {
        new(): {
            format(num: number, options?: { precision?: number }): string;
        };
    };

    Currencies: {
        currency_codes(): string[];
        for_code(currencyCode: string): Currency;
    };

    PluralRules: {
        rule_for(num: number): PluralRule;
        all(): PluralRule[];
    };

    /** Rule-Based Number Formatting */
    RBNF: {
        new(): {
            format(num: number, group: RbnfGroupName, ruleset: string): string;
            group_names(): RbnfGroupName[];
            rule_set_names_for_group(group: RbnfGroupName): string[];
        };
    };

    Bidi: {
        from_string(str: string, options: { direction: "LTR" | "RTL" }): BidiString;
    };

    PostalCodes: {
        is_valid(territory: string, postalCode: string): boolean;
        regex_for_territory(territory: string): RegExp;
        territories(): string[];
    };

    PhoneCodes: {
        code_for_territory(territory: string): string;
        territories(): string[];
    };

    TerritoriesContainment: {
        children(territory: string): string[];
        parents(territory: string): string[];
        contains(parentTerritory: string, childTerritory: string): boolean;
    };

    UnicodeRegex: {
        compile(source: string, flags: string): UnicodeRegex;
    };

    BreakIterator: {
        new(
            locale: string,
            options?: {
                use_uli_exceptions: boolean;
            },
        ): {
            each_sentence(str: string): string[];
        };
    };
}

export function load(locale: string): TwitterCldr;

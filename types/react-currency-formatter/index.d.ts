import * as React from "react";

interface CurrencyFormatterProps {
    quantity: number;
    currency?: string | undefined;
    locale?: string | undefined;
    pattern?: string | undefined;
    decimal?: string | undefined;
    group?: string | undefined;
    symbol?: string | undefined;
}

declare const reactCurrencyFormatter: React.ComponentClass<CurrencyFormatterProps>;
export = reactCurrencyFormatter;

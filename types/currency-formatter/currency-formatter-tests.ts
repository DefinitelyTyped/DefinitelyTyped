import currencyFormatter = require("currency-formatter");
import currencies = require("currency-formatter/currencies");

// $ExpectType string
currencyFormatter.format(1000000, { code: "USD" });
// $ExpectTYpe number
currencyFormatter.unformat("$1,000,000.00", { code: "USD" });
// $ExpectType string
currencyFormatter.format(1000000, { code: "GBP" });
// $ExpectTYpe number
currencyFormatter.unformat("£1,000,000.00", { code: "GBP" });
// $ExpectType string
currencyFormatter.format(1000000, { code: "EUR" });
// $ExpectTYpe number
currencyFormatter.unformat("1 000 000,00 €", { code: "EUR" });

currencyFormatter.findCurrency("USD"); // $ExpectType Currency | undefined

// $ExpectType string
currencyFormatter.format(1000000, {
    symbol: "@",
    decimal: "*",
    thousand: "^",
    precision: 1,
    format: "%v %s", // %s is the symbol and %v is the value
});

// $ExpectType string
currencyFormatter.format(-10, {
    format: {
        pos: "%s%v", // %s is the symbol and %v is the value
        neg: "(%s%v)",
        zero: "%s%v",
    },
});

// $ExpectType Currency[]
currencies;

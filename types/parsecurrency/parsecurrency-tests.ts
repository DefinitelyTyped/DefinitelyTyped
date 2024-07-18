import parsecurrency = require("parsecurrency");

const parseResult = parsecurrency("$100"); // $ExpectType ParsedCurrency | null

if (parseResult === null) {
    throw new Error("Unexpected null");
}

const {
    raw,
    value,
    integer,
    decimals,
    currency,
    symbol,
    decimalSeparator,
    groupSeparator,
} = parseResult;

parsecurrency("$ USD 100"); // $ExpectType ParsedCurrency | null

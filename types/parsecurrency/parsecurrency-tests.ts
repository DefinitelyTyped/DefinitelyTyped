import parsecurrency = require("parsecurrency");

const {
    raw,
    value,
    integer,
    decimals,
    currency,
    symbol,
    decimalSeparator,
    groupSeparator
} = parsecurrency("$100");

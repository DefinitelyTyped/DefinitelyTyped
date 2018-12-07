// formatMoney

// Default usage:
accounting.formatMoney(12345678); // $12,345,678.00

// Stringified usage:
accounting.formatMoney('$4394958309392.9401'); // $4,394,958,309,392.94

// European formatting (custom symbol and separators), could also use options object as second param:
accounting.formatMoney(4999.99, "€", 2, ".", ","); // €4.999,99

// Negative values are formatted nicely, too:
accounting.formatMoney(-500000, "£ ", 0); // £ -500,000

// Simple `format` string allows control of symbol position [%v = value, %s = symbol]:
accounting.formatMoney(5318008, { symbol: "GBP", format: "%v %s" }); // 5,318,008.00 GBP

// Example usage with options object:
accounting.formatMoney(5318008, {
    symbol: "GBP",
    precision: 0,
    thousand: "·",
    format: {
        pos: "%s %v",
        neg: "%s (%v)",
        zero: "%s  --"
    }
});

// Will recursively format an array of values:
accounting.formatMoney([123, 456, [78, 9]], "$", 0); // ["$123", "$456", ["$78", "$9"]]

// formatColumn

// Format list of numbers for display:
accounting.formatColumn([123.5, 3456.49, 777888.99, 12345678, -5432], "$ ");

// Example usage (NB. use a space after the symbol to add arbitrary padding to all values):
accounting.formatColumn([123, 12345], "$ ", 0); // ["$    123", "$ 12,345"]

// List of numbers can be a multi-dimensional array (formatColumn is applied recursively):
accounting.formatColumn([[1, 100], [900, 9]]); // [["$  1.00", "$100.00"], ["$900.00", "$  9.00"]]

// formatNumber

// Example usage:
accounting.formatNumber(5318008); // 5,318,008
accounting.formatNumber(9876543.21, 3, " "); // 9 876 543.210
accounting.formatNumber(4999.99, 2, ".", ","); // 4.999,99

// Example usage with options object:
accounting.formatNumber(5318008, {
    precision: 3,
    thousand: " "
});

// Will recursively format an array of values:
accounting.formatNumber([123456, [7890, 123]]); // ["123,456", ["7,890", "123"]]

// toFixed

(0.615).toFixed(2); // "0.61"
accounting.toFixed(0.615, 2); // "0.62"

// unformat

// Example usage:
accounting.unformat("£ 12,345,678.90 GBP"); // 12345678.9
accounting.unformat("GBP £ 12,345,678.90"); // 12345678.9

// If a non-standard decimal separator was used (eg. a comma) unformat() will need it in order to work out
// which part of the number is a decimal/float:
accounting.unformat("€ 1.000.000,00", ","); // 1000000

// Settings object that controls default parameters for library methods:
accounting.settings = {
    currency: {
        symbol: "$",    // default currency symbol is '$'
        format: "%s%v", // controls output: %s = symbol, %v = value/number (can be object: see below)
        decimal: ".",   // decimal point separator
        thousand: ",",  // thousands separator
        precision: 2    // decimal places
    },
    number: {
        precision: 0,   // default precision on numbers is 0
        thousand: ",",
        decimal: "."
    }
};

// These can be changed externally to edit the library's defaults:
accounting.settings.currency.format = "%s %v";

// Format can be an object, with `pos`, `neg` and `zero`:
accounting.settings.currency.format = {
    pos: "%s %v",   // for positive values, eg. "$ 1.00" (required)
    neg: "%s (%v)", // for negative values, eg. "$ (1.00)" [optional]
    zero: "%s  -- "  // for zero values, eg. "$  --" [optional]
};

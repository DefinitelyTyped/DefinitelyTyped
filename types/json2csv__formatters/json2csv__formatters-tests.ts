import * as formatters from "@json2csv/formatters";

formatters.default(123); // $ExpectType string

// @ts-expect-error Not a number being passed
formatters.number()("foo");
formatters.number()(123); // $ExpectType string
formatters.number({})(123); // $ExpectType string
// $ExpectType string
formatters.number({
    separator: ",",
    decimals: 2,
})(123);

formatters.object()({ foo: "bar" }); // $ExpectType string
formatters.object()([1, 2, 3]); // $ExpectType string
formatters.object({})({ foo: "bar" }); // $ExpectType string
// $ExpectType string
formatters.object({
    stringFormatter: value => value,
})({ foo: "bar" });

// @ts-expect-error Not a string being passed
formatters.string()(123);
formatters.string()("foo"); // $ExpectType string
formatters.string({})("foo"); // $ExpectType string
// $ExpectType string
formatters.string({
    quote: "\"",
    escapedQuote: "\\\"",
})("foo");

// @ts-expect-error Not a string being passed
formatters.stringExcel(123);
formatters.stringExcel("foo"); // $ExpectType string

// @ts-expect-error Not a string being passed
formatters.stringQuoteOnlyIfNecessary()(123);
formatters.stringQuoteOnlyIfNecessary()("foo"); // $ExpectType string
formatters.stringQuoteOnlyIfNecessary({})("foo"); // $ExpectType string
// $ExpectType string
formatters.stringQuoteOnlyIfNecessary({
    quote: "\"",
    escapedQuote: "\\\"",
    separator: "|",
    eol: "\r\n",
})("foo");

// @ts-expect-error Not a symbol being passed
formatters.symbol()(123);
formatters.symbol()(Symbol.iterator); // $ExpectType string
formatters.symbol({})(Symbol.iterator); // $ExpectType string
// $ExpectType string
formatters.symbol({
    stringFormatter: value => value,
})(Symbol.iterator);

import plural = require("plurals-cldr");

plural("en", 0); // $ExpectType "zero" | "one" | "two" | "few" | "many" | "other" | null || Form | null
plural("en", ""); // $ExpectType "zero" | "one" | "two" | "few" | "many" | "other" | null || Form | null

plural.forms("en"); // $ExpectType Form[] | null
plural.indexOf("en", 0); // $ExpectType number
plural.indexOf("en", ""); // $ExpectType number

plural.ordinal("en", 0); // $ExpectType "zero" | "one" | "two" | "few" | "many" | "other" | null || Form | null
plural.ordinal("en", ""); // $ExpectType "zero" | "one" | "two" | "few" | "many" | "other" | null || Form | null

plural.ordinal.forms("en"); // $ExpectType Form[] | null
plural.ordinal.indexOf("en", 0); // $ExpectType number
plural.ordinal.indexOf("en", ""); // $ExpectType number

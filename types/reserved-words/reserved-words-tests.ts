import { check, Dialect, KEYWORDS } from "reserved-words";

const dialect: Dialect = "es3";

// $ExpectType boolean
check("while");

// $ExpectType boolean
check("while", "es6");

// $ExpectType boolean
check("while", "es6", true);

// $ExpectType boolean
check("yield", 3);

// @ts-expect-error
check("yield", 1);

// @ts-expect-error
check("yield", "es4");

// $ExpectType true
KEYWORDS["6-strict"]["break"];

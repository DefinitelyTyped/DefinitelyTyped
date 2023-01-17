import unescapeJs from "unescape-js";

// @ts-expect-error
unescapeJs();

// $ExpectType string
unescapeJs("");

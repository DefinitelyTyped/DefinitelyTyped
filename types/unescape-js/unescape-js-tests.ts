import unescapeJs from "unescape-js";

// @ts-expect-error
unescapeJs();

unescapeJs(""); // $ExpectType string

import isUrl = require("is-url");

isUrl("https://github.com/segmentio/is-url"); // $ExpectType boolean
// @ts-expect-error
isUrl(undefined);

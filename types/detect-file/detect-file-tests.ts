import detect = require("detect-file");

// $ExpectType string
detect("foo");

// $ExpectType string
detect("foo", { nocase: true });

// $ExpectType string
detect("foo", { nocase: false });

// @ts-expect-error
detect(1);

// @ts-expect-error
detect("foo", { nocase: 1 });

// @ts-expect-error
detect("foo", { nocas: true });

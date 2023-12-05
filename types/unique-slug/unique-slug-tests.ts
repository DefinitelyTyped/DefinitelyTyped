import uniqueSlug = require("unique-slug");

// $ExpectType string
uniqueSlug();

// $ExpectType string
uniqueSlug("foo");

// @ts-expect-error
uniqueSlug(1);

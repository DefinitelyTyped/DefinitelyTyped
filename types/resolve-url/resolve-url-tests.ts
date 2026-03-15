import resolveUrl = require("resolve-url");

// Single URL
const absolute: string = resolveUrl("http://example.com/foo");

// Two URLs
const resolved: string = resolveUrl("http://example.com/foo", "bar");

// Multiple URLs
const multi: string = resolveUrl("http://example.com", "foo", "bar", "baz");

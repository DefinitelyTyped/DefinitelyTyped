import * as purify from "purify";

purify.alphaNumeric("hello", "world"); // $ExpectType string
purify.alphaNumericWithDot("hello", "world"); // $ExpectType string
purify.boolean("true"); // $ExpectType boolean
// @ts-expect-error
purify.boolean("true", "default");
purify.domainName("example.com");
purify.domainNameIdn("example.com"); // $ExpectType string
purify.email("hello@example.com", "mail@example.com"); // $ExpectType string
purify.emailIdn("hello@example.com", "mail@example.com"); // $ExpectType string
purify.float("10", 0); // $ExpectType number
purify.integer(-5, "world"); // $ExpectType number | "world"
purify.integerInRange("100", 0, 10); // $ExpectType number
purify.json<{ hello: string }>("{\"hello\": \"world\"}"); // $ExpectType {hello: string}
purify.lowerCaseUuid("693563fb-77c2-42f1-be5c-f302f98dc919", false); // $ExpectType string | false
purify.nonEmptyAlphaNumeric("hello", "world"); // $ExpectType string
purify.nonEmptyPrintableAscii("hello", "world"); // $ExpectType string
purify.nonEmptyPrintableUnicode("hello", false); // $ExpectType string | false
purify.nonEmptyVisibleAscii("hello", "world"); // $ExpectType string
purify.nonEmptyVisibleUnicode("hello", "world"); // $ExpectType string
purify.positiveFloat("hello", "world"); // $ExpectType number | "world"
purify.positiveFloatOrZero("hello", false); // $ExpectType number | false
purify.positiveInteger("10", "10"); // $ExpectType number | "10"
purify.positiveInteger("10", 5); // $ExpectType number
purify.positiveInteger("10"); // $ExpectType number
// @ts-expect-error
purify.positiveInteger(false);
purify.positiveInteger(-10, 1); // $ExpectType number
purify.positiveIntegerOrZero(100); // $ExpectType number
purify.printableAscii("hello", "world"); // $ExpectType string
// @ts-expect-error
purify.printableAscii(100, "world");
purify.printableUnicode("hello", "world"); // $ExpectType string
purify.upperCaseUuid("E9DC6DBC-A1E1-46B0-948C-6A7DD760D7DA", "world"); // $ExpectType string
purify.url("http://example.com", "world"); // $ExpectType string
purify.urlWithLocalhost("http://example.com", "world");
purify.uuid("e92623af-9769-4477-9ff4-d98a7c3677f0", false); // $ExpectType string | false
purify.visibleAscii("hello"); // $ExpectType string
// @ts-expect-error
purify.visibleAscii(false); // $ExpectType string
purify.visibleUnicode("hello", "world"); // $ExpectType string

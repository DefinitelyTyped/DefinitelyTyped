import * as langs from "langs";

// $ExpectType Langs
langs;

// $ExpectType Language[]
langs.all();

// $ExpectType boolean
langs.has("2B", "he");

// $ExpectType boolean
langs.has("name", "English");

// $ExpectType boolean
langs.has("local", "English");

// $ExpectType string[]
langs.codes("1");

// $ExpectType string[]
langs.codes(2);

// $ExpectType string[]
langs.codes("2B");

// $ExpectType string[]
langs.codes("2T");

// $ExpectType string[]
langs.codes("3");

// $ExpectType string[]
langs.names(true);

// $ExpectType string[]
langs.names();

// $ExpectType Language | undefined
langs.where("1", "he");

// $ExpectType Language | undefined
langs.where("name", "English");

// $ExpectType Language | undefined
langs.where("local", "English");

// @ts-expect-error
langs.codes(5);

// @ts-expect-error
langs.codes("foo");

// @ts-expect-error
langs.codes("name");

// @ts-expect-error
langs.codes("local");

import escape from "regexp.escape";
import implementation from "regexp.escape/implementation";
import polyfill from "regexp.escape/polyfill";
import shimRegExpEscape from "regexp.escape/shim";
import "regexp.escape/auto";

// $ExpectType string
escape.implementation("foo");
// $ExpectType (str: string) => string
escape.shim();
// $ExpectType (str: string) => string
escape.getPolyfill();
// $ExpectType string
escape("foo");
// $ExpectType (str: string) => string
shimRegExpEscape();
// $ExpectType (str: string) => string
polyfill();
// $ExpectType string
implementation("foo");
// $ExpectType string
RegExp.escape("foo");

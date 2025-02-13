import escape from "regexp.escape";
import implementation from "regexp.escape/implementation";
import polyfill from "regexp.escape/polyfill";
import shimRegExpEscape from "regexp.escape/shim";
import "regexp.escape/auto";

shimRegExpEscape();
implementation("foo");
polyfill();
escape("foo");
RegExp.escape("foo");

import index from "function.prototype.name";
import impl from "function.prototype.name/implementation";
import polyfill from "function.prototype.name/polyfill";
import shim from "function.prototype.name/shim";

index(function foo() {}); // @ExpectType string
index(function() {}); // @ExpectType string

impl.call(function foo() {}); // @ExpectType string
impl.call(function() {}); // @ExpectType string

polyfill().call(function foo() {}); // @ExpectType string
polyfill().call(function() {}); // @ExpectType string

shim().call(function foo() {}); // @ExpectType string
shim().call(function() {}); // @ExpectType string

import "function.prototype.name/auto";
(function foo() {}).name; // @ExpectType string

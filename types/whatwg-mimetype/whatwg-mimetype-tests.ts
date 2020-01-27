/// <reference types="node" />
import MIMEType = require('whatwg-mimetype');

// Declaring shims removes assert dependency. These tests are never executed, only typechecked, so this is fine.
declare function assert(value: boolean): void;

const mt = MIMEType.parse("text/plain");

assert(mt !== null);
if (mt) {
  assert(mt.type === "text");
  assert(mt.subtype === "plain");
  assert(mt.essence === "text/plain");
  assert(mt.parameters.size === 0);
  assert(!mt.isXML());
  assert(!mt.isHTML());
  assert(!mt.isJavaScript());
}

const mt2 = new MIMEType("application/javascript; charset=utf8");

assert(mt2.type === "text");
assert(mt2.subtype === "plain");
assert(mt2.essence === "text/plain");
assert(mt2.parameters.get("charset") === "utf8");
assert(mt2.isJavaScript({ allowParameters: true }));

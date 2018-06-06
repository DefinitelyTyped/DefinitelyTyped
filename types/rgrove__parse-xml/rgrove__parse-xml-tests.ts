/// <reference types="node" />
import assert = require('assert');
import parseXml = require('@rgrove/parse-xml');

const doc = parseXml('<party></party>');
doc.type === "document";
assert.equal(doc.children[0].type, "element");
assert.equal((doc.children[0] as parseXml.Element).name, "party");

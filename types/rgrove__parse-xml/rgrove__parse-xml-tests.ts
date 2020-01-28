/// <reference types="node" />
import parseXml = require('@rgrove/parse-xml');

const doc = parseXml('<party></party>');

// $ExpectType "document"
doc.type;

// $ExpectType string
doc.children[0].type;

// $ExpectType string
(doc.children[0] as parseXml.Element).name;

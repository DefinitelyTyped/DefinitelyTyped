/// <reference types="node" />

import * as fs from "fs";
import * as YAML from "yaml";

YAML.parse("3.14159");
// 3.14159

YAML.parse("[ true, false, maybe, null ]\n");
// [ true, false, 'maybe', null ]

const file = fs.readFileSync("./file.yml", "utf8");
YAML.parse(file);
// { YAML:
//   [ 'A human-readable data serialization language',
//     'https://en.wikipedia.org/wiki/YAML' ],
//   yaml:
//   [ 'A complete JavaScript implementation',
//     'https://www.npmjs.com/package/yaml' ] }

YAML.stringify(3.14159);
// '3.14159\n'

YAML.stringify([true, false, "maybe", null]);
// `- true
// - false
// - maybe
// - null
// `

YAML.stringify({ number: 3, plain: "string", block: "two\nlines\n" });
// `number: 3
// plain: string
// block: >
//   two
//
//   lines
// `

const src = "[{ a: A }, { b: B }]";
const doc = YAML.parseDocument(src);
const contents = doc.contents as YAML.ast.FlowSeq;
const { anchors } = doc;
const [a, b] = contents.items as YAML.ast.FlowMap[];
anchors.setAnchor(a.items[0].value); // 'a1'
anchors.setAnchor(b.items[0].value); // 'a2'
anchors.setAnchor(null, "a1"); // 'a1'
anchors.getName(a); // undefined
anchors.getNode("a2");
// { value: 'B', range: [ 16, 18 ], type: 'PLAIN' }
String(doc);
// [ { a: A }, { b: &a2 B } ]

const alias = anchors.createAlias(a, "AA");
contents.items.push(alias);
doc.toJSON();
// [ { a: 'A' }, { b: 'B' }, { a: 'A' } ]
String(doc);
// [ &AA { a: A }, { b: &a2 B }, *AA ]

const merge = anchors.createMergePair(alias);
b.items.push(merge);
doc.toJSON();
// [ { a: 'A' }, { b: 'B', a: 'A' }, { a: 'A' } ]
String(doc);
// [ &AA { a: A }, { b: &a2 B, <<: *AA }, *AA ]

// This creates a circular reference
merge.value.items.push(anchors.createAlias(b));
doc.toJSON(); // [RangeError: Maximum call stack size exceeded]
String(doc);
// [
//   &AA { a: A },
//   &a3 {
//       b: &a2 B,
//       <<:
//         [ *AA, *a3 ]
//     },
//   *AA
// ]

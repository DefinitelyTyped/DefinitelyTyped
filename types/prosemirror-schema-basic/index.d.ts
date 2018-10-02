// Type definitions for prosemirror-schema-basic 1.0
// Project: https://github.com/ProseMirror/prosemirror-schema-basic
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { MarkSpec, NodeSpec, Schema } from 'prosemirror-model';

/**
 * [Specs](#model.NodeSpec) for the nodes defined in this schema.
 */
export let nodes: {
  doc: NodeSpec;
  paragraph: NodeSpec;
  blockquote: NodeSpec;
  horizontal_rule: NodeSpec;
  heading: NodeSpec;
  code_block: NodeSpec;
  text: NodeSpec;
  image: NodeSpec;
  hard_break: NodeSpec;
};
/**
 * [Specs](#model.MarkSpec) for the marks in the schema.
 */
export let marks: {
  link: MarkSpec;
  em: MarkSpec;
  strong: MarkSpec;
  code: MarkSpec;
};
/**
 * This schema rougly corresponds to the document schema used by
 * [CommonMark](http://commonmark.org/), minus the list elements,
 * which are defined in the [`prosemirror-schema-list`](#schema-list)
 * module.
 *
 * To reuse elements from this schema, extend or read from its
 * `spec.nodes` and `spec.marks` [properties](#model.Schema.spec).
 */
export let schema: Schema<keyof typeof nodes, keyof typeof marks>;

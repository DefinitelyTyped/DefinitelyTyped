// Type definitions for prosemirror-schema-basic 0.21
// Project: https://github.com/ProseMirror/prosemirror-schema-basic
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { MarkSpec, NodeSpec, Schema } from 'prosemirror-model';

export let nodes: {
    doc: NodeSpec,
    paragraph: NodeSpec,
    blockquote: NodeSpec,
    horizontal_rule: NodeSpec,
    heading: NodeSpec,
    code_block: NodeSpec,
    text: NodeSpec,
    image: NodeSpec,
    hard_break: NodeSpec
};
export let marks: {
    link: MarkSpec,
    em: MarkSpec,
    strong: MarkSpec,
    code: MarkSpec
};
export let schema: Schema;

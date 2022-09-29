import { Schema } from 'prosemirror-model';
import { EditorState, NodeSelection, Selection, TextSelection, Transaction } from 'prosemirror-state';
import pm = require('prosemirror-test-builder');

export type DispatchFunction = (tr: Transaction) => void;
export type CommandFunction = (state: EditorState, dispatch?: DispatchFunction) => boolean;

function selectionFor(docNode: pm.TaggedProsemirrorNode) {
    const aTag = docNode.tag.a;
    if (aTag != null) {
        const $aTag = docNode.resolve(aTag);
        if ($aTag.parent.inlineContent) {
            return new TextSelection($aTag, docNode.tag.b != null ? docNode.resolve(docNode.tag.b) : undefined);
        } else {
            return new NodeSelection($aTag);
        }
    }
    return Selection.atStart(docNode);
}

function createState(d: pm.TaggedProsemirrorNode) {
    return EditorState.create({ doc: d, selection: selectionFor(d) });
}

export function apply(
    docNode: pm.TaggedProsemirrorNode,
    command: CommandFunction,
    result?: pm.TaggedProsemirrorNode,
): [boolean, pm.TaggedProsemirrorNode] {
    let state = createState(docNode);
    command(state, tr => (state = state.apply(tr)));

    if (!pm.eq(state.doc, result || docNode)) {
        return [false, state.doc as pm.TaggedProsemirrorNode];
    }

    if (result && result.tag.a != null) {
        return [pm.eq(state.selection, selectionFor(result)), result || docNode];
    }
    return [true, state.doc as pm.TaggedProsemirrorNode];
}

const { p, doc, builders } = pm;

apply(doc(p('hi'), p('<a>there')), () => true, doc(p('hi there')));

export const schema = new Schema<'doc' | 'paragraph' | 'blockquote', 'em'>({
    nodes: {
        doc: {
            content: 'block+',
        },

        paragraph: {
            group: 'block',
            parseDOM: [{ tag: 'p' }],
            toDOM() {
                return ['p', 0];
            },
        },

        blockquote: {
            content: 'block+',
            group: 'block',
            parseDOM: [{ tag: 'blockquote' }],
            toDOM() {
                return ['blockquote', 0];
            },
        },
    },

    marks: {
        em: {
            parseDOM: [
                { tag: 'i' },
                { tag: 'em' },
                {
                    style: 'font-style',
                    getAttrs: value => value === 'italic' && null,
                },
            ],
            toDOM() {
                return ['em'];
            },
        },
    },
});

const { h1, a } = builders(schema, {
    p: { nodeType: 'paragraph' },
    h1: { nodeType: 'heading', level: 1 },
    h2: { nodeType: 'heading', level: 2 },
    hr: { nodeType: 'horizontal_rule' },
    li: { nodeType: 'list_item' },
    ol: { nodeType: 'ordered_list' },
    ul: { nodeType: 'bullet_list' },
    pre: { nodeType: 'code_block' },
    a: { markType: 'link', href: 'foo' },
    br: { nodeType: 'hard_break' },
    img: { nodeType: 'image', src: 'img.png', alt: 'x' },
});

const args: Parameters<typeof h1> = [p(), { level: 1 }, { tag: { abc: 1 }, flat: [p()] }];
const ARGS_TEST = args; // $ExpectType Args

const TEST1 = h1; // $ExpectType NodeBuilderMethod<Schema<"doc" | "paragraph" | "blockquote", "em">> || NodeBuilderMethod<Schema<"blockquote" | "doc" | "paragraph", "em">>
const TEST2 = a; // $ExpectType MarkBuilderMethod<Schema<"doc" | "paragraph" | "blockquote", "em">> || MarkBuilderMethod<Schema<"blockquote" | "doc" | "paragraph", "em">>

h1(''); // $ExpectType TaggedProsemirrorNode<Schema<"doc" | "paragraph" | "blockquote", "em">> || TaggedProsemirrorNode<Schema<"blockquote" | "doc" | "paragraph", "em">>
a(''); // $ExpectType TaggedFlatObject<Schema<"doc" | "paragraph" | "blockquote", "em">> || TaggedFlatObject<Schema<"blockquote" | "doc" | "paragraph", "em">>

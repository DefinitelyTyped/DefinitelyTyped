// Type definitions for prosemirror-test-builder 1.0
// Project: https://github.com/prosemirror/prosemirror-test-builder#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Node as ProsemirrorNode, Schema } from 'prosemirror-model';

type TestNodesUnion =
    | 'p'
    | 'pre'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'li'
    | 'ul'
    | 'ol'
    | 'br'
    | 'img'
    | 'hr'
    | 'ordered_list'
    | 'bullet_list'
    | 'list_item'
    | 'doc'
    | 'paragraph'
    | 'blockquote'
    | 'horizontal_rule'
    | 'heading'
    | 'code_block'
    | 'text'
    | 'image'
    | 'hard_break';
type TestMarksUnion = 'a' | 'link' | 'em' | 'strong' | 'code';

type Args = Array<string | prosemirrorTestBuilder.TaggedProsemirrorNode | prosemirrorTestBuilder.TaggedFlatObject>;

type NodeBuilderMethod<S extends Schema = any> = (
    ...args: Args
) => prosemirrorTestBuilder.TaggedProsemirrorNode<S>;

type MarkBuilderMethod<S extends Schema = any> = (
    ...args: Args
) => prosemirrorTestBuilder.TaggedFlatObject<S>;

declare namespace prosemirrorTestBuilder {
    interface NodeTypeAttributes extends Record<string, any> {
        nodeType: string;
    }

    interface MarkTypeAttributes extends Record<string, any> {
        markType: string;
    }

    interface TaggedFlatObject<S extends Schema = any> {
        tag: Record<string, number>;
        flat: Array<TaggedProsemirrorNode<S> | TaggedFlatObject<S>>;
    }

    interface TaggedProsemirrorNode<S extends Schema = any>
        extends TaggedFlatObject<S>,
    ProsemirrorNode {}

    type TestSchema = Schema<TestNodesUnion, TestMarksUnion>;

    interface EqMethod {
        eq(param: EqMethod): boolean;
    }

    type Builder = <
        Obj extends Record<
        string,
    NodeTypeAttributes | MarkTypeAttributes
        > = Record<string, NodeTypeAttributes | MarkTypeAttributes>,
    N extends string = string,
    M extends string = string
        >(
            testSchema: Schema<N, M>,
            names: Obj,
        ) => Record<N, NodeBuilderMethod<Schema<N, M>>> &
        Record<M, MarkBuilderMethod<Schema<N, M>>> &
        {
            [P in keyof Obj]: Obj[P] extends NodeTypeAttributes
                ? NodeBuilderMethod<Schema<N, M>>
                : MarkBuilderMethod<Schema<N, M>>
        };

    interface ProsemirrorTestBuilder {
        schema: TestSchema;
        builders: Builder;
        eq(a: EqMethod, b: EqMethod): boolean;
        p: NodeBuilderMethod<TestSchema>;
        pre: NodeBuilderMethod<TestSchema>;
        h1: NodeBuilderMethod<TestSchema>;
        h2: NodeBuilderMethod<TestSchema>;
        h3: NodeBuilderMethod<TestSchema>;
        li: NodeBuilderMethod<TestSchema>;
        ul: NodeBuilderMethod<TestSchema>;
        ol: NodeBuilderMethod<TestSchema>;
        br: NodeBuilderMethod<TestSchema>;
        img: NodeBuilderMethod<TestSchema>;
        hr: NodeBuilderMethod<TestSchema>;
        a: MarkBuilderMethod<TestSchema>;

        // From schema list
        ordered_list: NodeBuilderMethod<TestSchema>;
        bullet_list: NodeBuilderMethod<TestSchema>;
        list_item: NodeBuilderMethod<TestSchema>;
        doc: NodeBuilderMethod<TestSchema>;

        // From schema basic
        paragraph: NodeBuilderMethod<TestSchema>;
        blockquote: NodeBuilderMethod<TestSchema>;
        horizontal_rule: NodeBuilderMethod<TestSchema>;
        heading: NodeBuilderMethod<TestSchema>;
        code_block: NodeBuilderMethod<TestSchema>;
        text: NodeBuilderMethod<TestSchema>;
        image: NodeBuilderMethod<TestSchema>;
        hard_break: NodeBuilderMethod<TestSchema>;
        link: MarkBuilderMethod<TestSchema>;
        em: MarkBuilderMethod<TestSchema>;
        strong: MarkBuilderMethod<TestSchema>;
        code: MarkBuilderMethod<TestSchema>;
    }
}

declare const prosemirrorTestBuilder: prosemirrorTestBuilder.ProsemirrorTestBuilder;

export = prosemirrorTestBuilder;

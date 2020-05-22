import { ReactChild } from 'react';

import { Block, BlockInstance } from '../';

/**
 * Returns the block attributes of a registered block node given its type.
 *
 * @param blockTypeOrName - Block type or name.
 * @param innerHTML - Raw block content.
 * @param attributes - Known block attributes (from delimiters).
 *
 * @returns All block attributes.
 */
export function getBlockAttributes<T extends Block<any>>(
    blockTypeOrName: T,
    innerHTML: string,
    attributes?: Record<string, any>
): T extends Block<infer U> ? U : never;
export function getBlockAttributes(
    blockTypeOrName: string,
    innerHTML: string,
    attributes?: Record<string, any>
): Record<string, any>;

export namespace Schema {
    interface Attribute {
        source: 'attribute';
        selector?: string;
        attribute: string;
        type?: 'string' | 'boolean';
    }
    interface Children {
        source: 'children';
        selector?: string;
    }
    interface HTML {
        source: 'html';
        selector?: string;
        multiline?: keyof HTMLElementTagNameMap;
    }
    interface Node {
        source: 'node';
        selector?: string;
    }
    interface Tag {
        source: 'tag';
        selector?: string;
    }
    interface Text {
        source: 'text';
        selector?: string;
    }
    interface Query<T> {
        source: 'query';
        selector?: string;
        query: T;
    }
}

export type Source<T> =
    | Schema.Attribute
    | Schema.Children
    | Schema.HTML
    | Schema.Node
    | Schema.Query<T>
    | Schema.Tag
    | Schema.Text;

// prettier-ignore
export type SourceReturnValue<T> =
    T extends Schema.Attribute & { type: 'boolean' } ? boolean | undefined :
    T extends Schema.Children ? ReactChild[] :
    T extends Schema.Node ? JSX.Element | null :
    T extends Schema.Tag ? keyof (HTMLElementTagNameMap & SVGElementTagNameMap) | undefined :
    T extends Schema.Query<infer U> ? {
        [k in keyof U]: U[k] extends Schema.Query<infer V> ? SourceReturnValue<Schema.Query<V>> : SourceReturnValue<U[k]>;
    } :
    (string | undefined);

/**
 * Given a block's raw content and an attribute's schema returns the attribute's
 * value depending on its source.
 *
 * @param innerHTML - Block's raw content.
 * @param attributeSchema - Attribute's schema.
 *
 * @returns Attribute value (if located).
 */
export function parseWithAttributeSchema(
    innerHTML: string,
    schema: Schema.Attribute & { type: 'boolean' }
): boolean | undefined;
export function parseWithAttributeSchema(
    innerHTML: string,
    schema: Schema.Attribute | Schema.HTML | Schema.Text
): string | undefined;
export function parseWithAttributeSchema(innerHTML: string, schema: Schema.Children): ReactChild[];
export function parseWithAttributeSchema(innerHTML: string, schema: Schema.Node): JSX.Element | null;
export function parseWithAttributeSchema(
    innerHTML: string,
    schema: Schema.Tag
): keyof (HTMLElementTagNameMap & SVGElementTagNameMap) | undefined;
export function parseWithAttributeSchema<T extends Record<string, Source<any>>>(
    innerHTML: string,
    schema: Schema.Query<T>
): {
    [k in keyof T]: SourceReturnValue<T[k]>;
};

/**
 * Parses the post content with a PegJS grammar and returns a list of blocks.
 *
 * @param content - The post content.
 */
export function parse(content: string): BlockInstance[];

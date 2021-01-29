// Type definitions for @wordpress/blocks 6.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/blocks/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
//                 Jon Surrell <https://github.com/sirreal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { Dashicon } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { ComponentType, ReactElement } from 'react';

export * from './api';
export { withBlockContentContext } from './block-content-provider';

declare module '@wordpress/data' {
    function dispatch(key: 'core/blocks'): typeof import('./store/actions');
    function select(key: 'core/blocks'): typeof import('./store/selectors');
}

export type BlockAlignment = 'left' | 'center' | 'right' | 'wide' | 'full';

export interface BlockEditProps<T extends Record<string, any>> extends BlockSaveProps<T> {
    readonly className: string;
    readonly clientId: string;
    readonly isSelected: boolean;
    readonly setAttributes: (attrs: Partial<T>) => void;
}

export interface BlockIconNormalized {
    background?: string;
    foreground?: string;
    shadowColor?: string;
    src: Dashicon.Icon | ReactElement | ComponentType;
}

export type BlockIcon = BlockIconNormalized['src'] | BlockIconNormalized;

export interface BlockSaveProps<T extends Record<string, any>> {
    readonly attributes: Readonly<T>;
}

export interface BlockStyle {
    readonly name: string;
    readonly label: string;
    readonly isDefault?: boolean;
}

export interface Block<T extends Record<string, any> = {}> {
    /**
     * Attributes for the block.
     */
    readonly attributes: {
        readonly [k in keyof T]: BlockAttribute<T[k] extends Array<infer U> ? U : T[k]>;
    };
    /**
     * The block category (determines placement in the inserter).
     */
    readonly category: string;
    /**
     * Array of deprecation handlers for the block.
     */
    readonly deprecated?: ReadonlyArray<BlockDeprecation<T>>;
    /**
     * This is a short description for your block, which can be translated
     * with our translation functions.
     */
    readonly description?: string;
    /**
     * Component to render in the editor.
     */
    readonly edit?: ComponentType<BlockEditProps<T>>;
    /**
     * Icon for the block.
     */
    readonly icon: BlockIconNormalized;
    /**
     * Searchable keywords for discovery.
     */
    readonly keywords?: readonly string[];
    /**
     * Setting `parent` lets a block require that it is only available when
     * nested within the specified blocks.
     */
    readonly parent?: readonly string[];
    /**
     * This is set internally when registering the type.
     */
    readonly name: string;
    /**
     * Component to render on the frontend.
     */
    readonly save: ComponentType<BlockSaveProps<T>>;
    /**
     * Block styles.
     *
     * @see `https://wordpress.org/gutenberg/handbook/extensibility/extending-blocks/#block-style-variations`
     */
    readonly styles?: readonly BlockStyle[];
    /**
     * Optional block extended support features.
     */
    readonly supports?: BlockSupports;
    /**
     * This is the display title for your block, which can be translated
     * with our translation functions.
     */
    readonly title: string;
    /**
     * Block transformations.
     */
    readonly transforms?: {
        /**
         * Transforms from another block type to this block type.
         */
        readonly from?: ReadonlyArray<Transform<T>>;
        /**
         * Transforms from this block type to another block type.
         */
        readonly to?: readonly Transform[];
    };
    /**
     * Sets attributes on the topmost parent element of the current block.
     */
    getEditWrapperProps?(attrs: T): Record<string, string | number | boolean>;
    /**
     * Undocumented, but used in core.
     *
     * @see `@wordpress/block-library/src/paragraph`
     */
    merge?(attributes: T, attributesToMerge: T): Partial<T>;
}

export type BlockConfiguration<T extends Record<string, any> = {}> = Partial<Omit<Block<T>, 'icon'>> &
    Pick<Block<T>, 'attributes' | 'category' | 'title'> & {
        icon?: BlockIcon;
    };

export interface BlockInstance<T extends Record<string, any> = { [k: string]: any }> {
    /**
     * Attributes for the block.
     */
    readonly attributes: T;
    /**
     * Unique ID registered to the block.
     */
    readonly clientId: string;
    /**
     * Array of inner blocks, if the block has any.
     */
    readonly innerBlocks: BlockInstance[];
    /**
     * Indicates whether or not the block is valid.
     */
    readonly isValid: boolean;
    /**
     * The block's registered name.
     */
    readonly name: string;
    /**
     * The parsed HTML content of the block.
     */
    readonly originalContent?: string;
}

export interface BlockDeprecation<T extends Record<string, any>>
    extends Pick<Block<T>, 'attributes' | 'save' | 'supports'> {
    /**
     * A function which, given the attributes and inner blocks of the
     * parsed block, returns true if the deprecation can handle the block
     * migration. This is particularly useful in cases where a block is
     * technically valid even once deprecated, and requires updates to its
     * attributes or inner blocks.
     */
    isEligible?(attributes: Record<string, any>, innerBlocks: BlockInstance[]): boolean;
    /**
     * A function which, given the old attributes and inner blocks is
     * expected to return either the new attributes or a tuple array of
     * [attributes, innerBlocks] compatible with the block.
     */
    migrate?(attributes: Record<string, any>): T;
    migrate?(attributes: Record<string, any>, innerBlocks: BlockInstance[]): [T, BlockInstance[]];
}

//
// Supports
// ----------------------------------------------------------------------------

export interface BlockSupports {
    /**
     * This property adds block controls which allow to change block's
     * alignment.
     *
     * @defaultValue false
     */
    readonly align?: boolean | readonly BlockAlignment[];
    /**
     * Enable wide alignment (depends on `align`).
     *
     * @defaultValue true
     */
    readonly alignWide?: boolean;
    /**
     * Anchors let you link directly to a specific block on a page. This
     * property adds a field to define an id for the block and a button to
     * copy the direct link.
     *
     * @defaultValue false
     */
    readonly anchor?: boolean;
    /**
     * This property adds a field to define a custom className for the
     * block's wrapper.
     *
     * @defaultValue true
     */
    readonly customClassName?: boolean;
    /**
     * By default, Gutenberg adds a class with the form
     * `.wp-block-your-block-name` to the root element of your saved
     * markup.
     *
     * @defaultValue true
     */
    readonly className?: boolean;
    /**
     * By default, Gutenberg will allow a block's markup to be edited
     * individually. To disable this behavior, set `html` to `false`
     *
     * @defaultValue true
     */
    readonly html?: boolean;
    /**
     * By default, all blocks will appear in the Gutenberg inserter. To
     * hide a block so that it can only be inserted programmatically, set
     * to false
     *
     * @defaultValue true
     */
    readonly inserter?: boolean;
    /**
     * A non-multiple block can be inserted into each post, one time only.
     *
     * @defaultValue true
     */
    readonly multiple?: boolean;
    /**
     * By default all blocks can be converted to a reusable block.
     *
     * @defaultValue true
     */
    readonly reusable?: boolean;
}

//
// Attributes
// ----------------------------------------------------------------------------

export namespace AttributeSource {
    type Attribute = {
        source: 'attribute';
        attribute: string;
        selector?: string;
    } & (
        | {
              type: 'boolean';
              default?: boolean;
          }
        | {
              type: 'number';
              default?: number;
          }
        | {
              type: 'string';
              default?: string;
          });

    interface Children {
        source: 'children';
        type: 'array';
        selector?: string;
    }

    interface HTML {
        source: 'html';
        type: 'string';
        multiline?: 'li' | 'p';
        selector?: string;
        default?: string;
    }

    interface Meta {
        source: 'meta';
        type: 'string';
        meta: string;
        default?: string;
    }

    interface Query<T> {
        source: 'query';
        type: 'array';
        selector: string;
        query: {
            [k in keyof T]: BlockAttribute<T[k] extends Array<infer U> ? U : T[k]>;
        };
        default?: any[];
    }

    interface Text {
        source: 'text';
        type: 'string';
        selector?: string;
        default?: string;
    }

    type None = {
        source?: never;
    } & (
        | {
              type: 'array';
              default?: any[];
          }
        | {
              type: 'boolean';
              default?: boolean;
          }
        | {
              type: 'number';
              default?: number;
          }
        | {
              type: 'string';
              default?: string;
          });
}

export type BlockAttribute<T> =
    | AttributeSource.Attribute
    | AttributeSource.Children
    | AttributeSource.HTML
    | AttributeSource.Meta
    | AttributeSource.Query<T>
    | AttributeSource.Text
    | AttributeSource.None;

//
// Transforms
// ----------------------------------------------------------------------------

export type TransformRawSchema = {
    [k in keyof HTMLElementTagNameMap | '#text']?: {
        attributes?: string[];
        require?: Array<keyof HTMLElementTagNameMap>;
        classes?: Array<string | RegExp>;
        children?: TransformRawSchema;
    };
};

export interface TransformBlock<T extends Record<string, any>> {
    type: 'block';
    priority?: number;
    blocks: string[];
    isMatch?(attributes: T): boolean;
    isMultiBlock?: boolean;
    transform(attributes: T): BlockInstance<Partial<T>>;
}

export interface TransformEnter<T extends Record<string, any>> {
    type: 'enter';
    priority?: number;
    regExp: RegExp;
    transform(): BlockInstance<Partial<T>>;
}

export interface TransformFiles<T extends Record<string, any>> {
    type: 'files';
    priority?: number;
    isMatch?(files: FileList): boolean;
    transform(files: FileList, onChange?: (id: string, attrs: T) => void): BlockInstance<Partial<T>>;
}

export interface TransformPrefix<T extends Record<string, any>> {
    type: 'prefix';
    priority?: number;
    prefix: string;
    transform(content: string): BlockInstance<Partial<T>>;
}

export interface TransformRaw<T extends Record<string, any>> {
    type: 'raw';
    priority?: number;
    /**
     * Comma-separated list of selectors, no spaces.
     *
     * @example 'p,div,h1,.css-class,#id'
     */
    selector?: string;
    schema?: TransformRawSchema;
    isMatch?(node: Node): boolean;
    transform?(node: Node): BlockInstance<Partial<T>> | void;
}

export interface TransformShortcode<T extends Record<string, any>> {
    type: 'shortcode';
    priority?: number;
    tag: string;
    attributes?: any; // TODO: add stronger types here.
}

export type Transform<T extends Record<string, any> = Record<string, any>> =
    | TransformBlock<T>
    | TransformEnter<T>
    | TransformFiles<T>
    | TransformPrefix<T>
    | TransformRaw<T>
    | TransformShortcode<T>;

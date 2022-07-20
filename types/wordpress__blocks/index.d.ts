// Type definitions for @wordpress/blocks 11.0
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/blocks/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
//                 Jon Surrell <https://github.com/sirreal>
//                 Dennis Snell <https://github.com/dmsnell>
//                 Tomasz Tunik <https://github.com/tomasztunik>
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
    background?: string | undefined;
    foreground?: string | undefined;
    shadowColor?: string | undefined;
    src: Dashicon.Icon | ReactElement | ComponentType;
}

export type BlockIcon = BlockIconNormalized['src'] | BlockIconNormalized;

export interface BlockSaveProps<T extends Record<string, any>> {
    readonly attributes: Readonly<T>;
}

export interface BlockStyle {
    readonly name: string;
    readonly label: string;
    readonly isDefault?: boolean | undefined;
}

/**
 * Internal type for the innerBlocks property inside of the example
 *
 * @internal
 * @see Block.example
 * @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55245#discussion_r692208988}
 */
type BlockExampleInnerBlock = Partial<Block> &
    Pick<Block, 'name' | 'attributes'> & {
        innerBlocks?: ReadonlyArray<BlockExampleInnerBlock>;
    };

export interface Block<T extends Record<string, any> = {}> {
    /**
     * The version of the Block API used by the block.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#api-version}
     */
    readonly apiVersion?: number;
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
    readonly deprecated?: ReadonlyArray<BlockDeprecation<T>> | undefined;
    /**
     * This is a short description for your block, which can be translated
     * with our translation functions.
     */
    readonly description?: string | undefined;
    /**
     * Component to render in the editor.
     */
    readonly edit?: ComponentType<BlockEditProps<T>> | undefined;
    /**
     * Block type editor script definition.
     * It will only be enqueued in the context of the editor.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-script}
     */
    readonly editorScript?: string;
    /**
     * Block type editor style definition.
     * It will only be enqueued in the context of the editor.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#editor-style}
     */
    readonly editorStyle?: string;
    /**
     * It provides structured example data for the block.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#example}
     */
    readonly example?: Readonly<Partial<Block> & { innerBlocks?: ReadonlyArray<BlockExampleInnerBlock> }>;
    /**
     * Icon for the block.
     */
    readonly icon: BlockIconNormalized;
    /**
     * Searchable keywords for discovery.
     */
    readonly keywords?: readonly string[] | undefined;
    /**
     * Setting `parent` lets a block require that it is only available when
     * nested within the specified blocks.
     */
    readonly parent?: readonly string[] | undefined;
    /**
     * Context provided for available access by descendants of blocks of this
     * type, in the form of an object which maps a context name to one of the
     * block’s own attribute.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#provides-context}
     */
    readonly providesContext?: Record<string, keyof T>;
    /**
     * This is set internally when registering the type.
     */
    readonly name: string;
    /**
     * Component to render on the frontend.
     */
    readonly save: ComponentType<BlockSaveProps<T>>;
    /**
     * Block type frontend script definition.
     * It will be enqueued both in the editor and when viewing the content on
     * the front of the site.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#script}
     */
    readonly script?: string;
    /**
     * Block type editor style definition.
     * It will only be enqueued in the context of the editor.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#style}
     */
    readonly style?: string;
    /**
     * Block styles.
     *
     * @see `https://wordpress.org/gutenberg/handbook/extensibility/extending-blocks/#block-style-variations`
     */
    readonly styles?: readonly BlockStyle[] | undefined;
    /**
     * Optional block extended support features.
     */
    readonly supports?: BlockSupports | undefined;
    /**
     * The gettext text domain of the plugin/block.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#text-domain}
     */
    readonly textdomain?: string;
    /**
     * This is the display title for your block, which can be translated
     * with our translation functions.
     */
    readonly title: string;
    /**
     * Block transformations.
     */
    readonly transforms?:
        | {
              /**
               * Transforms from another block type to this block type.
               */
              readonly from?: ReadonlyArray<Transform<T>> | undefined;
              /**
               * Transforms from this block type to another block type.
               */
              readonly to?: readonly Transform[] | undefined;
          }
        | undefined;
    /**
     * Array of the names of context values to inherit from an ancestor
     * provider.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#context}
     */
    readonly usesContext?: string[];
    /**
     * The current version number of the block, such as 1.0 or 1.0.3.
     *
     * @see {@link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#version}
     */
    readonly version?: string;
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
        icon?: BlockIcon | undefined;
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
    readonly originalContent?: string | undefined;
}

export interface BlockDeprecation<
    // The new block attribute types.
    N extends Record<string, any>,
    // The old block attribute types.
    O extends Record<string, any> = Record<string, any>,
> extends Pick<Block<O>, 'attributes' | 'save' | 'supports'> {
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
    migrate?(attributes: O, innerBlocks: BlockInstance[]): N | [N, BlockInstance[]];
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
    readonly align?: boolean | readonly BlockAlignment[] | undefined;
    /**
     * Enable wide alignment (depends on `align`).
     *
     * @defaultValue true
     */
    readonly alignWide?: boolean | undefined;
    /**
     * Anchors let you link directly to a specific block on a page. This
     * property adds a field to define an id for the block and a button to
     * copy the direct link.
     *
     * @defaultValue false
     */
    readonly anchor?: boolean | undefined;
    /**
     * This property adds a field to define a custom className for the
     * block's wrapper.
     *
     * @defaultValue true
     */
    readonly customClassName?: boolean | undefined;
    /**
     * By default, Gutenberg adds a class with the form
     * `.wp-block-your-block-name` to the root element of your saved
     * markup.
     *
     * @defaultValue true
     */
    readonly className?: boolean | undefined;
    /**
     * By default, Gutenberg will allow a block's markup to be edited
     * individually. To disable this behavior, set `html` to `false`
     *
     * @defaultValue true
     */
    readonly html?: boolean | undefined;
    /**
     * By default, all blocks will appear in the Gutenberg inserter. To
     * hide a block so that it can only be inserted programmatically, set
     * to false
     *
     * @defaultValue true
     */
    readonly inserter?: boolean | undefined;
    /**
     * A non-multiple block can be inserted into each post, one time only.
     *
     * @defaultValue true
     */
    readonly multiple?: boolean | undefined;
    /**
     * By default all blocks can be converted to a reusable block.
     *
     * @defaultValue true
     */
    readonly reusable?: boolean | undefined;
}

//
// Attributes
// ----------------------------------------------------------------------------

export namespace AttributeSource {
    type Attribute = {
        source: 'attribute';
        attribute: string;
        selector?: string | undefined;
    } & (
        | {
              type: 'boolean';
              default?: boolean | undefined;
          }
        | {
              type: 'number';
              default?: number | undefined;
          }
        | {
              type: 'string';
              default?: string | undefined;
          }
    );

    interface Children {
        source: 'children';
        type: 'array';
        selector?: string | undefined;
    }

    interface HTML {
        source: 'html';
        type: 'string';
        multiline?: 'li' | 'p' | undefined;
        selector?: string | undefined;
        default?: string | undefined;
    }

    interface Meta {
        source: 'meta';
        type: 'string';
        meta: string;
        default?: string | undefined;
    }

    interface Query<T> {
        source: 'query';
        type: 'array';
        selector: string;
        query: {
            [k in keyof T]: BlockAttribute<T[k] extends Array<infer U> ? U : T[k]>;
        };
        default?: any[] | undefined;
    }

    interface Text {
        source: 'text';
        type: 'string';
        selector?: string | undefined;
        default?: string | undefined;
    }

    type None =
        | ({
              source?: never | undefined;
          } & (
              | {
                    type: 'array';
                    default?: any[] | undefined;
                }
              | {
                    type: 'object';
                    default?: object | undefined;
                }
              | {
                    type: 'boolean';
                    default?: boolean | undefined;
                }
              | {
                    type: 'number';
                    default?: number | undefined;
                }
              | {
                    type: 'string';
                    default?: string | undefined;
                }
          ))
        | 'array'
        | 'object'
        | 'boolean'
        | 'number'
        | 'string';
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
        attributes?: string[] | undefined;
        require?: Array<keyof HTMLElementTagNameMap> | undefined;
        classes?: Array<string | RegExp> | undefined;
        children?: TransformRawSchema | undefined;
    };
};

export interface TransformBlock<T extends Record<string, any>> {
    type: 'block';
    priority?: number | undefined;
    blocks: string[];
    isMatch?(attributes: T): boolean;
    isMultiBlock?: boolean | undefined;
    transform(attributes: T): BlockInstance<Partial<T>>;
}

export interface TransformEnter<T extends Record<string, any>> {
    type: 'enter';
    priority?: number | undefined;
    regExp: RegExp;
    transform(): BlockInstance<Partial<T>>;
}

export interface TransformFiles<T extends Record<string, any>> {
    type: 'files';
    priority?: number | undefined;
    isMatch?(files: FileList): boolean;
    transform(files: FileList, onChange?: (id: string, attrs: T) => void): BlockInstance<Partial<T>>;
}

export interface TransformPrefix<T extends Record<string, any>> {
    type: 'prefix';
    priority?: number | undefined;
    prefix: string;
    transform(content: string): BlockInstance<Partial<T>>;
}

export interface TransformRaw<T extends Record<string, any>> {
    type: 'raw';
    priority?: number | undefined;
    /**
     * Comma-separated list of selectors, no spaces.
     *
     * @example 'p,div,h1,.css-class,#id'
     */
    selector?: string | undefined;
    schema?: TransformRawSchema | undefined;
    isMatch?(node: Node): boolean;
    transform?(node: Node): BlockInstance<Partial<T>> | void;
}

export interface TransformShortcode<T extends Record<string, any>> {
    type: 'shortcode';
    priority?: number | undefined;
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

export type BlockAttributes = Record<string, any>;

export type InnerBlockTemplate = [string, BlockAttributes | undefined, InnerBlockTemplate[] | undefined];

export type BlockVariationScope = 'block' | 'inserter' | 'transform';

export interface BlockVariation<Attributes extends BlockAttributes = BlockAttributes> {
    name: string;
    title: string;
    description?: string;
    category?: string;
    icon?: BlockIcon;
    isDefault?: boolean;
    attributes?: Attributes;
    innerBlocks?: BlockInstance | InnerBlockTemplate[];
    example?:
        | BlockExampleInnerBlock
        | {
              attributes: Attributes;
              innerBlocks?: InnerBlockTemplate[];
          };
    scope?: BlockVariationScope[];
    keywords?: string[];
    isActive?: (blockAttributes: Attributes, variationAttributes: Attributes) => boolean | string[];
}

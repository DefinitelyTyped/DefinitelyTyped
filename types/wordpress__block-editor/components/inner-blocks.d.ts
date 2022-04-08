import { TemplateArray } from '@wordpress/blocks';
import { ComponentType } from 'react';

import { EditorTemplateLock } from '../';

declare namespace InnerBlocks {
    interface Props {
        allowedBlocks?: string[];
        /**
         * A 'render prop' function that can be used to customize the block's appender.
         */
        renderAppender?: ComponentType;
        /**
         * The template is defined as a list of block items. Such blocks can have predefined
         * attributes, placeholder, content, etc. Block templates allow specifying a default initial
         * state for an InnerBlocks area.
         *
         * See {@link https://github.com/WordPress/gutenberg/blob/master/docs/designers-developers/developers/block-api/block-templates.md }
         */
        template?: TemplateArray;
        /**
         * If `true` when child blocks in the template are inserted the selection is updated.
         * If `false` the selection should not be updated when child blocks specified in the template are inserted.
         * @defaultValue true
         */
        templateInsertUpdatesSelection?: boolean;
        /**
         * Template locking allows locking the `InnerBlocks` area for the current template.
         *
         * - `'all'` — prevents all operations. It is not possible to insert new blocks. Move existing blocks or delete them.
         * - `'insert'` — prevents inserting or removing blocks, but allows moving existing ones.
         * - `false` — prevents locking from being applied to an `InnerBlocks` area even if a parent block contains locking.
         *
         * If locking is not set in an `InnerBlocks` area: the locking of the parent `InnerBlocks` area is used.
         *
         * If the block is a top level block: the locking of the Custom Post Type is used.
         */
        templateLock?: EditorTemplateLock;
    }
}
declare const InnerBlocks: {
    (props: InnerBlocks.Props): JSX.Element;
    Content: ComponentType<{ children?: never }>;
    /**
     * display a `+` (plus) icon button that, when clicked, displays the block picker menu. No
     * default Block is inserted.
     */
    ButtonBlockerAppender: ComponentType<{ children?: never }>;
    /**
     * display the default block appender as set by `wp.blocks.setDefaultBlockName`. Typically this
     * is the `paragraph` block.
     */
    DefaultBlockAppender: ComponentType<{ children?: never }>;
};

export default InnerBlocks;

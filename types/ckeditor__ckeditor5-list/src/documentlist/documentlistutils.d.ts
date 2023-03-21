import { Plugin } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import Node from '@ckeditor/ckeditor5-engine/src/model/node';

export default class DocumentListUtils extends Plugin {
    static readonly pluginName: 'DocumentListUtils';

    /**
     * Expands the given list of selected blocks to include all the items of the lists they're in.
     */
    expandListBlocksToCompleteList(blocks: Element | Element[]): Element[];

    /**
     * Check if the given block is the first in the list item.
     */
    isFirstBlockOfListItem(listBlock: Element): boolean;

    /**
     * Returns true if the given model node is a list item block.
     */
    isListItemBlock(node: Node): boolean;
}

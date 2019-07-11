import { ReactChild } from '@wordpress/element';

import { Block, BlockInstance } from '../';

/**
 * Given a block object, returns the Block's Inner HTML markup.
 */
export function getBlockContent(block: BlockInstance): string;

/**
 * Returns the block's default classname from its name.
 */
export function getBlockDefaultClassName(blockName: string): string;

/**
 * Returns the block's default menu item classname from its name.
 */
export function getBlockMenuDefaultClassName(blockName: string): string;

/**
 * Given a block type containing a save render implementation and attributes, returns the
 * static markup to be saved.
 *
 * @param blockTypeOrName - Block type or name.
 * @param attributes - Block attributes.
 * @param innerBlocks - Nested blocks.
 */
export function getSaveContent<T>(
    blockTypeOrName: Block<T> | string,
    attributes: T,
    innerBlocks?: BlockInstance[]
): string;

/**
 * Given a block type containing a save render implementation and attributes, returns the
 * enhanced element to be saved or string when raw HTML expected.
 *
 * @param blockTypeOrName - Block type or name.
 * @param attributes - Block attributes.
 * @param innerBlocks -  Nested blocks.
 */
export function getSaveElement<T>(
    blockTypeOrName: Block<T> | string,
    attributes: T,
    innerBlocks?: BlockInstance[]
): ReactChild;

/**
 * Takes a block or set of blocks and returns the serialized post content.
 *
 * @param blocks - Block(s) to serialize.
 */
export function serialize(blocks: BlockInstance[]): string;

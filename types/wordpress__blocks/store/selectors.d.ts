import { Block, BlockStyle } from '../';

export {
    getBlockSupport,
    getBlockType,
    getBlockTypes,
    getCategories,
    getChildBlockNames,
    getDefaultBlockName,
    getGroupingBlockName,
    hasBlockSupport,
    hasChildBlocks,
    hasChildBlocksWithInserterSupport,
} from '../';

/**
 * Returns block styles by block name.
 */
export function getBlockStyles(blockName: string): readonly BlockStyle[] | undefined;

/**
 * Returns the name of the block for handling non-block content.
 */
export function getFreeformFallbackBlockName(): string | undefined;

/**
 * Returns the name of the block for handling unregistered blocks.
 */
export function getUnregisteredFallbackBlockName(): string | undefined;

/**
 * Returns true if the block type by the given name or object value matches a
 * search term, or false otherwise.
 */
export function isMatchingSearchTerm(nameOrType: string | Block<any>, searchTerm: string): boolean;

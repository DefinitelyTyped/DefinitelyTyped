import { Block, BlockInstance, Transform } from '../';

/**
 * Given a `BlockInstance`, returns a copy of `BlockInstance`, optionally merging
 * new attributes and/or replacing its inner blocks.
 *
 * @param block - Block instance.
 * @param mergeAttributes - Block attributes.
 * @param newInnerBlocks - Nested blocks.
 */
export function cloneBlock<T extends Record<string, any>>(
    block: BlockInstance<T>,
    mergeAttributes?: Partial<T>,
    newInnerBlocks?: BlockInstance[]
): BlockInstance<T>;

/**
 * Returns a `BlockInstance` given its type and attributes.
 *
 * @param name - Block name.
 * @param attributes - Block attributes.
 * @param innerBlocks - Nested blocks.
 */
export function createBlock<T extends Record<string, any>>(
    name: string,
    attributes?: Partial<T>,
    innerBlocks?: BlockInstance[]
): BlockInstance<T>;

/**
 * Given an array of transforms, returns the highest-priority transform where
 * the predicate function returns a truthy value. A higher-priority transform
 * is one with a lower priority value (i.e. first in priority order). Returns
 * null if the transforms set is empty or the predicate function returns a
 * falsey value for all entries.
 *
 * @param transforms - Transforms to search.
 * @param predicate - Function returning true on matching transform.
 *
 * @returns Highest-priority transform candidate.
 */
export function findTransform<T extends Transform, U extends Record<string, any> = Record<string, any>>(
    transforms: T[],
    predicate: (transform: T) => boolean
): Transform<U> | null; // tslint:disable-line:no-unnecessary-generics

/**
 * Returns normal block transforms for a given transform direction, optionally
 * for a specific block by name, or an empty array if there are no transforms.
 * If no block name is provided, returns transforms for all blocks. A normal
 * transform object includes `blockName` as a property.
 *
 * @param direction - Transform direction.
 * @param blockTypeOrName - `BlockInstance` or name.
 */
export function getBlockTransforms<T extends Record<string, any> = Record<string, any>>(
    direction: 'to' | 'from',
    blockTypeOrName?: string | Block
): Array<Transform<T> & { blockName: string }>; // tslint:disable-line:no-unnecessary-generics

/**
 * Returns an array of block types that the set of blocks received as argument
 * can be transformed into.
 *
 * @param blocks - Array of `BlockInstance`
 *
 * @returns Block types that ALL blocks in `blocks` can be transformed to.
 */
export function getPossibleBlockTransformations(blocks: BlockInstance[]): Array<Block<Record<string, any>>>;

/**
 * Switch one or more blocks into one or more blocks of the new block type.
 *
 * @param blocks - One or more `BlockInstance`.
 * @param name - Block name of block to be switched to.
 */
export function switchToBlockType(blocks: BlockInstance | BlockInstance[], name: string): BlockInstance[] | null;

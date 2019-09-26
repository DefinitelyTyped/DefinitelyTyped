import { BlockIcon, BlockIconNormalized, BlockInstance } from '../';

/**
 * Determines whether the block is a default block and its attributes are equal
 * to the default attributes which means the block is unmodified.
 */
export function isUnmodifiedDefaultBlock(block: BlockInstance): boolean;

/**
 * Function that checks if the parameter is a valid icon.
 *
 * @param icon - Parameter to be checked.
 */
export function isValidIcon(icon: any): boolean;

/**
 * Function that receives an icon as set by the blocks during the registration
 * and returns a new icon object that is normalized so we can rely on just on possible icon structure
 * in the codebase.
 *
 * @param icon - Slug of the Dashicon to be shown as the icon for the block in
 *               the inserter, a custom element, or an object describing the icon.
 */
export function normalizeIconObject(icon?: BlockIcon): BlockIconNormalized;

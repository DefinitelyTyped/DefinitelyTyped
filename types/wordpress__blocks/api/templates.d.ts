import { BlockInstance } from '../';

export type Template = readonly [string, Readonly<Record<string, any>>?, TemplateArray?];
export interface TemplateArray extends ReadonlyArray<Template> {}

/**
 * Checks whether a list of blocks matches a template by comparing the block names.
 *
 * @param blocks - Block list.
 * @param template - Block template.
 */
export function doBlocksMatchTemplate(blocks?: BlockInstance[], template?: TemplateArray): boolean;

/**
 * Synchronize a block list with a block template.
 *
 * Synchronizing a block list with a block template means that we loop over the blocks
 * keep the block as is if it matches the block at the same position in the template
 * (If it has the same name) and if doesn't match, we create a new block based on the template.
 * Extra blocks not present in the template are removed.
 *
 * @param blocks   - Block list.
 * @param template - Block template.
 */
export function synchronizeBlocksWithTemplate(blocks?: BlockInstance[], template?: TemplateArray): BlockInstance[];

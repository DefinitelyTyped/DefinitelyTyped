import { Model, Range } from '@ckeditor/ckeditor5-engine';
import { TreeWalkerValue } from '@ckeditor/ckeditor5-engine/src/model/treewalker';
import FindAndReplaceState from './findandreplacestate';

/**
 * Executes findCallback and updates search results list.
 *
 * An example structure:
 *
 * ```js
 * {
 *    id: resultId,
 *    label: foundItem.label,
 *    marker
 * }
 * ```
 */
export function updateFindResultFromRange(
    range: Range,
    model: Model,
    findCallback: (arg: {
        item: TreeWalkerValue['item'];
        text: string;
    }) => Array<{ label: string; start: number; end: number }>,
    startResults?: FindAndReplaceState['results'],
): FindAndReplaceState['results'];

/**
 * Returns text representation of a range. The returned text length should be the same as range length.
 * In order to achieve this this function will:
 * - replace inline elements (text-line) as new line character ("\n").
 * - @todo: check unicode characters
 */
export function rangeToText(range: Range): string;

/**
 * Creates a text matching callback for a specified search term and matching options.
 */
export function findByTextCallback(
    searchTerm: string,
    options?: { matchCase?: boolean; wholeWords?: boolean },
): (query: { text: string }) => Array<{ label: string; start: number; end: number }>;

import { BlockInstance } from '@wordpress/blocks';

import { EditorBlockListSettings, EditorSettings } from '../';

/**
 * Signals that the block selection is cleared.
 */
export function clearSelectedBlock(): void;

/**
 * Signals that the caret has entered formatted text.
 */
export function enterFormattedText(): void;

/**
 * Signals that the user caret has exited formatted text.
 */
export function exitFormattedText(): void;

/**
 * Hides the insertion point.
 */
export function hideInsertionPoint(): void;

/**
 * Signals that a single block should be inserted, optionally at a specific index, respective a root
 * block list.
 *
 * @param block - Block object to insert.
 * @param index - Index at which block should be inserted.
 * @param rootClientId - Optional root client ID of block list on which to insert.
 * @param updateSelection - If `true` block selection will be updated. If `false`, block selection
 *                          will not change. Defaults to true.
 */
export function insertBlock(
    block: BlockInstance,
    index?: number,
    rootClientId?: string,
    updateSelection?: boolean
): void;

/**
 * Signals that an array of blocks should be inserted, optionally at a specific index respective a
 * root block list.
 *
 * @param blocks - Block objects to insert.
 * @param index - Index at which block should be inserted.
 * @param rootClientId - Optional root client ID of block list on which to insert.
 * @param updateSelection - If `true` block selection will be updated. If `false`, block selection will
 *                          not change. Defaults to `true`.
 */
export function insertBlocks(
    blocks: BlockInstance[],
    index?: number,
    rootClientId?: string,
    updateSelection?: boolean
): IterableIterator<void>;

/**
 * Returns an action object used in signalling that a new block of the default type should be added
 * to the block list.
 *
 * @param attributes - Attributes of the block to assign.
 * @param rootClientId - Root client ID of block list on which to append.
 * @param index - Index where to insert the default block.
 */
export function insertDefaultBlock(attributes?: Record<string, any>, rootClientId?: string, index?: number): void;

/**
 * Returns an action object used in signalling that two blocks should be merged.
 *
 * @param firstBlockClientId - Client ID of the first block to merge.
 * @param secondBlockClientId - Client ID of the second block to merge.
 */
export function mergeBlocks(firstBlockClientId: string, secondBlockClientId: string): void;

/**
 * Signals that an indexed block should be moved to a new index.
 *
 * @param clientId - The client ID of the block.
 * @param fromRootClientId - Root client ID source.
 * @param toRootClientId - Root client ID destination.
 * @param index - The index to move the block into.
 */
export function moveBlockToPosition(
    clientId: string | undefined,
    fromRootClientId: string | undefined,
    toRootClientId: string | undefined,
    index: number
): IterableIterator<void>;

export function moveBlocksDown(clientIds: string | string[], rootClientId: string): void;

export function moveBlocksUp(clientIds: string | string[], rootClientId: string): void;

/**
 * Signals that block multi-selection changed.
 *
 * @param start - First block of the multi selection.
 * @param end - Last block of the multiselection.
 */
export function multiSelect(start: string, end: string): void;

/**
 * Signals that blocks have been received. Unlike `resetBlocks`, these should be appended to the
 * existing known set, not replacing.
 *
 * @param blocks - Array of block instances.
 */
export function receiveBlocks(blocks: BlockInstance[]): void;

/**
 * Signals that the block with the specified client ID is to be removed.
 *
 * @param clientId - Client ID of block to remove.
 * @param selectPrevious - `true` if the previous block should be selected when a block is removed.
 */
export function removeBlock(clientId: string, selectPrevious?: boolean): void;

/**
 * Signalling that the blocks corresponding to the set of specified client IDs are to be removed.
 *
 * @param clientIds - Client IDs of blocks to remove.
 * @param selectPrevious - `true` if the previous block should be selected when a block is removed.
 *                          Default: `true`
 */
export function removeBlocks(clientIds: string | string[], selectPrevious?: boolean): IterableIterator<void>;

/**
 * Returns an action object signalling that a single block should be replaced
 * with one or more replacement blocks.
 *
 * @param clientId - Block client ID to replace.
 * @param block - Replacement block(s).
 */
export function replaceBlock(clientId: string | string[], block: BlockInstance | BlockInstance[]): void;

/**
 * Signals that a blocks should be replaced with one or more replacement blocks.
 *
 * @param clientIds - Block client ID(s) to replace.
 * @param blocks - Replacement block(s).
 * @param indexToSelect - Index of replacement block to select.
 */
export function replaceBlocks(
    clientIds: string | string[],
    blocks: BlockInstance | BlockInstance[],
    indexToSelect?: number
): IterableIterator<void>;

/**
 * Signals that the inner blocks with the specified client ID should be replaced.
 *
 * @param rootClientId - Client ID of the block whose InnerBlocks will re replaced.
 * @param blocks - Block objects to insert as new InnerBlocks
 * @param updateSelection - If `true` block selection will be updated. If `false`, block selection
 *                          will not change. Defaults to `true`.
 */
export function replaceInnerBlocks(rootClientId: string, blocks: BlockInstance[], updateSelection?: boolean): void;

/**
 * Returns an action object used in signalling that blocks state should be reset to the specified
 * array of blocks, taking precedence over any other content reflected as an edit in state.
 *
 * @param blocks - Array of blocks.
 */
export function resetBlocks(blocks: BlockInstance[]): void;

/**
 * Signals that the block with the specified client ID has been selected, optionally accepting a
 * position value reflecting its selection directionality. An initialPosition of `-1` reflects a
 * reverse selection.
 *
 * @param clientId - Block client ID.
 * @param initialPosition - Initial position. Pass as `-1` to reflect reverse selection.
 */
export function selectBlock(clientId: string, initialPosition?: number): void;

/**
 * Yields action objects used in signalling that the block following the given `clientId` should be
 * selected.
 *
 * @param clientId - Block client ID.
 */
export function selectNextBlock(clientId: string): IterableIterator<void>;

/**
 * Yields action objects used in signalling that the block preceding the given clientId should be
 * selected.
 *
 * @param clientId - Block client ID.
 */
export function selectPreviousBlock(clientId: string): IterableIterator<void>;

/**
 * Signals that the user caret has changed position.
 *
 * @param clientId - The selected block client ID.
 * @param attributeKey - The selected block attribute key.
 * @param startOffset - The start offset.
 * @param endOffset - The end offset.
 */
export function selectionChange(clientId: string, attributeKey: string, startOffset: number, endOffset: number): void;

/**
 * Resets the template validity.
 *
 * @param isValid - template validity flag.
 */
export function setTemplateValidity(isValid: boolean): void;

/**
 * Signals that the insertion point should be shown.
 *
 * @param rootClientId - Optional root client ID of block list on which to insert.
 * @param index - Index at which block should be inserted.
 */
export function showInsertionPoint(rootClientId?: string, index?: number): void;

/**
 * Signals that a block multi-selection has started.
 */
export function startMultiSelect(): void;

/**
 * Signals that the user has begun to type.
 */
export function startTyping(): void;

/**
 * Signals that block multi-selection stopped.
 */
export function stopMultiSelect(): void;

/**
 * Signals that the user has stopped typing.
 */
export function stopTyping(): void;

/**
 * Synchronize the template with the list of blocks.
 */
export function synchronizeTemplate(): void;

/**
 * Toggle the block editing mode between visual and HTML modes.
 *
 * @param clientId - Block client ID.
 */
export function toggleBlockMode(clientId: string): void;

/**
 * Enables or disables block selection.
 *
 * @param isSelectionEnabled - Whether block selection should be enabled.
 */
export function toggleSelection(isSelectionEnabled?: boolean): void;

/**
 * Signals that the block with the specified client ID has been updated.
 *
 * @param clientId - Block client ID.
 * @param updates - Block attributes to be merged.
 */
export function updateBlock(clientId: string, updates: Partial<BlockInstance>): void;

/**
 * Signals that the block attributes with the specified client ID has been updated.
 *
 * @param clientId - Block client ID.
 * @param attributes - Block attributes to be merged.
 */
export function updateBlockAttributes(clientId: string, attributes: Record<string, any>): void;

/**
 * Changes the nested settings of a given block.
 *
 * @param clientId - Client ID of the block whose nested setting are being received.
 * @param settings - Object with the new settings for the nested block.
 */
export function updateBlockListSettings(clientId: string, settings: EditorBlockListSettings): void;

/**
 * Signals that the block editor settings have been updated.
 *
 * @param settings - Updated settings.
 */
export function updateSettings(settings: Partial<EditorSettings>): void;

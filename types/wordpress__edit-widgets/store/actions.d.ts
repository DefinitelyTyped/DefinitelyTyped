import { BlockInstance } from '@wordpress/blocks';

/**
 * Action that performs the logic to save widget areas.
 */
export function saveWidgetAreas(): IterableIterator<void>;

/**
 * Action that sets up the widget areas.
 */
export function setupWidgetAreas(): IterableIterator<void>;

/**
 * Action that updates the blocks in a specific widget area.
 *
 * @param widgetAreaId - Id of the widget area.
 * @param blocks - Array of blocks that should be part of the widget area.
 */
export function updateBlocksInWidgetArea(widgetAreaId: string, blocks?: BlockInstance[]): void;

import { BlockInstance } from '@wordpress/blocks';

import { WidgetArea } from '../';

/**
 * Returns an array of blocks part of a widget area.
 *
 * @param widgetAreaId - Id of the widget area.
 */
export function getBlocksFromWidgetArea(widgetAreaId: string): BlockInstance[] | undefined;

/**
 * Returns a widget area object.
 *
 * @param widgetAreaId - Id of the widget area.
 */
export function getWidgetArea(widgetAreaId: string): WidgetArea | undefined;

/**
 * Returns an array of widget areas.
 */
export function getWidgetAreas(): WidgetArea[];

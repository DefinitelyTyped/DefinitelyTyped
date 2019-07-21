// Type definitions for @wordpress/edit-widgets 0.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/edit-widgets/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { EditorSettings } from '@wordpress/block-editor';
import { dispatch, select } from '@wordpress/data';

declare module '@wordpress/data' {
    function dispatch(key: 'core/edit-widgets'): typeof import('./store/actions');
    function select(key: 'core/edit-widgets'): typeof import('./store/selectors');
}

export interface WidgetArea {
    description: string;
    id: string;
    name: string;
}

/**
 * Initializes the block editor in the widgets Customizer section.
 *
 * @param id - ID of the root element to render the section in.
 * @param settings - Block editor settings.
 */
export function customizerInitialize(id: string, settings?: Partial<EditorSettings>): void;

/**
 * Initializes the block editor in the widgets screen.
 *
 * @param id - ID of the root element to render the screen in.
 * @param settings - Block editor settings.
 */
export function initialize(id: string, settings?: Partial<EditorSettings>): void;

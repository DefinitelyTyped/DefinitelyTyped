// Type definitions for @wordpress/notices 1.5
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/notices/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { dispatch, select } from '@wordpress/data';
import { MouseEventHandler } from '@wordpress/element';

declare module '@wordpress/data' {
    function dispatch(key: 'core/notices'): typeof import('./store/actions');
    function select(key: 'core/notices'): typeof import('./store/selectors');
}

export type Status = 'error' | 'info' | 'success' | 'warning';

export interface Notice {
    id: string;
    status: Status;
    content: string;
    isDismissible: boolean;
    actions: readonly Action[];
}

export interface URLAction {
    label: string;
    url: string;
}

export interface CallbackAction {
    label: string;
    callback(): void;
}

export type Action = URLAction | CallbackAction;

export interface Options {
    /**
     * User actions to be presented with notice.
     */
    actions: readonly Action[];
    /**
     * Context under which to group notice.
     * @defaultValue `'global'`
     */
    context: string;
    /**
     * Identifier for notice. Automatically assigned if not specified.
     */
    id: string;
    /**
     * Whether the notice can be dismissed by user.
     * @defaultValue `true`
     */
    isDismissible: boolean;
    /**
     * Whether the notice content should be announced to screen readers.
     * @defaultValue `true`
     */
    speak: boolean;
    /**
     * The type of notice.
     * @defaultValue `'default'`
     */
    type: 'default' | 'snackbar';
}

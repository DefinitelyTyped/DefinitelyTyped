// Type definitions for @wordpress/notices 3.3
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/notices/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
//                Chi-Hsuan Huang <https://github.com/chihsuan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { MouseEventHandler } from 'react';

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

export interface BaseAction {
    label: string;
}
export interface ButtonAction extends BaseAction {
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export interface URLAction extends BaseAction {
    url: string;
}

export type Action = ButtonAction | URLAction;

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
    /**
     *  An icon displayed with the notice.
     * @defaultValue `null`
     */
    icon: null | JSX.Element;
    /**
     * Whether the notice includes
     * an explict dismiss button and
     * can't be dismissed by clicking
     * the body of the notice.
     * @defaultValue `false`
     */
    explicitDismiss: boolean;
    /**
     *  Called when the notice is dismissed.
     */
    onDismiss(): void;
}

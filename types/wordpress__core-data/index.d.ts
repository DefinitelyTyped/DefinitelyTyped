// Type definitions for @wordpress/core-data 2.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/core-data/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { Schema } from './schema';
export { Schema } from './schema';

declare module '@wordpress/data' {
    function dispatch(key: 'core'): typeof import('./actions');
    function select(key: 'core'): typeof import('./selectors');
}

export interface Autosave extends Schema.PostRevision<'edit'> {
    preview_link: string;
}

export interface Entity {
    baseURL: string;
    key?: string;
    kind: string;
    name: string;
    plural?: string;
}

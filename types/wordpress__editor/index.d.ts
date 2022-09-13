// Type definitions for @wordpress/editor 11.0
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/editor/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { dispatch, select } from '@wordpress/data';

export { storeConfig, transformStyles } from '@wordpress/block-editor';

declare module '@wordpress/data' {
    function dispatch(key: 'core/editor'): typeof import('./store/actions');
    function select(key: 'core/editor'): typeof import('./store/selectors');
}

export * from './components';
export * from './utils';

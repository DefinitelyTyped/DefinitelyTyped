// Type definitions for @wordpress/viewport 2.5
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/viewport/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { dispatch, select } from '@wordpress/data';

declare module '@wordpress/data' {
    function dispatch(key: 'core/viewport'): typeof import('./store/actions');
    function select(key: 'core/viewport'): typeof import('./store/selectors');
}

export { default as ifViewportMatches } from './if-viewport-matches';
export { default as withViewportMatch } from './with-viewport-match';

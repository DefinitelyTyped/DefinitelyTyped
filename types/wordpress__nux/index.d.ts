// Type definitions for @wordpress/nux 3.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/nux/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { dispatch, select } from '@wordpress/data';

declare module '@wordpress/data' {
    function dispatch(key: 'core/nux'): typeof import('./store/actions');
    function select(key: 'core/nux'): typeof import('./store/selectors');
}

export { default as DotTip } from './components/dot-tip';

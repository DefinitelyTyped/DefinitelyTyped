// Type definitions for @wordpress/editor 13.6
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/editor/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 5.0

import { dispatch, select, StoreDescriptor } from '@wordpress/data';

export { storeConfig, transformStyles } from '@wordpress/block-editor';

type SelectFunction = (key: string) => typeof import("./store/selectors");

declare module '@wordpress/data' {
    function dispatch(key: 'core/editor'): typeof import('./store/actions');
    function select(key: 'core/editor'): typeof import('./store/selectors');
    
    function useSelect(selectFunction: ((select: SelectFunction) => any), deps: unknown[]): any;
    function useDispatch(key: string): typeof import("./store/actions");
}

export interface EditorStoreDescriptor extends StoreDescriptor {
    name: 'core/editor';
}

declare module '@wordpress/editor' {
    const store: EditorStoreDescriptor;
}

export * from './components';
export * from './utils';

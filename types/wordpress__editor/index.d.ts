// Type definitions for @wordpress/editor 13.6
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/editor/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 5.0
export { storeConfig, transformStyles } from '@wordpress/block-editor';
import { EditorStore } from './store';

export const store: EditorStore;

export * from './components';
export * from './utils';

import type {
    WPDataReduxStoreConfig,
    WPDataStore
} from '@wordpress/data/src/types';

export function createReduxStore(key: string, options: WPDataReduxStoreConfig): WPDataStore;
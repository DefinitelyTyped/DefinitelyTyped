import type { createReduxStore } from '@wordpress/data'

// This is only used internally by `@wordpress/editor`. Not worth the effort of typing this.
export const storeConfig: {
    reducer: any;
    selectors: any;
    actions: any;
    controls: any;
};

export const store: ReturnType<typeof createReduxStore> & {
    persist: ['preferences']
}

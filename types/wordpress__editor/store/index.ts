import type { StoreDescriptor } from '@wordpress/data';
interface EditorStoreDescriptor extends StoreDescriptor {
    name: 'core/editor',
}
export let store: EditorStoreDescriptor;

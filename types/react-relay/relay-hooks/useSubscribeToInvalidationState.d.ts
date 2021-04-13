import { DataID, Disposable } from 'relay-runtime';

/**
 * This hook subscribes a callback to the invalidation state of the given data
 * ids.
 * Any time the invalidation state of the given data ids changes, the provided
 * callback will be called.
 * If new ids or a new callback are provided, the subscription will be
 * re-established and the previous one will be disposed.
 * The subscription will automatically be disposed on unmount
 */
export function useSubscribeToInvalidationState(dataIDs: ReadonlyArray<DataID>, callback: () => void): Disposable;

import { StoreKey } from '.';
import { Hooks } from './createHooks';

export type DidHook = (hookName: string) => number | undefined;

/**
 * Returns a function which, when invoked, will return the number of times a
 * hook has been called.
 */
export default function createDidHook(hooks: Hooks, storeKey: StoreKey): DidHook;

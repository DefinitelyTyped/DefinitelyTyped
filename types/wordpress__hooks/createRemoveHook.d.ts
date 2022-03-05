import { StoreKey } from '.';
import { Hooks } from './createHooks';

export type RemoveHook = (hookName: string, namespace?: string) => number | undefined;

/**
 * Returns a function which, when invoked, will remove a specified hook or all
 * hooks by the given name.
 */
export default function createRemoveHook(hooks: Hooks, storeKey: StoreKey, removeAll?: boolean): RemoveHook;

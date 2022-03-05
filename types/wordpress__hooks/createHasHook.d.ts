import { StoreKey } from '.';
import { Hooks } from './createHooks';

export type HasHook = (hookName: string, namespace?: string) => boolean;

/**
 * Returns a function which, when invoked, will return whether any handlers are
 * attached to a particular hook.
 */
export default function createHasHook(hooks: Hooks, storeKey: StoreKey): HasHook;

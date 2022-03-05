import { Callback, StoreKey } from '.';
import { Hooks } from './createHooks';

export type AddHook = (hookName: string, namespace: string, callback: Callback, priority?: number) => void;

/**
 * Returns a function which, when invoked, will add a hook.
 */
export default function createAddHook(hooks: Hooks, storeKey: StoreKey): AddHook;

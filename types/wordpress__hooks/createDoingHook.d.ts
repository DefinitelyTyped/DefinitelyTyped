import { StoreKey } from '.';
import { Hooks } from './createHooks';

export type DoingHook = (hookName: string) => boolean;

/**
 * Returns a function which, when invoked, will return whether a hook is
 * currently being executed.
 */
export default function createDoingHook(hooks: Hooks, storeKey: StoreKey): DoingHook;

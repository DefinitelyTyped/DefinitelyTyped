import { StoreKey } from '.';
import { Hooks } from './createHooks';

export type CurrentHook = () => string | null;

/**
 * Returns a function which, when invoked, will return the name of the
 * currently running hook, or `null` if no hook of the given type is currently
 * running.
 */
export default function createCurrentHook(hooks: Hooks, storeKey: StoreKey): CurrentHook;

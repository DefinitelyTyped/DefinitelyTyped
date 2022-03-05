import { StoreKey } from '.';
import { Hooks } from './createHooks';

export type RunHook = (hookName: string, ...args: unknown[]) => unknown;

/**
 * Returns a function which, when invoked, will execute all callbacks
 * registered to a hook of the specified type, optionally returning the final
 * value of the call chain.
 */
export default function createRunHook(hooks: Hooks, storeKey: StoreKey, returnFirstArg?: boolean): RunHook;

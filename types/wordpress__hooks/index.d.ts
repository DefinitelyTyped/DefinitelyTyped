// Type definitions for @wordpress/hooks 2.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/hooks/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export type ActionCallback = (...args: any[]) => void;
export type FilterCallback = <T>(
    firstArg: T,
    ...rest: any[]
) => T extends string ? string : T extends number ? number : T;

export interface Hook<T extends (...args: any[]) => any> {
    handlers: T[];
    runs: number;
}

export type HookMap<T extends (...args: any[]) => any> = {
    __current: T[];
} & Record<string, Array<Hook<T>> | undefined>;

/**
 * Removes the specified callback (or all callbacks) from the hook with a
 * given hookName and namespace.
 *
 * @param hookName - The name of the hook to modify.
 * @param namespace - The unique namespace identifying the callback in the form `vendor/plugin/function`.
 *
 * @returns The number of callbacks removed.
 */
export type RemoveHook = (hookName: string, namespace: string) => number;

/**
 * Returns whether there are handlers that are attached to the given hook.
 *
 * @param hookName - The name of the hook to check for.
 */
export type HasHook = (hookName: string) => boolean;

/**
 * Runs all callbacks for the specified hook.
 *
 * @param hookName - The name of the hook to run.
 * @param [firstArg] - The first argument passed to the callback.
 * @param args - Additional arguments passed to the callback.
 */
export type RunHook = <T>(
    hookName: string,
    firstArg?: T,
    ...rest: any[]
) => T extends string ? string : T extends number ? number : T;

/**
 * Returns the name of the currently running hook, or `null` if no hook of
 * the given type is currently running.
 */
export type CurrentHook = () => string | null;

/**
 * Returns whether a hook is currently being executed.
 *
 * @param hookName - The name of the hook to check for. If omitted,
 *                   will check for any hook being executed.
 *
 * @return Whether the hook is being executed.
 */
export type DoingHook = (hookName?: string) => boolean;

/**
 * Returns the number of times an action has been fired.
 *
 * @param hookName The hook name to check.
 *
 * @return The number of times the hook has run.
 */
export type DidHook = (hookName: string) => number;

/**
 * Adds the hook to the appropriate hooks container.
 *
 * @param hookName - Name of hook to add.
 * @param namespace - The unique namespace identifying the callback in the form `vendor/plugin/function`.
 * @param callback - Function to call when the hook is run.
 * @param [priority=10] - Priority of this hook.
 */
export function addAction(
    hookName: string,
    namespace: string,
    callback: (...args: any[]) => void,
    priority?: number
): void;

/**
 * Adds the hook to the appropriate hooks container.
 *
 * @param hookName - Name of hook to add.
 * @param namespace - The unique namespace identifying the callback in the form `vendor/plugin/function`.
 * @param callback - Function to call when the hook is run.
 * @param [priority=10] - Priority of this hook.
 */
export function addFilter<T>(
    hookName: string,
    namespace: string,
    callback: (firstArg: T, ...rest: any[]) => T,
    priority?: number
): void;

export const removeAction: RemoveHook;
export const removeFilter: RemoveHook;
export const hasAction: HasHook;
export const hasFilter: HasHook;
export const removeAllActions: RemoveHook;
export const removeAllFilters: RemoveHook;
export const doAction: RunHook;
export const applyFilters: RunHook;
export const currentAction: CurrentHook;
export const currentFilter: CurrentHook;
export const doingAction: DoingHook;
export const doingFilter: DoingHook;
export const didAction: DidHook;
export const didFilter: DidHook;

export const actions: HookMap<ActionCallback>;
export const filters: HookMap<FilterCallback>;

export function createHooks(): {
    addAction: typeof addAction;
    addFilter: typeof addFilter;
    removeAction: typeof removeAction;
    removeFilter: typeof removeFilter;
    hasAction: typeof hasAction;
    hasFilter: typeof hasFilter;
    removeAllActions: typeof removeAllActions;
    removeAllFilters: typeof removeAllFilters;
    doAction: typeof doAction;
    applyFilters: typeof applyFilters;
    currentAction: typeof currentAction;
    currentFilter: typeof currentFilter;
    doingAction: typeof doingAction;
    doingFilter: typeof doingFilter;
    didAction: typeof didAction;
    didFilter: typeof didFilter;
    actions: typeof actions;
    filters: typeof filters;
};

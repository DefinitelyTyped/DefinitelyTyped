// Type definitions for @wordpress/hooks 3.3
// Project: https://github.com/WordPress/gutenberg/tree/trunk/packages/hooks
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { default as createHooks, Hooks } from './createHooks';

export type Callback = (...args: any[]) => any;

interface Handler {
    callback: Callback;
    namespace: string;
    priority: number;
}

interface Hook {
    handlers: Handler[];
    runs: number;
}

interface Current {
    name: string;
    currentIndex: number;
}

export type Store = Record<string, Hook> & { __current: Current[] };

export type StoreKey = 'actions' | 'filters';

declare const hooks: Hooks;

declare const {
    addAction,
    addFilter,
    removeAction,
    removeFilter,
    hasAction,
    hasFilter,
    removeAllActions,
    removeAllFilters,
    doAction,
    applyFilters,
    currentAction,
    currentFilter,
    doingAction,
    doingFilter,
    didAction,
    didFilter,
    actions,
    filters,
}: Hooks;

export {
    createHooks,
    addAction,
    addFilter,
    removeAction,
    removeFilter,
    hasAction,
    hasFilter,
    removeAllActions,
    removeAllFilters,
    doAction,
    applyFilters,
    currentAction,
    currentFilter,
    doingAction,
    doingFilter,
    didAction,
    didFilter,
    actions,
    filters,
};

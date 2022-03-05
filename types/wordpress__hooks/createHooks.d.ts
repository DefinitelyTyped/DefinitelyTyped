import { AddHook } from './createAddHook';
import { RemoveHook } from './createRemoveHook';
import { HasHook } from './createHasHook';
import { RunHook } from './createRunHook';
import { CurrentHook } from './createCurrentHook';
import { DoingHook } from './createDoingHook';
import { DidHook } from './createDidHook';
import { Store } from '.';

export class Hooks {
    actions: Store;
    defaultHooks: Store;
    filters: Store;

    addAction: AddHook;
    addFilter: AddHook;
    applyFilters: RunHook;
    currentAction: CurrentHook;
    currentFilter: CurrentHook;
    didAction: DidHook;
    didFilter: DidHook;
    doAction: RunHook;
    doingAction: DoingHook;
    doingFilter: DoingHook;
    hasAction: HasHook;
    hasFilter: HasHook;
    removeAction: RemoveHook;
    removeAllActions: RemoveHook;
    removeAllFilters: RemoveHook;
    removeFilter: RemoveHook;

    constructor();
}

/**
 * Returns an instance of the hooks object.
 */
export default function createHooks(): Hooks;

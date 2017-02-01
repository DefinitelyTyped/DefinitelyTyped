// Type definitions for redux-batched-actions 0.1
// Project: https://github.com/tshelburne/redux-batched-actions
// Definitions by: Chad Burggraf <https://github.com/ChadBurggraf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Action, Reducer } from 'redux';

export as namespace ReduxBatchedActions;

/**
 * Batching action creator that creates a higher-order
 * action from an array of actions.
 */
export function batchActions<A extends Action>(actions: A[]): Action;

/**
 * Creates a higher-order reducer that enables batching
 * actions for the given reducer.
 */
export function enableBatching<S>(reducer: Reducer<S>): Reducer<S>;

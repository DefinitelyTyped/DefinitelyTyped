/// <reference types="redux" />

declare module "redux-optimistic-ui" {
    import { Reducer } from "redux";

    /**
     * Enhanced state by redux-optimistic-ui
     */
    export interface OptimisticState<TState> {
        /**
         * History list
         * List is Immutable.List<>
         */
        history: any;
        /**
         * Before state
         */
        beforeState: TState;
        /**
         * Current state
         */
        current: TState;
    }

    /**
     * Enhances and wraps your root reducer into optimistic state
     */
    export function optimistic<TState>(reducer: Reducer<TState>): Reducer<OptimisticState<TState>>;

    /**
     * Returns your current state or state if it wasn't enhanced yet
     */
    export function ensureState<TState>(state: OptimisticState<TState> | TState): TState;

    /**
     * Optimistic action slice
     */
    export interface OptimisticAction {
        meta: {
            /**
             * Optimistic information
             */
            optimistic: {
                /**
                 * Type, BEGIN, COMMIT or REVERT
                 */
                type: string;
                /**
                 * Transaction id. Id should be unique for each optimistic action
                 */
                id: number;
            };
        };
    }

    /**
     * Start optimistic action
     */
    export const BEGIN = "@@optimist/BEGIN";
    /**
     * Finish optimistic action and commit results
     */
    export const COMMIT = "@@optimist/COMMIT";
    /**
     * Revert optimistic action
     */
    export const REVERT = "@@optimist/REVERT";
}

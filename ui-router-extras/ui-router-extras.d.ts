// Type definitions for UI-Router Extras 0.0.14+ (ct.ui.router.extras module)
// Project: https://github.com/christopherthielen/ui-router-extras
// Definitions by: Michael Putters <https://github.com/mputters>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angular-ui-router/angular-ui-router.d.ts" />

// Support for AMD require
declare module 'angular-ui-router-extras' {
    var _: string;
    export = _;
}

declare module angular.ui {

    /**
     * Previous state
     */
    interface IPreviousState {
        state: IState;
        params?: {};
    }

    /**
     * Previous state service
     */
    interface IPreviousStateService {

        /**
         * Get a previous state
         * @param memoName Memo name
         * @return Previous state
         */
        get(memoName?: string): IPreviousState;

        /**
         * Go to a state
         * @param memoName Memo name
         * @param options State options
         * @return Promise
         */
        go(memoName: string, options?: IStateOptions): angular.IPromise<any>;

        /**
         * Memorize a state
         * @param memoName Memo name
         * @param defaultStateName Default state name
         * @param defaultStateParams Default state parameters
         */
        memo(memoName: string, defaultStateName?: string, defaultStateParams?: {}): void;

        /**
         * Forget a memorized name
         * @param memoName Memo name
         */
        forget(memoName: string): void;

    }

    /**
     * Sticky state
     */
    interface IStickyState extends angular.ui.IState {
        sticky?: boolean;
    }

    /**
     * Sticky state service
     */
    interface IStickyStateService {
        getInactiveStates(): IStickyState[];
    }

    /**
     * Sticky state provider
     */
    interface IStickyStateProvider extends angular.IServiceProvider {
        debugMode(): boolean;
        enableDebug(enabled: boolean): boolean;
        registerStickyState(state: IStickyState): void;
    }

}

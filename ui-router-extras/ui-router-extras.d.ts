// Type definitions for UI-Router Extras 0.0.14+ (ct.ui.router.extras module)
// Project: https://github.com/christopherthielen/ui-router-extras
// Definitions by: Michael Putters <https://github.com/mputters/>, Marcel van de Kamp <https://github.com/marcel-k/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angular-ui-router/angular-ui-router.d.ts" />

// Support for AMD require
declare module 'angular-ui-router-extras' {
    var _: string;
    export = _;
}

declare module angular.ui {


    /*
     * $deepStateRedirect
     */
    interface IDeepStateRedirectService {
        /*
         * This method resets stored $deepStateRedirect data so following transitions will behave like there have not been previous transitions.
         * @param stateParams Can be passed in to select specific states to reset:
         *  {
         *    'paramName': 'paramvalue' | ['list', 'of', 'possible', 'paramvalues']
         *  }
         */
        reset(stateName: string, stateParams?: { [key: string]: string | string[] }): void;
    }

    /*
     * Docs: http://christopherthielen.github.io/ui-router-extras/#/dsr
     */
    interface IDeepStateRedirectConfig {
        /*
         * If no deep state has been recorded, DSR will instead redirect to the default substate and params that you specify.
         * If default is a string it is interpreted as the substate.
         */
        default?: string | IRedirectParams;
        /*
         * Specify params: true if your DSR state takes parameters.
         * If only a subset of the parameters should be included in the parameter grouping for recording deep states,
         * specify an array of parameter names.
         */
        params?: boolean | string[];
        /*
         * A callback function that determines whether or not the redirect should actually occur, or changes the redirect to some other state.
        * Return an object: IRedirectParams to change the redirect
         */
        fn?($dsr$: { redirect: IRedirectParams; to: IRedirectParams }): boolean | IRedirectParams;
    }

    interface IRedirectParams {
        state: string;
        params?: ui.IStateParamsService;
    }

    /*
     * Previous state
     */
    interface IPreviousState {
        state: IState;
        params?: ui.IStateParamsService;
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
        /*
        * When marking a state sticky, the state must target its own unique named ui-view.
        * Docs: http://christopherthielen.github.io/ui-router-extras/#/sticky
        */
        sticky?: boolean;
        /*
         * The most-recently-activate substate of the DSR marked state is remembered.
         * When the DSR marked state is transitioned to directly, UI-Router Extras will instead redirect to the remembered state and parameters.
         * Docs: http://christopherthielen.github.io/ui-router-extras/#/dsr
         */
        deepStateRedirect?: boolean | IDeepStateRedirectConfig;
        /*
         * Shortname deepStateRedirect prop
         */
        dsr?: boolean | IDeepStateRedirectConfig;
        /*
         * Function (injectable). Called when a sticky state is navigated away from (inactivated).
         */
        onInactivate?: Function;
        /*
         * Function (injectable). Called when an inactive sticky state is navigated to (reactivated).
         */
        onReactivate?: Function;
        /*
         * Note: named views are mandatory when using sticky states!
         */
        views?: { [name:string]: angular.ui.IState };
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

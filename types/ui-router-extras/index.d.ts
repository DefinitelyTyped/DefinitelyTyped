// Type definitions for ui-router-extras 0.1
// Project: https://github.com/christopherthielen/ui-router-extras
// Definitions by: Michael Putters <https://github.com/mputters>, Marcel van de Kamp <https://github.com/marcel-k>, Viktor Smirnov <https://github.com/LaserUnicorns>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular-ui-router" />

import * as angular from 'angular';

declare module 'angular' {
    namespace ui {
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
            params?: IStateParamsService;
        }

        /*
         * Previous state
         */
        interface IPreviousState {
            state: IState;
            params?: IStateParamsService;
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
            go(memoName: string, options?: IStateOptions): IPromise<any>;

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
        interface IStickyState extends IState {
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
            onInactivate?(...args: any[]): void;
            /*
             * Function (injectable). Called when an inactive sticky state is navigated to (reactivated).
             */
            onReactivate?(...args: any[]): void;
            /*
             * Note: named views are mandatory when using sticky states!
             */
            views?: { [name: string]: IState };
        }

        /**
         * Sticky state service
         */
        interface IStickyStateService {
            getInactiveStates(): IStickyState[];
             /*
             * If there is an inactive state named inactiveStateName, this method exits that state.
             * If stateParams is provided, then the state is only exited if the params match the inactive params.
             * If inactiveStateName === '*', then all inactive states are exited
             */
            reset(inactiveStateName: string, stateParams?: { [key: string]: string | string[] }): void;
        }

        /**
         * Sticky state provider
         */
        interface IStickyStateProvider extends IServiceProvider {
            debugMode(): boolean;
            enableDebug(enabled: boolean): boolean;
            registerStickyState(state: IStickyState): void;
        }

        interface IStateProvider extends IServiceProvider {
            state(config: IStickyState): IStateProvider;
            state(name: string, config: IStickyState): IStateProvider;
        }

        interface IFutureStateProvider {
            /**
             * Registers a `FutureState` object as a placeholder for a full UI-Router `state` or `state` tree.
             */
            futureState(state: IFutureState): void;

            /**
             * Registers a `StateFactory` function for `FutureState` of type `type`.
             */
            stateFactory(type: string, stateFactory: IFutureStateFactory): void;

            /**
             * Adds a resolve function.
             * `$futureStateProvider` won't reject any state transitions or routes until all resolveFunction promises have been resolved.
             * Resolves may be used to defer routing until the states have been loaded via $http, for instance.
             */
            addResolve(resolveFn: IResolveFunction): void;
        }

        interface IFutureStateService {}

        /**
         * A `FutureState` object is a placeholder for full a UI-Router `state`
         */
        interface IFutureState {
            /**
             * The placeholder state name (fully qualified).
             * Attempted transitions to this state (or any substates) will trigger a lazy load of the full UI-Router `state` represented by this FutureState.
             */
            stateName: string;

            /**
             * The placeholder url path fragment (the fragment is the URL prefix which the state will be accessed on, not the URL of the state's source code).
             * Attempted navigations to a URL starting with this fragment will trigger a lazy load of the full UI-Router `state` represented by this FutureState.
             */
            url: string;

            /**
             * The type of FutureState. This is a used to select a registered StateFactory which is then used to build the full UI-Router `state`
             */
            type: string;

            [key: string]: any;
        }

        /**
         * `StateFactory` factories convert `FutureState` into a full UI-Router `state`, or `state` tree
         */
        type IFutureStateFactory = Injectable<(...args: any[]) => IPromise<IState | undefined>>;

        type IResolveFunction = Injectable<(...args: any[]) => IPromise<any>>;
    }
}

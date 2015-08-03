// Type definitions for Angular JS 1.1.5+ (ui.router module)
// Project: https://github.com/angular-ui/ui-router
// Definitions by: Michel Salib <https://github.com/michelsalib>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

// Support for AMD require
declare module 'angular-ui-router' {
    var _: string;
    export = _;
}

declare module angular.ui {

    interface IState {
        name?: string;
        /**
         * String HTML content, or function that returns an HTML string
         */
        template?: string | {(): string};
        /**
         * String URL path to template file OR Function, returns URL path string
         */
        templateUrl?: string | {(params: IStateParamsService): string};
        /**
         * Function, returns HTML content string
         */
        templateProvider?: Function | Array<any>;
        /**
         * A controller paired to the state. Function OR name as String
         */
        controller?: Function | string;
        controllerAs?: string;
        /**
         * Function (injectable), returns the actual controller function or string.
         */
        controllerProvider?: Function;
        
        /**
         * Specifies the parent state of this state
         */
        parent?: string | IState
        
        
        resolve?: {};
        /**
         * A url with optional parameters. When a state is navigated or transitioned to, the $stateParams service will be populated with any parameters that were passed.
         */
        url?: string | IUrlMatcher;
        /**
         * A map which optionally configures parameters declared in the url, or defines additional non-url parameters. Only use this within a state if you are not using url. Otherwise you can specify your parameters within the url. When a state is navigated or transitioned to, the $stateParams service will be populated with any parameters that were passed.
         */
        params?: any;
        /**
         * Use the views property to set up multiple views. If you don't need multiple views within a single state this property is not needed. Tip: remember that often nested views are more useful and powerful than multiple sibling views.
         */
        views?: {};
        abstract?: boolean;
        /**
         * Callback function for when a state is entered. Good way to trigger an action or dispatch an event, such as opening a dialog.
         * If minifying your scripts, make sure to explicitly annotate this function, because it won't be automatically annotated by your build tools.
         */
        onEnter?: Function|(string|Function)[];
        /**
         * Callback functions for when a state is entered and exited. Good way to trigger an action or dispatch an event, such as opening a dialog.
         * If minifying your scripts, make sure to explicitly annotate this function, because it won't be automatically annotated by your build tools.
         */
        onExit?: Function|(string|Function)[];
        /**
         * Arbitrary data object, useful for custom configuration.
         */
        data?: any;
        /**
         * Boolean (default true). If false will not re-trigger the same state just because a search/query parameter has changed. Useful for when you'd like to modify $location.search() without triggering a reload.
         */
        reloadOnSearch?: boolean;
    }

    interface IStateProvider extends angular.IServiceProvider {
        state(name:string, config:IState): IStateProvider;
        state(config:IState): IStateProvider;
        decorator(name?: string, decorator?: (state: IState, parent: Function) => any): any;
    }

    interface IUrlMatcher {
        concat(pattern: string): IUrlMatcher;
        exec(path: string, searchParams: {}): {};
        parameters(): string[];
        format(values: {}): string;
    }

    interface IUrlMatcherFactory {
        compile(pattern: string): IUrlMatcher;
        isMatcher(o: any): boolean;
        type(name: string, definition: any, definitionFn?: any): any;
        caseInsensitive(value: boolean): void;
        defaultSquashPolicy(value: string): void;
        strictMode(value: boolean): void;
    }

    interface IUrlRouterProvider extends angular.IServiceProvider {
        when(whenPath: RegExp, handler: Function): IUrlRouterProvider;
        when(whenPath: RegExp, handler: any[]): IUrlRouterProvider;
        when(whenPath: RegExp, toPath: string): IUrlRouterProvider;
        when(whenPath: IUrlMatcher, hanlder: Function): IUrlRouterProvider;
        when(whenPath: IUrlMatcher, handler: any[]): IUrlRouterProvider;
        when(whenPath: IUrlMatcher, toPath: string): IUrlRouterProvider;
        when(whenPath: string, handler: Function): IUrlRouterProvider;
        when(whenPath: string, handler: any[]): IUrlRouterProvider;
        when(whenPath: string, toPath: string): IUrlRouterProvider;
        otherwise(handler: Function): IUrlRouterProvider;
        otherwise(handler: any[]): IUrlRouterProvider;
        otherwise(path: string): IUrlRouterProvider;
        rule(handler: Function): IUrlRouterProvider;
        rule(handler: any[]): IUrlRouterProvider;
    }

    interface IStateOptions {
        /**
         * {boolean=true|string=} - If true will update the url in the location bar, if false will not. If string, must be "replace", which will update url and also replace last history record.
         */
        location?: boolean | string;
        /**
         *  {boolean=true}, If true will inherit url parameters from current url.
         */
        inherit?: boolean;
        /**
         * {object=$state.$current}, When transitioning with relative path (e.g '^'), defines which state to be relative from.
         */
        relative?: IState;
        /**
         * {boolean=true}, If true will broadcast $stateChangeStart and $stateChangeSuccess events.
         */
        notify?: boolean;
        /**
         * {boolean=false}, If true will force transition even if the state or params have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd use this when you want to force a reload when everything is the same, including search params.
         */
        reload?: boolean;
    }

    interface IHrefOptions {
        lossy?: boolean;
        inherit?: boolean;
        relative?: IState;
        absolute?: boolean;
    }

    interface IStateService {
        /**
         * Convenience method for transitioning to a new state. $state.go calls $state.transitionTo internally but automatically sets options to { location: true, inherit: true, relative: $state.$current, notify: true }. This allows you to easily use an absolute or relative to path and specify only the parameters you'd like to update (while letting unspecified parameters inherit from the currently active ancestor states).
         *
         * @param to Absolute state name or relative state path. Some examples:
         *
         * $state.go('contact.detail') - will go to the contact.detail state
         * $state.go('^') - will go to a parent state
         * $state.go('^.sibling') - will go to a sibling state
         * $state.go('.child.grandchild') - will go to grandchild state
         *
         * @param params A map of the parameters that will be sent to the state, will populate $stateParams. Any parameters that are not specified will be inherited from currently defined parameters. This allows, for example, going to a sibling state that shares parameters specified in a parent state. Parameter inheritance only works between common ancestor states, I.e. transitioning to a sibling will get you the parameters for all parents, transitioning to a child will get you all current parameters, etc.
         *
         * @param options Options object.
         */
        go(to: string, params?: {}, options?: IStateOptions): angular.IPromise<any>;
        transitionTo(state: string, params?: {}, updateLocation?: boolean): void;
        transitionTo(state: string, params?: {}, options?: IStateOptions): void;
        includes(state: string, params?: {}): boolean;
        is(state:string, params?: {}): boolean;
        is(state: IState, params?: {}): boolean;
        href(state: IState, params?: {}, options?: IHrefOptions): string;
        href(state: string, params?: {}, options?: IHrefOptions): string;
        get(state: string): IState;
        get(): IState[];
        current: IState;
        params: IStateParamsService;
        reload(): void;
        
        $current: IResolvedState;
    }
    
    interface IResolvedState {
        locals: {
            /**
             * Currently resolved "resolve" values from the current state
             */
            globals: { [key: string]: any; };
        };
    }

    interface IStateParamsService {
        [key: string]: any;
    }

    interface IUrlRouterService {
    	/*
    	 * Triggers an update; the same update that happens when the address bar
    	 * url changes, aka $locationChangeSuccess.
    	 *
    	 * This method is useful when you need to use preventDefault() on the
    	 * $locationChangeSuccess event, perform some custom logic (route protection,
    	 * auth, config, redirection, etc) and then finally proceed with the transition
    	 * by calling $urlRouter.sync().
    	 *
    	 */
        sync(): void;
    }

    interface IUiViewScrollProvider {
        /*
         * Reverts back to using the core $anchorScroll service for scrolling
         * based on the url anchor.
         */
        useAnchorScroll(): void;
    }
}

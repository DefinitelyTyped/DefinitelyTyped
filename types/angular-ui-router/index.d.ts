// Type definitions for Angular JS (ui.router module) 1.1.5
// Project: https://github.com/angular-ui/ui-router
// Definitions by: Michel Salib <https://github.com/michelsalib>, Ivan Matiishyn <https://github.com/matiishyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as angular from 'angular';

export default "ui.router";

export type IState = angular.ui.IState;
export type IStateProvider = angular.ui.IStateProvider;
export type IUrlMatcher = angular.ui.IUrlMatcher;
export type IUrlRouterProvider = angular.ui.IUrlRouterProvider;
export type IStateOptions = angular.ui.IStateOptions;
export type IHrefOptions = angular.ui.IHrefOptions;
export type IStateService = angular.ui.IStateService;
export type IResolvedState = angular.ui.IResolvedState;
export type IStateParamsService = angular.ui.IStateParamsService;
export type IUrlRouterService = angular.ui.IUrlRouterService;
export type IUiViewScrollProvider = angular.ui.IUiViewScrollProvider;
export type IType = angular.ui.IType;

declare module 'angular' {
    export namespace ui {
        interface IState {
            name?: string;
            /**
             * String HTML content, or function that returns an HTML string
             */
            template?: string | { (params: IStateParamsService): string };
            /**
             * String URL path to template file OR Function, returns URL path string
             */
            templateUrl?: string | { (params: IStateParamsService): string };
            /**
             * Function, returns HTML content string
             */
            templateProvider?: Function | Array<string | Function>;
            /**
             * String, component name
             */
            component?: string;
            /**
             * A controller paired to the state. Function, annotated array or name as String
             */
            controller?: Function | string | Array<string | Function>;
            controllerAs?: string;
            /**
             * Function (injectable), returns the actual controller function or string.
             */
            controllerProvider?: Function | Array<string | Function>;

            /**
             * Specifies the parent state of this state
             */
            parent?: string | IState;


            resolve?: { [name: string]: any };
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
            views?: { [name: string]: IState };
            abstract?: boolean;
            /**
             * Callback function for when a state is entered. Good way to trigger an action or dispatch an event, such as opening a dialog.
             * If minifying your scripts, make sure to explicitly annotate this function, because it won't be automatically annotated by your build tools.
             */
            onEnter?: Function | Array<string | Function>;
            /**
             * Callback functions for when a state is entered and exited. Good way to trigger an action or dispatch an event, such as opening a dialog.
             * If minifying your scripts, make sure to explicitly annotate this function, because it won't be automatically annotated by your build tools.
             */
            onExit?: Function | Array<string | Function>;
            /**
             * Arbitrary data object, useful for custom configuration.
             */
            data?: any;

            /**
             * Boolean (default true). If false will not re-trigger the same state just because a search/query parameter has changed. Useful for when you'd like to modify $location.search() without triggering a reload.
             */
            reloadOnSearch?: boolean;

            /**
             * Boolean (default true). If false will reload state on everytransitions. Useful for when you'd like to restore all data  to its initial state.
             */
            cache?: boolean;

            /**
             * string | function | object
             * Synchronously or asynchronously redirects Transitions to a different state/params
             */
            redirectTo?: string | Function | IState;

        }

        interface IUnfoundState {
            to: string,
            toParams: {},
            options: IStateOptions
        }

        interface IStateProvider extends angular.IServiceProvider {
            state(name: string, config: IState): IStateProvider;
            state(config: IState): IStateProvider;
            decorator(name?: string, decorator?: (state: IState, parent: Function) => any): any;
        }

        interface IUrlMatcher {
            concat(pattern: string): IUrlMatcher;
            exec(path: string, search?: any, hash?: string, options?: any): {};
            parameters(): string[];
            format(values: {}): string;
        }

        interface IUrlMatcherFactory {
            /**
             * Creates a UrlMatcher for the specified pattern.
             *
             * @param pattern {string} The URL pattern.
             *
             * @returns {IUrlMatcher} The UrlMatcher.
             */
            compile(pattern: string): IUrlMatcher;
            /**
             * Returns true if the specified object is a UrlMatcher, or false otherwise.
             *
             * @param o {any} The object to perform the type check against.
             *
             * @returns {boolean} Returns true if the object matches the IUrlMatcher interface, by implementing all the same methods.
             */
            isMatcher(o: any): boolean;
            /**
             * Returns a type definition for the specified name
             *
             * @param name {string} The type definition name
             *
             * @returns {IType} The type definition
             */
            type(name: string): IType;
            /**
             * Registers a custom Type object that can be used to generate URLs with typed parameters.
             *
             * @param {IType} definition The type definition.
             * @param {any[]} inlineAnnotedDefinitionFn A function that is injected before the app runtime starts. The result of this function is merged into the existing definition.
             *
             * @returns {IUrlMatcherFactory} Returns $urlMatcherFactoryProvider.
             */
            type(name: string, definition: IType, inlineAnnotedDefinitionFn?: any[]): IUrlMatcherFactory;
            /**
             * Registers a custom Type object that can be used to generate URLs with typed parameters.
             *
             * @param {IType} definition The type definition.
             * @param {any[]} inlineAnnotedDefinitionFn A function that is injected before the app runtime starts. The result of this function is merged into the existing definition.
             *
             * @returns {IUrlMatcherFactory} Returns $urlMatcherFactoryProvider.
             */
            type(name: string, definition: IType, definitionFn?: (...args: any[]) => IType): IUrlMatcherFactory;
            /**
             * Defines whether URL matching should be case sensitive (the default behavior), or not.
             *
             * @param value {boolean} false to match URL in a case sensitive manner; otherwise true;
             *
             * @returns {boolean} the current value of caseInsensitive
             */
            caseInsensitive(value?: boolean): boolean;
            /**
             * Sets the default behavior when generating or matching URLs with default parameter values
             *
             * @param value {string} A string that defines the default parameter URL squashing behavior. nosquash: When generating an href with a default parameter value, do not squash the parameter value from the URL slash: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the parameter is surrounded by slashes, squash (remove) one slash from the URL any other string, e.g. "~": When generating an href with a default parameter value, squash (remove) the parameter value from the URL and replace it with this string.
             */
            defaultSquashPolicy(value: string): void;
            /**
             * Defines whether URLs should match trailing slashes, or not (the default behavior).
             *
             * @param value {boolean} false to match trailing slashes in URLs, otherwise true.
             *
             * @returns {boolean} the current value of strictMode
             */
            strictMode(value?: boolean): boolean;
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
            /**
             * Disables (or enables) deferring location change interception.
             *
             * If you wish to customize the behavior of syncing the URL (for example, if you wish to defer a transition but maintain the current URL), call this method at configuration time. Then, at run time, call $urlRouter.listen() after you have configured your own $locationChangeSuccess event handler.
             *
             * @param {boolean} defer Indicates whether to defer location change interception. Passing no parameter is equivalent to true.
             */
            deferIntercept(defer?: boolean): void;
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
         * {boolean=false|string|IState}, If true will force transition even if the state or params have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd use this when you want to force a reload when everything is the same, including search params.
             */
            reload?: boolean | string | IState;
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
            go(to: IState, params?: {}, options?: IStateOptions): angular.IPromise<any>;
            transitionTo(state: string, params?: {}, updateLocation?: boolean): angular.IPromise<any>;
            transitionTo(state: IState, params?: {}, updateLocation?: boolean): angular.IPromise<any>;
            transitionTo(state: string, params?: {}, options?: IStateOptions): angular.IPromise<any>;
            transitionTo(state: IState, params?: {}, options?: IStateOptions): angular.IPromise<any>;
            includes(state: string, params?: {}): boolean;
            includes(state: string, params?: {}, options?: any): boolean;
            is(state: string, params?: {}): boolean;
            is(state: IState, params?: {}): boolean;
            href(state: IState, params?: {}, options?: IHrefOptions): string;
            href(state: string, params?: {}, options?: IHrefOptions): string;
            get(state: string, context?: string): IState;
            get(state: IState, context?: string): IState;
            get(state: string, context?: IState): IState;
            get(state: IState, context?: IState): IState;
            get(): IState[];
            /** A reference to the state's config object. However you passed it in. Useful for accessing custom data. */
            current: IState;
            /** A param object, e.g. {sectionId: section.id)}, that you'd like to test against the current active state. */
            params: IStateParamsService;
            reload(): angular.IPromise<any>;

            /** Currently pending transition. A promise that'll resolve or reject. */
            transition: angular.IPromise<{}>;

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
            listen(): Function;
            href(urlMatcher: IUrlMatcher, params?: IStateParamsService, options?: IHrefOptions): string;
            update(read?: boolean): void;
            push(urlMatcher: IUrlMatcher, params?: IStateParamsService, options?: IHrefOptions): void;
        }

        interface IUiViewScrollProvider {
            /*
             * Reverts back to using the core $anchorScroll service for scrolling
             * based on the url anchor.
             */
            useAnchorScroll(): void;
        }

        interface IType {
            /**
             * Converts a parameter value (from URL string or transition param) to a custom/native value.
             *
             * @param val {string} The URL parameter value to decode.
             * @param key {string} The name of the parameter in which val is stored. Can be used for meta-programming of Type objects.
             *
             * @returns {any} Returns a custom representation of the URL parameter value.
             */
            decode(val: string, key: string): any;
            /**
             * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the return value does not need to be URL-safe (i.e. passed through encodeURIComponent()), it only needs to be a representation of val that has been coerced to a string.
             *
             * @param val {any} The value to encode.
             * @param key {string} The name of the parameter in which val is stored. Can be used for meta-programming of Type objects.
             *
             * @returns {string} Returns a string representation of val that can be encoded in a URL.
             */
            encode(val: any, key: string): string;
            /**
             * Determines whether two decoded values are equivalent.
             *
             * @param a {any} A value to compare against.
             * @param b {any} A value to compare against.
             *
             * @returns {boolean} Returns true if the values are equivalent/equal, otherwise false.
             */
            equals?(a: any, b: any): boolean;
            /**
             * Detects whether a value is of a particular type. Accepts a native (decoded) value and determines whether it matches the current Type object.
             *
             * @param val {any} The value to check.
             * @param key {any} Optional. If the type check is happening in the context of a specific UrlMatcher object, this is the name of the parameter in which val is stored. Can be used for meta-programming of Type objects.
             *
             * @returns {boolean} Returns true if the value matches the type, otherwise false.
             */
            is(val: any, key: string): boolean;
            /**
             * The regular expression pattern used to match values of this type when coming from a substring of a URL.
             */
            pattern?: RegExp;
        }
    }

}

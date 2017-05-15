/* tslint:disable:dt-header variable-name */
// Type definitions for Angular JS 1.5 component router
// Project: http://angularjs.org
// Definitions by: David Reher <http://github.com/davidreher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace angular {
    /**
     * `Instruction` is a tree of {@link ComponentInstruction}s with all the information needed
     * to transition each component in the app to a given route, including all auxiliary routes.
     *
     * `Instruction`s can be created using {@link Router#generate}, and can be used to
     * perform route changes with {@link Router#navigateByInstruction}.
     *
     * ### Example
     *
     * ```
     * import {Component} from 'angular2/core';
     * import {bootstrap} from 'angular2/platform/browser';
     * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
     *
     * @Component({directives: [ROUTER_DIRECTIVES]})
     * @RouteConfig([
     *  {...},
     * ])
     * class AppCmp {
     *   constructor(router: Router) {
     *     var instruction = router.generate(['/MyRoute']);
     *     router.navigateByInstruction(instruction);
     *   }
     * }
     *
     * bootstrap(AppCmp, ROUTER_PROVIDERS);
     * ```
     */
    interface Instruction {
        component: ComponentInstruction;
        child: Instruction;
        auxInstruction: {[key: string]: Instruction};

        urlPath(): string;

        urlParams(): string[];

        specificity(): number;

        resolveComponent(): IPromise<ComponentInstruction>;

        /**
         * converts the instruction into a URL string
         */
        toRootUrl(): string;

        toUrlQuery(): string;

        /**
         * Returns a new instruction that shares the state of the existing instruction, but with
         * the given child {@link Instruction} replacing the existing child.
         */
        replaceChild(child: Instruction): Instruction;

        /**
         * If the final URL for the instruction is ``
         */
        toUrlPath(): string;

        /**
         * default instructions override these
         */
        toLinkUrl(): string;
    }

    /**
     * A router outlet is a placeholder that Angular dynamically fills based on the application's route.
     *
     * ## Use
     *
     * ```
     * <router-outlet></router-outlet>
     * ```
     */
    interface RouterOutlet {
        name: string;

        /**
         * Called by the Router to instantiate a new component during the commit phase of a navigation.
         * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
         */
        activate(nextInstruction: ComponentInstruction): IPromise<any>;

        /**
         * Called by the {@link Router} during the commit phase of a navigation when an outlet
         * reuses a component between different routes.
         * This method in turn is responsible for calling the `routerOnReuse` hook of its child.
         */
        reuse(nextInstruction: ComponentInstruction): IPromise<any>;

        /**
         * Called by the {@link Router} when an outlet disposes of a component's contents.
         * This method in turn is responsible for calling the `routerOnDeactivate` hook of its child.
         */
        deactivate(nextInstruction: ComponentInstruction): IPromise<any>;

        /**
         * Called by the {@link Router} during recognition phase of a navigation.
         *
         * If this resolves to `false`, the given navigation is cancelled.
         *
         * This method delegates to the child component's `routerCanDeactivate` hook if it exists,
         * and otherwise resolves to true.
         */
        routerCanDeactivate(nextInstruction: ComponentInstruction): IPromise<boolean>;

        /**
         * Called by the {@link Router} during recognition phase of a navigation.
         *
         * If the new child component has a different Type than the existing child component,
         * this will resolve to `false`. You can't reuse an old component when the new component
         * is of a different Type.
         *
         * Otherwise, this method delegates to the child component's `routerCanReuse` hook if it exists,
         * or resolves to true if the hook is not present.
         */
        routerCanReuse(nextInstruction: ComponentInstruction): IPromise<boolean>;
    }

    interface RouteRegistry {
        /**
         * Given a component and a configuration object, add the route to this registry
         */
        config(parentComponent: any, config: RouteDefinition): void;

        /**
         * Reads the annotations of a component and configures the registry based on them
         */
        configFromComponent(component: any): void;

        /**
         * Given a URL and a parent component, return the most specific instruction for navigating
         * the application into the state specified by the url
         */
        recognize(url: string, ancestorInstructions: Instruction[]): IPromise<Instruction>;

        /**
         * Given a normalized list with component names and params like: `['user', {id: 3 }]`
         * generates a url with a leading slash relative to the provided `parentComponent`.
         *
         * If the optional param `_aux` is `true`, then we generate starting at an auxiliary
         * route boundary.
         */
        generate(linkParams: any[], ancestorInstructions: Instruction[], _aux?: boolean): Instruction;

        hasRoute(name: string, parentComponent: any): boolean;

        generateDefault(componentCursor: any): Instruction;
    }

    /**
     * The `Router` is responsible for mapping URLs to components.
     *
     * You can see the state of the router by inspecting the read-only field `router.navigating`.
     * This may be useful for showing a spinner, for instance.
     *
     * ## Concepts
     *
     * Routers and component instances have a 1:1 correspondence.
     *
     * The router holds reference to a number of {@link RouterOutlet}.
     * An outlet is a placeholder that the router dynamically fills in depending on the current URL.
     *
     * When the router navigates from a URL, it must first recognize it and serialize it into an
     * `Instruction`.
     * The router uses the `RouteRegistry` to get an `Instruction`.
     */
    interface Router {
        navigating: boolean;
        lastNavigationAttempt: string;
        registry: RouteRegistry;
        parent: Router;
        hostComponent: any;
        currentInstruction: Instruction;

        /**
         * Constructs a child router. You probably don't need to use this unless you're writing a reusable
         * component.
         */
        childRouter(hostComponent: any): Router;

        /**
         * Constructs a child router. You probably don't need to use this unless you're writing a reusable
         * component.
         */
        auxRouter(hostComponent: any): Router;

        /**
         * Register an outlet to be notified of primary route changes.
         *
         * You probably don't need to use this unless you're writing a reusable component.
         */
        registerPrimaryOutlet(outlet: RouterOutlet): IPromise<boolean>;

        /**
         * Register an outlet to notified of auxiliary route changes.
         *
         * You probably don't need to use this unless you're writing a reusable component.
         */
        registerAuxOutlet(outlet: RouterOutlet): IPromise<boolean>;

        /**
         * Given an instruction, returns `true` if the instruction is currently active,
         * otherwise `false`.
         */
        isRouteActive(instruction: Instruction): boolean;

        /**
         * Dynamically update the routing configuration and trigger a navigation.
         *
         * ### Usage
         *
         * ```
         * router.config([
         *   { 'path': '/', 'component': IndexComp },
         *   { 'path': '/user/:id', 'component': UserComp },
         * ]);
         * ```
         */
        config(definitions: RouteDefinition[]): IPromise<any>;

        /**
         * Navigate based on the provided Route Link DSL. It's preferred to navigate with this method
         * over `navigateByUrl`.
         *
         * ### Usage
         *
         * This method takes an array representing the Route Link DSL:
         * ```
         * ['./MyCmp', {param: 3}]
         * ```
         * See the {@link RouterLink} directive for more.
         */
        navigate(linkParams: any[]): IPromise<any>;

        /**
         * Navigate to a URL. Returns a promise that resolves when navigation is complete.
         * It's preferred to navigate with `navigate` instead of this method, since URLs are more brittle.
         *
         * If the given URL begins with a `/`, router will navigate absolutely.
         * If the given URL does not begin with `/`, the router will navigate relative to this component.
         */
        navigateByUrl(url: string, _skipLocationChange?: boolean): IPromise<any>;

        /**
         * Navigate via the provided instruction. Returns a promise that resolves when navigation is
         * complete.
         */
        navigateByInstruction(instruction: Instruction,
                              _skipLocationChange?: boolean): IPromise<any>;

        /**
         * Updates this router and all descendant routers according to the given instruction
         */
        commit(instruction: Instruction, _skipLocationChange?: boolean): IPromise<any>;

        /**
         * Subscribe to URL updates from the router
         */
        subscribe(onNext: (value: any) => void): {};

        /**
         * Removes the contents of this router's outlet and all descendant outlets
         */
        deactivate(instruction: Instruction): IPromise<any>;

        /**
         * Given a URL, returns an instruction representing the component graph
         */
        recognize(url: string): IPromise<Instruction>;

        /**
         * Navigates to either the last URL successfully navigated to, or the last URL requested if the
         * router has yet to successfully navigate.
         */
        renavigate(): IPromise<any>;

        /**
         * Generate an `Instruction` based on the provided Route Link DSL.
         */
        generate(linkParams: any[]): Instruction;
    }

    /**
     * RouteData is an immutable map of additional data you can configure in your Route.
     * You can inject RouteData into the constructor of a component to use it.
     */
    interface RouteData {
        data: {[key: string]: any};
        get(key: string): any;
    }

    /**
     * A `ComponentInstruction` represents the route state for a single component. An `Instruction` is
     * composed of a tree of these `ComponentInstruction`s.
     *
     * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
     * to route lifecycle hooks, like {@link CanActivate}.
     *
     * `ComponentInstruction`s are [https://en.wikipedia.org/wiki/Hash_consing](hash consed). You should
     * never construct one yourself with "new." Instead, rely on {@link Router/RouteRecognizer} to
     * construct `ComponentInstruction`s.
     *
     * You should not modify this object. It should be treated as immutable.
     */
    interface ComponentInstruction {
        reuse: boolean;
        routeData: RouteData;
        urlPath: string;
        urlParams: string[];
        data: RouteData;
        componentType: any;
        terminal: boolean;
        specificity: number;
        params: {[key: string]: any};
    }

    /**
     * Defines route lifecycle method `routerOnActivate`, which is called by the router at the end of a
     * successful route navigation.
     *
     * For a single component's navigation, only one of either {@link OnActivate} or {@link OnReuse}
     * will be called depending on the result of {@link CanReuse}.
     *
     * The `routerOnActivate` hook is called with two {@link ComponentInstruction}s as parameters, the
     * first
     * representing the current route being navigated to, and the second parameter representing the
     * previous route or `null`.
     *
     * If `routerOnActivate` returns a promise, the route change will wait until the promise settles to
     * instantiate and activate child components.
     *
     * ### Example
     * {@example router/ts/on_activate/on_activate_example.ts region='routerOnActivate'}
     */
    interface OnActivate {
        $routerOnActivate(next?: angular.ComponentInstruction, prev?: angular.ComponentInstruction): any;
    }

    /**
     * Defines route lifecycle method `routerCanDeactivate`, which is called by the router to determine
     * if a component can be removed as part of a navigation.
     *
     * The `routerCanDeactivate` hook is called with two {@link ComponentInstruction}s as parameters,
     * the
     * first representing the current route being navigated to, and the second parameter
     * representing the previous route.
     *
     * If `routerCanDeactivate` returns or resolves to `false`, the navigation is cancelled. If it
     * returns or
     * resolves to `true`, then the navigation continues, and the component will be deactivated
     * (the {@link OnDeactivate} hook will be run) and removed.
     *
     * If `routerCanDeactivate` throws or rejects, the navigation is also cancelled.
     *
     * ### Example
     * {@example router/ts/can_deactivate/can_deactivate_example.ts region='routerCanDeactivate'}
     */
    interface CanDeactivate {
        $routerCanDeactivate(next?: ComponentInstruction, prev?: ComponentInstruction): boolean | IPromise<boolean>;
    }

    /**
     * Defines route lifecycle method `routerOnDeactivate`, which is called by the router before
     * destroying
     * a component as part of a route change.
     *
     * The `routerOnDeactivate` hook is called with two {@link ComponentInstruction}s as parameters, the
     * first
     * representing the current route being navigated to, and the second parameter representing the
     * previous route.
     *
     * If `routerOnDeactivate` returns a promise, the route change will wait until the promise settles.
     *
     * ### Example
     * {@example router/ts/on_deactivate/on_deactivate_example.ts region='routerOnDeactivate'}
     */
    interface OnDeactivate {
        $routerOnDeactivate(next?: angular.ComponentInstruction, prev?: angular.ComponentInstruction): any;
    }

    /**
     * Defines route lifecycle method `routerCanReuse`, which is called by the router to determine
     * whether a
     * component should be reused across routes, or whether to destroy and instantiate a new component.
     *
     * The `routerCanReuse` hook is called with two {@link ComponentInstruction}s as parameters, the
     * first
     * representing the current route being navigated to, and the second parameter representing the
     * previous route.
     *
     * If `routerCanReuse` returns or resolves to `true`, the component instance will be reused and the
     * {@link OnDeactivate} hook will be run. If `routerCanReuse` returns or resolves to `false`, a new
     * component will be instantiated, and the existing component will be deactivated and removed as
     * part of the navigation.
     *
     * If `routerCanReuse` throws or rejects, the navigation will be cancelled.
     *
     * ### Example
     * {@example router/ts/reuse/reuse_example.ts region='reuseCmp'}
     */
    interface CanReuse {
        $routerCanReuse(next?: angular.ComponentInstruction, prev?: angular.ComponentInstruction): boolean | IPromise<boolean>;
    }

    /**
     * Defines route lifecycle method `routerOnReuse`, which is called by the router at the end of a
     * successful route navigation when {@link CanReuse} is implemented and returns or resolves to true.
     *
     * For a single component's navigation, only one of either {@link OnActivate} or {@link OnReuse}
     * will be called, depending on the result of {@link CanReuse}.
     *
     * The `routerOnReuse` hook is called with two {@link ComponentInstruction}s as parameters, the
     * first
     * representing the current route being navigated to, and the second parameter representing the
     * previous route or `null`.
     *
     * ### Example
     * {@example router/ts/reuse/reuse_example.ts region='reuseCmp'}
     */
    interface OnReuse {
        $routerOnReuse(next?: angular.ComponentInstruction, prev?: angular.ComponentInstruction): any;
    }

    /**
     * Runtime representation a type that a Component or other object is instances of.
     *
     * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
     * the `MyCustomComponent` constructor function.
     */
    interface Type extends Function {
    }

    /**
     * `RouteDefinition` defines a route within a {@link RouteConfig} decorator.
     *
     * Supported keys:
     * - `path` or `aux` (requires exactly one of these)
     * - `component`, `loader`,  `redirectTo` (requires exactly one of these)
     * - `name` or `as` (optional) (requires exactly one of these)
     * - `data` (optional)
     *
     * See also {@link Route}, {@link AsyncRoute}, {@link AuxRoute}, and {@link Redirect}.
     */
    interface RouteDefinition {
        path?: string;
        aux?: string;
        component?: Type | ComponentDefinition | string;
        loader?: Function;
        redirectTo?: any[];
        as?: string;
        name?: string;
        data?: any;
        useAsDefault?: boolean;
    }

    /**
     * Represents either a component type (`type` is `component`) or a loader function
     * (`type` is `loader`).
     *
     * See also {@link RouteDefinition}.
     */
    interface ComponentDefinition {
        type: string;
        loader?: Function;
        component?: Type;
    }

    // Supplement IComponentOptions from angular.d.ts with router-specific
    // fields.
    interface IComponentOptions {
      $canActivate?: (...args: any[]) => boolean | angular.IPromise<boolean>;
      $routeConfig?: RouteDefinition[];
    }
}

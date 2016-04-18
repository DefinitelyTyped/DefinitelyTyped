// Type definitions for aurelia-router v1.0.0-beta.1.2.1 
// Project: https://github.com/aurelia/router/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-logging.d.ts" />
/// <reference path="./aurelia-route-recognizer.d.ts" />
/// <reference path="./aurelia-dependency-injection.d.ts" />
/// <reference path="./aurelia-history.d.ts" />
/// <reference path="./aurelia-event-aggregator.d.ts" />

declare module 'aurelia-router' {
  import * as LogManager from 'aurelia-logging';
  import {
    RouteRecognizer
  } from 'aurelia-route-recognizer';
  import {
    Container
  } from 'aurelia-dependency-injection';
  import {
    History
  } from 'aurelia-history';
  import {
    EventAggregator
  } from 'aurelia-event-aggregator';
  
  /**
  * A callback to indicate when pipeline processing should advance to the next step
  * or be aborted.
  */
  export interface Next {
    
    /**
      * Indicates the successful completion of the entire pipeline.
      */
    complete(result: any): Promise<any>;
    
    /**
      * Indicates that the pipeline should cancel processing.
      */
    cancel(result: any): Promise<any>;
    
    /**
      * Indicates that pipeline processing has failed and should be stopped.
      */
    reject(result: any): Promise<any>;
    
    /**
      * Indicates the successful completion of the pipeline step.
      */
    (): Promise<any>;
  }
  
  /**
  * A step to be run during processing of the pipeline.
  */
  /**
  * A step to be run during processing of the pipeline.
  */
  export interface PipelineStep {
    
    /**
       * Execute the pipeline step. The step should invoke next(), next.complete(),
       * next.cancel(), or next.reject() to allow the pipeline to continue.
       *
       * @param instruction The navigation instruction.
       * @param next The next step in the pipeline.
       */
    run(instruction: NavigationInstruction, next: Next): void;
  }
  
  /**
  * The result of a pipeline run.
  */
  /**
  * The result of a pipeline run.
  */
  export interface PipelineResult {
    status: string;
    instruction: NavigationInstruction;
    output: any;
    completed: boolean;
  }
  export interface NavigationInstructionInit {
    fragment: string;
    queryString: string;
    params: Object;
    queryParams: Object;
    config: RouteConfig;
    parentInstruction: NavigationInstruction;
    previousInstruction: NavigationInstruction;
    router: Router;
    options: Object;
  }
  
  /**
  * A configuration object that describes a route.
  */
  export interface RouteConfig {
    
    /**
      * The route pattern to match against incoming URL fragments, or an array of patterns.
      */
    route: string | string[];
    
    /**
      * A unique name for the route that may be used to identify the route when generating URL fragments.
      * Required when this route should support URL generation, such as with [[Router.generate]] or
      * the route-href custom attribute.
      */
    name?: string;
    
    /**
      * The moduleId of the view model that should be activated for this route.
      */
    moduleId?: string;
    
    /**
      * A URL fragment to redirect to when this route is matched.
      */
    redirect?: string;
    
    /**
      * A function that can be used to dynamically select the module or modules to activate.
      * The function is passed the current [[NavigationInstruction]], and should configure
      * instruction.config with the desired moduleId, viewPorts, or redirect.
      */
    navigationStrategy?: (instruction: NavigationInstruction) => Promise<void> | void;
    
    /**
      * The view ports to target when activating this route. If unspecified, the target moduleId is loaded
      * into the default viewPort (the viewPort with name 'default'). The viewPorts object should have keys
      * whose property names correspond to names used by <router-view> elements. The values should be objects
      * specifying the moduleId to load into that viewPort.
      */
    viewPorts?: any;
    
    /**
      * When specified, this route will be included in the [[Router.navigation]] nav model. Useful for
      * dynamically generating menus or other navigation elements. When a number is specified, that value
      * will be used as a sort order.
      */
    nav?: boolean | number;
    
    /**
      * The URL fragment to use in nav models. If unspecified, the [[RouteConfig.route]] will be used.
      * However, if the [[RouteConfig.route]] contains dynamic segments, this property must be specified.
      */
    href?: string;
    
    /**
      * The document title to set when this route is active.
      */
    title?: string;
    
    /**
      * Arbitrary data to attach to the route. This can be used to attached custom data needed by components
      * like pipeline steps and activated modules.
      */
    settings?: any;
    
    /**
      * The navigation model for storing and interacting with the route's navigation settings.
      */
    navModel?: NavModel;
    [x: string]: any;
  }
  
  /**
  * The status of a Pipeline.
  */
  export const pipelineStatus: any;
  
  /**
  * The class responsible for managing and processing the navigation pipeline.
  */
  /**
  * The class responsible for managing and processing the navigation pipeline.
  */
  export class Pipeline {
    
    /**
      * The pipeline steps.
      */
    steps: Array<Function | PipelineStep>;
    
    /**
      * Adds a step to the pipeline.
      *
      * @param step The pipeline step.
      */
    addStep(step: PipelineStep): Pipeline;
    
    /**
      * Runs the pipeline.
      *
      * @param instruction The navigation instruction to process.
      */
    run(instruction: NavigationInstruction): Promise<PipelineResult>;
  }
  export class CommitChangesStep {
    run(navigationInstruction: NavigationInstruction, next: Function): any;
  }
  
  /**
  * Class used to represent an instruction during a navigation.
  */
  export class NavigationInstruction {
    
    /**
      * The URL fragment.
      */
    fragment: string;
    
    /**
      * The query string.
      */
    queryString: string;
    
    /**
      * Parameters extracted from the route pattern.
      */
    params: any;
    
    /**
      * Parameters extracted from the query string.
      */
    queryParams: any;
    
    /**
      * The route config for the route matching this instruction.
      */
    config: RouteConfig;
    
    /**
      * The parent instruction, if this instruction was created by a child router.
      */
    parentInstruction: NavigationInstruction;
    
    /**
      * The instruction being replaced by this instruction in the current router.
      */
    previousInstruction: NavigationInstruction;
    
    /**
      * viewPort instructions to used activation.
      */
    viewPortInstructions: any;
    plan: Object;
    options: Object;
    constructor(init: NavigationInstructionInit);
    
    /**
      * Gets an array containing this instruction and all child instructions for the current navigation.
      */
    getAllInstructions(): Array<NavigationInstruction>;
    
    /**
      * Gets an array containing the instruction and all child instructions for the previous navigation.
      * Previous instructions are no longer available after navigation completes.
      */
    getAllPreviousInstructions(): Array<NavigationInstruction>;
    
    /**
      * Adds a viewPort instruction.
      */
    addViewPortInstruction(viewPortName: string, strategy: string, moduleId: string, component: any): any;
    
    /**
      * Gets the name of the route pattern's wildcard parameter, if applicable.
      */
    getWildCardName(): string;
    
    /**
      * Gets the path and query string created by filling the route
      * pattern's wildcard parameter with the matching param.
      */
    getWildcardPath(): string;
    
    /**
      * Gets the instruction's base URL, accounting for wildcard route parameters.
      */
    getBaseUrl(): string;
  }
  
  /**
  * Class for storing and interacting with a route's navigation settings.
  */
  export class NavModel {
    
    /**
      * True if this nav item is currently active.
      */
    isActive: boolean;
    
    /**
      * The title.
      */
    title: string;
    
    /**
      * This nav item's absolute href.
      */
    href: string;
    
    /**
      * This nav item's relative href.
      */
    relativeHref: string;
    
    /**
      * Data attached to the route at configuration time.
      */
    settings: any;
    
    /**
      * The route config.
      */
    config: RouteConfig;
    constructor(router: Router, relativeHref: string);
    
    /**
      * Sets the route's title and updates document.title.
      *  If the a navigation is in progress, the change will be applied
      *  to document.title when the navigation completes.
      *
      * @param title The new title.
      */
    setTitle(title: string): void;
  }
  
  /**
  * Determines if the provided object is a navigation command.
  * A navigation command is anything with a navigate method.
  *
  * @param obj The object to check.
  */
  /**
  * Determines if the provided object is a navigation command.
  * A navigation command is anything with a navigate method.
  *
  * @param obj The object to check.
  */
  export function isNavigationCommand(obj: any): boolean;
  
  /**
  * Used during the activation lifecycle to cause a redirect.
  */
  export class Redirect {
    constructor(url: string, options?: any);
    
    /**
      * Called by the activation system to set the child router.
      *
      * @param router The router.
      */
    setRouter(router: Router): void;
    
    /**
      * Called by the navigation pipeline to navigate.
      *
      * @param appRouter The router to be redirected.
      */
    navigate(appRouter: Router): void;
  }
  
  /**
  * Used during the activation lifecycle to cause a redirect to a named route.
    * @param route The name of the route.
    * @param params The parameters to be sent to the activation method.
    * @param options The options to use for navigation.
  */
  export class RedirectToRoute {
    constructor(route: string, params?: any, options?: any);
    
    /**
      * Called by the activation system to set the child router.
      *
      * @param router The router.
      */
    setRouter(router: Router): void;
    
    /**
      * Called by the navigation pipeline to navigate.
      *
      * @param appRouter The router to be redirected.
      */
    navigate(appRouter: Router): void;
  }
  
  /**
   * Class used to configure a [[Router]] instance.
   *
   * @constructor
   */
  export class RouterConfiguration {
    instructions: any;
    options: any;
    pipelineSteps: Array<Function | PipelineStep>;
    title: string;
    unknownRouteConfig: any;
    
    /**
      * Adds a step to be run during the [[Router]]'s navigation pipeline.
      *
      * @param name The name of the pipeline slot to insert the step into.
      * @param step The pipeline step.
      * @chainable
      */
    addPipelineStep(name: string, step: Function | PipelineStep): RouterConfiguration;
    
    /**
      * Adds a step to be run during the [[Router]]'s authorize pipeline slot.
      *
      * @param step The pipeline step.
      * @chainable
      */
    addAuthorizeStep(step: Function | PipelineStep): RouterConfiguration;
    
    /**
      * Adds a step to be run during the [[Router]]'s preActivate pipeline slot.
      *
      * @param step The pipeline step.
      * @chainable
      */
    addPreActivateStep(step: Function | PipelineStep): RouterConfiguration;
    
    /**
      * Adds a step to be run during the [[Router]]'s preRender pipeline slot.
      *
      * @param step The pipeline step.
      * @chainable
      */
    addPreRenderStep(step: Function | PipelineStep): RouterConfiguration;
    
    /**
      * Adds a step to be run during the [[Router]]'s postRender pipeline slot.
      *
      * @param step The pipeline step.
      * @chainable
      */
    addPostRenderStep(step: Function | PipelineStep): RouterConfiguration;
    
    /**
      * Maps one or more routes to be registered with the router.
      *
      * @param route The [[RouteConfig]] to map, or an array of [[RouteConfig]] to map.
      * @chainable
      */
    map(route: RouteConfig | RouteConfig[]): RouterConfiguration;
    
    /**
      * Maps a single route to be registered with the router.
      *
      * @param route The [[RouteConfig]] to map.
      * @chainable
      */
    mapRoute(config: RouteConfig): RouterConfiguration;
    
    /**
      * Registers an unknown route handler to be run when the URL fragment doesn't match any registered routes.
      *
      * @param config A string containing a moduleId to load, or a [[RouteConfig]], or a function that takes the
      *  [[NavigationInstruction]] and selects a moduleId to load.
      * @chainable
      */
    mapUnknownRoutes(config: string | RouteConfig | ((instruction: NavigationInstruction) => string | RouteConfig | Promise<string | RouteConfig>)): RouterConfiguration;
    
    /**
      * Applies the current configuration to the specified [[Router]].
      *
      * @param router The [[Router]] to apply the configuration to.
      */
    exportToRouter(router: Router): void;
  }
  
  /**
  * The strategy to use when activating modules during navigation.
  */
  export const activationStrategy: any;
  export class BuildNavigationPlanStep {
    run(navigationInstruction: NavigationInstruction, next: Function): any;
  }
  
  /**
  * The primary class responsible for handling routing and navigation.
  *
  * @class Router
  * @constructor
  */
  export class Router {
    container: Container;
    history: History;
    viewPorts: Object;
    routes: RouteConfig[];
    
    /**
      * The [[Router]]'s current base URL, typically based on the [[Router.currentInstruction]].
      */
    baseUrl: string;
    
    /**
      * True if the [[Router]] has been configured.
      */
    isConfigured: boolean;
    
    /**
      * True if the [[Router]] is currently processing a navigation.
      */
    isNavigating: boolean;
    
    /**
      * The navigation models for routes that specified [[RouteConfig.nav]].
      */
    navigation: NavModel[];
    
    /**
      * The currently active navigation instruction.
      */
    currentInstruction: NavigationInstruction;
    
    /**
      * The parent router, or null if this instance is not a child router.
      */
    parent: Router;
    options: Object;
    
    /**
      * @param container The [[Container]] to use when child routers.
      * @param history The [[History]] implementation to delegate navigation requests to.
      */
    constructor(container: Container, history: History);
    
    /**
      * Fully resets the router's internal state. Primarily used internally by the framework when multiple calls to setRoot are made.
      * Use with caution (actually, avoid using this). Do not use this to simply change your navigation model.
      */
    reset(): any;
    
    /**
      * Gets a value indicating whether or not this [[Router]] is the root in the router tree. I.e., it has no parent.
      */
    isRoot: boolean;
    
    /**
      * Registers a viewPort to be used as a rendering target for activated routes.
      *
      * @param viewPort The viewPort.
      * @param name The name of the viewPort. 'default' if unspecified.
      */
    registerViewPort(viewPort: any, name?: string): void;
    
    /**
      * Returns a Promise that resolves when the router is configured.
      */
    ensureConfigured(): Promise<void>;
    
    /**
      * Configures the router.
      *
      * @param callbackOrConfig The [[RouterConfiguration]] or a callback that takes a [[RouterConfiguration]].
      */
    configure(callbackOrConfig: RouterConfiguration | ((config: RouterConfiguration) => RouterConfiguration)): Promise<void>;
    
    /**
      * Navigates to a new location.
      *
      * @param fragment The URL fragment to use as the navigation destination.
      * @param options The navigation options.
      */
    navigate(fragment: string, options?: any): boolean;
    
    /**
      * Navigates to a new location corresponding to the route and params specified. Equivallent to [[Router.generate]] followed
      * by [[Router.navigate]].
      *
      * @param route The name of the route to use when generating the navigation location.
      * @param params The route parameters to be used when populating the route pattern.
      * @param options The navigation options.
      */
    navigateToRoute(route: string, params?: any, options?: any): boolean;
    
    /**
      * Navigates back to the most recent location in history.
      */
    navigateBack(): void;
    
    /**
       * Creates a child router of the current router.
       *
       * @param container The [[Container]] to provide to the child router. Uses the current [[Router]]'s [[Container]] if unspecified.
       * @returns {Router} The new child Router.
       */
    createChild(container?: Container): Router;
    
    /**
      * Generates a URL fragment matching the specified route pattern.
      *
      * @param name The name of the route whose pattern should be used to generate the fragment.
      * @param params The route params to be used to populate the route pattern.
      * @returns {string} A string containing the generated URL fragment.
      */
    generate(name: string, params?: any): string;
    
    /**
      * Creates a [[NavModel]] for the specified route config.
      *
      * @param config The route config.
      */
    createNavModel(config: RouteConfig): NavModel;
    
    /**
      * Registers a new route with the router.
      *
      * @param config The [[RouteConfig]].
      * @param navModel The [[NavModel]] to use for the route. May be omitted for single-pattern routes.
      */
    addRoute(config: RouteConfig, navModel?: NavModel): void;
    
    /**
      * Gets a value indicating whether or not this [[Router]] or one of its ancestors has a route registered with the specified name.
      *
      * @param name The name of the route to check.
      */
    hasRoute(name: string): boolean;
    
    /**
      * Gets a value indicating whether or not this [[Router]] has a route registered with the specified name.
      *
      * @param name The name of the route to check.
      */
    hasOwnRoute(name: string): boolean;
    
    /**
      * Register a handler to use when the incoming URL fragment doesn't match any registered routes.
      *
      * @param config The moduleId, or a function that selects the moduleId, or a [[RouteConfig]].
      */
    handleUnknownRoutes(config?: string | Function | RouteConfig): void;
    
    /**
      * Updates the document title using the current navigation instruction.
      */
    updateTitle(): void;
    
    /**
      * Updates the navigation routes with hrefs relative to the current location.
      * Note: This method will likely move to a plugin in a future release.
      */
    refreshNavigation(): void;
  }
  export class CanDeactivatePreviousStep {
    run(navigationInstruction: NavigationInstruction, next: Function): any;
  }
  export class CanActivateNextStep {
    run(navigationInstruction: NavigationInstruction, next: Function): any;
  }
  export class DeactivatePreviousStep {
    run(navigationInstruction: NavigationInstruction, next: Function): any;
  }
  export class ActivateNextStep {
    run(navigationInstruction: NavigationInstruction, next: Function): any;
  }
  export class RouteLoader {
    loadRoute(router: any, config: any, navigationInstruction: any): any;
  }
  export class LoadRouteStep {
    static inject(): any;
    constructor(routeLoader: RouteLoader);
    run(navigationInstruction: NavigationInstruction, next: Function): any;
  }
  
  /**
  * Class responsible for creating the navigation pipeline.
  */
  export class PipelineProvider {
    static inject(): any;
    constructor(container: Container);
    
    /**
      * Create the navigation pipeline.
      */
    createPipeline(): Pipeline;
    
    /**
      * Adds a step into the pipeline at a known slot location.
      */
    addStep(name: string, step: PipelineStep): void;
  }
  
  /**
  * The main application router.
  */
  export class AppRouter extends Router {
    static inject(): any;
    constructor(container: Container, history: History, pipelineProvider: PipelineProvider, events: EventAggregator);
    
    /**
      * Fully resets the router's internal state. Primarily used internally by the framework when multiple calls to setRoot are made.
      * Use with caution (actually, avoid using this). Do not use this to simply change your navigation model.
      */
    reset(): any;
    
    /**
      * Loads the specified URL.
      *
      * @param url The URL fragment to load.
      */
    loadUrl(url: any): Promise<NavigationInstruction>;
    
    /**
      * Registers a viewPort to be used as a rendering target for activated routes.
      *
      * @param viewPort The viewPort.
      * @param name The name of the viewPort. 'default' if unspecified.
      */
    registerViewPort(viewPort: any, name: string): Promise<any>;
    
    /**
      * Activates the router. This instructs the router to begin listening for history changes and processing instructions.
      *
      * @params options The set of options to activate the router with.
      */
    activate(options: Object): void;
    
    /**
      * Deactivates the router.
      */
    deactivate(): void;
  }
}
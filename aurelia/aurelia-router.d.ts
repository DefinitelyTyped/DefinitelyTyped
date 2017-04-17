/// <reference path="aurelia-dependency-injection" />
/// <reference path="aurelia-route-recognizer" />
/// <reference path="aurelia-path" />
/// <reference path="aurelia-history" />
/// <reference path="aurelia-event-aggregator" />


declare module 'aurelia-router' {
  //import core from 'core-js';
  import { Container }  from 'aurelia-dependency-injection';
  import { RouteRecognizer }  from 'aurelia-route-recognizer';
  import { join }  from 'aurelia-path';
  import { History }  from 'aurelia-history';
  import { EventAggregator }  from 'aurelia-event-aggregator';
  import * as LogManager from 'aurelia-logging';
  export function processPotential(obj: any, resolve: any, reject: any): any;
  export function normalizeAbsolutePath(path: any, hasPushState: any): any;
  export function createRootedPath(fragment: any, baseUrl: any, hasPushState: any): any;
  export function resolveUrl(fragment: any, baseUrl: any, hasPushState: any): any;

  /**
   * Determines if the provided object is a navigation command.
   * A navigation command is anything with a navigate method.
   * @param {object} obj The item to check.
   * @return {boolean}
   */
  export function isNavigationCommand(obj: any): any;

  /**
  * Used during the activation lifecycle to cause a redirect.
  *
  * @class Redirect
  * @constructor
  * @param {String} url The url to redirect to.
  */
  export class Redirect {
    constructor(url: any, options: any);

    /**
      * Called by the activation system to set the child router.
      *
      * @method setRouter
      * @param {Router} router
      */
    setRouter(router: any): any;

    /**
      * Called by the navigation pipeline to navigate.
      *
      * @method navigate
      * @param {Router} appRouter - a router which should redirect
      */
    navigate(appRouter: any): any;
  }
  export const activationStrategy: any;
  export function buildNavigationPlan(navigationContext: any, forceLifecycleMinimum: any): any;
  export class BuildNavigationPlanStep {
    run(navigationContext: any, next: any): any;
  }
  export var affirmations: any;
  export class CanDeactivatePreviousStep {
    run(navigationContext: any, next: any): any;
  }
  export class CanActivateNextStep {
    run(navigationContext: any, next: any): any;
  }
  export class DeactivatePreviousStep {
    run(navigationContext: any, next: any): any;
  }
  export class ActivateNextStep {
    run(navigationContext: any, next: any): any;
  }
  export class NavigationContext {
    constructor(router: any, nextInstruction: any);
    getAllContexts(acc?: any): any;
    nextInstructions(): any;
    currentInstructions(): any;
    prevInstructions(): any;
    commitChanges(waitToSwap: any): any;
    updateTitle(): any;
    buildTitle(separator?: any): any;
  }
  export class CommitChangesStep {
    run(navigationContext: any, next: any): any;
  }
  export class NavigationInstruction {
    fragment: string;
    queryString: string;
    params: any;
    queryParams: any;
    config: any;
    parentInstruction: NavigationInstruction;
    constructor(fragment: string, queryString?: string, params?: any, queryParams?: any, config?: any, parentInstruction?: NavigationInstruction);
    addViewPortInstruction(viewPortName: any, strategy: any, moduleId: any, component: any): any;
    getWildCardName(): string;
    getWildcardPath(): string;
    getBaseUrl(): string;
  }

  /**
   * Class for storing and interacting with a route's navigation settings
   *
   * @class NavModel
   * @constructor
   */
  export class NavModel {
    constructor(router: any, relativeHref: any);

    /**
       * Sets the route's title and updates document.title.
       *  If the a navigation is in progress, the change will be applied
       *  to document.title when the navigation completes.
       *
       * @method setTitle
       * @param {String} title The new title.
       */
    setTitle(title: any): any;
  }
  export class RouteFilterContainer {
    static inject(): any;
    constructor(container: any);
    addStep(name: any, step: any, index?: any): any;
    getFilterSteps(name: any): any;
  }
  export function createRouteFilterStep(name: any): any;
  class RouteFilterStep {
    constructor(name: any, routeFilterContainer: any);
    getSteps(): any;
  }
  export class RouterConfiguration {
    instructions: any;
    options: any;
    pipelineSteps: any;
    title: any;
    unknownRouteConfig: any;
    addPipelineStep(name: any, step: any): any;
    map(route: any): any;
    mapRoute(config: any): any;
    mapUnknownRoutes(config: any): any;
    exportToRouter(router: any): any;
  }
  export class Router {
    container: any;
    history: any;
    viewPorts: any;
    baseUrl: string;
    isConfigured: boolean;
    fallbackOrder: number;
    recognizer: RouteRecognizer;
    childRecognizer: RouteRecognizer;
    routes: any[];
    isNavigating: boolean;
    navigation: any[];
    constructor(container: any, history: any);
    isRoot(): any;
    registerViewPort(viewPort: Object, name?: string): any;
    refreshBaseUrl(): any;
    refreshNavigation(): any;
    configure(callbackOrConfig: RouterConfiguration | ((config: RouterConfiguration) => RouterConfiguration)): Router;
    navigate(fragment: string, options?: Object): boolean;
    navigateToRoute(route: string, params?: Object, options?: Object): boolean;
    navigateBack(): any;
    createChild(container?: Container): Router;
    createNavigationInstruction(url?: string, parentInstruction?: NavigationInstruction): Promise<NavigationInstruction>;
    createNavigationContext(instruction: NavigationInstruction): NavigationContext;
    generate(name: string, params?: Object): string;
    createNavModel(config: Object): NavModel;
    addRoute(config: Object, navModel?: NavModel): any;
    hasRoute(name: string): boolean;
    hasOwnRoute(name: string): boolean;
    handleUnknownRoutes(config?: string | Function | Object): any;
    updateTitle(): any;
    reset(): any;
  }
  export const pipelineStatus: any;
  export class Pipeline {
    constructor();
    withStep(step: any): any;
    run(ctx: any): any;
  }
  export class RouteLoader {
    loadRoute(router: any, config: any): any;
  }
  export class LoadRouteStep {
    static inject(): any;
    constructor(routeLoader: any);
    run(navigationContext: any, next: any): any;
  }
  export function loadNewRoute(routeLoader: any, navigationContext: any): any;
  export class PipelineProvider {
    static inject(): any;
    constructor(container: any);
    createPipeline(navigationContext: any): any;
  }
  export class AppRouter extends Router {
    static inject(): any;
    constructor(container: any, history: any, pipelineProvider: any, events: any);
    isRoot(): any;
    loadUrl(url: any): any;
    queueInstruction(instruction: any): any;
    dequeueInstruction(instructionCount?: any): any;
    registerViewPort(viewPort: any, name: any): any;
    activate(options: any): any;
    deactivate(): any;
    reset(): any;
  }
}

declare module 'aurelia-router/navigation-commands' {
	/**
	 * Determines if the provided object is a navigation command.
	 * A navigation command is anything with a navigate method.
	 * @param {object} obj The item to check.
	 * @return {boolean}
	 */
	export function isNavigationCommand(obj: any): boolean;
	/**
	* Used during the activation lifecycle to cause a redirect.
	*
	* @class Redirect
	* @constructor
	* @param {String} url The url to redirect to.
	*/
	export class Redirect {
	    url: any;
	    options: any;
	    shouldContinueProcessing: any;
	    router: any;
	    constructor(url: any, options?: any);
	    /**
	    * Called by the activation system to set the child router.
	    *
	    * @method setRouter
	    * @param {Router} router
	    */
	    setRouter(router: any): void;
	    /**
	    * Called by the navigation pipeline to navigate.
	    *
	    * @method navigate
	    * @param {Router} appRouter - a router which should redirect
	    */
	    navigate(appRouter: any): void;
	}

}
declare module 'aurelia-router/navigation-plan' {
	export const activationStrategy: {
	    noChange: string;
	    invokeLifecycle: string;
	    replace: string;
	};
	export function buildNavigationPlan(navigationContext: any, forceLifecycleMinimum?: any): Promise<{}>;
	export class BuildNavigationPlanStep {
	    run(navigationContext: any, next: any): any;
	}

}
declare module 'aurelia-router/util' {
	export function processPotential(obj: any, resolve: any, reject: any): any;

}
declare module 'aurelia-router/activation' {
	export var affirmations: string[];
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

}
declare module 'aurelia-router/navigation-context' {
	export class NavigationContext {
	    router: any;
	    nextInstruction: any;
	    currentInstruction: any;
	    prevInstruction: any;
	    plan: any;
	    constructor(router: any, nextInstruction: any);
	    getAllContexts(acc?: any[]): any[];
	    nextInstructions: any[];
	    currentInstructions: any[];
	    prevInstructions: any[];
	    commitChanges(waitToSwap: any): Promise<void>;
	    buildTitle(separator?: string): any;
	}
	export class CommitChangesStep {
	    run(navigationContext: any, next: any): any;
	}

}
declare module 'aurelia-router/navigation-instruction' {
	export class NavigationInstruction {
	    fragment: any;
	    queryString: any;
	    params: any;
	    queryParams: any;
	    config: any;
	    lifecycleArgs: any;
	    viewPortInstructions: any;
	    constructor(fragment: any, queryString: any, params: any, queryParams: any, config: any, parentInstruction: any);
	    addViewPortInstruction(viewPortName: any, strategy: any, moduleId: any, component: any): {
	        name: any;
	        strategy: any;
	        moduleId: any;
	        component: any;
	        childRouter: any;
	        lifecycleArgs: any;
	    };
	    getWildCardName(): any;
	    getWildcardPath(): any;
	    getBaseUrl(): any;
	}

}
declare module 'aurelia-router/route-filters' {
	export class RouteFilterContainer {
	    static inject(): any[];
	    container: any;
	    filters: any;
	    filterCache: any;
	    constructor(container: any);
	    addStep(name: any, step: any, index?: number): void;
	    getFilterSteps(name: any): any;
	}
	export function createRouteFilterStep(name: any): any;

}
declare module 'aurelia-router/router-configuration' {
	export class RouterConfiguration {
	    instructions: any;
	    options: any;
	    pipelineSteps: any;
	    title: any;
	    unknownRouteConfig: any;
	    constructor();
	    addPipelineStep(name: any, step: any): void;
	    map(route: any, config?: any): RouterConfiguration;
	    mapRoute(config: any): RouterConfiguration;
	    mapUnknownRoutes(config: any): RouterConfiguration;
	    exportToRouter(router: any): void;
	    configureRoute(router: any, config: any, navModel?: any): void;
	    ensureDefaultsForRouteConfig(config: any): void;
	    deriveName(config: any): any;
	    deriveRoute(config: any): any;
	    deriveTitle(config: any): any;
	    deriveModuleId(config: any): any;
	}

}
declare module 'aurelia-router/router' {
	import { NavigationContext } from 'aurelia-router/navigation-context';
	export class Router {
	    container: any;
	    history: any;
	    viewPorts: any;
	    baseUrl: any;
	    isConfigured: any;
	    parent: any;
	    navigation: any;
	    recognizer: any;
	    childRecognizer: any;
	    catchAllHandler: any;
	    routes: any;
	    fallbackOrder: any;
	    isNavigating: any;
	    constructor(container: any, history: any);
	    isRoot: boolean;
	    registerViewPort(viewPort: any, name: any): void;
	    refreshBaseUrl(): void;
	    refreshNavigation(): void;
	    configure(callbackOrConfig: any): Router;
	    createRootedPath(fragment: any): any;
	    navigate(fragment: any, options: any): any;
	    navigateToRoute(route: any, params: any, options: any): any;
	    navigateBack(): void;
	    createChild(container: any): Router;
	    createNavigationInstruction(url?: string, parentInstruction?: any): Promise<any>;
	    createNavigationContext(instruction: any): NavigationContext;
	    generate(name: any, params: any): any;
	    addRoute(config: any, navModel?: any): void;
	    hasRoute(name: any): boolean;
	    hasOwnRoute(name: any): any;
	    handleUnknownRoutes(config: any): void;
	    reset(): void;
	}

}
declare module 'aurelia-router/pipeline' {
	export const pipelineStatus: {
	    completed: string;
	    cancelled: string;
	    rejected: string;
	    running: string;
	};
	export class Pipeline {
	    steps: any;
	    constructor();
	    withStep(step: any): Pipeline;
	    run(ctx: any): any;
	}

}
declare module 'aurelia-router/route-loading' {
	export class RouteLoader {
	    loadRoute(router: any, config: any): void;
	}
	export class LoadRouteStep {
	    static inject(): typeof RouteLoader[];
	    routeLoader: any;
	    constructor(routeLoader: any);
	    run(navigationContext: any, next: any): Promise<{}>;
	}
	export function loadNewRoute(routeLoader: any, navigationContext: any): Promise<{}[]>;

}
declare module 'aurelia-router/pipeline-provider' {
	import { Pipeline } from 'aurelia-router/pipeline';
	export class PipelineProvider {
	    static inject(): any[];
	    container: any;
	    steps: any;
	    constructor(container: any);
	    createPipeline(navigationContext: any): Pipeline;
	}

}
declare module 'aurelia-router/app-router' {
	import { Router } from 'aurelia-router/router';
	export class AppRouter extends Router {
	    static inject(): any[];
	    pipelineProvider: any;
	    events: any;
	    history: any;
	    queue: any;
	    isNavigating: any;
	    isActive: any;
	    container: any;
	    options: any;
	    constructor(container: any, history: any, pipelineProvider: any, events: any);
	    isRoot: boolean;
	    loadUrl(url: any): any;
	    queueInstruction(instruction: any): Promise<{}>;
	    dequeueInstruction(): void;
	    registerViewPort(viewPort: any, name: any): Promise<void>;
	    activate(options?: any): void;
	    deactivate(): void;
	    reset(): void;
	}

}
declare module 'aurelia-router/index' {
	export { Router } from 'aurelia-router/router';
	export { AppRouter } from 'aurelia-router/app-router';
	export { PipelineProvider } from 'aurelia-router/pipeline-provider';
	export { Redirect } from 'aurelia-router/navigation-commands';
	export { RouteLoader } from 'aurelia-router/route-loading';
	export { RouterConfiguration } from 'aurelia-router/router-configuration';
	export { activationStrategy } from 'aurelia-router/navigation-plan';
	export { RouteFilterContainer, createRouteFilterStep } from 'aurelia-router/route-filters';

}
declare module 'aurelia-router' {
	export * from 'aurelia-router/index';
}

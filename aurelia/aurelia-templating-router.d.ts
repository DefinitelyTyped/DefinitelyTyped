// Type definitions for aurelia-templating-router v0.12.0
// Project: https://github.com/aurelia/
// Definitions by: Mike Graham <https://github.com/cmichaelgraham>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module 'aurelia-templating-router/route-loader' {
	import { RouteLoader } from 'aurelia-router';
	export class TemplatingRouteLoader extends RouteLoader {
	    compositionEngine: any;
	    constructor(compositionEngine: any);
	    loadRoute(router: any, config: any): any;
	}

}
declare module 'aurelia-templating-router/router-view' {
	export class RouterView {
	    element: any;
	    container: any;
	    viewSlot: any;
	    router: any;
	    view: any;
	    constructor(element: any, container: any, viewSlot: any, router: any);
	    bind(executionContext: any): void;
	    process(viewPortInstruction: any, waitToSwap: any): any;
	    swap(viewPortInstruction: any): void;
	}

}
declare module 'aurelia-templating-router/route-href' {
	export class RouteHref {
	    router: any;
	    element: any;
	    route: any;
	    params: any;
	    attribute: any;
	    constructor(router: any, element: any);
	    bind(): void;
	    attributeChanged(value: any, previous: any): void;
	    processChange(): void;
	}

}
declare module 'aurelia-templating-router/index' {
	export function configure(aurelia: any): void;
	export { TemplatingRouteLoader } from 'aurelia-templating-router/route-loader';
	export { RouterView } from 'aurelia-templating-router/router-view';
	export { RouteHref } from 'aurelia-templating-router/route-href';

}
declare module 'aurelia-templating-router' {
	export * from 'aurelia-templating-router/index';
}

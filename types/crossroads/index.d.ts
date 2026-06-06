/// <reference types="signals" />

import * as signal from "signals";

declare namespace CrossroadsJs {
    export interface Route {
        matched: signal.Signal;

        /**
         * Signal dispatched every time a request "leaves" the route.
         */
        switched: signal.Signal;

        /**
         * Object used to configure parameters/segments validation rules.
         */
        rules: any;

        /**
         * If crossroads should try to match this Route even after matching another Route.
         */
        greedy: boolean;

        /**
         * Remove route from crossroads and destroy it, releasing memory.
         */
        dispose(): void;

        /**
         * Test if Route matches against request. Return true if request validate against route rules and pattern.
         */
        match(request: any): boolean;

        /**
         * Return a string that matches the route replacing the capturing groups with the values provided in the replacements object.
         */
        interpolate(replacements: any): string;

        /**
         * Add a listener to the signal.
         *
         * @param listener Signal handler function.
         * @param listenercontext Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param priority The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         */
        add(listener: Function, listenerContext?: any, priority?: Number): signal.SignalBinding;
    }

    export interface CrossRoadsStatic {
        NORM_AS_ARRAY: Function;

        NORM_AS_OBJECT: Function;

        /**
         * Creates a new route pattern listener and add it to crossroads routes collection.
         *
         * @param pattern String pattern or Regular Expression that should be used to match against requests.
         * @param handler Function that should be executed when a request matches the Route pattern.
         * @param priority Route execution priority.
         */
        addRoute(pattern: any, handler?: Function, priority?: number): Route;

        /**
         * Remove a single route from crossroads collection.
         *
         * @param route Reference to the Route object returned by crossroads.addRoute().
         */
        removeRoute(route: Route): void;

        /**
         * Remove all routes from crossroads collection.
         */
        removeAllRoutes(): void;

        /**
         * Parse a string input and dispatch matched Signal of the first Route that matches the request.
         *
         * @param request String that should be evaluated and matched against Routes to define which Route handlers should be executed and which parameters should be passed to the handlers.
         * @param defaultargs Array containing values passed to matched/routed/bypassed signals as first arguments. Useful for node.js in case you need to access the request and response objects.
         */
        parse(request: string, ...defaultArgs: any[]): void;

        /**
         * Get number of Routes contained on the crossroads collection.
         */
        getNumRoutes(): number;

        /**
         * Signal dispatched every time that crossroads.parse can't find a Route that matches the request. Useful for debuging and error handling.
         */
        bypassed: signal.Signal;

        /**
         * Signal dispatched every time that crossroads.parse find a Route that matches the request. Useful for debuging and for executing tasks that should happen at each routing.
         */
        routed: signal.Signal;

        /**
         * Create a new independent Router instance.
         */
        create(): CrossRoadsStatic;

        /**
         * Sets a default function that should be used to normalize parameters before passing them to the Route.matched, works similarly to Route.rules.normalize_.
         */
        normalizeFn: Function;

        /**
         * Set if crossroads should typecast route paths. Default value is false (IMPORTANT: on v0.5.0 it was true by default).
         */
        shouldTypecast: boolean;

        /**
         * String representation of the crossroads version number (e.g. "0.6.0").
         */
        VERSION: string;

        /**
         * Sets global route matching behavior to greedy so crossroads will try to match every single route with the supplied request (if true it won't stop at first match).
         */
        greedy: boolean;

        /**
         * Sets if the greedy routes feature is enabled. If false it won't try to match multiple routes (faster).
         */
        greedyEnabled: boolean;

        /**
         * Resets the Router internal state. Will clear reference to previously matched routes (so they won't dispatch switched signal when matching a new route) and reset last request.
         */
        resetState(): void;

        /**
         * Sets if Router should care about previous state, so multiple crossroads.parse() calls passing same argument would not trigger the routed, matched and bypassed signals.
         */
        ignoreState: boolean;

        /**
         * Pipe routers, so all crossroads.parse() calls will be forwarded to the other router as well.
         */
        pipe(router: CrossRoadsStatic): void;

        /**
         * "Ceci n'est pas une pipe"
         */
        unpipe(router: CrossRoadsStatic): void;
    }
}

declare var crossroads: CrossroadsJs.CrossRoadsStatic;
export = crossroads;
export as namespace crossroads;

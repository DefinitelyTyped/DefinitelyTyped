import EmberObject from "@ember/object";
import Evented from "@ember/object/evented";
import RouterDSL from "@ember/routing/-private/router-dsl";
import Transition from "@ember/routing/transition";
import RouterService from "@ember/routing/router-service";

/**
 * The `Ember.Router` class manages the application state and URLs. Refer to
 * the [routing guide](http://emberjs.com/guides/routing/) for documentation.
 */
export default class Router extends EmberObject {
    /**
     * The `Router.map` function allows you to define mappings from URLs to routes
     * in your application. These mappings are defined within the
     * supplied callback function using `this.route`.
     */
    static map(callback: (this: RouterDSL) => void): void;
    /**
     * The `location` property determines the type of URL's that your
     * application will use.
     *
     * @note the `'auto'` location is [deprecated](https://deprecations.emberjs.com/v4.x/#toc_deprecate-auto-location).
     */
    location: 'history' | 'hash' | 'none' | 'auto';
    /**
     * Represents the URL of the root of the application, often '/'. This prefix is
     * assumed on all routes defined on this router.
     */
    rootURL: string;
    /**
     * Transition the application into another route. The route may
     * be either a single route or route path:
     */
    transitionTo(name: string, options?: {}): Transition;
    transitionTo(name: string, ...models: any[]): Transition;
    transitionTo(name: string, options: {}): Transition;
}

// tslint:disable-next-line:no-empty-interface -- used for declaration merge
export default interface Router extends Evented {}

declare module '@ember/service' {
    interface Registry {
        'router': RouterService;
    }
}

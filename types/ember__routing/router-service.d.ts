import Transition from '@ember/routing/-private/transition';
import Service from '@ember/service';

// tslint:disable-next-line:strict-export-declare-modifiers
type RouteModel = object | string | number;

// https://emberjs.com/api/ember/2.18/classes/RouterService
/**
 * The Router service is the public API that provides component/view layer access to the router.
 */
export default class RouterService extends Service {
    //
    /**
     * Name of the current route.
     * This property represent the logical name of the route,
     * which is comma separated.
     * For the following router:
     * ```app/router.js
     * Router.map(function() {
     * this.route('about');
     * this.route('blog', function () {
     *     this.route('post', { path: ':post_id' });
     * });
     * });
     * ```
     * It will return:
     * * `index` when you visit `/`
     * * `about` when you visit `/about`
     * * `blog.index` when you visit `/blog`
     * * `blog.post` when you visit `/blog/some-post-id`
     */
    readonly currentRouteName: string;
    //
    /**
     * Current URL for the application.
     * This property represent the URL path for this route.
     * For the following router:
     * ```app/router.js
     * Router.map(function() {
     * this.route('about');
     * this.route('blog', function () {
     *     this.route('post', { path: ':post_id' });
     * });
     * });
     * ```
     * It will return:
     * * `/` when you visit `/`
     * * `/about` when you visit `/about`
     * * `/blog` when you visit `/blog`
     * * `/blog/some-post-id` when you visit `/blog/some-post-id`
     */
    readonly currentURL: string;
    //
    /**
     * Determines whether a route is active.
     *
     * @param routeName the name of the route
     * @param models    the model(s) or identifier(s) to be used while
     *                  transitioning to the route
     * @param options   optional hash with a queryParams property containing a
     *                  mapping of query parameters
     */
    isActive(routeName: string, options?: { queryParams: object }): boolean;
    isActive(
        routeName: string,
        models: RouteModel,
        options?: { queryParams: object }
    ): boolean;
    isActive(
        routeName: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        options?: { queryParams: object }
    ): boolean;
    isActive(
        routeName: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        options?: { queryParams: object }
    ): boolean;
    isActive(
        routeName: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        modelsD: RouteModel,
        options?: { queryParams: object }
    ): boolean;

    // https://emberjs.com/api/ember/2.18/classes/RouterService/methods/isActive?anchor=replaceWith
    /**
     * Transition into another route while replacing the current URL, if
     * possible. The route may be either a single route or route path.
     *
     * @param routeNameOrUrl the name of the route or a URL
     * @param models         the model(s) or identifier(s) to be used while
     *                       transitioning to the route.
     * @param options        optional hash with a queryParams property
     *                       containing a mapping of query parameters
     * @returns              the Transition object associated with this attempted transition
     */
    replaceWith(
        routeNameOrUrl: string,
        options?: { queryParams: object }
    ): Transition;
    replaceWith(
        routeNameOrUrl: string,
        models: RouteModel,
        options?: { queryParams: object }
    ): Transition;
    replaceWith(
        routeNameOrUrl: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        options?: { queryParams: object }
    ): Transition;
    replaceWith(
        routeNameOrUrl: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        options?: { queryParams: object }
    ): Transition;
    replaceWith(
        routeNameOrUrl: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        modelsD: RouteModel,
        options?: { queryParams: object }
    ): Transition;

    // https://emberjs.com/api/ember/2.18/classes/RouterService/methods/isActive?anchor=transitionTo
    /**
     * Transition the application into another route. The route may be
     * either a single route or route path
     *
     * @param routeNameOrUrl the name of the route or a URL
     * @param models         the model(s) or identifier(s) to be used while
     *                       transitioning to the route.
     * @param options        optional hash with a queryParams property
     *                       containing a mapping of query parameters
     * @returns              the Transition object associated with this attempted transition
     */
    transitionTo(
        routeNameOrUrl: string,
        options?: { queryParam: object }
    ): Transition;
    transitionTo(
        routeNameOrUrl: string,
        models: RouteModel,
        options?: { queryParams: object }
    ): Transition;
    transitionTo(
        routeNameOrUrl: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        options?: { queryParams: object }
    ): Transition;
    transitionTo(
        routeNameOrUrl: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        options?: { queryParams: object }
    ): Transition;
    transitionTo(
        routeNameOrUrl: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        modelsD: RouteModel,
        options?: { queryParams: object }
    ): Transition;

    // https://emberjs.com/api/ember/2.18/classes/RouterService/methods/isActive?anchor=urlFor
    /**
     * Generate a URL based on the supplied route name.
     *
     * @param routeName the name of the route or a URL
     * @param models    the model(s) or identifier(s) to be used while
     *                  transitioning to the route.
     * @param options   optional hash with a queryParams property containing
     *                  a mapping of query parameters
     * @returns         the string representing the generated URL
     */
    urlFor(routeName: string, options?: { queryParams: object }): string;
    urlFor(
        routeName: string,
        models: RouteModel,
        options?: { queryParams: object }
    ): string;
    urlFor(
        routeName: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        options?: { queryParams: object }
    ): string;
    urlFor(
        routeName: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        options?: { queryParams: object }
    ): string;
    urlFor(
        routeName: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        modelsD: RouteModel,
        options?: { queryParams: object }
    ): string;
}

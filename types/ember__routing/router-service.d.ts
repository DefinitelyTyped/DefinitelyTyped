import RouteInfo from '@ember/routing/-private/route-info';
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
     * A `RouteInfo` that represents the current leaf route.
     * It is guaranteed to change whenever a route transition happens
     * (even when that transition only changes parameters and doesn't change the active route)
     */
    readonly currentRoute: RouteInfo;
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

    // https://emberjs.com/api/ember/release/classes/RouterService/methods/isActive?anchor=transitionTo
    /**
     * Transition the application into another route. The route may
     * be either a single route or route path:
     *
     * See [transitionTo](https://api.emberjs.com/ember/release/classes/Route/methods/transitionTo?anchor=transitionTo) for more info.
     *
     * Calling `transitionTo` from the Router service will cause default query parameter values to be included in the URL.
     * This behavior is different from calling `transitionTo` on a route or `transitionToRoute` on a controller.
     * See the [Router Service RFC](https://github.com/emberjs/rfcs/blob/master/text/0095-router-service.md#query-parameter-semantics) for more info.
     *
     * In the following example we use the Router service to navigate to a route with a
     * specific model from a Component.
     *
     * ```app/components/example.js
     * import Component from '@glimmer/component';
     * import { action } from '@ember/object';
     * import { inject as service } from '@ember/service';
     *
     * export default class extends Component {
     *   @service router;
     *
     *   @action
     *   goToComments(post) {
     *     this.router.transitionTo('comments', post);
     *   }
     * }
     * ```
     *
     * @param routeNameOrUrl the name of the route or a URL
     * @param models         the model(s) or identifier(s) to be used while
     *                       transitioning to the route.
     * @param options        optional hash with a queryParams property
     *                       containing a mapping of query parameters. May be
     *                       supplied as the only parameter to trigger a
     *                       query-parameter-only transition.
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
    transitionTo(options: { queryParams: object }): Transition;

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

    // https://api.emberjs.com/ember/3.6/classes/RouterService/events/routeDidChange?anchor=routeDidChange
    /**
     * Register a callback for an event.
     *
     * The `routeWillChange` event is fired at the beginning of any attempted transition with a `Transition` object as the sole argument.
     * This action can be used for aborting, redirecting, or decorating the transition from the currently active routes.
     *
     * The `routeDidChange` event only fires once a transition has settled.
     * This includes aborts and error substates.
     * Like the `routeWillChange` event it recieves a `Transition` as the sole argument.
     *
     * @param name     the name of the event
     * @param callback the callback to execute
     */
    on(
        name: 'routeDidChange' | 'routeWillChange',
        callback: (transition: Transition) => void
    ): RouterService;
}

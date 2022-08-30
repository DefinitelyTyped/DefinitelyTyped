import EmberObject from '@ember/object';
import ActionHandler from '@ember/object/-private/action-handler';
import Transition from '@ember/routing/transition';
import Evented from '@ember/object/evented';
import { RouteQueryParam } from '@ember/routing/types';
import Controller from '@ember/controller';

// tslint:disable-next-line:strict-export-declare-modifiers
type RouteModel = object | string | number;

/**
 * The `Ember.Route` class is used to define individual routes. Refer to
 * the [routing guide](http://emberjs.com/guides/routing/) for documentation.
 */
export default class Route<Model = unknown, Params extends object = object> extends EmberObject {
    // methods
    /**
     * This hook is called after this route's model has resolved. It follows
     * identical async/promise semantics to `beforeModel` but is provided the
     * route's resolved model in addition to the `transition`, and is therefore
     * suited to performing logic that can only take place after the model has
     * already resolved.
     *
     * @returns if the value returned from this hook is a promise, the
     *   transition will pause until the transition resolves. Otherwise,
     *   non-promise return values are not utilized in any way.
     */
    afterModel(resolvedModel: Model, transition: Transition): Promise<unknown> | void;

    /**
     * This hook is the first of the route entry validation hooks called when an
     * attempt is made to transition into a route or one of its children. It is
     * called before `model` and `afterModel`, and is appropriate for cases
     * when:
     *
     * 1. A decision can be made to redirect elsewhere without needing to
     *     resolve the model first.
     * 2. Any async operations need to occur first before the model is attempted
     *     to be resolved.
     *
     * This hook is provided the current `transition` attempt as a parameter,
     * which can be used to `.abort()` the transition, save it for a later
     * `.retry()`, or retrieve values set on it from a previous hook. You can
     * also just call `this.transitionTo` to another route to implicitly abort
     * the `transition`. You can return a promise from this hook to pause the
     * transition until the promise resolves (or rejects). This could be useful,
     * for instance, for retrieving async code from the server that is required
     * to enter a route.
     *
     * @returns if the value returned from this hook is a promise, the
     *   transition will pause until the transition resolves. Otherwise,
     *   non-promise return values are not utilized in any way.
     */
    beforeModel(transition: Transition): Promise<unknown> | void;

    /**
     * Returns the controller of the current route, or a parent (or any
     * ancestor) route in a route hierarchy.
     *
     * The controller instance must already have been created, either through
     * entering the associated route or using `generateController`.
     *
     * @param name the name of the route or controller
     */
    controllerFor(name: string): Controller;

    /**
     * A hook you can implement to convert the URL into the model for
     * this route.
     */
    model(params: Params, transition: Transition): Model | PromiseLike<Model>;

    /**
     * Returns the model of a parent (or any ancestor) route
     * in a route hierarchy.  During a transition, all routes
     * must resolve a model object, and if a route
     * needs access to a parent route's model in order to
     * resolve a model (or just reuse the model from a parent),
     * it can call `this.modelFor(theNameOfParentRoute)` to
     * retrieve it.
     */
    modelFor(name: string): unknown;

    /**
     * Retrieves parameters, for current route using the state.params
     * variable and getQueryParamsFor, using the supplied routeName.
     */
    paramsFor(name: string): object;

    /**
     * A hook you can implement to optionally redirect to another route.
     *
     * If you call `this.transitionTo` from inside of this hook, this route
     * will not be entered in favor of the other hook.
     *
     * `redirect` and `afterModel` behave very similarly and are
     * called almost at the same time, but they have an important
     * distinction in the case that, from one of these hooks, a
     * redirect into a child route of this route occurs: redirects
     * from `afterModel` essentially invalidate the current attempt
     * to enter this route, and will result in this route's `beforeModel`,
     * `model`, and `afterModel` hooks being fired again within
     * the new, redirecting transition. Redirects that occur within
     * the `redirect` hook, on the other hand, will _not_ cause
     * these hooks to be fired again the second time around; in
     * other words, by the time the `redirect` hook has been called,
     * both the resolved model and attempted entry into this route
     * are considered to be fully validated.
     */
    redirect(model: Model, transition: Transition): void;

    /**
     * Refresh the model on this route and any child routes, firing the
     * `beforeModel`, `model`, and `afterModel` hooks in a similar fashion
     * to how routes are entered when transitioning in from other route.
     * The current route params (e.g. `article_id`) will be passed in
     * to the respective model hooks, and if a different model is returned,
     * `setupController` and associated route hooks will re-fire as well.
     * An example usage of this method is re-querying the server for the
     * latest information using the same parameters as when the route
     * was first entered.
     * Note that this will cause `model` hooks to fire even on routes
     * that were provided a model object when the route was initially
     * entered.
     */
    refresh(): Transition;

    /**
     * Transition into another route while replacing the current URL, if possible.
     * This will replace the current history entry instead of adding a new one.
     * Beside that, it is identical to `transitionTo` in all other respects. See
     * 'transitionTo' for additional information regarding multiple models.
     *
     * @param name    the name of the route or a URL
     * @param models  the model(s) or identifier(s) to be used while
     *                transitioning to the route.
     * @param options optional hash with a queryParams property
     *                containing a mapping of query parameters. May be supplied
     *                as the only parameter to trigger a query-parameter-only
     *                transition.
     * @returns       the Transition object associated with this attempted
     *                transition
     * @deprecated    until 5.0. Inject the router service and use its methods.
     */
    replaceWith(name: string, ...args: unknown[]): Transition;

    /**
     * A hook you can use to reset controller values either when the model
     * changes or the route is exiting.
     */
    resetController(controller: Controller, isExiting: boolean, transition: Transition): void;

    /**
     * Sends an action to the router, which will delegate it to the currently active
     * route hierarchy per the bubbling rules explained under actions.
     */
    send(name: string, ...args: unknown[]): void;

    /**
     * A hook you can implement to convert the route's model into parameters
     * for the URL.
     *
     * The default `serialize` method will insert the model's `id` into the
     * route's dynamic segment (in this case, `:post_id`) if the segment contains '_id'.
     * If the route has multiple dynamic segments or does not contain '_id', `serialize`
     * will return `Ember.getProperties(model, params)`
     * This method is called when `transitionTo` is called with a context
     * in order to populate the URL.
     */
    serialize(model: Model, params: string[]): string | object;

    /**
     * A hook you can use to setup the controller for the current route.
     * This method is called with the controller for the current route and the
     * model supplied by the `model` hook.
     * By default, the `setupController` hook sets the `model` property of
     * the controller to the `model`.
     * If you implement the `setupController` hook in your Route, it will
     * prevent this default behavior. If you want to preserve that behavior
     * when implementing your `setupController` function, make sure to call
     * `_super`
     */
    setupController(controller: Controller, model: Model, transition: Transition): void;

    /**
     * Transition the application into another route. The route may
     * be either a single route or route path:
     *
     * ```javascript
     * this.transitionTo('blogPosts');
     * this.transitionTo('blogPosts.recentEntries');
     * ```
     *
     * Optionally supply a model for the route in question. The model
     * will be serialized into the URL using the `serialize` hook of
     * the route:
     *
     * ```javascript
     * this.transitionTo('blogPost', aPost);
     * ```
     *
     * If a literal is passed (such as a number or a string), it will
     * be treated as an identifier instead. In this case, the `model`
     * hook of the route will be triggered:
     *
     * ```javascript
     * this.transitionTo('blogPost', 1);
     * ```
     *
     * Multiple models will be applied last to first recursively up the
     * route tree.
     *
     * ```app/routes.js
     * // ...
     *
     * Router.map(function() {
     *   this.route('blogPost', { path:':blogPostId' }, function() {
     *     this.route('blogComment', { path: ':blogCommentId' });
     *   });
     * });
     *
     * export default Router;
     * ```
     *
     * ```javascript
     * this.transitionTo('blogComment', aPost, aComment);
     * this.transitionTo('blogComment', 1, 13);
     * ```
     *
     * It is also possible to pass a URL (a string that starts with a
     * `/`).
     *
     * ```javascript
     * this.transitionTo('/');
     * this.transitionTo('/blog/post/1/comment/13');
     * this.transitionTo('/blog/posts?sort=title');
     * ```
     *
     * An options hash with a `queryParams` property may be provided as
     * the final argument to add query parameters to the destination URL.
     *
     * ```javascript
     * this.transitionTo('blogPost', 1, {
     *   queryParams: { showComments: 'true' }
     * });
     *
     * // if you just want to transition the query parameters without changing the route
     * this.transitionTo({ queryParams: { sort: 'date' } });
     * ```
     *
     * See also [replaceWith](#method_replaceWith).
     *
     * Simple Transition Example
     *
     * ```app/routes.js
     * // ...
     *
     * Router.map(function() {
     *   this.route('index');
     *   this.route('secret');
     *   this.route('fourOhFour', { path: '*:' });
     * });
     *
     * export default Router;
     * ```
     *
     * ```app/routes/index.js
     * import Route from '@ember/routing/route';
     * import { action } from '@ember/object';
     *
     * export default class IndexRoute extends Route {
     *   @action
     *   moveToSecret(context) {
     *     if (authorized()) {
     *       this.transitionTo('secret', context);
     *     } else {
     *       this.transitionTo('fourOhFour');
     *     }
     *   }
     * }
     * ```
     *
     * Transition to a nested route
     *
     * ```app/router.js
     * // ...
     *
     * Router.map(function() {
     *   this.route('articles', { path: '/articles' }, function() {
     *     this.route('new');
     *   });
     * });
     *
     * export default Router;
     * ```
     *
     * ```app/routes/index.js
     * import Route from '@ember/routing/route';
     * import { action } from '@ember/object';
     *
     * export default class IndexRoute extends Route {
     *   @action
     *   transitionToNewArticle() {
     *     this.transitionTo('articles.new');
     *   }
     * }
     * ```
     *
     * Multiple Models Example
     *
     * ```app/router.js
     * // ...
     *
     * Router.map(function() {
     *   this.route('index');
     *
     *   this.route('breakfast', { path: ':breakfastId' }, function() {
     *     this.route('cereal', { path: ':cerealId' });
     *   });
     * });
     *
     * export default Router;
     * ```
     *
     * ```app/routes/index.js
     * import Route from '@ember/routing/route';
     * import { action } from '@ember/object';
     *
     * export default class IndexRoute extends Route {
     *   @action
     *   moveToChocolateCereal() {
     *     let cereal = { cerealId: 'ChocolateYumminess' };
     *     let breakfast = { breakfastId: 'CerealAndMilk' };
     *
     *     this.transitionTo('breakfast.cereal', breakfast, cereal);
     *   }
     * }
     * ```
     *
     * Nested Route with Query String Example
     *
     * ```app/routes.js
     * // ...
     *
     * Router.map(function() {
     *   this.route('fruits', function() {
     *     this.route('apples');
     *   });
     * });
     *
     * export default Router;
     * ```
     *
     * ```app/routes/index.js
     * import Route from '@ember/routing/route';
     *
     * export default class IndexRoute extends Route {
     *   @action
     *   transitionToApples() {
     *     this.transitionTo('fruits.apples', { queryParams: { color: 'red' } });
     *   }
     * }
     * ```
     *
     * @param name    the name of the route or a URL.
     * @param models  the model(s) or identifier(s) to be used while
     *                transitioning to the route.
     * @param options optional hash with a queryParams property
     *                containing a mapping of query parameters. May be supplied
     *                as the only parameter to trigger a query-parameter-only
     *                transition.
     * @returns       the Transition object associated with this attempted
     *                transition
     * @deprecated    until 5.0. Inject the router service and use its methods.
     */
    transitionTo(name: string, options?: { queryParams: object }): Transition;
    transitionTo(name: string, modelsA: RouteModel, options?: { queryParams: object }): Transition;
    transitionTo(name: string, modelsA: RouteModel, modelsB: RouteModel, options?: { queryParams: object }): Transition;
    transitionTo(
        name: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        options?: { queryParams: object },
    ): Transition;
    transitionTo(
        name: string,
        modelsA: RouteModel,
        modelsB: RouteModel,
        modelsC: RouteModel,
        modelsD: RouteModel,
        options?: { queryParams: object },
    ): Transition;
    transitionTo(options: { queryParams: object }): Transition;

    // https://emberjs.com/api/ember/release/classes/Route/methods/intermediateTransitionTo?anchor=intermediateTransitionTo
    /**
     * Perform a synchronous transition into another route without attempting to resolve promises,
     * update the URL, or abort any currently active asynchronous transitions
     * (i.e. regular transitions caused by transitionTo or URL changes).
     *
     * @param name           the name of the route or a URL
     * @param models         the model(s) or identifier(s) to be used while
     *                       transitioning to the route.
     * @returns              the Transition object associated with this attempted transition
     */
    intermediateTransitionTo(name: string, ...models: unknown[]): Transition;

    // properties
    /**
     * The controller associated with this route.
     */
    controller: Controller;

    /**
     * The name of the controller to associate with this route.
     * By default, Ember will lookup a route's controller that matches the name
     * of the route (i.e. `App.PostController` for `App.PostRoute`). However,
     * if you would like to define a specific controller to use, you can do so
     * using this property.
     * This is useful in many ways, as the controller specified will be:
     * * p assed to the `setupController` method.
     * * used as the controller for the view being rendered by the route.
     * * returned from a call to `controllerFor` for the route.
     */
    controllerName: string;

    /**
     * The name of the route, dot-delimited, including the engine prefix if applicable.
     */
    fullRouteName: string;

    /**
     * Configuration hash for this route's queryParams.
     */
    queryParams: { [key: string]: RouteQueryParam };

    /**
     * The name of the route, dot-delimited
     */
    routeName: string;

    /**
     * The name of the template to use by default when rendering this routes
     * template.
     * This is similar with `viewName`, but is useful when you just want a custom
     * template without a view.
     */
    templateName: string;

    // events
    /**
     * This hook is executed when the router enters the route. It is not executed
     * when the model for the route changes.
     */
    activate(transition: Transition): void;

    /**
     * This hook is executed when the router completely exits this route. It is
     * not executed when the model for the route changes.
     */
    deactivate(transition: Transition): void;

    /**
     * The didTransition action is fired after a transition has successfully been
     * completed. This occurs after the normal model hooks (beforeModel, model,
     * afterModel, setupController) have resolved. The didTransition action has
     * no arguments, however, it can be useful for tracking page views or resetting
     * state on the controller.
     */
    didTransition(): void;

    /**
     * When attempting to transition into a route, any of the hooks may return a promise
     * that rejects, at which point an error action will be fired on the partially-entered
     * routes, allowing for per-route error handling logic, or shared error handling logic
     * defined on a parent route.
     */
    error(error: unknown, transition: Transition): void;

    /**
     * The loading action is fired on the route when a route's model hook returns a
     * promise that is not already resolved. The current Transition object is the first
     * parameter and the route that triggered the loading event is the second parameter.
     */
    loading(transition: Transition, route: Route): void;

    /**
     * The willTransition action is fired at the beginning of any attempted transition
     * with a Transition object as the sole argument. This action can be used for aborting,
     * redirecting, or decorating the transition from the currently active routes.
     */
    willTransition(transition: Transition): void;

    /**
     * Allows you to produce custom metadata for the route.
     * The return value of this method will be attached to
     * its corresponding RouteInfoWithAttributes object.
     * Example
     * ```app/routes/posts/index.js
     * import Route from '@ember/routing/route';
     * export default class PostsIndexRoute extends Route {
     *   buildRouteInfoMetadata() {
     *     return { title: 'Posts Page' }
     *   }
     * }
     * ```
     * ```app/routes/application.js
     * import Route from '@ember/routing/route';
     * import { inject as service } from '@ember/service';
     * export default class ApplicationRoute extends Route {
     *   @service router
     *   constructor() {
     *     super(...arguments);
     *     this.router.on('routeDidChange', transition => {
     *       document.title = transition.to.metadata.title;
     *       // would update document's title to "Posts Page"
     *     });
     *   }
     * }
     * ```
     */
    buildRouteInfoMetadata(): unknown;
}

// tslint:disable-next-line:no-empty-interface -- used for declaration merge
export default interface Route<Model = unknown, Params extends object = object> extends ActionHandler, Evented {}

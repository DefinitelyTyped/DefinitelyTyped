// Type definitions for universal-router 1.2
// Project: https://github.com/kriasoft/universal-router
// Definitions by: Jack Moore <https://github.com/jtmthf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Params is a key/value object that represents extracted URL paramters. Each
 * URL parameter resolves to a string.
 */
export interface Params {
  [key: string]: string;
}

/**
 * Context represents the context that is passed as the second argument
 * passed to resolve. By default, it only is require to contain a path, but
 * can be extended by the way of generics.
 */
export interface Context {
  path: string;
}

/**
 * ActionContext is similar to Context, with the exception of an added params
 * object. ActionContext is passed as the first argument to the action
 * function.
 */
export interface ActionContext extends Context {
  params: Params;
}

/**
 * A Route is a singular route in your application. It contains a path, an
 * action function, and optional children which are an array of Route.
 *
 * @template C User context that is made union with ActionContext.
 * @template R Result that every action function resolves to. If the action
 *  returns a Promise, R can be the type the Promise resolves to.
 */
export interface Route<C, R> {
  path: string;
  action(ctx: ActionContext & C, params: Params): R | Promise<R> | void;
  children?: Routes<C, R>;
}

/**
 * Routes in an array of type Route.
 * @template C User context that is made union with ActionContext.
 * @template R Result that every action function resolves to. If the action
 *  returns a Promise, R can be the type the Promise resolves to.
 */
export type Routes<C, R> = Array<Route<C, R>>;

/**
 * Resolve function that is given routes and a path or context object.
 * Returns a Promise that resolves to result of the action function of the
 * matched route.
 *
 * @template C User context that is made union with Context.
 * @template R Result that every action function resolves to. If the action
 *  returns a Promise, R can be the type the Promise resolves to.
 *
 * @param routes - Single route or array of routes.
 * @param pathOrContext - path to resolve or
 *  context object that contains the path along with other data.
 * @return - Result of matched action function wrapped in a Promsie.
 */
export function resolve<C, R>(routes: Routes<C, R> | Route<C, R>, pathOrContext: string | String | Context & C): Promise<R>;

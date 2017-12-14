import {Lifecycle, Server} from "hapi";

/**
 * The extension point event name. The available extension points include the request extension points as well as the following server extension points:
 * 'onPreStart' - called before the connection listeners are started.
 * 'onPostStart' - called after the connection listeners are started.
 * 'onPreStop' - called before the connection listeners are stopped.
 * 'onPostStop' - called after the connection listeners are stopped.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle)
 */
export type ServerExtType = 'onRequest' | 'onPreStart' | 'onPostStart' | 'onPreStop' | 'onPostStop'| 'onPreResponse';

/**
 * The extension point event name for Request
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle)
 */
export type ServerExtRequestType = 'onRequest';

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 * Registers an extension function in one of the request lifecycle extension points where:
 * @param events - an object or array of objects with the following:
 * * type - (required) the extension point event name. The available extension points include the request extension points as well as the following server extension points:
 * * * 'onPreStart' - called before the connection listeners are started.
 * * * 'onPostStart' - called after the connection listeners are started.
 * * * 'onPreStop' - called before the connection listeners are stopped.
 * * * 'onPostStop' - called after the connection listeners are stopped.
 * * method - (required) a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is:
 * * * server extension points: async function(server) where:
 * * * * server - the server object.
 * * * * this - the object provided via options.bind or the current active context set with server.bind().
 * * * request extension points: a lifecycle method.
 * * options - (optional) an object with the following:
 * * * before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
 * * * after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
 * * * bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
 * * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
 * @return void
 */
export interface ServerExtEventsObject {
    type: ServerExtType;
    method: ServerExtPointFunction | ServerExtPointFunction[] | Function;
    options?: ServerExtOptions;
}

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 * Registers an extension function in one of the request lifecycle extension points where:
 * @param events - an object or array of objects with the following:
 * * type - (required) the extension point event name. The available extension points include the request extension points as well as the following server extension points:
 * * * 'onPreStart' - called before the connection listeners are started.
 * * * 'onPostStart' - called after the connection listeners are started.
 * * * 'onPreStop' - called before the connection listeners are stopped.
 * * * 'onPostStop' - called after the connection listeners are stopped.
 * * method - (required) a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is:
 * * * server extension points: async function(server) where:
 * * * * server - the server object.
 * * * * this - the object provided via options.bind or the current active context set with server.bind().
 * * * request extension points: a lifecycle method.
 * * options - (optional) an object with the following:
 * * * before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
 * * * after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
 * * * bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
 * * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
 * @return void
 */
export interface ServerExtEventsRequestObject {
    type: ServerExtRequestType;
    method: Lifecycle.Method | Lifecycle.Method[];
    options?: ServerExtOptions;
}

export interface ServerExtPointFunction {
    (server: Server): void;
}

/**
 * An object with the following:
 * * before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
 * * after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
 * * bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
 * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 */
export interface ServerExtOptions {
    before: string | string[];
    after: string | string[];
    bind: object;
    sandbox?: 'server' | 'plugin';
}


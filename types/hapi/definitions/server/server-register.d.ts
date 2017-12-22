import {Plugin} from "hapi";

/**
 * Registration options (different from the options passed to the registration function):
 * * once - if true, subsequent registrations of the same plugin are skipped without error. Cannot be used with plugin options. Defaults to false. If not set to true, an error will be thrown the second time a plugin is registered on the server.
 * * routes - modifiers applied to each route added by the plugin:
 * * * prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific prefix.
 * * * vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverregisterplugins-options)
 */
export interface ServerRegisterOptions {
    /**
     * if true, subsequent registrations of the same plugin are skipped without error. Cannot be used with plugin options. Defaults to false. If not set to true, an error will be thrown the second time a plugin is registered on the server.
     */
    once?: boolean;
    /**
     * modifiers applied to each route added by the plugin:
     */
    routes?: {
        /**
         * string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific prefix.
         */
        prefix: string;
        /**
         * virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
         */
        vhost: string | string[];
    };
}

/**
 * An object with the following:
 * * plugin - a plugin object.
 * * options - (optional) options passed to the plugin during registration.
 * * once - if true, subsequent registrations of the same plugin are skipped without error. Cannot be used with plugin options. Defaults to false. If not set to true, an error will be thrown the second time a plugin is registered on the server.
 * * routes - modifiers applied to each route added by the plugin:
 * * * prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific prefix.
 * * * vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverregisterplugins-options)
 */
export interface ServerRegisterPluginObject extends ServerRegisterOptions {
    /**
     * a plugin object.
     */
    plugin: Plugin;
    /**
     * options passed to the plugin during registration.
     */
    options?: object;
}

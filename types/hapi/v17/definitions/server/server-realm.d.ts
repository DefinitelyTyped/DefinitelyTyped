import {PluginsStates} from "hapi";

/**
 * The realm object contains sandboxed server settings specific to each plugin or authentication strategy. When registering a plugin or an authentication scheme, a server object reference is provided with a new server.realm container specific to that registration. It allows each plugin to maintain its own settings without leaking and affecting other plugins.
 * For example, a plugin can set a default file path for local resources without breaking other plugins' configured paths. When calling server.bind(), the active realm's settings.bind property is set which is then used by routes and extensions added at the same level (server root or plugin).
 */
export interface ServerRealm {
    /** when the server object is provided as an argument to the plugin register() method, modifiers provides the registration preferences passed the server.register() method and includes: */
    modifiers: {
        /** routes preferences: */
        route: {
            /** the route path prefix used by any calls to server.route() from the server. Note that if a prefix is used and the route path is set to '/', the resulting path will not include the trailing slash. */
            prefix: string;
            /** the route virtual host settings used by any calls to server.route() from the server. */
            vhost: string;
        }
    };
    /** the realm of the parent server object, or null for the root server. */
    parent: object | null;
    /** the active plugin name (empty string if at the server root). */
    plugin: string;
    /** the plugin options object passed at registration. */
    pluginOptions: object;
    /** plugin-specific state to be shared only among activities sharing the same active state. plugins is an object where each key is a plugin name and the value is the plugin state. */
    plugins: PluginsStates;
    /** settings overrides */
    settings: {
        files: {
            relativeTo: string;
        };
        bind: object;
    };
}

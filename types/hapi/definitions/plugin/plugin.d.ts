import {Server, ServerRegisterOptions} from "hapi";

export interface PluginsStates {
}

export interface PluginSpecificConfiguration {

}

export interface PluginNameVersion {
    /**
     * (required) the plugin name string. The name is used as a unique key. Published plugins (e.g. published in the npm
     * registry) should use the same name as the name field in their 'package.json' file. Names must be
     * unique within each application.
     */
    name: string;

    /** optional plugin version. The version is only used informatively to enable other plugins to find out the versions loaded. The version should be the same as the one specified in the plugin's 'package.json' file. */
    version?: string;
}

export interface PluginPackage {

    /**
     * Alternatively, the name and version can be included via the pkg property containing the 'package.json' file for the module which already has the name and version included
     */
    pkg: any;
}

/**
 * Plugins provide a way to organize application code by splitting the server logic into smaller components. Each
 * plugin can manipulate the server through the standard server interface, but with the added ability to sandbox
 * certain properties. For example, setting a file path in one plugin doesn't affect the file path set
 * in another plugin.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#plugins)
 *
 * The type T is the type of the plugin options.
 */
export interface PluginBase<T> {

    /**
     * (required) the registration function with the signature async function(server, options) where:
     * * server - the server object with a plugin-specific server.realm.
     * * options - any options passed to the plugin during registration via server.register().
     */
    register: (server: Server, options: T) => Promise<void>;

    /** (optional) if true, allows the plugin to be registered multiple times with the same server. Defaults to false. */
    multiple?: boolean;

    /** (optional) a string or an array of strings indicating a plugin dependency. Same as setting dependencies via server.dependency(). */
    dependencies?: string | string[];

    /** once - (optional) if true, will only register the plugin once per server. If set, overrides the once option passed to server.register(). Defaults to no override. */
    once?: boolean;
}

export type Plugin<T> = PluginBase<T> & (PluginNameVersion | PluginPackage);

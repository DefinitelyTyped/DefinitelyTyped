/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverregistrations)
 */
export interface PluginsListRegistered {
}

/**
 * An object of the currently registered plugins where each key is a registered plugin name and the value is an
 * object containing:
 * * version - the plugin version.
 * * name - the plugin name.
 * * options - (optional) options passed to the plugin during registration.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverregistrations)
 */
export interface PluginRegistered {

    /**
     * the plugin version.
     */
    version: string;

    /**
     * the plugin name.
     */
    name: string;

    /**
     * options used to register the plugin.
     */
    options: object;

}

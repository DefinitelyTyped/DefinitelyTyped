// Type definitions for plugin-error 0.1
// Project: https://github.com/gulpjs/plugin-error
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = PluginError;

declare namespace PluginError {
    interface PluginErrorOpts {
        /**
         * By default the stack will not be shown. Set options.showStack to true if you think the stack is important for your error.
         */
        showStack?: boolean;
        /**
         * Error properties will be included in err.toString(), but may be omitted by including {showProperties: false} in the options
         */
        showProperties?: boolean;
    }

    interface PluginErrorOpts2 extends PluginErrorOpts {
        /**
         * If you pass an error object as the message the stack will be pulled from that, otherwise one will be created.
         */
        message?: string | Error;
    }

    interface PluginErrorOpts3 extends PluginErrorOpts2 {
        /**
         * The name of the plugin
         */
        plugin?: string;
    }
}

declare class PluginError extends Error {
    /**
     * Constructor
     * @param pluginName The name of your plugin
     * @param message If you pass an error object as the message the stack will be pulled from that, otherwise one will be created.
     * @param options Options
     */
    constructor(pluginName: string, message: string | Error, options?: PluginError.PluginErrorOpts);

    /**
     * Constructor
     * @param pluginName The name of your plugin
     * @param options Options, including message
     */
    constructor(pluginName: string, options: PluginError.PluginErrorOpts2);

    /**
     * Constructor
     * @param options Options, including message and plugin name
     */
    constructor(options: PluginError.PluginErrorOpts3);
}

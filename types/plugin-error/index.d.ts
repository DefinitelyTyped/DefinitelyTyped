// Type definitions for plugin-error 0.1
// Project: https://github.com/jonschlinkert/plugin-error
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'plugin-error' {
    namespace PluginError {
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

    class PluginError extends Error {
        /**
         * Constructor
         * @param pluginName
         * @param message If you pass an error object as the message the stack will be pulled from that, otherwise one will be created.
         * @param options
         */
        constructor(pluginName: string, message: string | Error, options?: PluginError.PluginErrorOpts);

        /**
         * Constructor
         * @param pluginName
         * @param options
         */
        constructor(pluginName: string, options: PluginError.PluginErrorOpts2);

        /**
         * Constructor
         * @param options
         */
        constructor(options: PluginError.PluginErrorOpts3);
    }

    export = PluginError;
}

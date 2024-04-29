import "karma";
import jsdom = require("jsdom");

declare module "karma" {
    interface ConfigOptions {
        /**
         * Launcher for jsdom configuration
         */
        jsdomLauncher?: JsdomLauncherOptions | undefined;
    }

    interface JsdomLauncherOptions {
        /**
         * You can pass options directly to jsdom as shown below.
         * See jsdom's own documentation for all supported options.
         */
        jsdom: jsdom.ConstructorOptions;
    }
}

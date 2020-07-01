// Type definitions for cordova_app_version_plugin v0.2.6
// Project: https://www.npmjs.com/package/cordova_app_version_plugin
// Definitions by: Larry Bahr <https://github.com/larrybahr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Licensed under the MIT license.

interface CordovaPlugins {
    /**
     * cordova_app_version_plugin interface
     */
    version: CordovaAppVersionPlugin.CordovaAppVersionPlugin;
}

/**
 * Keep the type global namespace clean by using a module
 */
declare module CordovaAppVersionPlugin {
    interface CordovaAppVersionPlugin {
        /**
         * App version from config.xml's version (e.g. <widget id="my.app.id" version="1.5.0">)
         * @example window.cordova.plugins.version.getAppVersion() // e.g: "1.5.0"
         */
        getAppVersion(): string;
    }
}

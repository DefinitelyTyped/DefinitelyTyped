// Type definitions for cordova-plugin-device-name v1.1.0
// Project: https://www.npmjs.com/package/cordova-plugin-device-name
// Definitions by: Larry Bahr <https://github.com/larrybahr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Licensed under the MIT license.

interface CordovaPlugins {
    /**
     * cordova-plugin-device-name interface
     */
    deviceName: CordovaPluginDeviceName.CordovaPluginDeviceName;
}

/**
 * Keep the type global namespace clean by using a module
 */
declare module CordovaPluginDeviceName {
    interface CordovaPluginDeviceName {
        /**
         * User-friendly name of the device.
         * @example cordova.plugins.deviceName.name // e.g: Larry's Android
         */
        name: string;
    }
}

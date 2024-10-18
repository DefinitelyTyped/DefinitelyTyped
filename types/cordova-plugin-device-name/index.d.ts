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
declare namespace CordovaPluginDeviceName {
    interface CordovaPluginDeviceName {
        /**
         * User-friendly name of the device.
         * @example cordova.plugins.deviceName.name // e.g: Larry's Android
         */
        name: string;
    }
}

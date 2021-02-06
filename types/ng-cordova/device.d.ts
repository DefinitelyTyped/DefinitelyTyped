// Type definitions for ngCordova device plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

declare namespace ngCordova {

    interface IDeviceInfo {
        available:boolean;
        platform:string;
        version:string;
        uuid:string;
        cordova:string;
        model:string;
        manufacturer:string;
        isVirtual:boolean;
        serial:string;
    }

    interface IDeviceService {

       /**
        * Returns the whole device object.
        * @see https://github.com/apache/cordova-plugin-device
        * @returns {Object} The device object.
        */
        getDevice():IDeviceInfo;

       /**
        * Returns the Cordova version.
        * @see https://github.com/apache/cordova-plugin-device#devicecordova
        * @returns {String} The Cordova version.
        */
        getCordova():string;

       /**
        * Returns the name of the device's model or product.
        * @see https://github.com/apache/cordova-plugin-device#devicemodel
        * @returns {String} The name of the device's model or product.
        */
        getModel():string;


       /**
        * @deprecated device.name is deprecated as of version 2.3.0. Use device.model instead.
        * @returns {String}
        */
        getName():string;

       /**
        * Returns the device's operating system name.
        * @see https://github.com/apache/cordova-plugin-device#deviceplatform
        * @returns {String} The device's operating system name.
        */
        getPlatform():string;


       /**
        * Returns the device's Universally Unique Identifier.
        * @see https://github.com/apache/cordova-plugin-device#deviceuuid
        * @returns {String} The device's Universally Unique Identifier
        */
        getUUID():string;

       /**
        * Returns the operating system version.
        * @see https://github.com/apache/cordova-plugin-device#deviceversion
        * @returns {String}
        */
        getVersion():string;

       /**
        * Returns the device manufacturer.
        * @returns {String}
        */
        getManufacturer():string;
    }
}

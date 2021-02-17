import { ErrorCallback, SuccessCallback } from './webapis';
/**
 * Defines constants for product info configuration keys.
 * @since 2.3
 */
export enum ProductInfoConfigKey {
    /**
     * Data service configuration, it can be set as string type with numbers
     * @since 2.3
     */
    CONFIG_KEY_DATA_SERVICE = 0,

    /**
     * Service country, readonly
     * @since 2.3
     */
    CONFIG_KEY_SERVICE_COUNTRY = 1,
}

/**
 * Defines constants for glasses-free 3D support.
 * @since 2.3
 */
export enum ProductInfoNoGlass3dSupport {
    /**
     * Glasses-free 3D is not supported
     * @since 2.3
     */
    NO_GLASS_3D_NOT_SUPPORTED = 0,

    /**
     * @descEng Glasses-free 3D is supported
     * @since 2.3
     */
    NO_GLASS_3D_SUPPORTED = 1,
}

/**
 * Defines constants for infolink server types.
 * @since 2.3
 */
export enum ProductInfoSiServerType {
    /**
     * Operating server
     * @since 2.3
     */
    SI_TYPE_OPERATIING_SERVER = 0,

    /**
     * Development server
     * @since 2.3
     */
    SI_TYPE_DEVELOPMENT_SERVER = 1,

    /**
     * Developing server
     * @since 2.3
     */
    SI_TYPE_DEVELOPING_SERVER = 2,
}

/**
 * Callback method for product info configuration changes.
 * @param key Key of each ProductInfo config
 * @since 2.3
 */
export interface ProductInfoConfigChangeCallback {
    (key: ProductInfoConfigKey): void;
}

/**
 * Defines a WebApi object instance of the Tizen Samsung TV Product API.
 * The webapis.productinfo object enables access to ProductInfo API functionality.
 * @privilegeLevel Public
 * @privilegeName http://developer.samsung.com/privilege/productinfo
 * @since 2.3
 */
export interface ProductInfoManager {
    ProductInfoConfigKey: {
        /**
         * Data service configuration, it can be set as string type with numbers
         * @since 2.3
         */
        CONFIG_KEY_DATA_SERVICE: 0;
        /**
         * Service country, readonly
         * @since 2.3
         */
        CONFIG_KEY_SERVICE_COUNTRY: 1;
    };
    ProductInfoNoGlass3dSupport: {
        /**
         * Glasses-free 3D is not supported
         * @since 2.3
         */
        NO_GLASS_3D_NOT_SUPPORTED: 0;
        /**
         * @descEng Glasses-free 3D is supported
         * @since 2.3
         */
        NO_GLASS_3D_SUPPORTED: 1;
    };
    ProductInfoSiServerType: {
        /**
         * Operating server
         * @since 2.3
         */
        SI_TYPE_OPERATIING_SERVER: 0;
        /**
         * Development server
         * @since 2.3
         */
        SI_TYPE_DEVELOPMENT_SERVER: 1;
        /**
         * Developing server
         * @since 2.3
         */
        SI_TYPE_DEVELOPING_SERVER: 2;
    };
    /**
     * Retrieves the plugin version number.
     * @returns Plugin version
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getVersion: () => string;

    /**
     * Retrieves the firmware information.
     * @returns Firmware version
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getFirmware: () => string;

    /**
     * Retrieves the DUID.
     * @returns DUID
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getDuid: () => string;

    /**
     * Retrieves the model code, such as "15_HAWKP".
     * @returns Model code
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getModelCode: () => string;

    /**
     * Retrieves the model name, such as "UJS9500".
     * @returns Model name
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getModel: () => string;

    /**
     * Retrieves the infolink server type.
     * @returns Infolink server type
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getSmartTVServerType: () => ProductInfoSiServerType;

    /**
     * Retrieves the infolink server version, such as "T-INFOLINK2014-1002".
     * @returns Infolink server version
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getSmartTVServerVersion: () => string;

    /**
     * Retrieves the tuner value from factory information.
     * @returns Tuner value
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException NotSupportedError, SecurityError
     * @since 2.3
     */
    getTunerEpop: () => string;

    /**
     * Checks whether the TV Soccer Mode is enabled.
     * @returns Boolean value:
     * true: Enabled
     * false: Disabled
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException NotSupportedError, SecurityError
     * @since 2.3
     */
    isSoccerModeEnabled: () => boolean;

    /**
     * Checks whether TTV is supported.
     * @returns Boolean value:
     * true: Supported
     * false: Not supported
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    isTtvSupported: () => boolean;

    /**
     * Checks whether UdPanel is supported.
     * @returns Boolean value:
     * true: Supported
     * false: Not supported
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    isUdPanelSupported: () => boolean;

    /**
     * Checks whether 8K panel is supported.
     * @returns Boolean value:
     * true: Supported
     * false: Not supported
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 4.0
     */
    is8KPanelSupported: () => boolean;

    /**
     * Retrieves the full model name, such as UN65JS9500.
     * @returns Model name
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 2.3
     */
    getRealModel: () => string;

    /**
     * Checks whether the product model is WALL.
     * @returns Boolean value:
     * true: Wall Model
     * false: Not Wall Model
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 5.0
     */
    isWallModel: () => boolean;

    /**
     * Checks whether glasses-free 3D is supported.
     * @returns NoGlass3dSupport value
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException NotSupportedError, SecurityError
     * @since 2.3
     */
    getNoGlass3dSupport: () => ProductInfoNoGlass3dSupport;

    /**
     * Retrieves the local set.
     * @returns LocalSet value
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException NotSupportedError, SecurityError
     * @since 2.3
     */
    getLocalSet: () => string;

    /**
     * Retrieves the value for the specified system configuration key, such as service country code.
     * @param key ProductInfoConfigKey
     * @returns System configuration value
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException TypeMismatchError, InvalidValuesError, SecurityError
     * @since 2.3
     */
    getSystemConfig: (key: ProductInfoConfigKey) => string;
    // getSystemConfig: (
    //     key: ProductInfoConfigKey
    // ) => string;

    /**
     * Sets the value for the specified system configuration key.
     * @param key Product info configuration key
     * @param value Value to set
     * @param onsuccess Callback method to invoke when the system configuration key value is successfully set
     * @param onerror Callback method to invoke if an error has occurred
     * @returns void
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException TypeMismatchError, InvalidValuesError, NotSupportedError, SecurityError
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    setSystemConfig: (
        key: ProductInfoConfigKey,
        value: string,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Registers a system configuration change listener.
     * @param key Productinfo configuration key
     * @param listener ProductInfoConfigChangeCallback listener
     * @returns Listener ID
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException TypeMismatchError, InvalidValuesError, SecurityError
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    addSystemConfigChangeListener: (key: ProductInfoConfigKey, listener: ProductInfoConfigChangeCallback) => number;

    /**
     * Unregister a system configuration change listener.
     * @param key Productinfo configuration key
     * @param listenerId ProductInfoConfigChangeCallback ID
     * @returns void
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException TypeMismatchError, InvalidValuesError, SecurityError
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    removeSystemConfigChangeListener: (listenerId: number) => void;

    /**
     * Checks whether the device supports Ultra HD Premium features.
     * @returns Boolean value:
     * true: Supported
     * false: Not supported
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     * @throw WebAPIException SecurityError
     * @since 3.0
     */
    isUHDAModel: () => boolean;

    /**
     * This method check whether display rotator is supported or not.
     * @returns true if display rotator is supported, else false
     * @since 5.5
     */
    isDisplayRotatorSupported: () => boolean;
}

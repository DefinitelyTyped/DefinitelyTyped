import { ErrorCallback } from './tizen';
/**
 * An object containing the various options for fetching the properties requested.
 *
 * The ***highThreshold*** and ***lowThreshold*** values are only applicable to the following `SystemInfoPropertyId`.
 * - `SystemInfoBattery` - level: `from 0 to 1`
 * - `SystemInfoCpu` - load: `from 0 to 1`
 * - `SystemInfoDisplay` - brightness: `from 0 to 1`
 * For other cases, it is ignored.
 */
export type SystemInfoOptions = {
    /**
     * The number of milliseconds beyond which the operation must be interrupted.
     */
    timeout: number;
    /**
     * An attribute to indicate that the `successCallback()` method in the watch
     *
     * operation will be triggered only if the device property is a number and its value is greater than or equal to this number.
     * This attribute has no effect on the `get()` method.
     */
    highThreshold: number;
    /**
     * An attribute to indicate that the `successCallback()` method in the watch operation must be triggered only if the property is a number and its value is lower than or equal to this number.
     *
     * If both `highThreshold` and `lowThreshold` parameters are specified, the `successCallback()` is triggered if and only if the property value is either lower than the value of `lowThreshold` or higher than the value of `highThreshold`.
     * This attribute has no effect on the get method.
     */
    lowThreshold: number;
};

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 *
 * This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
 *
 * Web applications can use this API to access the following system properties:
 * - `ADS` (**Since**: 3.0)
 * - `BATTERY`
 * - `BUILD`
 * - `CAMERA_FLASH` (**Since**: 2.4)
 * - `CELLULAR_NETWORK`
 * - `CPU`
 * - `DEVICE_ORIENTATION`
 * - `DISPLAY`
 * - `ETHERNET_NETWORK` (**Since**: 2.4)
 * - `LOCALE` (**Since**: 2.1)
 * - `MEMORY` (**Since**: 2.3)
 * - `NET_PROXY_NETWORK` (**Since**: 3.0)
 * - `NETWORK`
 * - `PERIPHERAL` (**Since**: 2.1)
 * - `SERVICE_COUNTRY` (**Since**: 5.5)
 * - `SIM`
 * - `STORAGE`
 * - `VIDEOSOURCE` (**Since**: 2.3)
 * - `WIFI_NETWORK`
 *
 * Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, ***CELLULAR_NETWORK*** and ***SIM*** are not available.
 *
 *
 * To check the available `SystemInfoPropertyId`, `getCapability()` method can be used.
 *
 * - ` BATTERY`          - tizen.systeminfo.getCapability(`"http://tizen.org/feature/battery"`)
 * - ` CAMERA_FLASH`     - tizen.systeminfo.getCapability(`"http://tizen.org/feature/camera.back.flash"`)
 * - ` CELLULAR_NETWORK` - tizen.systeminfo.getCapability(`"http://tizen.org/feature/network.telephony"`)
 * - ` DISPLAY`          - tizen.systeminfo.getCapability(`"http://tizen.org/feature/screen"`)
 * - ` ETHERNET_NETWORK` - tizen.systeminfo.getCapability(`"http://tizen.org/feature/network.ethernet"`)
 * - ` NET_PROXY_NETWORK` - tizen.systeminfo.getCapability(`"http://tizen.org/feature/network.net_proxy"`)
 * - ` SIM`              - tizen.systeminfo.getCapability(`"http://tizen.org/feature/network.telephony"`)
 * - ` WIFI_NETWORK`     - tizen.systeminfo.getCapability(`"http://tizen.org/feature/network.wifi"`)
 *
 * For more information on the System Information features, see [System Information Guide](https://docs.tizen.org/application/web/guides/device/system-information).
 * @since 1.0
 *
 * @defAPIFeature http://tizen.org/feature/battery
 * To guarantee the running of the application (e.g. track the battery usage) on a device which has a battery, declare the following feature requirements in the config file:
 * @defAPIFeature http://tizen.org/feature/camera.back.flash
 * To guarantee the running of the application on a device which has camera back flash and control it, declare the following feature requirements in the config file:
 * @defAPIFeature http://tizen.org/feature/network.ethernet
 * To guarantee the running of the application on a device which supports Ethernet network feature, declare the following feature requirements in the config file:
 * @defAPIFeature http://tizen.org/feature/network.net_proxy
 * To guarantee the running of the application on a device which supports network proxy for internet connection, declare the following feature requirements in the config file:
 * @defAPIFeature http://tizen.org/feature/network.telephony
 * To guarantee the running of the application on a device which supports telephony feature, declare the following feature requirements in the config file:
 * @defAPIFeature http://tizen.org/feature/network.wifi
 * To guarantee the running of the application on a device which supports Wi-Fi, declare the following feature requirements in the config file:
 */
export interface SystemInfoManager {
    /**
     * Gets the total amount of system memory (in bytes).
     *
     * @since 2.3
     *
     * @returns Total system memory.
     * @throw WebAPIException `UnknownError`.
     */
    getTotalMemory(): number;

    /**
     * Gets the amount of memory that is not in use (in bytes).
     *
     * @since 2.3
     *
     * @returns Not used memory in bytes.
     * @throw WebAPIException `UnknownError`.
     */
    getAvailableMemory(): number;

    /**
     * Gets the capabilities of the device.
     * The function must synchronously acquire the capabilities of the device.
     * @note `deprecated` 2.3 Deprecated since 2.3. Instead, use `getCapability()`.
     *
     * @since 2.0
     * @returns Capabilities of the device.
     * @throw WebAPIException `UnknownError`
     */
    getCapabilities(): SystemInfoDeviceCapability;

    /**
     * Gets a device capability related to a given key.
     *
     * See the available <device capability keys>.
     * The additional keys for the custom device capability are specified by OEMs and vendors.
     *
     * @version 2.3
     *
     * @param key The device capability key for the device or additional custom device capability key specified by OEM.
     * @returns The value of the specified device capability.
     * @throw WebAPIException `UnknownError`
     */
    getCapability(key: string): any;

    /**
     * Gets the number of system property information provided for a particular system property.
     *
     * That is the length of array retrieved by the `getPropertyValueArray()` method for the given property.
     *
     * @since 2.3
     *
     * @param property The name of the system property.
     * @returns The number of property values for the given property. If the property is not supported, 0 is returned.
     * @throw WebAPIException with error type TypeMismatchError, if the input parameter is not compatible with the expected type.
     *
     */
    getCount(
        property:
            | SystemInfoPropertyId
            | 'BATTERY'
            | 'CPU'
            | 'STORAGE'
            | 'DISPLAY'
            | 'DEVICE_ORIENTATION'
            | 'BUILD'
            | 'LOCALE'
            | 'NETWORK'
            | 'WIFI_NETWORK'
            | 'ETHERNET_NETWORK'
            | 'CELLULAR_NETWORK'
            | 'NET_PROXY_NETWORK'
            | 'SIM'
            | 'PERIPHERAL'
            | 'MEMORY'
            | 'VIDEOSOURCE'
            | 'CAMERA_FLASH'
            | 'ADS'
            | 'SERVICE_COUNTRY'
            | 'SOURCE_INFO'
            | 'PANEL',
    ): number;

    /**
     * Gets the current value of a specified system property.
     *
     * The function must asynchronously acquire the current value of the requested property. If it is successful,
     * the successCallback must be invoked with an object containing the information provided by the property.
     *
     * The `ErrorCallback` function can be launched with these error types:
     * - `NotSupportedError` - If the given ***property*** is not supported (since Tizen 2.3).
     *
     * @remark If the given ***property*** is not supported, `NotSupportedError` would be passed through a `ErrorCallback()` since Tizen 2.3.
     * @remark If system provides more than one value for the system property, the primary (first) system property is returned through SystemInfoSuccessCallback.
     *
     * @param property The name of the property to retrieve.
     * @condparamprivilege CELLULAR_NETWORK http://tizen.org/privilege/telephony public 2.4
     * @param successCallback Callback function called when the properties are successfully retrieved.
     * @param errorCallback Callback function called when an error occurs while retrieving the properties.
     *
     * @throw WebAPIException `SecurityError`,`TypeMismatchError`,`UnknownError`
     *
     */
    getPropertyValue(
        property:
            | SystemInfoPropertyId
            | 'BATTERY'
            | 'CPU'
            | 'STORAGE'
            | 'DISPLAY'
            | 'DEVICE_ORIENTATION'
            | 'BUILD'
            | 'LOCALE'
            | 'NETWORK'
            | 'WIFI_NETWORK'
            | 'ETHERNET_NETWORK'
            | 'CELLULAR_NETWORK'
            | 'NET_PROXY_NETWORK'
            | 'SIM'
            | 'PERIPHERAL'
            | 'MEMORY'
            | 'VIDEOSOURCE'
            | 'CAMERA_FLASH'
            | 'ADS'
            | 'SERVICE_COUNTRY'
            | 'SOURCE_INFO'
            | 'PANEL',
        successCallback: SystemInfoPropertySuccessCallback,
        errorCallback?: ErrorCallback,
    ): void;

    /**
     * Gets the current values of a specified system property.
     * It is recommended that you check if a device provides one or more than one value for a particular system property via `getCount()`
     * If one particular system property is provided on a device, it returns an array containing one SystemInfoProperty object through `SystemInfoPropertyArraySuccessCallback` method.
     * If more than one particular system property is provided, multiple SystemInfoProperty objects are returned.
     * The `ErrorCallback` function can be launched with these error types:
     * - `NotSupportedError` : If the given ***property*** is not supported.
     *
     * @since 2.3
     *
     * @remark See `getCount()`
     *
     * @param property The name of the property to retrieve.
     * @condparamprivilege CELLULAR_NETWORK http://tizen.org/privilege/telephony public 2.4
     * @param successCallback Callback function called when the properties are successfully retrieved.
     * @param errorCallback Callback function called when an error occurs while retrieving the properties.
     * @throw WebAPIException `SecurityError`, `TypeMismatchError`.
     */
    getPropertyValueArray(
        property:
            | SystemInfoPropertyId
            | 'BATTERY'
            | 'CPU'
            | 'STORAGE'
            | 'DISPLAY'
            | 'DEVICE_ORIENTATION'
            | 'BUILD'
            | 'LOCALE'
            | 'NETWORK'
            | 'WIFI_NETWORK'
            | 'ETHERNET_NETWORK'
            | 'CELLULAR_NETWORK'
            | 'NET_PROXY_NETWORK'
            | 'SIM'
            | 'PERIPHERAL'
            | 'MEMORY'
            | 'VIDEOSOURCE'
            | 'CAMERA_FLASH'
            | 'ADS'
            | 'SERVICE_COUNTRY'
            | 'SOURCE_INFO'
            | 'PANEL',
        successCallback: SystemInfoPropertyArraySuccessCallback,
        errorCallback?: ErrorCallback,
    ): void;

    /**
     * Adds a listener to allow tracking changes in one or more system properties.
     *
     * When called, it immediately returns and then asynchronously starts a watch process defined by the following steps:
     *
     * 1. Register the successCallback to receive system events that the status of the requested properties may have changed.
     * 2. When a system event is successfully received, invoke the associated successCallback with an object containing the property values.
     * 3. Repeat step 2 until removePropertyValueChangeListener function is called.
     *
     * There are device properties which are never changed (e.g. "BUILD") and properties which are not changed on some devices
     * (e.g. "DEVICE_ORIENTATION" in Tizen TV device). The <a href="#SystemInfo::addPropertyValueChangeListener">addPropertyValueChangeListener()</a> method accepts
     * any identifier of these properties, but the listener added for them will not be invoked.
     *
     * The `errorCallback` can be launched with any of these error types:
     *   - NotSupportedError - If the given ***property*** is not supported (since Tizen 2.3).
     *
     *   For example, monitoring ***CELLULAR_NETWORK*** changes is not supported on a device which does not support the telephony feature.
     *
     * @remark The `errorCallback()` is newly added as an optional parameter since Tizen 2.3.
     *
     * @param property The name of the property to retrieve.
     * @condparamprivilege CELLULAR_NETWORK http://tizen.org/privilege/telephony public 2.4
     * @param successCallback Callback function called when the properties are successfully retrieved.
     * @param options An object containing the various options for fetching the properties requested. See <a href="./systeminfo.html#::SystemInfo::SystemInfoOptions">details</a>.
     * @param errorCallback Callback function called when an error occurs.
     *
     * @returns An identifier used to clear the watch subscription.
     *
     * @throw WebAPIException `InvalidValuesError`,`SecurityError`,`TypeMismatchError`,`UnknownError`.
     */
    addPropertyValueChangeListener(
        property:
            | SystemInfoPropertyId
            | 'BATTERY'
            | 'CPU'
            | 'STORAGE'
            | 'DISPLAY'
            | 'DEVICE_ORIENTATION'
            | 'BUILD'
            | 'LOCALE'
            | 'NETWORK'
            | 'WIFI_NETWORK'
            | 'ETHERNET_NETWORK'
            | 'CELLULAR_NETWORK'
            | 'NET_PROXY_NETWORK'
            | 'SIM'
            | 'PERIPHERAL'
            | 'MEMORY'
            | 'VIDEOSOURCE'
            | 'CAMERA_FLASH'
            | 'ADS'
            | 'SERVICE_COUNTRY'
            | 'SOURCE_INFO'
            | 'PANEL',
        successCallback: SystemInfoPropertySuccessCallback,
        options?: SystemInfoOptions,
        errorCallback?: ErrorCallback,
    ): number;

    /**
     * Adds a listener to allow tracking of changes in one or more values of a system property.
     *
     * The `ErrorCallback` function can be launched with these error types:
     *   - `NotSupportedError` - If the given `property` is not supported (since Tizen 2.3).
     *   For example, monitoring `CELLULAR_NETWORK` changes is not supported on a device which does not support the telephony feature.
     *
     * There are device properties which never change (for example "BUILD") and properties which do not change on the current platform
     * (for example "DEVICE_ORIENTATION" for some platforms). The `addPropertyValueChangeListener()` method accepts
     * any identifier of these properties, but the listener added for them will not be invoked.
     *
     * @since 2.3
     *
     *
     * @param property The name of the property to retrieve.
     * @condparamprivilege CELLULAR_NETWORK http://tizen.org/privilege/telephony public 2.4
     * @param successCallback Callback function called when the properties are successfully retrieved.
     * @param options An object containing the various options for fetching the properties requested.
     * @param errorCallback Callback function called when an error occurs.
     *
     * @returns An identifier used to clear the watch subscription.
     * @throw WebAPIException `InvalidValuesError`, `SecurityError`, `TypeMismatchError`, `UnknownError`.
     */
    addPropertyValueArrayChangeListener(
        property:
            | SystemInfoPropertyId
            | 'BATTERY'
            | 'CPU'
            | 'STORAGE'
            | 'DISPLAY'
            | 'DEVICE_ORIENTATION'
            | 'BUILD'
            | 'LOCALE'
            | 'NETWORK'
            | 'WIFI_NETWORK'
            | 'ETHERNET_NETWORK'
            | 'CELLULAR_NETWORK'
            | 'NET_PROXY_NETWORK'
            | 'SIM'
            | 'PERIPHERAL'
            | 'MEMORY'
            | 'VIDEOSOURCE'
            | 'CAMERA_FLASH'
            | 'ADS'
            | 'SERVICE_COUNTRY'
            | 'SOURCE_INFO'
            | 'PANEL',
        successCallback: SystemInfoPropertyArraySuccessCallback,
        options?: SystemInfoOptions,
        errorCallback?: ErrorCallback,
    ): number;

    /**
     * Unsubscribes notifications for property changes.
     *
     * If a valid listenerId argument is passed that corresponds to an existing subscription,
     * then the watch process must immediately terminate and no further
     * callback is invoked.
     *
     *
     * @param listenerId An identifier of the subscription returned by the `addPropertyValueChangeListener()` or
     * `addPropertyValueArrayChangeListener()` method.
     *
     * @throw WebAPIException `InvalidValuesError`, `TypeMismatchError`, `UnknownError`.
     */
    removePropertyValueChangeListener(listenerId: number): void;
}

/**
 * SystemInfoDeviceCapability object.
 *
 * @note `deprecated` 2.3 Deprecated since 2.3. Instead, use `getCapability()` to query device capabilities.
 *
 * @since 2.0
 */
export interface SystemInfoDeviceCapability {
    /**
     * Indicates whether the device supports Bluetooth.
     */
    readonly bluetooth: boolean;
    /**
     * Indicates whether the device supports NFC.
     */
    readonly nfc: boolean;
    /**
     * Indicates whether the device supports NFC reserved push.
     *
     * @since 2.1
     */
    readonly nfcReservedPush: boolean;
    /**
     * The number of point in Multi-point touch.
     */
    readonly multiTouchCount: number;
    /**
     * Indicates whether the device supports the built-in keyboard.
     */
    readonly inputKeyboard: boolean;
    /**
     * Indicates whether the device supports the built-in keyboard layout.
     *
     * @since 2.1
     */
    readonly inputKeyboardLayout: boolean;
    /**
     * Indicates whether the device supports Wi-Fi.
     */
    readonly wifi: boolean;
    /**
     * Indicates whether the device supports Wi-Fi Direct.
     */
    readonly wifiDirect: boolean;
    /**
     * Indicates whether the device supports OpenGL-ES.
     *
     * @since 2.1
     */
    readonly opengles: boolean;
    /**
     * The device 3DC texture format for OpenGL-ES.
     *
     * One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
     *
     * @since 2.1
     */
    readonly openglestextureFormat: string;
    /**
     * Indicates whether the device supports OpenGL-ES version 1.1.
     */
    readonly openglesVersion1_1: boolean;
    /**
     * Indicates whether the device supports OpenGL-ES version 2.0.
     */
    readonly openglesVersion2_0: boolean;
    /**
     * Indicates whether the device supports FM radio.
     */
    readonly fmRadio: boolean;
    /**
     * The version of the platform in the `[Major].[Minor].[Patch Version]` format.
     *
     * For example, ***1.0.0*** represents a platform version where the major version is ***1*** and the minor and build versions are ***0***.
     * `[Patch Version]` is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
     * Manufacturers may add more parts (dot followed by number or text) after the preserved format.
     * If a version is not versioned as [Major].[Minor].[Patch Version], the unused digits must be taken as ***0***.
     * So for example, version ***2.3*** is ***2.3.0*** and manufacturers must add parts after ***2.3.0*** such as ***2.3.0.1***.
     *
     *
     * @privilegelevel public
     * @privilege http://tizen.org/privilege/system
     *
     * @throw WebAPIException `SecurityError`.
     */
    readonly platformVersion: string;
    /**
     * The version of the Web API in the `[Major].[Minor].[Patch Version]` format.
     *
     * For example, ***1.0.0*** represents a Web API version where the major version is ***1*** and the minor and build versions are ***0***.
     * `[Patch Version]` is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
     * Manufacturers may add more parts (dot followed by number or text) after the preserved format.
     * If a version is not versioned as [Major].[Minor].[Patch Version], the unused digits must be taken as ***0***.
     * So for example, version ***2.3*** is ***2.3.0*** and manufacturers must add parts after ***2.3.0*** such as ***2.3.0.1***.
     *
     * @since 2.1
     *
     * @privilegelevel public
     * @privilege http://tizen.org/privilege/system
     *
     * @throw WebAPIException `SecurityError`.
     */
    readonly webApiVersion: string;
    /**
     * The version of the Native API in the `[Major].[Minor].[Patch Version]` format.
     *
     * For example, ***1.0.0*** represents a Native API version where the major version is ***1*** and the minor and build versions are ***0***.
     * `[Patch Version]` is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
     * Manufacturers may add more parts (dot followed by number or text) after the preserved format.
     * If a version is not versioned as [Major].[Minor].[Patch Version], the unused digits must be taken as ***0***.
     * So for example, version ***2.3*** is ***2.3.0*** and manufacturers must add parts after ***2.3.0*** such as ***2.3.0.1***.
     *
     * @since 2.1
     *
     * @privilegelevel public
     * @privilege http://tizen.org/privilege/system
     *
     * @throw WebAPIException `SecurityError`.
     */
    readonly nativeApiVersion: string;
    /**
     * The name of the platform.
     */
    readonly platformName: string;
    /**
     * Indicates whether the device supports camera.
     *
     * @since 2.1
     */
    readonly camera: boolean;
    /**
     * Indicates whether the device supports front camera.
     */
    readonly cameraFront: boolean;
    /**
     * Indicates whether the device supports flash on the front camera.
     */
    readonly cameraFrontFlash: boolean;
    /**
     * Indicates whether the device supports back-side camera.
     */
    readonly cameraBack: boolean;
    /**
     * Indicates whether the device supports flash on the back-side camera.
     */
    readonly cameraBackFlash: boolean;
    /**
     * Indicates whether the device supports GPS or not.
     */
    readonly location: boolean;
    /**
     * Indicates whether the device supports GPS based location feature.
     */
    readonly locationGps: boolean;
    /**
     * Indicates whether the device supports WPS based location feature.
     */
    readonly locationWps: boolean;
    /**
     * Indicates whether the device supports microphone.
     */
    readonly microphone: boolean;
    /**
     * Indicates whether the device supports USB host.
     */
    readonly usbHost: boolean;
    /**
     * Indicates whether the device supports USB accessory.
     */
    readonly usbAccessory: boolean;
    /**
     * Indicates whether the device supports RCA output.
     */
    readonly screenOutputRca: boolean;
    /**
     * Indicates whether the device supports HDMI output.
     */
    readonly screenOutputHdmi: boolean;
    /**
     * The device CPU architecture.
     *
     * The possible values for this attribute are: ***armv6***, ***armv7***, ***x86***.
     */
    readonly platformCoreCpuArch: string;
    /**
     * The device FPU architecture.
     *
     * The possible values for this attribute are: ***vfpv3***, ***sse2***, ***sse3*** and ***ssse3***.
     */
    readonly platformCoreFpuArch: string;
    /**
     * Indicates whether the device supports VOIP.
     */
    readonly sipVoip: boolean;
    /**
     * Indicates the Tizen ID, not device's unique ID since Tizen 2.3.
     *
     *
     * @remark Tizen ID is a randomly generated value based on the model name.
     *
     *         It is recommended to use tizen.systeminfo.getCapability("http://tizen.org/system/tizenid") since Tizen 2.3 instead.
     */
    readonly duid: string;
    /**
     * Indicates whether the device supports speech recognition.
     */
    readonly speechRecognition: boolean;
    /**
     * Indicates whether the device supports speech synthesis.
     *
     * @since 2.1
     */
    readonly speechSynthesis: boolean;
    /**
     * Indicates whether the device supports accelerometer.
     */
    readonly accelerometer: boolean;
    /**
     * Indicates whether the device supports accelerometer wake-up feature.
     *
     * @since 2.1
     */
    readonly accelerometerWakeup: boolean;
    /**
     * Indicates whether the device supports barometer.
     */
    readonly barometer: boolean;
    /**
     * Indicates whether the device supports barometer wake-up feature.
     *
     * @since 2.1
     */
    readonly barometerWakeup: boolean;
    /**
     * Indicates whether the device supports gyroscope.
     */
    readonly gyroscope: boolean;
    /**
     * Indicates whether the device supports gyroscope wake-up feature.
     *
     * @since 2.1
     */
    readonly gyroscopeWakeup: boolean;
    /**
     * Indicates whether the device supports magnetometer.
     */
    readonly magnetometer: boolean;
    /**
     * Indicates whether the device supports magnetometer wake-up feature.
     *
     * @since 2.1
     */
    readonly magnetometerWakeup: boolean;
    /**
     * Indicates whether the device supports photometer.
     *
     * @since 2.1
     */
    readonly photometer: boolean;
    /**
     * Indicates whether the device supports photometer wake-up feature.
     *
     * @since 2.1
     */
    readonly photometerWakeup: boolean;
    /**
     * Indicates whether the device supports proximity.
     */
    readonly proximity: boolean;
    /**
     * Indicates whether the device supports proximity wake-up feature.
     *
     * @since 2.1
     */
    readonly proximityWakeup: boolean;
    /**
     * Indicates whether the device supports tiltmeter.
     *
     * @since 2.1
     */
    readonly tiltmeter: boolean;
    /**
     * Indicates whether the device supports tiltmeter wake-up feature.
     *
     * @since 2.1
     */
    readonly tiltmeterWakeup: boolean;
    /**
     * Indicates whether the device supports data encryption.
     *
     * @since 2.1
     */
    readonly dataEncryption: boolean;
    /**
     * Indicates whether the device supports hardware acceleration for 2D/3D graphics.
     *
     * @since 2.1
     */
    readonly graphicsAcceleration: boolean;
    /**
     * Indicates whether the device supports push service.
     *
     * @since 2.1
     */
    readonly push: boolean;
    /**
     * Indicates whether the device supports the telephony feature.
     *
     * @since 2.1
     */
    readonly telephony: boolean;
    /**
     * Indicates whether the device supports the MMS feature.
     *
     * @since 2.1
     */
    readonly telephonyMms: boolean;
    /**
     * Indicates whether the device supports the SMS feature.
     *
     * @since 2.1
     */
    readonly telephonySms: boolean;
    /**
     * Indicates whether the device supports the screen normal size.
     *
     * @since 2.1
     */
    readonly screenSizeNormal: boolean;
    /**
     * Indicates whether the device supports the 480 * 800 screen size.
     *
     * @since 2.1
     */
    readonly screenSize480_800: boolean;
    /**
     * Indicates whether the device supports the 720 * 1280 screen size.
     *
     * @since 2.1
     */
    readonly screenSize720_1280: boolean;
    /**
     * Indicates whether the device supports auto rotation.
     *
     * @since 2.1
     */
    readonly autoRotation: boolean;
    /**
     * Indicates whether the device supports shell app widget (dynamic box).
     *
     * @since 2.1
     */
    readonly shellAppWidget: boolean;
    /**
     * Indicates whether the device supports vision image recognition.
     *
     * @since 2.1
     */
    readonly visionImageRecognition: boolean;
    /**
     * Indicates whether the device supports vision QR code generation.
     *
     * @since 2.1
     */
    readonly visionQrcodeGeneration: boolean;
    /**
     * Indicates whether the device supports vision QR code recognition.
     *
     * @since 2.1
     */
    readonly visionQrcodeRecognition: boolean;
    /**
     * Indicates whether the device supports vision face recognition.
     *
     * @since 2.1
     */
    readonly visionFaceRecognition: boolean;
    /**
     * Indicates whether the device supports secure element.
     *
     * @since 2.1
     */
    readonly secureElement: boolean;
    /**
     * Indicates whether the device supports native OSP API.
     *
     * @since 2.1
     */
    readonly nativeOspCompatible: boolean;
    /**
     * Represents the profile of the current device.
     *
     * @since 2.2
     */
    readonly profile: SystemInfoProfile | 'MOBILE_FULL' | 'MOBILE_WEB' | 'MOBILE' | 'WEARABLE' | 'TV';
}
/**
 * The device property identifier.
 *
 * @remark ***CAMERA_FLASH*** is supported since Tizen 2.4
 * @remark ***ETHERNET_NETWORK*** is supported since Tizen 2.4
 * @remark ***LOCALE*** and ***PERIPHERAL*** are supported since Tizen 2.1
 * @remark ***MEMORY*** is supported since Tizen 2.3
 * @remark ***NET_PROXY_NETWORK*** is supported since Tizen 3.0
 * @remark ***VIDEOSOURCE*** is supported since Tizen 2.3
 * @remark ***ADS*** is supported since Tizen 3.0
 * @remark ***SERVICE_COUNTRY***, ***SOURCE_INFO*** and ***PANEL*** are supported since Tizen 5.5
 */
export enum SystemInfoPropertyId {
    BATTERY = 'BATTERY',
    CPU = 'CPU',
    STORAGE = 'STORAGE',
    DISPLAY = 'DISPLAY',
    DEVICE_ORIENTATION = 'DEVICE_ORIENTATION',
    BUILD = 'BUILD',
    LOCALE = 'LOCALE',
    NETWORK = 'NETWORK',
    WIFI_NETWORK = 'WIFI_NETWORK',
    ETHERNET_NETWORK = 'ETHERNET_NETWORK',
    CELLULAR_NETWORK = 'CELLULAR_NETWORK',
    NET_PROXY_NETWORK = 'NET_PROXY_NETWORK',
    SIM = 'SIM',
    PERIPHERAL = 'PERIPHERAL',
    MEMORY = 'MEMORY',
    VIDEOSOURCE = 'VIDEOSOURCE',
    CAMERA_FLASH = 'CAMERA_FLASH',
    ADS = 'ADS',
    SERVICE_COUNTRY = 'SERVICE_COUNTRY',
    SOURCE_INFO = 'SOURCE_INFO',
    PANEL = 'PANEL',
}

/**
 * Data Network Type.
 * @since 2.0
 * @remark ***NET_PROXY*** is supported since Tizen 3.0
 */
export enum SystemInfoNetworkType {
    NONE = 'NONE',
    '2G' = '2G',
    '2.5G' = '2.5G',
    '3G' = '3G',
    '4G' = '4G',
    WIFI = 'WIFI',
    ETHERNET = 'ETHERNET',
    NET_PROXY = 'NET_PROXY',
    UNKNOWN = 'UNKNOWN',
}

/**
 * Wi-Fi Security Mode.
 *
 * - `NONE` - Open security type
 * - `WEP` - Wired Equivalent Privacy
 * - `WPA_PSK` - Wi-Fi Protected Access with Pre-Shared Key (PSK)
 * - `WPA2_PSK` - Wi-Fi Protected Access version 2 with Pre-Shared Key (PSK)
 * - `EAP` - Extensible Authentication Protocol
 *
 * @since 2.4
 */
export enum SystemInfoWifiSecurityMode {
    NONE = 'NONE',
    WEP = 'WEP',
    WPA_PSK = 'WPA_PSK',
    WPA2_PSK = 'WPA2_PSK',
    EAP = 'EAP',
}

/**
 * Wi-Fi Encryption Type.
 * - `NONE` - No encryption
 * - `WEP` - Wired Equivalent Privacy encryption
 * - `TKIP` - Temporal Key Integrity Protocol encryption
 * - `AES` - Advanced Encryption Standard
 * - `TKIP_AES_MIXED` - TKIP and AES are both supported
 *
 * @since 2.4
 */
export enum SystemInfoWifiEncryptionType {
    NONE = 'NONE',
    WEP = 'WEP',
    TKIP = 'TKIP',
    AES = 'AES',
    TKIP_AES_MIXED = 'TKIP_AES_MIXED',
}

/**
 * IP configuration types.
 *
 * - `NONE` - Default value when network connection is not available
 * - `STATIC` - Manual IP configuration
 * - `DYNAMIC` - Configured IP using DHCP client
 * - `AUTO` - Configured IP from Auto IP pool (169.254/16). Later with DHCP client, if available
 * - `FIXED` - IP cannot be modified
 *
 * @since 2.4
 */
export enum SystemInfoNetworkIpMode {
    NONE = 'NONE',
    STATIC = 'STATIC',
    DYNAMIC = 'DYNAMIC',
    AUTO = 'AUTO',
    FIXED = 'FIXED',
}

/**
 * Device profile.
 *
 * @since 2.2
 *
 * @remark ***MOBILE***, ***WEARABLE*** and ***TV*** are supported since Tizen 2.3.
 * @note `deprecatedenum` 2.3 MOBILE_WEB
 * @note `deprecatedenum` 2.3 MOBILE_FULL MOBILE_FULL and MOBILE_WEB are deprecated since 2.3. Beginning with Tizen 2.3, MOBILE is returned instead.
 */
export enum SystemInfoProfile {
    MOBILE_FULL = 'MOBILE_FULL',
    MOBILE_WEB = 'MOBILE_WEB',
    MOBILE = 'MOBILE',
    WEARABLE = 'WEARABLE',
    TV = 'TV',
}

/**
 * The low memory state of a device.
 * - `NORMAL` - indicating the remaining memory is sufficient for an application to run
 * - `WARNING` - indicating the remaining memory is insufficient. Low memory warnings may happen differently according to the system
 * @since 2.3
 */
export enum SystemInfoLowMemoryStatus {
    NORMAL = 'NORMAL',
    WARNING = 'WARNING',
}

/**
 * Device Orientation Status.
 * @since 2.0
 *
 * SystemInfo reports the orientation of the device depending on the type of the device and physical position of the device relative to vertical direction.
 * A "phone type device" is a device for which the portrait position is the natural orientation.
 * A "tab type device" is a device for which the landscape position is basic working orientation.
 *
 * | SystemInfoDeviceOrientationStatus  | Phone type device | Tablet type device |
 * | --- | --- | --- |
 * | PORTRAIT_PRIMARY | Natural position | Rotated 90 degrees right (clockwise) |
 * | PORTRAIT_SECONDARY | Upside down, in other words rotated 180 degrees | Rotated 90 degrees left (anticlockwise) |
 * | LANDSCAPE_PRIMARY | Rotated 90 degrees left (anticlockwise) | Natural position |
 * | LANDSCAPE_SECONDARY | Rotated 90 degrees right (clockwise) | Upside down, in other words rotated 180 degrees |
 */
export enum SystemInfoDeviceOrientationStatus {
    PORTRAIT_PRIMARY = 'PORTRAIT_PRIMARY',
    PORTRAIT_SECONDARY = 'PORTRAIT_SECONDARY',
    LANDSCAPE_PRIMARY = 'LANDSCAPE_PRIMARY',
    LANDSCAPE_SECONDARY = 'LANDSCAPE_SECONDARY',
}
/**
 * An enumerator to indicate the type of video source.
 *
 * - `TV` - The input source from TV
 * - `AV` - The input source from Component video, three cables, each with RCA plugs (3 or more channels
 * - `SVIDEO` - S-Video(Super-Video) and Y/C (2 channels)
 * - `COMP` - The input source from Composite video (1 channel)
 * - `PC` - The input source from personal computer (15-pin VGA connector)
 * - `HDMI` - The input source from HDMI(High-Definition Multimedia Interface)
 * - `SCART` - The input source from SCART(21-pin connector)
 * - `DVI` - The input source from DVI(Digital Visual Interface)
 * - `MEDIA` - The input source from media
 */
export enum SystemInfoVideoSourceType {
    TV = 'TV',
    AV = 'AV',
    SVIDEO = 'SVIDEO',
    COMP = 'COMP',
    PC = 'PC',
    HDMI = 'HDMI',
    SCART = 'SCART',
    DVI = 'DVI',
    MEDIA = 'MEDIA',
}

/**
 * This property reflects each input source the current device has.
 *
 * If there are 2 HDMI inputs on a device, two `SystemInfoVideoSourceInfo` objects must be retrieved through `SystemInfoVideoSource`
 *
 * {type=HDMI, number=1, signal=null}, {type=HDMI, number=2, signal=null}
 */

export interface SystemInfoVideoSourceInfo {
    /**
     * Represents the type of the video input source.
     */
    readonly type:
        | SystemInfoVideoSourceType
        | 'TV'
        | 'AV'
        | 'SVIDEO'
        | 'COMP'
        | 'PC'
        | 'HDMI'
        | 'SCART'
        | 'DVI'
        | 'MEDIA';
    /**
     * Represents the input number of the input source.
     *
     * If the source is "HDMI 2", the `number` is 2.
     */
    readonly number: number;
    /**
     * Represents if there is a signal provided on the source.
     *
     * The `signal` attribute can be ***null***. The ***null*** value means that information about signal could not be retrieved at the time of returning this object.
     * If the value is ***true***, it means that there is signal provided. The value set to ***false*** means, that there is no signal.
     * By default getPropertyValue functions does not support this member, and will return object with `signal` value set to ***null***, it is supported only by TVWindow module. To get data about signal use `tizen.tvwindow.getSource()` or `tizen.tvwindow.setSource()`.
     */
    readonly signal?: boolean;
}

/**
 * This property reflects the video sources the device has.
 *
 * @since 2.3
 */
export interface SystemInfoVideoSource extends SystemInfoProperty {
    /**
     * Represents a list of video sources that a device is connected with.
     */
    readonly connected: SystemInfoVideoSourceInfo[];
    /**
     * Represents a list of video sources that a device is not connected with.
     */
    readonly disconnected: SystemInfoVideoSourceInfo[];
}

/**
 * Systeminfo specific success callback.
 *
 * This callback interface specifies a success callback with SystemInfoProperty as input argument.
 * It is used in asynchronous
 * operations, such as `getPropertyValue()` or `addPropertyValueChangeListener()`.
 */
export interface SystemInfoPropertySuccessCallback {
    /**
     * Function invoked when the asynchronous call completes successfully.
     *
     *
     * @param property The property returned from a successful asynchronous operation.
     */
    (property: SystemInfoPropertyType): void;
}

export interface SystemInfoPropertyArraySuccessCallback {
    /**
     * Function invoked when the asynchronous call completes successfully.
     *
     *
     * @param properties The array of SystemInfoProperty objects returned from a successful asynchronous operation.
     */
    (properties: SystemInfoPropertyType[]): void;
}

export type SystemInfoPropertyType = SystemInfoBattery &
    SystemInfoCpu &
    SystemInfoStorage &
    SystemInfoStorageUnit &
    SystemInfoDisplay &
    SystemInfoPanel &
    SystemInfoDeviceOrientation &
    SystemInfoBuild &
    SystemInfoLocale &
    SystemInfoNetwork &
    SystemInfoWifiNetwork &
    SystemInfoEthernetNetwork &
    SystemInfoCellularNetwork &
    SystemInfoNetProxyNetwork &
    SystemInfoPeripheral &
    SystemInfoMemory &
    SystemInfoVideoSource;

/**
 * This is a common abstract interface used by different types of system information objects.
 */
export interface SystemInfoProperty {}

/**
 * This property reflects the general state of the system's battery.
 *
 * **Listener notice**:
 *
 * Change listener registered on ***BATTERY*** property is triggered on
 * `level` and `isCharging` properties change.
 */
export interface SystemInfoBattery extends SystemInfoProperty {
    /**
     * An attribute to specify the remaining level of an internal battery, scaled from ***0*** to ***1***:
     * - ***0 ***indicates that the battery level is the lowest and the system is about to enter shutdown mode.
     * - ***1 ***indicates that the system's charge is maximum.
     * Any threshold parameter used in a watch operation to monitor this property applies to this attribute.
     */
    readonly level: number;
    /**
     * Indicates whether the battery source is currently charging.
     */
    readonly isCharging: boolean;
    /**
     * Estimated time to discharge, in minutes.
     *
     * This parameter is mutually exclusive with parameter `timeToFullCharge`.
     * An attribute `timeToDischarge` becomes ***null*** when device is plugged.
     *
     * This attribute may equal to ***-1*** indicating there is no enough collected data, which means
     * that the device is still learning device's power usage characteristics and cannot predict the time yet.
     * This process may take up to few days.
     *
     * @since 4.0
     */
    readonly timeToDischarge?: number;
    /**
     * Estimated time to finish charging battery, in minutes.
     *
     * This parameter is mutually exclusive with parameter `timeToDischarge`.
     * An attribute `timeToFullCharge` becomes ***null*** when device is unplugged.
     *
     * This attribute may equal to ***-1*** indicating there is no enough collected data, which means
     * that the device is still learning device's power usage characteristics and cannot predict the time yet.
     * This process may take up to few days.
     *
     * @since 4.0
     */
    readonly timeToFullCharge?: number;
}
/**
 * This property reflects the state of the CPUs available to this system.
 */
export interface SystemInfoCpu extends SystemInfoProperty {
    /**
     *  An attribute to indicate the current CPU load, as a number between ***0.0 ***and ***1.0***, representing the minimum and maximum values allowed on this system.
     *
     * Any threshold parameter used in a watch function to monitor this property applies to this attribute.
     */
    readonly load: number;
}
/**
 * This property exposes the data storage devices connected to this system.
 */
export interface SystemInfoStorage extends SystemInfoProperty {
    /**
     * The array of storage units connected to this device.
     */
    readonly units: SystemInfoStorageUnit[];
}
/**
 * This property exposes a single storage device connected to this system.
 */
export interface SystemInfoStorageUnit extends SystemInfoProperty {
    /**
     * The type of a storage device. The value is one of the constants defined for this type.
     *
     * The supported storage unit types are:
     * - UNKNOWN
     * - INTERNAL
     * - USB_DEVICE
     * - USB_HOST
     * - MMC
     */
    readonly type: string;
    /**
     * The total amount of space available on the user's storage (excluding system-reserved), in bytes.
     */
    readonly capacity: number;
    /**
     * The amount of space currently available on the user's storage, in bytes.
     */
    readonly availableCapacity: number;
    /**
     * An attribute to indicate whether a device can be removed or not.
     *
     * The following values are supported:
     * - ***true*** - If this storage unit can be removed from the system (such as an sdcard unplugged)
     * - ***false*** - If this storage unit cannot be removed from the system
     * @since 2.1
     */
    readonly isRemovable: boolean;
    /**
     * True if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
     *
     * @note `deprecated` 2.1 Deprecated since 2.1. Instead, use `isRemovable`.
     */
    readonly isRemoveable: boolean;
}

/**
 * This property reflects the information of the Display.
 *
 * **Listener notice**:
 *
 * Change listener registered on ***DISPLAY*** property is triggered on
 * `brightness` property change.
 */
export interface SystemInfoDisplay extends SystemInfoProperty {
    /**
     * The total number of addressable pixels in the horizontal direction of a rectangular entity
     * (such as Camera, Display, Image, Video, ...) when held in its default orientation.
     */
    readonly resolutionWidth: number;
    /**
     * The total number of addressable pixels in the vertical direction of a rectangular element
     * (such as Camera, Display, Image, Video, ...) when held in its default orientation.
     */
    readonly resolutionHeight: number;
    /**
     * Resolution of this device, along its width, in dots per inch.
     */
    readonly dotsPerInchWidth: number;
    /**
     * Resolution of this device, along its height, in dots per inch.
     */
    readonly dotsPerInchHeight: number;
    /**
     * The display's physical width in millimeters.
     */
    readonly physicalWidth: number;
    /**
     * The display's physical height in millimeters.
     */
    readonly physicalHeight: number;
    /**
     * The current brightness of a display ranging between ***0 ***to ***1***.
     */
    readonly brightness: number;
}

/**
 * This property reflects the resolution limits of the panel.
 *
 * @remark Methods `addPropertyValueChangeListener()` and
 * `addPropertyValueArrayChangeListener()` triggers
 * errorCallback with error type NotSupportedError in case of use the ***PANEL*** property.
 * @since 5.5
 */
export interface SystemInfoPanel extends SystemInfoProperty {
    /**
     * The width of the panel in pixels.
     */
    readonly panelWidth: number;
    /**
     * The height of the panel in pixels.
     */
    readonly panelHeight: number;
}

/**
 * This property reflects the information of the device orientation in this system.
 *
 * @since 2.0
 */
export interface SystemInfoDeviceOrientation extends SystemInfoProperty {
    /**
     * Represents the status of the current device orientation.
     */
    readonly status:
        | SystemInfoDeviceOrientationStatus
        | 'PORTRAIT_PRIMARY'
        | 'PORTRAIT_SECONDARY'
        | 'LANDSCAPE_PRIMARY'
        | 'LANDSCAPE_SECONDARY';
    /**
     * Indicates whether the device is in autorotation.
     *
     * @since 2.2
     */
    readonly isAutoRotation: boolean;
}
/**
 * This property reflects the information of the current device.
 *
 * @since 2.0
 */
export interface SystemInfoBuild extends SystemInfoProperty {
    /**
     * Represents the model name of the current device.
     */
    readonly model: string;
    /**
     * Represents the manufacturer of the device.
     *
     * @since 2.1
     */
    readonly manufacturer: string;
    /**
     * Represents the build version information of the device.
     *
     * @since 2.2
     */
    readonly buildVersion: string;
}
/**
 * This property reflects the locale information of the current device.
 *
 * @since 2.1
 */
export interface SystemInfoLocale extends SystemInfoProperty {
    /**
     * Indicates the current language setting in the (LANGUAGE)_(REGION) syntax.
     *
     * The language setting is in the ISO 639-2 format and the region setting is in the ISO 3166-1 alpha-2 format.
     * The language setting is case-sensitive.
     */
    readonly language: string;
    /**
     * Indicates the current country setting in the (LANGUAGE)_(REGION) syntax.
     *
     * The language setting is in the ISO 639-2 format and the region setting is in the ISO 3166-1 alpha-2 format.
     * The country setting is case-sensitive.
     */
    readonly country: string;
}
/**
 * This property reflects the information of the data network in this system.
 *
 * @since 2.0
 */
export interface SystemInfoNetwork extends SystemInfoProperty {
    /**
     * Represents the network type of the current data network.
     */
    readonly networkType:
        | SystemInfoNetworkType
        | 'NONE'
        | '2G'
        | '2.5G'
        | '3G'
        | '4G'
        | 'WIFI'
        | 'ETHERNET'
        | 'NET_PROXY'
        | 'UNKNOWN';
}
/**
 * This property reflects the information of the Wi-Fi network in this system.
 *
 * **Listener notice**:
 *
 * Change listener registered on ***WIFI_NETWORK*** property is triggered on
 * `ipAddress` and `ipv6Address` properties change (the network layer).
 * Those changes could be not consistent with physical layer (`status` or
 * `signalStrength` of physical adapter).
 *
 * According to above constraints, in specific situation the listener could be
 * triggered just before network adapter shutdown and the value of `status` returned
 * by listener would be outdated.
 */
export interface SystemInfoWifiNetwork extends SystemInfoProperty {
    /**
     * Represents the status (ON or OFF) of the Wi-Fi interface.
     */
    readonly status: string;
    /**
     * Represents the SSID of the Wi-Fi network.
     */
    readonly ssid: string;
    /**
     * Represents the IPv4 address of the Wi-Fi network.
     */
    readonly ipAddress: string;
    /**
     * Represents the IPv6 address of the Wi-Fi network.
     *
     * @since 2.0
     */
    readonly ipv6Address: string;
    /**
     * Represents the MAC address of the Wi-Fi interface.
     *
     * It is written in MM:MM:MM:SS:SS:SS format.
     *
     * @since 2.3
     */
    readonly macAddress: string;
    /**
     * This connection's signal strength, as a normalized value between 0 (no signal detected) and 1 (the level is at its maximum value).
     */
    readonly signalStrength: number;
    /**
     * Represents this connection's security mode.
     *
     * @since 2.4
     */
    readonly securityMode: SystemInfoWifiSecurityMode | 'NONE' | 'WEP' | 'WPA_PSK' | 'WPA2_PSK' | 'EAP';
    /**
     * Represents this connection's encryption type.
     *
     * @since 2.4
     */
    readonly encryptionType: SystemInfoWifiEncryptionType | 'NONE' | 'WEP' | 'TKIP' | 'AES' | 'TKIP_AES_MIXED';
    /**
     * Represents this connection's IP configuration type.
     *
     * @since 2.4
     */
    readonly ipMode: SystemInfoNetworkIpMode | 'NONE' | 'STATIC' | 'DYNAMIC' | 'AUTO' | 'FIXED';
    /**
     * Represents the subnet mask of this connection.
     *
     * It is written in 255.255.255.255 format.
     * @since 2.4
     */
    readonly subnetMask: string;
    /**
     * Represents the gateway of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly gateway: string;
    /**
     * Represents the DNS address of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly dns: string;
}
/**
 * This property reflects the information of the Ethernet network in this system.
 *
 * **Listener notice**:
 *
 * Change listener registered on ***ETHERNET_NETWORK*** property is triggered on
 * `ipAddress` and `ipv6Address` properties change (the network layer).
 * Those changes could be not consistent with physical layer (`status` of physical adapter).
 *
 * According to above constraints, in specific situation the listener could be
 * triggered just before network adapter shutdown and the value of `status` returned
 * by listener would be outdated.
 *
 * @since 2.4
 */
export interface SystemInfoEthernetNetwork extends SystemInfoProperty {
    /**
     * Represents the cable status (ATTACHED or DETACHED) of the Ethernet interface.
     */
    readonly cable: string;
    /**
     * Represents the status (DEACTIVATED, DISCONNECTED or CONNECTED) of the Ethernet interface.
     */
    readonly status: string;
    /**
     * Represents the IPv4 address of the Ethernet network.
     */
    readonly ipAddress: string;
    /**
     * Represents the IPv6 address of the Ethernet network.
     */
    readonly ipv6Address: string;
    /**
     * Represents the MAC address of the Ethernet interface.
     *
     * It is written in MM:MM:MM:SS:SS:SS format.
     */
    readonly macAddress: string;
    /**
     * Represents this connection's IP configuration type.
     */
    readonly ipMode: SystemInfoNetworkIpMode | 'NONE' | 'STATIC' | 'DYNAMIC' | 'AUTO' | 'FIXED';
    /**
     * Represents the subnet mask of this connection.
     *
     * It is written in 255.255.255.255 format.
     */
    readonly subnetMask: string;
    /**
     * Represents the gateway of this connection.
     *
     * It is written in 255.255.255.255 format.
     */
    readonly gateway: string;
    /**
     * Represents the DNS address of this connection.
     *
     * It is written in 255.255.255.255 format.
     */
    readonly dns: string;
}
/**
 * This property reflects the information of the Cellular network in this system.
 *
 * **Listener notice**:
 *
 * Change listener registered on ***CELLULAR_NETWORK*** property is triggered on
 * `ipAddress`, `ipv6Address` (the network layer), `cellId`,
 * `lac` and `isFlightMode` properties change.
 * Those changes could be not consistent with physical layer (`status` of physical adapter).
 *
 * According to above constraints, in specific situation the listener could be
 * triggered just before network adapter shutdown and the value of `status` returned
 * by listener would be outdated.
 */
export interface SystemInfoCellularNetwork extends SystemInfoProperty {
    /**
     * Represents the status (ON or OFF) of the cellular network.
     */
    readonly status: string;
    /**
     * Represents an Access Point Name of the cellular network.
     */
    readonly apn: string;
    /**
     * Represents the IPv4 address of the cellular network.
     */
    readonly ipAddress: string;
    /**
     * Represents the IPv6 address of the cellular network.
     *
     * @since 2.0
     */
    readonly ipv6Address: string;
    /**
     * Represents Mobile Country Code (MCC) of the cellular network.
     */
    readonly mcc: number;
    /**
     * Represents Mobile Network Code (MNC) of the cellular network. MNC is used in combination with MCC (also known as a "MCC / MNC tuple") to uniquely
     * identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and UMTS public land mobile networks and some satellite mobile networks.
     */
    readonly mnc: number;
    /**
     * Represents Cell ID.
     */
    readonly cellId: number;
    /**
     * Represents Location Area Code.
     */
    readonly lac: number;
    /**
     * Indicates whether the connection is set up while the device is roaming.
     */
    readonly isRoaming: boolean;
    /**
     * Indicates whether the device is in flight mode.
     *
     * @since 2.1
     */
    readonly isFlightMode: boolean;
    /**
     * Represents the International Mobile Equipment Identity (IMEI).
     *
     * @since 2.1
     *
     * @privilegelevel public
     * @privilege http://tizen.org/privilege/telephony
     * @throw WebAPIException with error type SecurityError, if this attribute is not allowed.
     *
     * @warning 2.3.1 `http://tizen.org/privilege/systemmanager` `(partner level)` has been deprecated since 2.3.1. Instead, use `http://tizen.org/privilege/telephony`.
     */
    readonly imei: string;
    /**
     * Represents this connection's IP configuration type.
     *
     * @since 2.4
     */
    readonly ipMode: SystemInfoNetworkIpMode | 'NONE' | 'STATIC' | 'DYNAMIC' | 'AUTO' | 'FIXED';
    /**
     * Represents the subnet mask of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly subnetMask: string;
    /**
     * Represents the gateway of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly gateway: string;
    /**
     * Represents the DNS address of this connection.
     *
     * It is written in 255.255.255.255 format.
     *
     * @since 2.4
     */
    readonly dns: string;
}
/**
 * This property reflects the information of the net_proxy network in this system.
 *
 * @since 3.0
 */
export interface SystemInfoNetProxyNetwork extends SystemInfoProperty {
    /**
     * Represents the status (ON or OFF) of the net_proxy network.
     */
    readonly status: string;
}

/**
 * This property reflects the peripheral information of the current device.
 *
 * @since 2.1
 */
export interface SystemInfoPeripheral extends SystemInfoProperty {
    /**
     * Represents the video out status.
     */
    readonly isVideoOutputOn: boolean;
}
/**
 * This property represents information about the memory state on the device system.
 *
 * @since 2.3
 */
export interface SystemInfoMemory extends SystemInfoProperty {
    /**
     * Represents the low memory state.
     */
    readonly status: SystemInfoLowMemoryStatus | 'NORMAL' | 'WARNING';
}

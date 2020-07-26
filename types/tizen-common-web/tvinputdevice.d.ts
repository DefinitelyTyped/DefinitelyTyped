import { ErrorCallback, SuccessCallback } from './tizen';
/**
 * Name which identifies the key
 * Name of the key may be, for example:
 * - `VolumeUp`
 * - `VolumeDown`
 * - `ChannelUp`
 * - `ChannelDown`
 * The actual list of supported keys depends on the platform.
 */
export type InputDeviceKeyName = string;

/**
 * The InputDeviceKey interface stores information about the key.
 */
export interface InputDeviceKey {
    /**
     * The name of the key, for example ***"VolumeUp"*** or ***"ChannelDown"***.
     * @since 2.3
     */
    name: InputDeviceKeyName;
    /**
     * The numeric code of the key, like ***37*** or ***13***.
     * @since 2.3
     */
    code: number;
}

/**
 * The TV Input Device API provides functions to subscribe key events of the input device.
 * The following remote control keys are mandatory input device keys. They are available to an application on any Tizen TV.
 * - ArrowLeft, ArrowUp, ArrowRight, ArrowDown
 * - Enter
 * - Back
 * The Tizen TV may provide additional keys depending on a particular input device.
 * An application can handle device dependent key events after registration.
 * @since 2.3
 * @defAPIFeature http://tizen.org/feature/tv.inputdevice
 */
export interface TVInputDeviceManager {
    /**
     * Retrieves the list of keys can be registered with the `registerKey()` method.
     * Mandatory keys will not be retrieved by this method.
     * @returns InputDeviceKey InputDeviceKey array for the supported key name.
     * @privilegeLevel Public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     * @throw WebAPIException SecurityError, UnknownError
     * @since 2.3
     */
    getSupportedKeys(): InputDeviceKey[];

    /**
     * Returns information about the key which has the given name.
     * @returns InputDeviceKey InputDeviceKey object for the given key name, or null if the key is not supported.
     * @param keyName The name of the key to retrieve.
     * @privilegeLevel Public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     * @throw WebAPIException SecurityError, InvalidValuesError,UnknownError
     * @since 2.3
     */
    getKey(keyName: InputDeviceKeyName): InputDeviceKey | null;

    /**
     * Registers an input device key to receive DOM keyboard event when it is pressed or released.
     * When an application wants to react to the Input Device keys being pressed, it should register this key.
     * An application cannot register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
     * @param keyName The name of the key which should generate DOM key events when pressed.
     * @privilegeLevel Public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     * @throw WebAPIException SecurityError, InvalidValuesError, UnknownError
     * @since 2.3
     */
    registerKey(keyName: InputDeviceKeyName): void;

    /**
     * Unregisters an input device key.
     * @param keyName keyName The name of the key which should not be monitored any longer.
     * @privilegeLevel Public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     * @throw WebAPIException SecurityError, InvalidValuesError, UnknownError
     * @since 2.3
     */
    unregisterKey(keyName: InputDeviceKeyName): void;

    /**
     * Registers a batch of input device keys to receive DOM keyboard events when any of them is pressed or released.
     * When an application wants to react to the input device key presses, it should register those keys.
     * An application cannot register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
     * @param keyNames The array with the names of the keys which will generate DOM key events when they are pressed.
     * @param successCallback Callback method to be invoked when keys are registered.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     * - `InvalidValuesError`: If any of the given keyNames is invalid or not supported.
     * - `UnknownError`: In case of any other error.
     * @privilegeLevel Public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     * @throw WebAPIException SecurityError, InvalidValuesError, TypeMismatchError, UnknownError
     * @since 2.4
     */
    registerKeyBatch(
        keyNames: InputDeviceKeyName[],
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback,
    ): void;

    /**
     * Unregisters a batch of input device keys.
     * @param keyNames The array with the names of the keys to unregister.
     * @param successCallback Callback method to be invoked when keys are unregistered.
     * @param errorCallback Callback method to be invoked when an error has occurred.
     * - `InvalidValuesError`: If any of the given keyNames is invalid or not supported.
     * - `UnknownError`: In case of any other error.
     * @privilegeLevel Public
     * @privilegeName http://tizen.org/privilege/tv.inputdevice
     * @throw WebAPIException SecurityError, InvalidValuesError, TypeMismatchError, UnknownError
     * @since 2.4
     */
    unregisterKeyBatch(
        keyNames: InputDeviceKeyName[],
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback,
    ): void;
}

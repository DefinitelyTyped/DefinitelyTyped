import { ErrorCallback, SuccessCallback } from './tizen';
import { SystemInfoVideoSourceInfo } from './systeminfo';
/**
 * This API provides a way to embed a video source in a Tizen Web Application running on a device associated with the TV.
 * It allows an available video source to be selected and shown on or hidden from the display in a Tizen Web Application.
 * There will be a `tizen.tvwindow` object that allows access to the functionality of the TV Window API.
 * To show a TV signal, execute the `show` function.
 * A TV source is controlled by the user or
 * by you with the Tizen Web Device APIs. You do not have to implement any routines if you
 * do not want to interact with the TV image.
 * @privilegeLevel public
 * @privilegeName http://tizen.org/privilege/tv.window
 * @defAPIFeature http://tizen.org/feature/tv.pip
 * To guarantee the running of this application on a device with a TV picture-in-picture support, define the following requirements in the config file:
 * @since 2.3
 */
export interface TVWindowManager {
    /**
     * Gets the list of available windows.
     * @param successCallback The method to invoke when a list of the available windows is retrieved successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @throw WebAPIException `TypeMismatchError`,`SecurityError`.
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    getAvailableWindows: (successCallback: AvailableWindowListCallback, errorCallback?: ErrorCallback) => void;

    /**
     * Changes the source of a TV window.
     *
     * @param videoSource The video source to set
     * The possible video sources can be obtained through **tizen.systeminfo.getPropertyValue("VIDEOSOURCE")**.
     * @param successCallback The method to invoke when the intput source has been changed successfully.
     * The result SystemInfoVideoSourceInfo object will have the `signal` property filled only when the window was shown using `show()` function.
     * @param errorCallback The method to invoke when an error occurs.
     * @param type The window type - by default, this attribute is set to ***MAIN***.
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`, `UnknownError`.
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    setSource(
        videoSource: SystemInfoVideoSourceInfo,
        successCallback: SourceChangedSuccessCallback,
        errorCallback?: ErrorCallback,
        type?: WindowType | 'MAIN',
    ): void;
    /**
     * Gets information about the current source of a specified TV window.
     *
     * @param type The window type - by default, this attribute is set to ***MAIN***.
     *
     * @returns The information about the current video source. Returned object will have the `signal` property, stating whether there is signal provided or not on the source, this property value will be filled only when the window was shown using `show()` function.
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`, `UnknownError`.
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    getSource(type?: WindowType | 'MAIN'): SystemInfoVideoSourceInfo;
    /**
     * Sets the display area of a TV window and shows it on the display.
     *
     * The `rectangle` array requires exactly four elements which are described below:
     * - The first element indicates the x coordinate of the top left corner of the TV window (distance from the left edge of the screen).
     * - The second element indicates the y coordinate of the top left corner of the TV window (distance from the top edge of the screen).
     * - The third element indicates the width of the TV window.
     * - The fourth element indicates the height of the TV window.
     *
     * Each element of `rectangle` can be described in either absolute value by using pixel units "px"
     * or relative value by using percentage units "%". If you do not specify any unit after a value then it will be taken as an absolute value.
     *
     * The `errorCallback` is invoked with these error types:
     * - `InvalidValuesError` will be thrown if `rectangle` has any element with invalid format (e.g. "10p") or it does not have 4 elements.
     * - `NotSupportedError` will be thrown if you set `rectangle` which is not within the boundary of the display area or when the TV window is not supported in the current screen orientation.
     * - `TypeMismatchError` will be thrown if `rectangle` is not an array.
     *
     * @param successCallback The method which will be invoked when the position and size of the TV window has been changed successfully.
     * @param errorCallback The method which will be invoked when an error occurs.
     * @param rectangle An array that contains information about the position and size of a specified TV window as a string with units.
     *
     *        Without this parameter, the TV window will have the same size and location as when this method last suceeded.
     *
     *        But, if a rectangle has never been specified, the TV window will be shown in full screen mode.
     * @param type The window type - by default, this attribute is set to ***MAIN***.
     * @param zPosition Specifies whether the TV window should be in front of or behind the Web Application since Tizen 2.4
     *  By default, this parameter is set to ***FRONT***.
     *
     * If this parameter is set to null or ***FRONT***, this method behaves in the same way as it did before Tizen 2.4.
     *
     * @throw WebAPIException `TypeMismatchError`, `InvalidValuesError`, `SecurityError`, `UnknownError`.
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    show(
        successCallback: WindowRectangleSuccessCallback,
        errorCallback?: ErrorCallback,
        rectangle?: string[],
        type?: WindowType | 'MAIN',
        zPosition?: ZPosition | 'FRONT' | 'BEHIND',
    ): void;
    /**
     * Hides a TV window which is shown.
     *
     * @param successCallback The method to invoke when the window is hidden successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @param type The window type - by default, this attribute is set to ***MAIN***.
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`, `UnknownError`.
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    hide(successCallback: SuccessCallback, errorCallback?: ErrorCallback, type?: WindowType | 'MAIN'): void;
    /**
     * Gets the area information of a TV window which is shown.
     *
     * According to the specified **unit**, information about the area will be passed to an array that contains 4 strings through `WindowRectangleSuccessCallback` as follows :
     * - If you set `"px"` as `unit`, ["0px", "0px", "1920px", "1080px"]
     * - If you set `"%"` as `unit`, ["0%", "0%", "100%", "100%"]
     * If you omit **unit**, the pixel(***"px"***) unit will be used as a default unit.
     *
     * @param successCallback The method to invoke when the position and size of the TV window has been obtained successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @param unit The measurement unit for specifying the display area - by default, this attribute is set to `"px"`.
     * @param type The window type - by default, this attribute is set to ***MAIN***.
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`, `UnknownError`.
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    getRect(
        successCallback: WindowRectangleSuccessCallback,
        errorCallback?: ErrorCallback,
        unit?: MeasurementUnit | 'px' | '%',
        type?: WindowType | 'MAIN',
    ): void;
    /**
     * Gets video resolution information.
     *
     * @param type The window type - by default, this attribute is set to ***MAIN***.
     * @returns VideoResolution current video resolution information
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`, `UnknownError`.
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     *
     */
    getVideoResolution(type?: WindowType | 'MAIN'): VideoResolution;
    /**
     * Adds a video resolution listener for getting notified about resolution changes.
     *
     * @param callback The method to invoke when the resolution has been changed.
     * @param type The window type. By default, this parameter is set to ***MAIN***.
     *
     * @returns long The identifier of the resolution change listener.
     *
     * @throw WebAPIException `TypeMismatchError`,`SecurityError`,`UnknownError`.
     *
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    addVideoResolutionChangeListener(callback: VideoResolutionChangeCallback, type?: WindowType | 'MAIN'): number;
    /**
     * Removes the listener to stop receiving notifications for the video resolution changes.
     *
     * Calling this function has no effect if there is no listener with given id.
     *
     * @param listenerId The identifier of the listener for resolution changes.
     *
     * @throw WebAPIException SecurityError, UnknownError.
     * @since 2.4
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/tv.window
     */
    removeVideoResolutionChangeListener(listenerId: number): void;
}

/**
 * An enumerator to indicate the window type.
 * - `MAIN` - The main video window, which can be show anywhere
 */
export enum WindowType {
    MAIN = 'MAIN',
}

/**
 * An enumerator to indicate the units of measurement for specifying the measurement unit when calling `getRect()`.
 * - `px` - pixel unit
 * - `%` - percentage unit for specifying relative size
 */
export enum MeasurementUnit {
    px = 'px',
    '%' = '%',
}

/**
 * An enumerator to indicate the aspect ratio of the video source.
 *
 * - `ASPECT_RATIO_1x1` - 1:1
 * - `ASPECT_RATIO_4x3` - 4:3
 * - `ASPECT_RATIO_16x9` - 16:9
 * - `ASPECT_RATIO_221x100` - 2.21:1
 * - `ASPECT_RATIO_UNKNOWN` - Unknown aspect ratio
 *
 * @remark `ASPECT_RATIO_UNKNOWN` is supported since Tizen 3.0
 */
export enum AspectRatio {
    ASPECT_RATIO_1x1 = 'ASPECT_RATIO_1x1',
    ASPECT_RATIO_4x3 = 'ASPECT_RATIO_4x3',
    ASPECT_RATIO_16x9 = 'ASPECT_RATIO_16x9',
    ASPECT_RATIO_221x100 = 'ASPECT_RATIO_221x100',
    ASPECT_RATIO_UNKNOWN = 'ASPECT_RATIO_UNKNOWN',
}

/**
 * An enumerator to indicate the z position of the TV window or the relative position of the TV window and the Web Application.
 * - `FRONT` - Displays the TV window in front of the Web Application
 * - `BEHIND` - Displays the TV window behind the Web Application
 */
export enum ZPosition {
    FRONT = 'FRONT',
    BEHIND = 'BEHIND',
}

/**
 * The VideoResolution interface contains information about current video resolution.
 *
 * @since 2.4
 */
export interface VideoResolution {
    /**
     * Video width in pixels.
     */
    readonly width: number;
    /**
     * Video height in pixels.
     */
    readonly height: number;
    /**
     * Vertical frequency rate in Hz.
     */
    readonly frequency: number;
    /**
     * Video aspect ratio.
     *
     */
    readonly aspectRatio:
        | AspectRatio
        | 'ASPECT_RATIO_1x1'
        | 'ASPECT_RATIO_4x3'
        | 'ASPECT_RATIO_16x9'
        | 'ASPECT_RATIO_221x100'
        | 'ASPECT_RATIO_UNKNOWN';
}

/**
 * This interface defines a video resolution change callback for getting notified about video resolution changes.
 *
 * @since 2.4
 */
export interface VideoResolutionChangeCallback {
    /**
     * Method invoked when the video resolution has been changed.
     *
     * @param resolution The resolution that the video has changed to.
     * @param type The window type.
     */
    (resolution: VideoResolution, type: WindowType): void;
}

/**
 * This interface defines a callback that is invoked when a list of available windows is retrieved successfully.
 */
export interface AvailableWindowListCallback {
    (type: WindowType[]): void;
}

/**
 * This interface includes the success callback that is invoked when the position and size of a TV window has been changed or retrieved.
 */
export interface WindowRectangleSuccessCallback {
    /**
     * Method invoked when the position and size of the TV window has been changed or retrieved.
     *
     * This method returns information **windowRect** and **type**.
     * For more detailed information about `windowRect`, see the description of `show()`.
     * @param windowRect An array that contains information about the position and size of a specified TV  window as a string with units.
     * @param type The window type.
     */
    (windowRect: string[], type: WindowType): void;
}
/**
 * This interface includes the success callback that is invoked when the source has been set.
 */
export interface SourceChangedSuccessCallback {
    /**
     * Method invoked when the new source has been set.
     *
     * This method returns information **source** and **type**.
     * @param source A descriptor object `SystemInfoVideoSourceInfo` that contains information about the source used by TV.
     * @param type The window type.
     */
    (source: SystemInfoVideoSourceInfo, type: WindowType): void;
}

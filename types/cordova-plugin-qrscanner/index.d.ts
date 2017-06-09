// Type definitions for cordova-plugin-qrscanner v1.0.1
// Project: https://github.com/bitpay/cordova-plugin-qrscanner
// Definitions by: Jason Dreyzehner <https://github.com/bitjson/>
//                 Josh Bronson <https://github.com/jab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
* Global object QRScanner.
*/
interface Window {
    QRScanner: QRScanner;
}

/**
* The QRScanner object provides functions to initialize, control, utilize, and
* deallocate a native QR code scanner and video preview behind the Cordova webview.
*/
interface QRScanner {

    /**
    * Request permission to access the camera (if not already granted), prepare
    * the video preview, and configure everything needed by QRScanner. This will
    * only be visible if `QRScanner.show()` has already made the webview transparent.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    prepare: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void;

    /**
    * Sets QRScanner to "watch" for valid QR codes. Once a valid code is
    * detected, it's contents are passed to the callback, and scanning is
    * toggled off. If `QRScanner.prepare()` has not been called,
    * this method performs that setup as well. The video preview does
    * not need to be visible for scanning to function.
    * @param {function} callback Callback that gets an error or the results string.
    */
    scan: (callback: (error: QRScannerError, result: string) => any) => void;

    /**
    * Cancels the current scan. If `QRScanner.prepare()` has not been called,
    * this method performs that setup as well.
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    cancelScan: (callback?: (status: QRScannerStatus) => any) => void;

    /**
    * Configures the native webview to have a transparent background, then sets
    * the background of the `<body>` and parent elements to transparent,
    * allowing the webview to re-render with the transparent background.
    *
    * To see the video preview, your application background must be transparent
    * in the areas through which it should show.
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    show: (callback?: (status: QRScannerStatus) => any) => void;

    /**
    * Configures the native webview to be opaque with a white background,
    * covering the video preview.
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    hide: (callback?: (status: QRScannerStatus) => any) => void;


    /**
    * Enable the device's light (for scanning in low-light environments). If
    * `QRScanner.prepare()` has not been called, this method performs that setup
    * as well.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    enableLight: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void;

    /**
    * Disable the device's light. If `QRScanner.prepare()` has not been called,
    * this method performs that setup as well.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    disableLight: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void;

    /**
    * Switch video capture to the `index` camera. Camera `0` is the back camera,
    * camera `1` is front camera. If `QRScanner.prepare()` has not been called,
    * this method performs that setup as well.
    * @param {number} index A number representing the index of the camera to use.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    useCamera: (index: number, callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void;

    /**
    * Switch video capture to the device's front camera. If `QRScanner.prepare()`
    * has not been called, this method performs that setup as well.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    useFrontCamera: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void;

    /**
    * Switch video capture to the device's back camera. If `QRScanner.prepare()`
    * has not been called, this method performs that setup as well.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    useBackCamera: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void;

    /**
    * Pauses the video preview on the current frame (as if a snapshot was taken).
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    pausePreview: (callback?: (status: QRScannerStatus) => any) => void;

    /**
    * Resumes the video preview.
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    resumePreview: (callback?: (status: QRScannerStatus) => any) => void;

    /**
    * Open the app-specific permission settings in the user's device settings.
    * Here the user can enable/disable camera (and other) access for your app.
    *
    * Note: iOS immediately kills all apps affected by permissions changes. If
    * the user changes a permission settings, your app will stop and only
    * restart when they return.
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    openSettings: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void;

    /**
    * Retrieve the status of QRScanner and provide it to the callback function.
    * @param {function} callback Callback that gets the QRScannerStatus object.
    */
    getStatus: (callback: (status: QRScannerStatus) => any) => void;

    /**
    * Runs hide(), stops scanning, video capture, and the preview, and
    * deallocates as much as possible. (E.g. to improve performance/battery life
    * when the scanner is not likely to be used for a while.)
    * Basically reverts the plugin to it's startup-state.
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    destroy: (callback?: (status: QRScannerStatus) => any) => void;
}


/**
* An object representing the current status of QRScanner.
*/
interface QRScannerStatus {

  /**
  * On iOS and Android 6.0+, camera access is granted at runtime by the user (by
  * clicking "Allow" at the dialog). The `authorized` property is a boolean
  * value which is true only when the user has allowed camera access to your app
  * (`AVAuthorizationStatus.Authorized`). On platforms with permissions granted
  * at install (Android pre-6.0, Windows Phone) this property is always true.
  */
  authorized: boolean,

  /**
  * A boolean value which is true if the user permenantly denied camera access
  * to the app (`AVAuthorizationStatus.Denied`). Once denied, camera access can
  * only be gained by requesting the user change their decision (consider
  * offering a link to the setting via `openSettings()`).
  */
  denied: boolean,

  /**
  * A boolean value which is true if the user is unable to grant permissions due
  * to parental controls, organization security configuration profiles, or
  * similar reasons.
  */
  restricted: boolean,

  /**
  * A boolean value which is true if QRScanner is prepared to capture video and
  * render it to the view.
  */
  prepared: boolean,

  /**
  * A boolean value which is true if QRScanner is actively scanning for a QR code.
  */
  scanning: boolean,

  /**
  * A boolean value which is true if QRScanner is displaying a live preview
  * from the device's camera. Set to false when the preview is paused.
  */
  previewing: boolean,

  /**
  * A boolean value which is true when the native webview background is transparent.
  */
  webviewBackgroundIsTransparent: boolean,

  /**
  * A boolean value which is true if the light is enabled.
  */
  lightEnabled: boolean,

  /**
  * A boolean value which is true only if the users' operating system is able
  * to `QRScanner.openSettings()`.
  */
  canOpenSettings: boolean,

  /**
  * A boolean value which is true only if the users' device can enable a light
  * in the direction of the currentCamera.
  */
  canEnableLight: boolean,

  /**
  * A number representing the index of the currentCamera. `0` is the back
  * camera, `1` is the front.
  */
  currentCamera: number
}

/**
* An object representing an error issued by QRScanner.
*
* Many QRScanner functions accept a callback with an `error` parameter. When
* QRScanner experiences errors, this parameter contains a QRScannerError object
* with properties `name` (_string_), `code` (_number_), and `_message`
* (_string_). When handling errors, rely only on the `name` or `code` parameter,
*as the specific content of `_message` is not considered part of the plugin's
* stable API.
*
* # Possible Error Types
*
* Code | Name                        | Description
* ---: | :-------------------------- | :----------------------------------------
*    0 | `UNEXPECTED_ERROR`          | An unexpected error. Returned only by bugs in QRScanner.
*    1 | `CAMERA_ACCESS_DENIED`      | The user denied camera access.
*    2 | `CAMERA_ACCESS_RESTRICTED`  | Camera access is restricted (due to parental controls, organization security configuration profiles, or similar reasons).
*    3 | `BACK_CAMERA_UNAVAILABLE`   | The back camera is unavailable.
*    4 | `FRONT_CAMERA_UNAVAILABLE`  | The front camera is unavailable.
*    5 | `CAMERA_UNAVAILABLE`        | The camera is unavailable because it doesn't exist or is otherwise unable to be configured. (Returned if QRScanner cannot return one of the more specific `BACK_CAMERA_UNAVAILABLE` or `FRONT_CAMERA_UNAVAILABLE` errors.)
*    6 | `SCAN_CANCELED`             | Scan was canceled by the `cancelScan()` method. (Returned exclusively to the `QRScanner.scan()` method.)
*    7 | `LIGHT_UNAVAILABLE`         | The device light is unavailable because it doesn't exist or is otherwise unable to be configured.
*    8 | `OPEN_SETTINGS_UNAVAILABLE` | The device is unable to open settings.
*/
interface QRScannerError {

  /**
  * The standard string identifying the type of this QRScannerError.
  */
  name: string,

  /**
  * The standard number identifying the type of this QRScannerError.
  */
  code: number,

  /**
  * A simple message describing this QRScannerError.
  */
  _message: string
}

declare var QRScanner: QRScanner;

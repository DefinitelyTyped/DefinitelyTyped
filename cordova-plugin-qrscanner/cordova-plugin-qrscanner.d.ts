// Type definitions for cordova-plugin-qrscanner
// Project: https://github.com/bitpay/cordova-plugin-qrscanner
// Definitions by: Jason Dreyzehner <https://github.com/bitjson/>
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
    prepare: (callback?: (error: Error, status: QRScannerStatus) => any) => void;

    /**
    * Sets QRScanner to "watch" for valid QR codes. Once a valid code is
    * detected, it's contents are passed to the callback, and scanning is
    * toggled off. If `QRScanner.prepare()` has not been called,
    * `QRScanner.scan()` performs that setup as well. The video preview does
    * not need to be visible for scanning to function.
    * @param {function} callback Callback that gets an error or the results string.
    */
    scan: (callback: (error: Error, result: String) => any) => void;

    /**
    * Cancels the current scan. The current scan() callback will not return.
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    cancelScan: (callback?: (status: QRScannerStatus) => any) => void;

    /**
    * Configures the native webview to have a transparent background, then sets
    * the background of the `<body>` and parent elements to transparent,
    * allowing the webview to re-render with the transparent background.
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
    * Enable the device's light (for scanning in low-light environments).
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    enableLight: (callback?: (error: Error, status: QRScannerStatus) => any) => void;

    /**
    * Disable the device's light.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    disableLight: (callback?: (error: Error, status: QRScannerStatus) => any) => void;

    /**
    * Switch video capture to the `index` camera. Camera `0` is the back camera,
    * camera `1` is front camera.
    * @param {number} index A number representing the index of the camera to use.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    useCamera: (index: Number, callback?: (error: Error, status: QRScannerStatus) => any) => void;

    /**
    * Switch video capture to the device's front camera.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    useFrontCamera: (callback?: (error: Error, status: QRScannerStatus) => any) => void;

    /**
    * Switch video capture to the device's back camera.
    * @param {function} [callback] Callback that gets an error or the QRScannerStatus object.
    */
    useBackCamera: (callback?: (error: Error, status: QRScannerStatus) => any) => void;

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
    * @param {function} [callback] Callback that gets the QRScannerStatus object.
    */
    openSettings: (callback?: (error: Error, status: QRScannerStatus) => any) => void;

    /**
    * Retrieve the status of QRScanner and provide it to the callback function.
    * @param {function} callback Callback that gets the QRScannerStatus object.
    */
    getStatus: (callback: (status: QRScannerStatus) => any) => void;

    /**
    * Stops scanning, video capture, and the preview, and deallocates as much as
    * possible. (E.g. to improve performance/battery life when the scanner is
    * not likely to be used for a while.)
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
  * On iOS, camera access is granted to an app by the user (by clicking "Allow"
  * at the dialog). The `authorized` property is a boolean value which is true
  * only when the user has allowed camera access to your app
  * (`AVAuthorizationStatus.Authorized`). The `NotDetermined`, `Restricted`
  * (e.g.: parental controls), and `Denied` AVAuthorizationStatus states all
  * cause this value to be false. If the user has denied access to your app,
  * consider asking nicely and offering a link via `QRScanner.openSettings()`.
  */
  authorized: Boolean,

  /**
  * A boolean value which is true if QRScanner is prepared to capture video and
  * render it to the view.
  */
  prepared: Boolean,

  /**
  * A boolean value which is true if QRScanner is actively scanning for a QR code.
  */
  scanning: Boolean,

  /**
  * A boolean value which is true if QRScanner is displaying a live preview
  * from the device's camera. Set to false when the preview is paused.
  */
  previewing: Boolean,

  /**
  * A boolean value which is true when the native webview background is transparent.
  */
  webviewBackgroundIsTransparent: Boolean,

  /**
  * A boolean value which is true if the light is enabled.
  */
  lightEnabled: Boolean,

  /**
  * A boolean value which is true only if the users' operating system is able
  * to `QRScanner.openSettings()`.
  */
  canOpenSettings: Boolean,

  /**
  * A boolean value which is true only if the users' device can enable a light
  * in the direction of the currentCamera.
  */
  canEnableLight: Boolean,

  /**
  * A number representing the index of the currentCamera. `0` is the back
  * camera, `1` is the front.
  */
  currentCamera: Number
}

declare var QRScanner: QRScanner;

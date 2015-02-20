

declare module Ionic {

    interface IPlatform {
        //#region Properties
        /**
         * Whether the device is ready
         */
        isReady: boolean;

        /**
         * Whether the device is full screen.
         */
        isFullScreen: boolean;

        /**
         * An array of all platforms found.
         */
        platforms: string[];

        /**
         * What grade the current platform is.
         */
        grade: string;
        //#endregion


        /**
         * Trigger a callback once the device is ready, or immediately if the device is already ready.
         * This method can be run from anywhere and does not need to be wrapped by any additional methods.
         * When the app is within a WebView (Cordova), it'll fire the callback once the device is ready.
         * If the app is within a web browser, it'll fire the callback after window.load.
         */
        ready(callback: () => void): void;

        /**
         * Set the grade of the device: 'a', 'b', or 'c'. 'a' is the best (most css features enabled),
         * 'c' is the worst. By default, sets the grade depending on the current device.
         */
        setGrade(grade): void;

        /**
         * Return the current device (given by Cordova).
         */
        device(): IDevice;

        /**
         * Check if we are running within a WebView (such as Cordova).
         */
        isWebView(): boolean;

        /**
         * Whether we are running on iPad.
         */
        isIPad(): boolean;

        /**
         * Whether we are running on iOS.
         */
        isIOS(): boolean;

        /**
         * Whether we are running on Android
         */
        isAndroid(): boolean;

        /**
         * Whether we are running on Windows Phone.
         */
        isWindowsPhone(): boolean;

        /**
         * The name of the current platform.
         */
        platform(): string;

        /**
         * The version of the current device platform.
         */
        version(): string;

        /**
         * Exit the application.
         */
        exitApp(): void;

        /**
         * Shows or hides the device status bar (in Cordova).
         * 
         * @param showShould Whether or not to show the status bar.
         */
        showStatusBar(shouldShow: boolean): void;

        /**
         * Sets whether the app is full screen or not (in Cordova).
         * 
         * @param showFullScreen Whether or not to set the app to full screen. Defaults to true.
         * @param showStatusBar Whether or not to show the device's status bar. Defaults to false.
         */
        fullScreen(showFullScreen: boolean, showStatusBar: boolean): void;
    }
}
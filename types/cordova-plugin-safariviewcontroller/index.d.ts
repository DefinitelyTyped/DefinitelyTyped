/**
 * Options that may be passed to `SafariViewController.show()`.
 */
interface SafariViewControllerShowOptions {
    /**
     * The url to open in `SafariViewController`/custom tab view.
     */
    url: string;

    /**
     * Loads the `url` without showing the `SafariViewController`/custom tab view in foreground.
     * You can use this to load cookies etc in the background
     * (see https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller/issues/1 for details).
     *
     * @default false
     */
    hidden?: boolean;

    /**
     * Whether opening/hiding the `SafariViewController`/custom tab should use a transition animation.
     * Note that `hide()` will reuse this preference (the 'Done' button will always animate though).
     *
     * @default true
     */
    animated?: boolean;

    /**
     * Unless animated is `false` you can choose a transition animation. This only works in iOS 9.1/9.2 and lower and on Android.
     * Only `'slide'` option is available on Android.
     *
     * @default 'slide'
     */
    transition?: "curl" | "flip" | "fade" | "slide";

    /**
     * Whether reader mode should be used for `SafariViewController`.
     *
     * @default false
     */
    enterReaderModeIfAvailable?: boolean;

    /**
     * The tint color to use.
     *
     * @default ios blue
     * @example '#ffffff'
     */
    tintColor?: string;

    /**
     * The color to tint the background of the navigation bar and the toolbar (iOS 10+ only).
     * See https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/2274394-preferredbartintcolor
     * for more details.
     *
     * @example '#0000ff'
     */
    barColor?: string;

    /**
     * The color to tint the control buttons on the navigation bar and the toolbar (iOS 10+ only).
     * See https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/2274393-preferredcontroltintcolor
     * for more details.
     *
     * @example '#ffffff'
     */
    controlTintColor?: string;

    /**
     * Sets the toolbar color (Android only). On Android L and above, this color is also applied to the status bar.
     *
     * @example '#ffffff'
     */
    toolbarColor?: string;

    /**
     * If set to `true`, will add a menu entry to share the current URL (Android only).
     *
     * @default false
     */
    showDefaultShareMenuItem?: boolean;
}

/**
 * The result of a `SafariViewController.show()` call.
 */
interface SafariViewControllerShowResult {
    /**
     * The event that describes what happened in the `SafariViewController`/custom tab view.
     * Only `'loaded'` and `'closed'` events will be dispatched on Android.
     */
    event: "opened" | "loaded" | "closed";
}

/**
 * The result of `SafariViewController.getViewHandlerPackages()` call.
 */
interface SafariViewControllerHandlerPackagesResult {
    /**
     * The default custom tab handler implementation (if available).
     */
    defaultHandler: string | null;

    /**
     * Contains the list of all available custom tab handler implementations.
     */
    customTabsImplementations: string[];
}

interface SafariViewController {
    /**
     * Check whether an implementation of `SafariViewController` on iOS/custom tab implementation
     * selected by `useCustomTabsImplementation()` on Android is actually available to be used.
     *
     * @param callback The callback function to pass the result of the check.
     */
    isAvailable(callback: (isAvailable: boolean) => void): void;

    /**
     * Show the `SafariViewController` on iOS/custom tab on Android.
     *
     * @param options The options for the `SafariViewController`/custom tab.
     * @param onSuccess The callback function to call with the different view events.
     * @param onError The callback function to call in case of an error.
     */
    show(
        options: SafariViewControllerShowOptions,
        onSuccess?: (result: SafariViewControllerShowResult) => void,
        onError?: (error: unknown) => void,
    ): void;

    /**
     * Hide a previously opened `SafariViewController`.
     *
     * **This method is iOS-specific. It will always error out on other platforms.**
     *
     * @param onSuccess The callback function to call when `SafariViewController` could be hidden successfully.
     * @param onError The callback function to call in case of an error or if method is unsupported on current platform.
     */
    hide(onSuccess?: () => void, onError?: (error: unknown) => void): void;

    /**
     * Get the list of available custom tab implementations. You can use the
     * values retrieved from this method in `useCustomTabsImplementation()`.
     *
     * **This method Android-specific. It will always error out on other platforms.**
     *
     * @param onSuccess The callback function to call after successfully retrieving the handler packages result.
     * @param onError The callback function to call in case of an error or if method is unsupported on current platform.
     */
    getViewHandlerPackages(
        onSuccess: (handlerPackages: SafariViewControllerHandlerPackagesResult) => void,
        onError?: (error: unknown) => void,
    ): void;

    /**
     * Set the custom tab implementation to use.
     *
     * **This method Android-specific. It will always error out on other platforms.**
     *
     * @param packageName The custom tab implementation to use previously retrieved via `getViewHandlerPackages()`.
     * @param onSuccess The callback function to call after successfully setting the custom tab implementation.
     * @param onError The callback function to call in case of an error or if method is unsupported on current platform.
     */
    useCustomTabsImplementation(
        packageName: string,
        onSuccess?: (result: true) => void,
        onError?: (error: unknown) => void,
    ): void;

    /**
     * Try to connect to the Chrome's custom tabs service. You must call this method before calling
     * `warmUp()` or `mayLaunchUrl()` methods.
     *
     * **This method Android-specific. It will always error out on other platforms.**
     *
     * @param onSuccess The callback function to call after successfully connecting to the custom tabs service.
     * @param onError The callback function to call in case of an error or if method is unsupported on current platform.
     */
    connectToService(onSuccess?: (result: true) => void, onError?: (error: unknown) => void): void;

    /**
     * Warm up the browser process. Call this method whenever there's a chance the user will open an external url. See
     * [Custom Tabs implementation guide](https://developers.google.com/web/android/custom-tabs/implementation-guide#warm_up_the_browser_process)
     * for more details.
     *
     * **This method Android-specific. It will always error out on other platforms.**
     *
     * @param onSuccess The callback function to call after successfully warming up the browser process.
     * @param onError The callback function to call in case of an error or if method is unsupported on current platform.
     */
    warmUp(onSuccess?: (result: true) => void, onError?: (error: unknown) => void): void;

    /**
     * Prepare the selected custom tab implementation to navigate to passed URL. For even better performance optimization,
     * call this methods if there's more than a 50% chance the user will open a certain URL. See
     * [CustomTabsSession docs](https://developer.android.com/reference/androidx/browser/customtabs/CustomTabsSession#mayLaunchUrl(android.net.Uri,%20android.os.Bundle,%20java.util.List%3Candroid.os.Bundle%3E))
     * for more details.
     *
     * **This method Android-specific. It will always error out on other platforms.**
     *
     * @param url The URL that should be loaded next by the custom tab.
     * @param onSuccess The callback function to call after custom tab has accepted the URL to launch.
     * @param onError The callback function to call in case custom tab hasn't accepted the URL to launch,
     *                if an error has occurred, or if method is unsupported on current platform.
     */
    mayLaunchUrl(url: string, onSuccess?: (result: true) => void, onError?: (error: unknown) => void): void;
}

declare var SafariViewController: SafariViewController;

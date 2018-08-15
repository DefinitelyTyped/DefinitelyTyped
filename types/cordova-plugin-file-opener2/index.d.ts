// Type definitions for cordova-plugin-file-opener2 2.0
// Project: https://github.com/pwlin/cordova-plugin-file-opener2
// Definitions by: Cyril Gandon <https://github.com/cyrilgandon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CordovaPluginsFileOpener2Result {
    status: number;
    message: string;
}
interface CordovaPluginsFileOpener2CallbackContext {
    success?(): void;
    error?(error: CordovaPluginsFileOpener2Result): void;
}
interface CordovaPluginsFileOpener2 {
    /**
     * Open a file with the default file opener and optional callback object:
     */
    open(fileName: string, contentType: string, callbackContext?: CordovaPluginsFileOpener2CallbackContext): void;

    /**
     * Open a system modal to open document with one of the already installed app and optional callback object
     */
    showOpenWithDialog(fileName: string, contentType: string, callbackContext?: CordovaPluginsFileOpener2CallbackContext): void;

    /**
     * Uninstall a package with its id. Android platform only.
     */
    uninstall(packageId: string, callbackContext?: CordovaPluginsFileOpener2CallbackContext): void;

    /**
     * Check if an app is already installed. Android platform only.
     */
    appIsInstalled(packageId: string, callbackContext?: {
        success?(result: CordovaPluginsFileOpener2Result): void;
        error?(error: CordovaPluginsFileOpener2Result): void;
    }): void;
}

interface CordovaPlugins {
    fileOpener2: CordovaPluginsFileOpener2;
}

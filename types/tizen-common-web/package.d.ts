import { ErrorCallback } from './tizen';
import { ApplicationId } from './application';
/**
 * A unique ID for an installed package.
 */
export type PackageId = string;

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.<br>
 * It also provides a listener method so that an application can be notified when there is a change on the installed packages.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 * - for accessing only internal storage using this API, a privilege http://tizen.org/privilege/mediastorage must be provided,
 * - for accessing only external storage using this API, a privilege http://tizen.org/privilege/externalstorage must be provided,
 * - for accessing internal and external storage using this API, privileges (http://tizen.org/privilege/mediastorage and http://tizen.org/privilege/externalstorage) must be provided.
 *
 * For more information on the Package features, see [Package Guide](https://docs.tizen.org/application/web/guides/app-management/packages/).
 * @since 2.1
 */
export interface PackageManager {
    /**
     * Installs a package with a specified file on a device.
     *
     * This API provides a way to notify the progress and completion of an installation request through PackageProgressCallback.
     *
     * The `ErrorCallback()` is launched with these error types:
     * - `NotFoundError` - If the package is not found at the specified location.
     * - `UnknownError` - If it is not allowed to install the package by the platform or any other platform error occurs.
     * @privilegeLevel platform
     * @privilegeName http://tizen.org/privilege/packagemanager.install
     *
     * @remark Virtual path cannot be used for the parameter. First, you need to convert any virtual path to a file URI path using the resolve function in the Filesystem API before passing it to the function.
     *
     * @param packageFileURI The location of the package to install.
     * @param progressCallback The method to invoke when the installation is in progress or has been completed.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`.
     *
     */
    install(packageFileURI: string, progressCallback: PackageProgressCallback, errorCallback?: ErrorCallback): void;
    /**
     * Uninstalls the package with a specified package ID.
     *
     * This API provides a way to notify about the progress and completion of an uninstallation request through PackageProgressCallback.
     *
     * The `ErrorCallback()` is launched with these error types:
     * - `NotFoundError` - If the package is not found with the specified ID.
     * - `UnknownError` - If it is not allowed to uninstall the package from the platform or any other platform error occurs.
     *
     *
     * @privilegeLevel platform
     * @privilegeName http://tizen.org/privilege/packagemanager.install
     *
     * @remark Some preloaded packages cannot be uninstalled. In this case, ErrorCallback with the UnKnownError type is launched.
     *
     * @param id The package ID to uninstall.
     * @param progressCallback The method to invoke when uninstallation is in progress or has been completed.
     * @param errorCallback The method to invoke when an error occurs.
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`.
     *
     */
    uninstall(id: PackageId, progressCallback: PackageProgressCallback, errorCallback?: ErrorCallback): void;
    /**
     * Gets information of the installed packages.
     *
     * The result contains the snapshots of the installed packages information.
     *
     * The `errorCallback()` is launched with this error type:
     * - UnknownError - If any other platform error occurs.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/package.info
     *
     * @param successCallback The method to call when an invocation ends successfully.
     * @param errorCallback The method to call when an error occurs.
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`.
     */
    getPackagesInfo(successCallback: PackageInformationArraySuccessCallback, errorCallback?: ErrorCallback): void;
    /**
     * Gets information of an installed package.
     *
     * If the ID is set to <var>null</var> or not set at all, it returns the package information of the current application.
     * The list of installed packages and their package IDs is obtained using `getPackagesInfo()`.
     *
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/package.info
     *
     * @param id A string representing the package ID. If the ID is not provided, the package information of the calling application is returned.
     *
     * @returns The information of a package.
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`, `NotFoundError`, `UnknownError`.
     */
    getPackageInfo(id?: PackageId): PackageInformation;
    /**
     * Sets a listener to receive notifications for any changes made to the list of installed packages.
     *
     * This method sets a `PackageInformationEventCallback` type callback that is triggered when a package is installed, removed, or updated.
     *
     * The callback lasts until the `unsetPackageInfoEventListener()` method is called.
     *
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/package.info
     *
     * @param eventCallback The method to be called when any change is made to the list of installed packages.
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`, `UnknownError`.
     */
    setPackageInfoEventListener(eventCallback: PackageInformationEventCallback): void;
    /**
     * Unsets the listener to stop receiving package notifications.
     *
     * Calling this function has no effect if listener is not set.
     *
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/package.info
     *
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`, `UnknownError`.
     */
    unsetPackageInfoEventListener(): void;
}
/**
 * This interface defines the general information available to an installed package.
 *
 */
export interface PackageInformation {
    /**
     * An attribute to store the identifier of a package.
     */
    readonly id: PackageId;
    /**
     * An attribute to store the package name.
     */
    readonly name: string;
    /**
     * An attribute to store the icon path of a package.
     *
     * The icon path of the package is the same as the icon path of the relevant application
     * (see the [iconPath](https://docs.tizen.org/application/web/api/3.0/device_api/tv/tizen/application.html#ApplicationInformation::iconPath) attribute of
     * the [ApplicationInformation](https://docs.tizen.org/application/web/api/3.0/device_api/tv/tizen/application.html#ApplicationInformation) interface).
     *
     * The relevant application is the one with the same
     * [packageId](https://docs.tizen.org/application/web/api/3.0/device_api/tv/tizen/application.html#ApplicationInformation::packageId) as the
     * [id](https://docs.tizen.org/application/web/api/3.0/device_api/tv/tizen/package.html#PackageInformation::id) of this package.
     */
    readonly iconPath: string;
    /**
     * An attribute to store the package version.
     */
    readonly version: string;
    /**
     * An attribute to store the total installed size(package + data) of a package.
     */
    readonly totalSize: number;
    /**
     * An attribute to store the current data size of a package.
     */
    readonly dataSize: number;
    /**
     * An attribute to store the latest installed or updated time of a package.
     */
    readonly lastModified: Date;
    /**
     * An attribute to store the author of a package.
     */
    readonly author: string;
    /**
     * An attribute to store the package description.
     */
    readonly description: string;
    /**
     * An attribute to store the application ID list of a package.
     */
    readonly appIds: ApplicationId[];
}
/**
 * This interface invokes the success callback with an array of `PackageInformation` objects as an input parameter when the installed package list is retrieved.
 * It is used in `tizen.package.getPackagesInfo()`.
 */
export interface PackageInformationArraySuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param informationArray A list of installed packages' information.
     */
    (informationArray: PackageInformation[]): void;
}
/**
 * This callback interface specifies subscriptions for any notification on the progress or completion of requests.
 *
 */
export interface PackageProgressCallback {
    /**
     * Called while the request is in progress.
     * @param id The package ID.
     * @param progress The progress in percentage.
     */
    onprogress(id: PackageId, progress: number): void;
    /**
     * Called when the request is completed.
     *
     *
     * @param id The package ID.
     */
    oncomplete(id: PackageId): void;
}
/**
 * This callback interface specifies methods that are invoked when a package is installed, updated, or uninstalled.
 */
export interface PackageInformationEventCallback {
    /**
     * Called when a package is installed.
     * @param info The information of the installed package.
     */
    oninstalled(info: PackageInformation): void;
    /**
     * Called when a package is updated.
     * @param info The information of the updated package.
     */
    onupdated(info: PackageInformation): void;
    /**
     * Called when a package is uninstalled.
     * @param id The ID of the uninstalled package.
     */
    onuninstalled(id: PackageId): void;
}

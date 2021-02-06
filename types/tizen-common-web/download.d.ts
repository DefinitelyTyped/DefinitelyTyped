/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 *
 * **Remark:** In order to access files, a proper privilege has to be defined additionally:
 * - for accessing only internal storage using this API, a privilege [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) must be provided,
 * - for accessing only external storage using this API, a privilege [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided,
 * - for accessing internal and external storage using this API, privileges [http://tizen.org/privilege/mediastorage](http://tizen.org/privilege/mediastorage) and [http://tizen.org/privilege/externalstorage](http://tizen.org/privilege/externalstorage) must be provided.
 *
 * For more information on the Download features, see [Download Guide](https://docs.tizen.org/application/web/guides/connectivity/download)
 *
 * @since 2.0
 *
 * @defAPIFeature http://tizen.org/feature/network.wifi
 * DownloadNetworkType `WIFI` can be available on a Wi-Fi enabled device. To guarantee that the download application runs on a device with the Wi-Fi feature, declare the following feature requirements in the config file:
 * @defAPIFeature http://tizen.org/feature/network.telephony
 * DownloadNetworkType `CELLULAR` can be available on a cellular-enabled device. To guarantee that the download application runs on a device with the cellular feature, declare the following feature requirements in the config file:
 * @defAPIFeature http://tizen.org/feature/network.ethernet
 * DownloadNetworkType `ALL` can be available on a ethernet-enabled device. To guarantee that the download application runs on a device with the ethernet network feature, declare the following feature requirements in the config file:
 */

import { WebAPIError } from './tizen';
/**
 * A set of HTTP header fields.
 *
 * The key / value type of each HTTP header field should be DOMString.
 *
 * @since 2.1
 */
export type DownloadHTTPHeaderFields = {
    [key: string]: string;
};

/**
 * An enumerator to indicate the state of a download operation.
 *
 * The following values are supported:
 *
 * - `QUEUED` - Indicates that the download operation is listed in a queue.
 * - `DOWNLOADING` - Indicates that the download operation is in progress.
 * - `PAUSED` - Indicates that the download operation is in a paused state by user request.
 * - `CANCELED` - Indicates that the download operation is canceled by user request.
 * - `COMPLETED` - Indicates that the download operation is in a completed state.
 * - `FAILED` - Indicates that the download operation has failed due to some reasons.
 * - `ABANDONED` - Indicates that the download operation has been abandoned.
 *
 * For more information on the Download features, see [Download Guide](https://docs.tizen.org/application/web/guides/connectivity/download)
 */
export enum DownloadState {
    QUEUED = 'QUEUED',
    DOWNLOADING = 'DOWNLOADING',
    PAUSED = 'PAUSED',
    CANCELED = 'CANCELED',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    ABANDONED = 'ABANDONED',
}

/**
 * An enumerator to indicate the network type.
 *
 * The following values are supported:
 *
 * - `CELLULAR` - Indicates that the download operation is allowed in the cellular network only.
 * - `WIFI` - Indicates that the download operation is allowed in the Wi-Fi network only.
 * - `ALL` - Indicates that the download operation is allowed in all network types.
 *
 * @since 2.1
 */
export enum DownloadNetworkType {
    CELLULAR = 'CELLULAR',
    WIFI = 'WIFI',
    ALL = 'ALL',
}

export interface DownloadRequestConstructor {
    /**
     * @param url An attribute to store the URL of the object to download.
     * @param destination? An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
     * If the destination is not specified or is an empty string, the file will be downloaded to the default storage: "Downloads". For more information, see Filesystem API
     * The default value is an empty string.
     * @param fileName? An attribute to store the file name for the specified URL.
     * If the file name is not given or is an empty string, the original file name from the URL is used.
     * The default value is an empty string.
     * @param networkType? An attribute to store the allowed network type.
     * If the network type is not given, all network types are allowed.
     * The default value is ***ALL***
     * @since 2.1
     * @param httpHeader? An attribute to store extra HTTP header fields.
     * @since 2.1
     * For more information about HTTP header fields, see [RFC-2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2)
     * The default value is an empty object.
     */
    new (
        url: string,
        destination?: string,
        fileName?: string,
        networkType?: DownloadNetworkType | 'CELLULAR' | 'WIFI' | 'ALL',
        httpHeader?: DownloadHTTPHeaderFields,
    ): DownloadRequest;
}

/**
 * The DownloadRequest interface defines the download request object.
 */
export class DownloadRequest {
    /**
     * @param url An attribute to store the URL of the object to download.
     * @param destination? An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
     * If the destination is not specified or is an empty string, the file will be downloaded to the default storage: "Downloads". For more information, see Filesystem API
     * The default value is an empty string.
     * @param fileName? An attribute to store the file name for the specified URL.
     * If the file name is not given or is an empty string, the original file name from the URL is used.
     * The default value is an empty string.
     * @param networkType? An attribute to store the allowed network type.
     * If the network type is not given, all network types are allowed.
     * The default value is ***ALL***
     * @since 2.1
     * @param httpHeader? An attribute to store extra HTTP header fields.
     * @since 2.1
     * For more information about HTTP header fields, see [RFC-2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2)
     * The default value is an empty object.
     */
    constructor(
        url: string,
        destination?: string,
        fileName?: string,
        networkType?: DownloadNetworkType | 'CELLULAR' | 'WIFI' | 'ALL',
        httpHeader?: DownloadHTTPHeaderFields,
    );
    url: string;
    destnation?: string;
    filename?: string;
    networkType?: DownloadNetworkType | 'CELLULAR' | 'WIFI' | 'ALL';
    httpHeader?: DownloadHTTPHeaderFields;
}

/**
 * The DownloadManager interface handles requests for downloading. Each step of a download operation is informed through callbacks.
 */
export interface DownloadManager {
    /**
     * Starts a download operation with the specified URL information.
     *
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/download
     *
     * @remark To check if ***CELLULAR*** type is supported, use ***tizen.systeminfo.getCapability("http://tizen.org/feature/network.telephony")***
     * @remark To check if ***WIFI*** type is supported, use ***tizen.systeminfo.getCapability("http://tizen.org/feature/network.wifi")***
     *
     * @param downloadRequest The URL and destination information of the object to download.
     * @param downloadCallback The method to invoke when the download state changes or an error occurs.
     *
     * @returns An identifier for each download operation.
     *   If the network is not available for downloading, the return value is -1 since Tizen 2.3.
     *
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, SecurityError, UnknownError
     *
     */
    start: (downloadRequest: DownloadRequest, downloadCallback?: DownloadCallback) => number;

    /**
     * Cancels an ongoing download operation that is specified by the `downloadId` parameter.
     * The abandoned download operation cannot be canceled and trying to do so will result in InvalidValuesError exception.
     *
     *
     * @param downloadId The ID of the ongoing download operation to stop.
     *
     * @throw WebAPIException InvalidValuesError, UnknownError
     *
     */
    cancel: (downloadId: number) => void;

    /**
     * Pauses an ongoing download operation that is specified by the `downloadId` parameter.
     * The paused download operation can be resumed later by the `resume()` method.
     *
     * The abandoned download operation cannot be paused and trying to do so will result in InvalidValuesError exception.
     *
     *
     * @param downloadId The ID of the ongoing download operation to pause.
     *
     * @throw WebAPIException InvalidValuesError, UnknownError
     *
     */
    pause: (downloadId: number) => void;

    /**
     * Abandons a download operation that is specified by the `downloadId` parameter.
     * The abandoned download operation cannot be resumed later with the `resume()` method.
     * Trying to resume this download operation will result in `InvalidValuesError` exception.
     * Calling the `pause()` method or the `cancel()` method with this `downloadId` will also result in `InvalidValuesError` exception.
     * All resources needed by download operation are freed.
     *
     * @since 5.5
     *
     * @param downloadId The ID of the ongoing download operation to abandon.
     *
     * @throw WebAPIException InvalidValuesError, UnknownError
     *
     */
    abandon: (downloadId: number) => void;

    /**
     * Resumes a paused download operation that is specified by the `downloadId` parameter.
     *
     * The abandoned download operation cannot be resumed and trying to do so will result in InvalidValuesError exception.
     * Resuming operation that is queued, completed or currently in progress will have no effect.
     *
     *
     * @param downloadId The ID of the paused download operation to resume.
     *
     * @throw WebAPIException InvalidValuesError, UnknownError
     *
     */
    resume: (downloadId: number) => void;

    /**
     * Gets the download state of an operation synchronously with the specified ID.
     *
     *
     * @param downloadId The ID to get the current state of the download operation.
     *
     * @returns The current download state of the specified ID.
     *
     * @throw WebAPIException NotFoundError, TypeMismatchError, InvalidValuesError, UnknownError
     *
     */
    getState: (downloadId: number) => DownloadState;

    /**
     * Gets the DownloadRequest object from a given ID.
     *
     *
     * @param downloadId The ID to get the download request information.
     *
     * @returns The download request information of the given ID.
     *
     * @throw WebAPIException NotFoundError, TypeMismatchError, InvalidValuesError, UnknownError
     *
     */
    getDownloadRequest: (downloadId: number) => DownloadRequest;

    /**
     * Gets the MIME type of the downloaded file.
     *
     *
     * @remark This function returns a valid MIME type when the download operation has been started
     *         and successfully retrieves the file header.
     *
     * @param downloadId The ID to get the MIME type information.
     *
     * @returns The MIME type of the downloaded file.
     *
     * @throw WebAPIException NotFoundError, TypeMismatchError, InvalidValuesError, UnknownError
     *
     */
    getMIMEType: (downloadId: number) => string;

    /**
     * Sets the download callback to the download operation of the given ID.
     * It's possible to change or register the listener of the download operation using the saved ID.
     *
     *
     * @param downloadId The ID to set the download callback.
     * @param downloadCallback The method to invoke when the download state changes or an error occurs.
     *
     * @throw WebAPIException NotFoundError, TypeMismatchError, InvalidValuesError, UnknownError
     *
     */
    setListener: (downloadId: number, downloadCallback: DownloadCallback) => void;
}

/**
 * The DownloadCallback defines notification callbacks for a download state change or progress.
 */
export interface DownloadCallback {
    /**
     * Called when a download is successful and it is called multiple times as the download progresses.
     * The interval between the `onprogress()` callback is platform-dependent. When the download is started, the `receivedSize` can be ***0***.
     *
     *
     * @param downloadId The ID of the corresponding download operation.
     * @param receivedSize The size of data received in bytes.
     * @param totalSize The total size of data to receive in bytes.
     */
    onprogress?(downloadId: number, receivedSize: number, totalSize: number): void;

    /**
     * Called when the download operation is paused by the `pause()` method.
     *
     *
     * @param downloadId The ID of the corresponding download operation.
     */
    onpaused?(downloadId: number): void;

    /**
     * Called when the download operation is canceled by the `cancel()` method.
     *
     *
     * @param downloadId The ID of the corresponding download operation.
     */
    oncanceled?(downloadId: number): void;

    /**
     * Called when the download operation is completed with the final full path or virtual path.
     * If the same file name already exists in the destination, it is changed according to the platform policy and delivered in this callback.
     *
     *
     * @param downloadId The ID of the corresponding download operation.
     * @param path The final full path or virtual path for the downloaded file.
     */
    oncompleted?(downloadId: number, path: string): void;

    /**
     * Called when the download operation fails.
     *
     *
     * @param downloadId The ID of the corresponding download operation.
     * @param error The reason for download failure.
     */
    onfailed?(downloadId: number, error: WebAPIError): void;
}

import { SuccessCallback, ErrorCallback } from './webapis';
/**
 * Defines a WebApi object instance of the Tizen Samsung TV Product API.
 * The webapis.widgetdata object enables access to WidgetData API functionality.
 * @privilegeLevel Public
 * @privilegeName http://developer.samsung.com/privilege/widgetdata
 * @since 2.3
 */
export interface WidgetDataManager {
    /**
     * Retrieves the plugin version number.
     * @returns string value of plugin's version
     * @throw WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/widgetdata
     * @since 2.3
     */
    getVersion: () => string;

    /**
     * Reads encrypted data.
     * @param onsuccess Callback method to invoke when the data is successfully read
     * @param onerror Callback method to invoke if an error occurs
     * NotFoundError, if no file was found in the local path.
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @return void
     * @throw WebAPIException TypeMismatchError
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/widgetdata
     * @since 4.0
     * @note If you need to share a file created by the widgetdata api with another c or c# app, you need to use one more privilege(http://tizen.org/privilege/appdir.shareddata)
     */
    read: (onsuccess: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Writes encrypted data.
     * @param data Data, up to 20000 characters
     * @param onsuccess Callback method to invoke when the data is successfully written
     * @param onerror Callback method to invoke if an error occurs
     * DOMStringSizeError, if any of the input parameters exceeds the limited size.
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @return void
     * @throw WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/widgetdata
     * @since 4.0
     * @note If you need to share a file created by the widgetdata api with another c or c# app, you need to use one more privilege(http://tizen.org/privilege/appdir.shareddata)
     */
    write: (data: string, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Removes encrypted data.
     * @param onsuccess Callback method to invoke when the data is successfully removed
     * @param onerror Callback method to invoke if an error occurs
     * NotFoundError, if no file was found in the local path.
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @return void
     * @throw WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/widgetdata
     * @since 4.0
     * @note If you need to share a file created by the widgetdata api with another c or c# app, you need to use one more privilege(http://tizen.org/privilege/appdir.shareddata)
     */
    remove: (onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;
}

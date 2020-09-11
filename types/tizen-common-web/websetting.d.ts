import { ErrorCallback, SuccessCallback } from './tizen';
/**
 * This Web Setting API defines a set of APIs that manages the setting states of the Web view in your Web application.
 * @since 2.2
 */
export interface WebSettingManager {
    /**
     * Sets the custom user agent string for your Web application.
     * This method allows the user to set the user agent string of the Web view in the Web application.
     * By default, the Web view in your application has the same user agent string as the Tizen browser on the device.
     * @param userAgent User agent to set for the Web view in your Web application.
     * @param successCallback To be invoked if the requested setting operation succeeds.
     * @param errorCallback To be invoked if the requested setting operation fails.
     * - `UnknownError` - If any error occurs while setting the user agent string.
     * - `InvalidValuesError` - If any of the input parameters contain an invalid value.
     * @throw WebAPIException TypeMismatchError
     * @since 2.2
     */
    setUserAgentString: (userAgent: string, successCallback?: SuccessCallback, errorCallback?: ErrorCallback) => void;

    /**
     * Sets the custom user agent string for your Web application.
     * The Web view in your Web application can store cookies like a browser.
     * This method allows the user to remove all the cookies saved for the Web application.
     * @param successCallback To be invoked if the requested delete operation succeeds.
     * @param errorCallback To be invoked if the requested delete operation fails.
     * - `UnknownError` - If any error occurs while deleting the cookies.
     * @throw WebAPIException TypeMismatchError
     * @warning http://tizen.org/privilege/websetting(public level privilege) MUST NOT be declared to use this API since 2.4.
     * @since 2.2
     */
    removeAllCookies: (successCallback?: SuccessCallback, errorCallback?: ErrorCallback) => void;
}

import { ErrorCallback } from './webapis';
/*
 * This module defines the SSO functionalities provided by the Tizen Samsung TV Product API.
 * @privilegeLevel Partner
 * @privilegeName http://developer.samsung.com/privilege/sso.partner
 * @since 2.3
 */
export interface SsoManager {
    /**
     * Retrieves the plugin version number.
     * @returns string The version of the sso
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     * @throw `TypeMismatchError`, `NotSupportedError`, `InvalidValuesError`, `SecurityError`, `UnknownError`
     * @since 2.3
     */
    getVersion: () => string;

    /**
     * Shows the SSO login or logout page, and returns the SSO login or logout information.
     * @param widgetName Widget name
     * @param onsuccess Callback method to invoke when the account page is shown
     * @param onerror Callback method to invoke if an error has occurred. It provides the status, error name, and error message.
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     * @throw `SecurityError`, `TypeMismatchError`, `NotSupportedError`, `InvalidValuesError`, `UnknownError`
     * @since 2.3
     */
    showAccountView: (widgetName: string, onsuccess: SsoCallDataSuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Retrieves the UID.
     * The UID is considered personally-identifying information and must be handled according to the privacy regulations for each country.
     * It must not be used for any purpose other than as an input parameter for the Samsung Checkout API.
     * Whenever the UID value is sent outside the TV device, a secure protocol, such as HTTPS, must be used.
     * @returns string UID
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     * @throw `TypeMismatchError`, `NotSupportedError`, `InvalidValuesError`, `InvalidStateError`, `SecurityError`, `UnknownError`
     * @since 2.3
     */
    getLoginUid: () => string;

    /**
     * Retrieves the SSO login status.
     * @returns  `SsoLoginState` A object of the current login state.
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     * @throw `TypeMismatchError`, `NotSupportedError`, `InvalidValuesError`, `SecurityError`, `UnknownError`
     * @since 2.3
     */
    getLoginStatus: () => SsoLoginState;

    /**
     * Shows the SSO account creation screen.
     * @param onsuccess Callback method to invoke when the CreateAccountPage is shown
     * @param onerror Callback method to invoke if an error has occurred. It provides the status, error name, and error message.
     * @privilegeLevel Partner
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     * @throw `TypeMismatchError`, `NotSupportedError`, `InvalidValuesError`, `UnknownError`
     * @since 2.3
     */
    showCreateAccountView: (onsuccess: SsoStringSuccessCallback, onerror?: ErrorCallback) => void;
}

/**
 * Defines a dictionary for call success data.
 * @param status Login status
 */
export interface SsoCallData {
    status: string;
}

/**
 * Defines a dictionary for login data.
 * @param bLogin Login status
 * @param id Login ID
 * @param authToken Login authentication token
 * @param uid Login UID
 * @param guid Login GUID
 */
export interface SsoData {
    bLogin: boolean;
    id: string;
    authToken: string;
    uid: string;
    guid: string;
}

/**
 * Defines the login success callback.
 */
export interface SsoCallDataSuccessCallback {
    (data: SsoCallData): void;
}

/**
 * Defines the success callback for string data.
 */
export interface SsoDataSuccessCallback {
    (data: SsoData): void;
}

/**
 * Defines the success callback for number data.
 */
export interface SsoStringSuccessCallback {
    (data: string): void;
}

/**
 * Defines constants for login status.
 * - `SSO_NOT_LOGIN` - Test NOT LOGIN
 * - `SSO_LOGIN` - Test Login
 */
export enum SsoLoginState {
    /**
     * Not logged in
     */
    SSO_NOT_LOGIN = 0,
    /**
     * Logged in
     */
    SSO_LOGIN = 1,
}

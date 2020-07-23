/**
 * This module defines the application information retrieval functionalities provided by the Tizen Samsung TV Product API.
 * @since 2.3
 */

import { SuccessCallback, ErrorCallback } from './webapis';
export interface AppCommonManager {
    AppCommonScreenSaverState: {
        /**
         * Screensaver off
         * @since 2.3
         */
        SCREEN_SAVER_OFF: 0;
        /**
         * Screensaver on
         * @since 2.3
         */
        SCREEN_SAVER_ON: 1;
    };
    /**
     * Retrieves the plugin version number.
     * @returns string Plugin version
     * @since 2.3
     */
    getVersion(): string;

    /**
     * Sets the screensaver.
     * @param state Screensaver state
     * @param onsuccess Callback method to invoke when the screensaver is set successfully
     * @param onerror Callback method to invoke if an error occurs
     * @throw WebAPIException `TypeMismatchError`, `InvalidValuesError`
     * @since 2.3
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    setScreenSaver(state: AppCommonScreenSaverState, onsuccess?: SuccessCallback, onerror?: ErrorCallback): void;
}

/**
 * Defines constants for screensaver states.
 * @since 2.3
 */

export enum AppCommonScreenSaverState {
    /**
     * Screensaver off
     * @since 2.3
     */
    SCREEN_SAVER_OFF = 0,

    /**
     * Screensaver on
     * @since 2.3
     */
    SCREEN_SAVER_ON = 1,
}

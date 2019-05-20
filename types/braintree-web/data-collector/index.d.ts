/** @module braintree-web/data-collector */
import Client from '../client';
import { callback } from '../common';

export interface DataCollectorCreateOptions {
    client?: Client;
    authorization?: string;
    kount?: boolean;
    paypal?: boolean;
}

declare class DataCollector {
    /**
     * @description Creates a DataCollector instance. Requires advanced fraud protection to be enabled in the Braintree gateway. Contact our [support team](mailto:support@braintreepayments.com) to configure your Kount ID.
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {boolean} [options.kount] If true, Kount fraud data collection is enabled.
     * @param {boolean} [options.paypal] If true, PayPal fraud data collection is enabled.
     * @param {callback} callback The second argument, `data`, is the {@link DataCollector} instance.
     * @returns {void}
     */
    static create(
        options: DataCollectorCreateOptions,
        callback: callback<DataCollector>
    ): void;
    static create(options: DataCollectorCreateOptions): Promise<DataCollector>;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    static VERSION: string;

    /**
     * JSON string to pass with server transactions.
     */
    deviceData: string;

    /**
     * The device data as an object instead of a string.
     */
    rawDeviceData: object;

    /**
     * @description Cleanly remove all event handlers and DOM nodes that were added.
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback?: callback<void>): void;
    teardown(): Promise<void>;
}

export default DataCollector;

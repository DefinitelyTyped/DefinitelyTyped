import Client from '../client';
import { callback } from '../common';

/** @module braintree-web/data-collector */
export default interface DataCollector {
  /**
   * @static
   * @function create
   * @description Creates a DataCollector instance. Requires advanced fraud protection to be enabled in the Braintree gateway. Contact our [support team](mailto:support@braintreepayments.com) to configure your Kount ID.
   * @param {object} options Creation options:
   * @param {Client} options.client A {@link Client} instance.
   * @param {boolean} [options.kount] If true, Kount fraud data collection is enabled.
   * @param {boolean} [options.paypal] If true, PayPal fraud data collection is enabled.
   * @param {callback} callback The second argument, `data`, is the {@link DataCollector} instance.
   * @returns {void}
   */
  create(options: { client: Client, kount: boolean, paypal: boolean }): Promise<DataCollector>;
  create(options: { client: Client, kount: boolean, paypal: boolean }, callback: callback): void;

  /**
   * @description The current version of the SDK, i.e. `3.0.2`.
   * @type {string}
   */
  VERSION: string;

  /**
   * @memberof DataCollector
   * @name deviceData
   * @type string
   * @description JSON string to pass with server transactions.
   * @instance
   */
  deviceData: string;

  /**
   * @memberof DataCollector
   * @name teardown
   * @function
   * @description Cleanly remove all event handlers and DOM nodes that were added.
   * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
   * @instance
   * @returns {void}
   */
  teardown(callback?: callback): void;
}
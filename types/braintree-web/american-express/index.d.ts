/**
 * @module braintree-web/american-express
 * @description This module is for use with Amex Express Checkout. To accept American Express cards, use Hosted Fields.
 */
import Client from '../client';
import { callback } from '../common';

export interface AmericanExpressCreateOptions {
  client?: Client;
  authorization?: string;
}

declare class AmericanExpress {
  /**
   * @param {object} options Creation options:
   * @param {Client} [options.client] A {@link Client} instance.
   * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
   * @param {callback} [callback] The second argument, `data`, is the {@link AmericanExpress} instance. If no callback is provided, `create` returns a promise that resolves with the {@link AmericanExpress} instance.
   * @returns {Promise|void} Returns a promise if no callback is provided.
   */
  static create(options: AmericanExpressCreateOptions, callback: callback<AmericanExpress>) : void;
  static create(options: AmericanExpressCreateOptions) : Promise<AmericanExpress>;

  /**
   * @description The current version of the SDK, i.e. `3.0.2`.
   */
  static VERSION: string;

  /**
   * Gets the rewards balance associated with a Braintree nonce.
   * @param {object} options Request options
   * @param {string} options.nonce An existing Braintree nonce.
   * @param {callback} [callback] The second argument, <code>data</code>, is the returned server data. If no callback is provided, `getRewardsBalance` returns a promise that resolves with the server data.
   * @example
   * var americanExpress = require('braintree-web/american-express');
   *
   * americanExpress.create({client: clientInstance}, function (createErr, americanExpressInstance) {
   *   var options = {nonce: existingBraintreeNonce};
   *   americanExpressInstance.getRewardsBalance(options, function (getErr, payload) {
   *     if (getErr || payload.error) {
   *       // Handle error
   *       return;
   *     }
   *
   *     console.log('Rewards amount: ' + payload.rewardsAmount);
   *   });
   * });
   */
  getRewardsBalance(options: { nonce: string }, callback: callback): void;
  getRewardsBalance(options: { nonce: string }): Promise<any>;

  /**
   * Gets the Express Checkout nonce profile given a nonce from American Express.
   * @param {object} options Request options
   * @param {string} options.nonce An existing nonce from American Express (note that this is <em>not</em> a nonce from Braintree).
   * @param {callback} [callback] The second argument, <code>data</code>, is the returned server data. If no callback is provided, `getExpressCheckoutProfile` returns a promise that resolves with the server data.
   * @returns {Promise|void} Returns a promise if no callback is provided.
   * @example
   * var americanExpress = require('braintree-web/american-express');
   *
   * americanExpress.create({client: clientInstance}, function (createErr, americanExpressInstance) {
   *   var options = {nonce: existingAmericanExpressNonce};
   *   americanExpressInstance.getExpressCheckoutProfile(options, function (getErr, payload) {
   *     if (getErr) {
   *       // Handle error
   *       return;
   *     }
   *
   *     console.log('Number of cards: ' + payload.amexExpressCheckoutCards.length);
   *   });
   * });
   */
  getExpressCheckoutProfile(options: { nonce: string }, callback: callback): void;
  getExpressCheckoutProfile(options: { nonce: string }): Promise<any>;

  /**
 * Cleanly tear down anything set up by {@link module:braintree-web/american-express.create|create}.
 * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
 * @example
 * americanExpressInstance.teardown();
 * @example <caption>With callback</caption>
 * americanExpressInstance.teardown(function () {
 *   // teardown is complete
 * });
 * @returns {Promise|void} Returns a promise if no callback is provided.
 */
  teardown(callback: callback<void>): void;
  teardown(): Promise<void>
}

export default AmericanExpress;
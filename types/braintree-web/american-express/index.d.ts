import Client from '../client';
import { callback } from '../common';

/**
 * @module braintree-web/american-express
 * @description This module is for use with Amex Express Checkout. To accept American Express cards, use Hosted Fields.
 */
export default interface AmericanExpress {
  /**
   * @static
   * @function create
   * @param {object} options Creation options:
   * @param {Client} options.client A {@link Client} instance.
   * @param {callback} callback The second argument, `data`, is the {@link AmericanExpress} instance.
   * @returns {void}
   */
  create: (options: { client: Client }, callback: callback) => void;

  /**
   * @description The current version of the SDK, i.e. `3.0.2`.
   * @type {string}
   */
  VERSION: string;

  /**
   * Gets the rewards balance associated with a Braintree nonce.
   * @public
   * @param {object} options Request options
   * @param {string} options.nonce An existing Braintree nonce.
   * @param {callback} callback The second argument, <code>data</code>, is the returned server data.
   * @returns {void}
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

  /**
   * Gets the Express Checkout nonce profile given a nonce from American Express.
   * @public
   * @param {object} options Request options
   * @param {string} options.nonce An existing nonce from American Express (note that this is <em>not</em> a nonce from Braintree).
   * @param {callback} callback The second argument, <code>data</code>, is the returned server data.
   * @returns {void}
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
}
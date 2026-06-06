import { Client } from "./client";
import { callback } from "./core";

/**
 * @description This module is for use with Amex Express Checkout. To accept American Express cards, use Hosted Fields.
 */
export interface AmericanExpress {
    /**
     * Gets the rewards balance associated with a Braintree nonce.     * @example
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
     * Gets the Express Checkout nonce profile given a nonce from American Express.     * @example
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

export function create(options: { client: Client }): Promise<AmericanExpress>;
export function create(options: { client: Client }, callback: callback<AmericanExpress>): void;

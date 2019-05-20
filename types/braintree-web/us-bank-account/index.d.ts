  /**
 * @module braintree-web/us-bank-account
 * @description This module is for accepting payments of US bank accounts.
 */
import Client from '../client';
import { callback } from '../common';

export default interface USBankAccount {
  /**
   * @static
   * @function create
   * @param {object} options Creation options:
   * @param {Client} options.client A {@link Client} instance.
   * @param {callback} callback The second argument, `data`, is the {@link USBankAccount} instance.
   * @returns {void}
   */
  create: (options: { client: Client }, callback: callback) => void;

  /**
   * @description The current version of the SDK, i.e. `{@pkg version}`.
   * @type {string}
   */
  VERSION: string;

  /**
   * Tokenizes bank information to return a payment method nonce. You can tokenize bank details by providing information like account and routing numbers. You can also tokenize with a bank login UI that prompts the customer to log into their bank account.
   * @public
   * @param {object} options All tokenization options for the US Bank Account component.
   * @param {string} options.mandateText A string for proof of customer authorization. For example, `'I authorize Braintree to debit my bank account on behalf of My Online Store.'`.
   * @param {object} [options.bankDetails] Bank detail information (such as account and routing numbers). `bankDetails` or `bankLogin` option must be provided.
   * @param {string} options.bankDetails.routingNumber The customer's bank routing number, such as `'307075259'`.
   * @param {string} options.bankDetails.accountNumber The customer's bank account number, such as `'999999999'`.
   * @param {string} options.bankDetails.accountType The customer's bank account type. Must be `'checking'` or `'savings'`.
   * @param {string} options.bankDetails.accountHolderName The customer's bank account holder name, such as `'Rosetta Fox'`.
   * @param {object} options.bankDetails.billingAddress The customer's billing address.
   * @param {string} options.bankDetails.billingAddress.streetAddress The street address for the customer's billing address, such as `'123 Fake St'`.
   * @param {string} [options.bankDetails.billingAddress.extendedAddress] The extended street address for the customer's billing address, such as `'Apartment B'`.
   * @param {string} options.bankDetails.billingAddress.locality The locality for the customer's billing address. This is typically a city, such as `'San Francisco'`.
   * @param {string} options.bankDetails.billingAddress.region The region for the customer's billing address. This is typically a state, such as `'CA'`.
   * @param {string} options.bankDetails.billingAddress.postalCode The postal code for the customer's billing address. This is typically a ZIP code, such as `'94119'`.
   * @param {object} [options.bankLogin] Bank login information. `bankLogin` or `bankDetails` option must be provided.
   * @param {string} options.bankLogin.displayName Display name for the bank login UI, such as `'My Store'`.
   * @param {callback} callback The second argument, <code>data</code>, is a {@link USBankAccount~tokenizePayload|tokenizePayload}.
   * @returns {void}
   * @example
   * <caption>Tokenizing raw bank details</caption>
   * submitButton.addEventListener('click', function (event) {
   *   var routingNumberInput = document.querySelector('input#routing-number');
   *   var accountNumberInput = document.querySelector('input#account-number');
   *   var accountHolderNameInput = document.querySelector('input#account-holder-name');
   *   var accountTypeInput = document.querySelector('input[name="account-type"]:checked');
   *   var billingAddressStreetInput = document.querySelector('input#street-address');
   *   var billingAddressExtendedInput = document.querySelector('input#extended-address');
   *   var billingAddressLocalityInput = document.querySelector('input#locality');
   *   var billingAddressRegionSelect = document.querySelector('select#region');
   *   var billingAddressPostalInput = document.querySelector('input#postal-code');
   *
   *   event.preventDefault();
   *
   *   usBankAccountInstance.tokenize({
   *     bankDetails: {
   *       routingNumber: routingNumberInput.value,
   *       accountNumber: accountNumberInput.value,
   *       accountHolderName: accountHolderNameInput.value,
   *       accountType: accountTypeInput.value,
   *       billingAddress: {
   *         streetAddress: billingAddressStreetInput.value,
   *         extendedAddress: billingAddressExtendedInput.value,
   *         locality: billingAddressLocalityInput.value,
   *         region: billingAddressRegionSelect.value,
   *         postalCode: billingAddressPostalInput.value
   *       }
   *     },
   *     mandateText: 'I authorize Braintree to debit my bank account on behalf of My Online Store.'
   *   }, function (tokenizeErr, tokenizedPayload) {
   *     if (tokenizeErr) {
   *       console.error('There was an error tokenizing the bank details.');
   *       return;
   *     }
   *
   *     // Send tokenizePayload.nonce to your server here!
   *   });
   * });
   * @example
   * <caption>Tokenizing with bank login UI</caption>
   * bankLoginButton.addEventListener('click', function (event) {
   *   event.preventDefault();
   *
   *   usBankAccountInstance.tokenize({
   *     bankLogin: {
   *       displayName: 'My Online Store'
   *     },
   *     mandateText: 'I authorize Braintree to debit my bank account on behalf of My Online Store.'
   *   }, function (tokenizeErr, tokenizedPayload) {
   *     if (tokenizeErr) {
   *       console.error('There was an error tokenizing the bank details.');
   *       return;
   *     }
   *
   *     // Send tokenizePayload.nonce to your server here!
   *   });
   * });
   */
  tokenize(options: { mandateText: string, bankDetails: any, bankLogin: any }, callback: callback): void;

  /**
   * Cleanly tear down anything set up by {@link module:braintree-web/us-bank-account.create|create}.
   * @public
   * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
   * @returns {void}
   */
  teardown(callback?: callback): void;
}

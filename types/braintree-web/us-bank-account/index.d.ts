/**
 * @module braintree-web/us-bank-account
 * @description This module is for accepting payments of US bank accounts.
 */
import Client from '../client';
import { callback } from '../common';

/**
 * @property {string} streetAddress The street address for the customer's billing address, such as `'123 Fake St'`.
 * @property {string} [extendedAddress] The extended street address for the customer's billing address, such as `'Apartment B'`.
 * @property {string} locality The locality for the customer's billing address. This is typically a city, such as `'San Francisco'`.
 * @property {string} region The region for the customer's billing address. This is typically a state, such as `'CA'`.
 * @property {string} postalCode The postal code for the customer's billing address. This is typically a ZIP code, such as `'94119'`.
 */
export interface USBankAccountAddress {
    streetAddress: string;
    extendedAddress?: string;
    locality: string;
    region: string;
    postalCode: string;
}

/**
 * @property {string} displayName Display name for the bank login UI, such as `'My Store'`.
 * @property {string} ownershipType The customer's bank account ownership type. Must be `'personal'` or `'business'`.
 * @property {string} [firstName] The customer's first name. Required when account ownership type is `personal`.
 * @property {string} [lastName] The customer's last name. Required when account ownership type is `personal`.
 * @property {string} [businessName] The customer's business name. Required when account ownership type is `business`.
 * @property {USBankAccountAddress} billingAddress The customer's billing address.
 */
export type USBankAccountLogin =
    | {
          displayName: string;
          ownershipType: 'personal';
          firstName: string;
          lastName: string;
          billingAddress: USBankAccountAddress;
      }
    | {
          displayName: string;
          ownershipType: 'business';
          businessName: string;
          billingAddress: USBankAccountAddress;
      };

export type USBankAccountDetails =
    | {
          routingNumber: string;
          accountNumber: string;
          accountType: 'checking' | 'savings';
          ownershipType: 'personal';
          firstName: string;
          lastName: string;
          billingAddress: USBankAccountAddress;
      }
    | {
          routingNumber: string;
          accountNumber: string;
          accountType: 'checking' | 'savings';
          ownershipType: 'business';
          businessName: string;
          billingAddress: USBankAccountAddress;
      };

/**
 * Tokenizes bank information to return a payment method nonce. You can tokenize bank details by providing information like account and routing numbers. You can also tokenize with a bank login UI that prompts the customer to log into their bank account.
 * @public
 * @param {object}  All tokenization options for the US Bank Account component.
 * @param {string} mandateText A string for proof of customer authorization. For example, `'I authorize Braintree to debit my bank account on behalf of My Online Store.'`.
 * @param {USBankAccountDetails} [bankDetails] Bank detail information (such as account and routing numbers). `bankDetails` or `bankLogin` option must be provided.
 * @param {USBankAccountLogin} [bankLogin] Bank login information. `bankLogin` or `bankDetails` option must be provided.
 * @param {callback} [callback] The second argument, <code>data</code>, is a {@link USBankAccount~tokenizePayload|tokenizePayload}. If no callback is provided, `tokenize` returns a promise that resolves with {@link USBankAccount~tokenizePayload|tokenizePayload}.
 * @returns {Promise|void} Returns a promise if no callback is provided.
 */
export type USBankAccountTokenizeOptions =
    | {
          mandateText: string;
          bankDetails: USBankAccountDetails;
      }
    | {
          mandateText: string;
          bankLogin: USBankAccountLogin;
      };

/**
 * @property {string} nonce The payment method nonce.
 * @property {string} type The payment method type, always `us_bank_account`.
 * @property {object} details Additional account details. Currently empty.
 */
export interface USBankAccountTokenizePayload {
    nonce: string;
    type: string;
    details: {};
}

export interface USBankAccountCreateOptions {
    client?: Client;
    authorization?: string;
}

declare class USBankAccount {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {callback} callback The second argument, `data`, is the {@link USBankAccount} instance.
     * @returns {void}
     */
    static create(
        options: USBankAccountCreateOptions,
        callback: callback<USBankAccount>
    ): void;
    static create(options: USBankAccountCreateOptions): Promise<USBankAccount>;

    /**
     * @description The current version of the SDK, i.e. `{@pkg version}`.
     * @type {string}
     */
    static VERSION: string;

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
    tokenize(
        options: USBankAccountTokenizeOptions,
        callback: callback<USBankAccountTokenizePayload>
    ): void;
    tokenize(
        options: USBankAccountTokenizeOptions
    ): Promise<USBankAccountTokenizePayload>;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/us-bank-account.create|create}.
     * @public
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback: callback<void>): void;
    teardown(): Promise<void>;
}

export default USBankAccount;

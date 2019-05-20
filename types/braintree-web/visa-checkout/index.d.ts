import Client from '../client';
import { callback, BinData } from '../common';

/**
 * Visa Checkout Address object.
 * @property {string} countryCode The customer's country code.
 * @property {string} extendedAddress The customer's extended address.
 * @property {string} firstName The customer's first name.
 * @property {string} lastName The customer's last name.
 * @property {string} locality The customer's locality.
 * @property {string} postalCode The customer's postal code.
 * @property {string} region The customer's region.
 * @property {string} streetAddress The customer's street address.
 * @property {string} phoneNumber The customer's phone number.
 */
export interface VisaCheckoutAddress {
    countryCode: string;
    extendedAddress: string;
    firstName: string;
    lastName: string;
    locality: string;
    postalCode: string;
    region: string;
    streetAddress: string;
    phoneNumber: string;
}

/**
 * Visa Checkout UserData object.
 * @property {string} userEmail The customer's email address.
 * @property {string} userFirstName The customer's first name.
 * @property {string} userLastName The customer's last name.
 * @property {string} userFullName The customer's full name.
 * @property {string} userName The customer's username.
 */
export interface VisaCheckoutUserData {
    userEmail: string;
    userFirstName: string;
    userLastName: string;
    userFullName: string;
    userName: string;
}

/**
 * Visa Checkout tokenize payload.
 * @property {string} nonce The payment method nonce.
 * @property {object} details Additional account details.
 * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
 * @property {string} details.lastFour Last four digits of card number.
 * @property {string} details.lastTwo Last two digits of card number.
 * @property {string} description A human-readable description.
 * @property {string} type The payment method type, always `VisaCheckoutCard`.
 * @property {VisaCheckout~Address} billingAddress The customer's billing address.
 * @property {VisaCheckout~Address} shippingAddress The customer's shipping address.
 * @property {VisaCheckout~UserData} userData Information about the customer.
 * @property {object} binData Information about the card based on the bin.
 * @property {string} binData.commercial Possible values: 'Yes', 'No', 'Unknown'.
 * @property {string} binData.countryOfIssuance The country of issuance.
 * @property {string} binData.debit Possible values: 'Yes', 'No', 'Unknown'.
 * @property {string} binData.durbinRegulated Possible values: 'Yes', 'No', 'Unknown'.
 * @property {string} binData.healthcare Possible values: 'Yes', 'No', 'Unknown'.
 * @property {string} binData.issuingBank The issuing bank.
 * @property {string} binData.payroll Possible values: 'Yes', 'No', 'Unknown'.
 * @property {string} binData.prepaid Possible values: 'Yes', 'No', 'Unknown'.
 * @property {string} binData.productId The product id.
 */
export interface VisaCheckoutTokenizePayload {
    nonce: string;
    details: {
        cardType: string;
        lastFour: string;
        lastTwo: string;
    };
    description: string;
    type: 'VisaCheckoutCard';
    billingAddress: VisaCheckoutAddress;
    shippingAddress: VisaCheckoutAddress;
    userData: VisaCheckoutUserData;
    binData: BinData;
}

declare class VisaCheckout {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {callback} [callback] The second argument, `data`, is the {@link VisaCheckout} instance. If no callback is provided, `create` returns a promise that resolves with the {@link VisaCheckout} instance.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    create(
        options: { client?: Client; authorization?: string },
        callback: callback<VisaCheckout>
    ): void;
    create(options: {
        client?: Client;
        authorization?: string;
    }): Promise<VisaCheckout>;

    /**
     * Creates an `initOptions` object from the passed `options`, applying properties that Braintree needs to transact Visa Checkout.
     *
     * Braintree will apply these properties if they do not exist on the given `options`:
     *  - `apikey`
     *  - `externalClientId`
     *  - `settings.payment.cardBrands`
     *
     * Braintree will overwrite `settings.dataLevel = 'FULL'` to access the full payment method.
     * @public
     * @param {object} options The base `initOptions` that will be used to init Visa Checkout.
     * @param {string} [options.apikey] The API key used to initialize Visa Checkout. When not supplied, Braintree will set this property.
     * @param {string} [options.externalClientId] The external client ID key used to initialize Visa Checkout. When not supplied, Braintree will set this property.
     * @param {object} [options.settings] The settings object used to initialize Visa Checkout.
     * @param {string} [options.settings.dataLevel] The data level used to initialize Visa Checkout. Braintree will overwrite this property to 'FULL'.
     * @param {object} [options.settings.payment] The payment object used to initialize Visa Checkout.
     * @param {string[]} [options.settings.payment.cardBrands] The card brands that Visa Checkout will allow the customer to pay with. When not supplied, Braintree will set this property.
     * @returns {object} `initOptions` The `initOptions` that Visa Checkout should be initialized with.
     */
    createInitOptions(options: {
        apiKey?: string;
        externalClientId?: string;
        settings: {
            dataLevel: string;
            payment: {
                cardBrands: string[];
            };
        };
    }): any;

    /**
     * Tokenizes the Visa Checkout payload, returning a payment method nonce.
     * @public
     * @param {object} payment The object that Visa Checkout supplies on `payment.success`.
     * @param {string} payment.callid Visa Checkout transaction ID associated with this payment.
     * @param {string} payment.encKey The encrypted key used to decrypt the payment data.
     * @param {string} payment.encPaymentData The encrypted payment data.
     * @param {callback} [callback] The second argument, <code>tokenizePayload</code> is a {@link VisaCheckout~tokenizePayload|tokenizePayload}. If no callback is provided, `tokenize` returns a promise that resolves with the {@link VisaCheckout~tokenizePayload|tokenizePayload}.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    tokenize(
        payment: { callId: string; encKey: string; encPaymentData: string },
        callback: callback<VisaCheckoutTokenizePayload>
    ): void;
    tokenize(payment: {
        callId: string;
        encKey: string;
        encPaymentData: string;
    }): Promise<VisaCheckoutTokenizePayload>;
}

export default VisaCheckout;

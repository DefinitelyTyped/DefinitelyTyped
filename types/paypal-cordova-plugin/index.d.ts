// Type definitions for PayPal-Cordova-Plugin 3.1.10
// Project: https://github.com/paypal/PayPal-Cordova-Plugin
// Definitions by: Justin Unterreiner <https://github.com/Justin-Credible>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//#region paypal-mobile-js-helper.js

/**
 * The PayPalItem class defines an optional itemization for a payment.
 *
 * @see https://developer.paypal.com/docs/api/#item-object for more details.
 */
declare class PayPalItem {

    /**
     * @param name Name of the item. 127 characters max.
     * @param quantity Number of units. 10 characters max.
     * @param price Unit price for this item 10 characters max.
     * May be negative for "coupon" etc.
     * @param currency ISO standard currency code.
     * @param sku The stock keeping unit for this item. 50 characters max (optional).
     */
    constructor(name: string, quantity: number, price: string, currency: string, sku?: string);

    /**
     * Name of the item. 127 characters max.
     */
    name: string;

    /**
     * Number of units. 10 characters max.
     */
    quantity: number;

    /**
     * Unit price for this item 10 characters max.
     * May be negative for "coupon" etc.
     */
    price: string;

    /**
     * ISO standard currency code.
     */
    currency: string;

    /**
     * The stock keeping unit for this item. 50 characters max (optional).
     */
    sku: string;
}

/**
 * The PayPalPaymentDetails class defines optional amount details.
 *
 * @see https://developer.paypal.com/webapps/developer/docs/api/#details-object for more details.
 */
declare class PayPalPaymentDetails {

    /**
     * @param subtotal Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param shipping Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param tax Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    constructor(subtotal: string, shipping: string, tax: string);

    /**
     * Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     */
    subtotal: string;

    /**
     * Amount charged for shipping. 10 characters max with support for 2 decimal places.
     */
    shipping: string;

    /**
     * Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    tax: string;
}

/**
 * Convenience constructor. Returns a PayPalPayment with the specified amount, currency code, and short description.
 */
declare class PayPalPayment {

    /**
     * @param amount The amount of the payment.
     * @param currencyCode The ISO 4217 currency for the payment.
     * @param shortDescription A short descripton of the payment.
     * @param intent • "Sale" for an immediate payment.
     * • "Auth" for payment authorization only, to be captured separately at a later time.
     * • "Order" for taking an order, with authorization and capture to be done separately at a later time.
     * @param details PayPalPaymentDetails object (optional).
     */
    constructor(amount: string, currency: string, shortDescription: string, intent: string, details?: PayPalPaymentDetails);

    /**
     * The amount of the payment.
     */
    amount: string;

    /**
     * The ISO 4217 currency for the payment.
     */
    currency: string;

    /**
     * A short descripton of the payment.
     */
    shortDescription: string;

    /**
     * • "Sale" for an immediate payment.
     * • "Auth" for payment authorization only, to be captured separately at a later time.
     * • "Order" for taking an order, with authorization and capture to be done separately at a later time.
     */
    intent: string;

    /**
     * PayPalPaymentDetails object (optional).
     */
    details: PayPalPaymentDetails;

    /**
     * Optional invoice number, for your tracking purposes. (up to 256 characters).
     */
    invoiceNumber: string;

    /**
     * Optional text, for your tracking purposes. (up to 256 characters).
     */
    custom: string;

    /**
     * Optional text which will appear on the customer's credit card statement. (up to 22 characters).
     */
    softDescriptor: string;

    /**
     * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com, for your tracking purposes.
     */
    bnCode: string;

    /**
     * Optional array of PayPalItem objects.
     * @see PayPalItem
     * @note If you provide one or more items, be sure that the various prices correctly sum to the payment `amount` or to `paymentDetails.subtotal`.
     */
    items: PayPalItem[];

    /**
     * Optional customer shipping address, if your app wishes to provide this to the SDK.
     * @note make sure to set `payPalShippingAddressOption` in PayPalConfiguration to 1 or 3.
     */
    shippingAddress: PayPalShippingAddress;
}

declare class PayPalShippingAddress {

    /**
     * @param recipientName Name of the recipient at this address. 50 characters max.
     * @param line1 Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param line2 Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param city City name. 50 characters max.
     * @param state 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param postalCode ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param countryCode 2-letter country code. 2 characters max.
     */
    constructor(recipientName: string, line1: string, line2: string, city: string, state: string, postalCode: string, countryCode: string);

    /**
     * Name of the recipient at this address. 50 characters max.
     */
    recipientName: string;

    /**
     * Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     */
    line1: string;

    /**
     * Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     */
    line2: string;

    /**
     * City name. 50 characters max.
     */
    city: string;

    /**
     * 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     */
    state: string;

    /**
     * ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     */
    postalCode: string;

    /**
     * 2-letter country code. 2 characters max.
     */
    countryCode: string;
}

declare class PayPalConfiguration {

    /**
     * @param options A set of options to use. Any options not specified will assume default values.
     */
    constructor(options?: PayPalConfigurationOptions);

    /**
     * Will be overridden by email used in most recent PayPal login.
     */
    defaultUserEmail: string;

    /**
     * Will be overridden by phone country code used in most recent PayPal login
     */
    defaultUserPhoneCountryCode: string;

    /**
     * Will be overridden by phone number used in most recent PayPal login.
     * @note If you set defaultUserPhoneNumber, be sure to also set defaultUserPhoneCountryCode.
     */
    defaultUserPhoneNumber: string;

    /**
     * Your company name, as it should be displayed to the user
     * when requesting consent via a PayPalFuturePaymentViewController.
     */
    merchantName: string;

    /**
     * URL of your company's privacy policy, which will be offered to the user
     * when requesting consent via a PayPalFuturePaymentViewController.
     */
    merchantPrivacyPolicyURL: string;

    /**
     * URL of your company's user agreement, which will be offered to the user
     * when requesting consent via a PayPalFuturePaymentViewController.
     */
    merchantUserAgreementURL: string;

    /**
     * If set to false, the SDK will only support paying with PayPal, not with credit cards.
     * This applies only to single payments (via PayPalPaymentViewController).
     * Future payments (via PayPalFuturePaymentViewController) always use PayPal.
     * Defaults to true.
     */
    acceptCreditCards: boolean;

    /**
     * For single payments, options for the shipping address.
     *
     * - 0 - PayPalShippingAddressOptionNone: no shipping address applies.
     *
     * - 1 - PayPalShippingAddressOptionProvided: shipping address will be provided by your app,
     *   in the shippingAddress property of PayPalPayment.
     *
     * - 2 - PayPalShippingAddressOptionPayPal: user will choose from shipping addresses on file
     *   for their PayPal account.
     *
     * - 3 - PayPalShippingAddressOptionBoth: user will choose from the shipping address provided by your app,
     *   in the shippingAddress property of PayPalPayment, plus the shipping addresses on file for the user's PayPal account.
     *
     * Defaults to 0 (PayPalShippingAddressOptionNone).
     */
    payPalShippingAddressOption: number;

    /**
     * If set to true, then if the user pays via their PayPal account,
     * the SDK will remember the user's PayPal username or phone number;
     * if the user pays via their credit card, then the SDK will remember
     * the PayPal Vault token representing the user's credit card.
     *
     * If set to false, then any previously-remembered username, phone number, or
     * credit card token will be erased, and subsequent payment information will
     * not be remembered.
     *
     * Defaults to true.
     */
    rememberUser: boolean;

    /**
     * If not set, or if set to nil, defaults to the device's current language setting.
     *
     * Can be specified as a language code ("en", "fr", "zh-Hans", etc.) or as a locale ("en_AU", "fr_FR", "zh-Hant_HK", etc.).
     * If the library does not contain localized strings for a specified locale, then will fall back to the language. E.g., "es_CO" -> "es".
     * If the library does not contain localized strings for a specified language, then will fall back to American English.
     *
     * If you specify only a language code, and that code matches the device's currently preferred language,
     * then the library will attempt to use the device's current region as well.
     * E.g., specifying "en" on a device set to "English" and "United Kingdom" will result in "en_GB".
     *
     * These localizations are currently included:
     * da,de,en,en_AU,en_GB,en_SV,es,es_MX,fr,he,it,ja,ko,nb,nl,pl,pt,pt_BR,ru,sv,tr,zh-Hans,zh-Hant_HK,zh-Hant_TW.
     */
    languageOrLocale: string;

    /**
     * Normally, the SDK blurs the screen when the app is backgrounded,
     * to obscure credit card or PayPal account details in the iOS-saved screenshot.
     * If your app already does its own blurring upon backgrounding, you might choose to disable this.
     * Defaults to false.
     */
    disableBlurWhenBackgrounding: boolean;

    /**
     * If you will present the SDK's view controller within a popover, then set this property to true.
     * Defaults to false. (iOS only)
     */
    presentingInPopover: boolean;

    /**
     * Sandbox credentials can be difficult to type on a mobile device. Setting this flag to true will
     * cause the sandboxUserPassword and sandboxUserPin to always be pre-populated into login fields.
     *
     * This setting will have no effect if the operation mode is production.
     * Defaults to false.
     */
    forceDefaultsInSandbox: boolean;

    /**
     * Password to use for sandbox if 'forceDefaultsInSandbox' is set.
     */
    sandboxUserPassword: string;

    /**
     * PIN to use for sandbox if 'forceDefaultsInSandbox' is set.
     */
    sandboxUserPin: string;
}

/**
 * Describes the options that can be passed into the PayPalConfiguration class constructor.
 */
interface PayPalConfigurationOptions {

    /**
     * Will be overridden by email used in most recent PayPal login.
     */
    defaultUserEmail?: string;

    /**
     * Will be overridden by phone country code used in most recent PayPal login
     */
    defaultUserPhoneCountryCode?: string;

    /**
     * Will be overridden by phone number used in most recent PayPal login.
     * @note If you set defaultUserPhoneNumber, be sure to also set defaultUserPhoneCountryCode.
     */
    defaultUserPhoneNumber?: string;

    /**
     * Your company name, as it should be displayed to the user
     * when requesting consent via a PayPalFuturePaymentViewController.
     */
    merchantName?: string;

    /**
     * URL of your company's privacy policy, which will be offered to the user
     * when requesting consent via a PayPalFuturePaymentViewController.
     */
    merchantPrivacyPolicyURL?: string;

    /**
     * URL of your company's user agreement, which will be offered to the user
     * when requesting consent via a PayPalFuturePaymentViewController.
     */
    merchantUserAgreementURL?: string;

    /**
     * If set to false, the SDK will only support paying with PayPal, not with credit cards.
     * This applies only to single payments (via PayPalPaymentViewController).
     * Future payments (via PayPalFuturePaymentViewController) always use PayPal.
     * Defaults to true.
     */
    acceptCreditCards?: boolean;

    /**
     * For single payments, options for the shipping address.
     *
     * - 0 - PayPalShippingAddressOptionNone?: no shipping address applies.
     *
     * - 1 - PayPalShippingAddressOptionProvided?: shipping address will be provided by your app,
     *   in the shippingAddress property of PayPalPayment.
     *
     * - 2 - PayPalShippingAddressOptionPayPal?: user will choose from shipping addresses on file
     *   for their PayPal account.
     *
     * - 3 - PayPalShippingAddressOptionBoth?: user will choose from the shipping address provided by your app,
     *   in the shippingAddress property of PayPalPayment, plus the shipping addresses on file for the user's PayPal account.
     *
     * Defaults to 0 (PayPalShippingAddressOptionNone).
     */
    payPalShippingAddressOption?: number;

    /**
     * If set to true, then if the user pays via their PayPal account,
     * the SDK will remember the user's PayPal username or phone number;
     * if the user pays via their credit card, then the SDK will remember
     * the PayPal Vault token representing the user's credit card.
     *
     * If set to false, then any previously-remembered username, phone number, or
     * credit card token will be erased, and subsequent payment information will
     * not be remembered.
     *
     * Defaults to true.
     */
    rememberUser?: boolean;

    /**
     * If not set, or if set to nil, defaults to the device's current language setting.
     *
     * Can be specified as a language code ("en", "fr", "zh-Hans", etc.) or as a locale ("en_AU", "fr_FR", "zh-Hant_HK", etc.).
     * If the library does not contain localized strings for a specified locale, then will fall back to the language. E.g., "es_CO" -> "es".
     * If the library does not contain localized strings for a specified language, then will fall back to American English.
     *
     * If you specify only a language code, and that code matches the device's currently preferred language,
     * then the library will attempt to use the device's current region as well.
     * E.g., specifying "en" on a device set to "English" and "United Kingdom" will result in "en_GB".
     *
     * These localizations are currently included:
     * da,de,en,en_AU,en_GB,en_SV,es,es_MX,fr,he,it,ja,ko,nb,nl,pl,pt,pt_BR,ru,sv,tr,zh-Hans,zh-Hant_HK,zh-Hant_TW.
     */
    languageOrLocale?: string;

    /**
     * Normally, the SDK blurs the screen when the app is backgrounded,
     * to obscure credit card or PayPal account details in the iOS-saved screenshot.
     * If your app already does its own blurring upon backgrounding, you might choose to disable this.
     * Defaults to false.
     */
    disableBlurWhenBackgrounding?: boolean;

    /**
     * If you will present the SDK's view controller within a popover, then set this property to true.
     * Defaults to false. (iOS only)
     */
    presentingInPopover?: boolean;

    /**
     * Sandbox credentials can be difficult to type on a mobile device. Setting this flag to true will
     * cause the sandboxUserPassword and sandboxUserPin to always be pre-populated into login fields.
     *
     * This setting will have no effect if the operation mode is production.
     * Defaults to false.
     */
    forceDefaultsInSandbox?: boolean;

    /**
     * Password to use for sandbox if 'forceDefaultsInSandbox' is set.
     */
    sandboxUserPassword?: string;

    /**
     * PIN to use for sandbox if 'forceDefaultsInSandbox' is set.
     */
    sandboxUserPin?: string;
}

//#endregion

//#region cdv-plugin-paypal-mobile-sdk.js

declare namespace PayPalCordovaPlugin {

    export interface PayPalClientIds {
        PayPalEnvironmentProduction: string;
        PayPalEnvironmentSandbox: string;
    }

    /**
     * Represents the portion of an object that is common to all responses.
     */
    export interface BaseResult {
        client: Client;
        response_type: string;
    }

    /**
     * Represents the client portion of the response.
     */
    export interface Client {
        paypal_sdk_version: string;
        environment: string;
        platform: string;
        product_name: string;
    }

    /**
     * Represents the response for a successful callback from renderSinglePaymentUI().
     */
    export interface SinglePaymentResult extends BaseResult {
        response: {
            intent: string;
            id: string;
            state: string;
            authorization_id: string;
            create_time: string;
        };
    }

    /**
     * Represents the response for a successful callback from renderFuturePaymentUI().
     */
    export interface FuturePaymentResult extends BaseResult {
        response: {
            code: string;
        };
    }

    export interface PayPalMobileStatic {
        /**
         * Retrieve the version of the PayPal iOS SDK library. Useful when contacting support.
         *
         * @param completionCallback a callback function accepting a string
         */
        version(completionCallback: (result: string) => void): void;

        /**
         * You MUST call this method to initialize the PayPal Mobile SDK.
         *
         * The PayPal Mobile SDK can operate in different environments to facilitate development and testing.
         *
         * @param clientIdsForEnvironments set of client ids for environments
         * Example: var clientIdsForEnvironments = {
         *  PayPalEnvironmentProduction : @"my-client-id-for-Production",
         *  PayPalEnvironmentSandbox : @"my-client-id-for-Sandbox"
         *  }
         * @param completionCallback a callback function on success
         */
        init(clientIdsForEnvironments: PayPalCordovaPlugin.PayPalClientIds, completionCallback: () => void): void;

        /**
         * You must preconnect to PayPal to prepare the device for processing payments.
         * This improves the user experience, by making the presentation of the
         * UI faster. The preconnect is valid for a limited time, so
         * the recommended time to preconnect is on page load.
         *
         * @param environment available options are "PayPalEnvironmentNoNetwork", "PayPalEnvironmentProduction" and "PayPalEnvironmentSandbox"
         * @param configuration PayPalConfiguration object, for Future Payments merchantName, merchantPrivacyPolicyURL
         *      and merchantUserAgreementURL must be set be set
         * @param completionCallback a callback function on success
         */
        prepareToRender(environment: string, configuration: PayPalConfiguration, completionCallback: () => void): void;

        /**
         * Start PayPal UI to collect payment from the user.
         * See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
         * for more documentation of the params.
         *
         * @param payment PayPalPayment object
         * @param completionCallback a callback function accepting a js object, called when the user has completed payment
         * @param cancelCallback a callback function accepting a reason string, called when the user cancels the payment
         */
        renderSinglePaymentUI(payment: PayPalPayment, completionCallback: (result: PayPalCordovaPlugin.SinglePaymentResult) => void, cancelCallback: (cancelReason: string) => void): void;

        /**
         * @deprecated
         * Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
         * from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
         * payment is originating from a valid, user-consented device+application.
         * This helps reduce fraud and decrease declines.
         * This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
         * Pass the result to your server, to include in the payment request sent to PayPal.
         * Do not otherwise cache or store this value.
         *
         * @param environment available options are "PayPalEnvironmentNoNetwork", "PayPalEnvironmentProduction" and "PayPalEnvironmentSandbox"
         * @param callback applicationCorrelationID Your server will send this to PayPal in a 'Paypal-Application-Correlation-Id' header.
         */
        applicationCorrelationIDForEnvironment(environment: string, completionCallback: (applicationCorrelationId: string) => void): void;

        /**
         * Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
         * from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
         * payment is originating from a valid, user-consented device+application.
         * This helps reduce fraud and decrease declines.
         * This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
         * Pass the result to your server, to include in the payment request sent to PayPal.
         * Do not otherwise cache or store this value.
         *
         * @param callback clientMetadataID Your server will send this to PayPal in a 'PayPal-Client-Metadata-Id' header.
         */
        clientMetadataID(completionCallback: (clientMetadataId: string) => void): void;

        /**
         * Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments
         *
         * @param completionCallback a callback function accepting a js object with future payment authorization
         * @param cancelCallback a callback function accepting a reason string, called when the user canceled without agreement
         */
        renderFuturePaymentUI(completionCallback: (result: PayPalCordovaPlugin.FuturePaymentResult) => void, cancelCallback: (cancelReason: string) => void): void;

        /**
         * Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing
         *
         * @param scopes scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
         * See https://developer.paypal.com/docs/integration/direct/identity/attributes/ for more details
         * @param completionCallback a callback function accepting a js object with future payment authorization
         * @param cancelCallback a callback function accepting a reason string, called when the user canceled without agreement
         */
        renderProfileSharingUI(scopes: string[], completionCallback: (result: any) => void, cancelCallback: (cancelReason: string) => void): void;
    }
}

declare var PayPalMobile: PayPalCordovaPlugin.PayPalMobileStatic;

//#endregion

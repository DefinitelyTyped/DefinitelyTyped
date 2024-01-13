/**
 * ApplePaySession is the entry point for Apple Pay on the web.
 */
declare class ApplePaySession extends EventTarget {
    /**
     * The entry point for Apple Pay on the web.
     * @param version - The version number of the ApplePay JS API you are using. The current API version number is 14.
     * @param paymentRequest - An ApplePayPaymentRequest object that contains the information to be displayed on the Apple Pay payment sheet.
     */
    constructor(version: number, paymentRequest: ApplePayJS.ApplePayPaymentRequest);

    /**
     * A callback function that is automatically called when the payment UI is dismissed.
     */
    oncancel: (event: ApplePayJS.Event) => void;

    /**
     * A callback function that is automatically called when the user has authorized the Apple Pay payment with Touch ID, Face ID, or passcode.
     */
    onpaymentauthorized: (event: ApplePayJS.ApplePayPaymentAuthorizedEvent) => void;

    /**
     * A callback function that is automatically called when a new payment method is selected.
     */
    onpaymentmethodselected: (event: ApplePayJS.ApplePayPaymentMethodSelectedEvent) => void;

    /**
     * A callback function that is called when a shipping contact is selected in the payment sheet.
     */
    onshippingcontactselected: (event: ApplePayJS.ApplePayShippingContactSelectedEvent) => void;

    /**
     * A callback function that is automatically called when a shipping method is selected.
     */
    onshippingmethodselected: (event: ApplePayJS.ApplePayShippingMethodSelectedEvent) => void;

    /**
     * A callback function that is automatically called when the payment sheet is displayed.
     */
    onvalidatemerchant: (event: ApplePayJS.ApplePayValidateMerchantEvent) => void;

    /**
     * Indicates whether the device supports Apple Pay.
     * @returns true if the device supports making payments with Apple Pay; otherwise, false.
     */
    static canMakePayments(): boolean;

    /**
     * Indicates whether the device supports Apple Pay and whether the user has an active card in Wallet.
     * @param merchantIdentifier - The merchant ID created when the merchant enrolled in Apple Pay.
     * @returns true if the device supports Apple Pay and there is at least one active card in Wallet that is qualified for payments on the web; otherwise, false.
     */
    static canMakePaymentsWithActiveCard(merchantIdentifier: string): Promise<boolean>;

    /**
     * Displays the Set up Apple Pay button.
     * @param merchantIdentifier - The merchant ID created when the merchant enrolled in Apple Pay.
     * @returns A boolean value indicating whether setup was successful.
     */
    static openPaymentSetup(merchantIdentifier: string): Promise<boolean>;

    /**
     * Verifies whether a web browser supports a given Apple Pay JS API version.
     * @param version - A number representing the Apple Pay JS API version being checked. The initial version is 1. The latest version is 3.
     * @returns A boolean value indicating whether the web browser supports the given API version. Returns false if the web browser does not support the specified version.
     */
    static supportsVersion(version: number): boolean;

    /**
     * Aborts the current Apple Pay session.
     */
    abort(): void;

    /**
     * Begins the merchant validation process.
     */
    begin(): void;

    /**
     * Completes the validation for a merchant session.
     * @param merchantSession - An opaque message session object.
     */
    completeMerchantValidation(merchantSession: any): void;

    /**
     * Completes the payment authorization with a result.
     * @param result - The status of the payment, whether it succeeded or failed for Apple Pay JS versions 1 and 2,
     * or the result of the payment authorization, including its status and list of errors for Apple Pay JS version 3.
     */
    completePayment(result: number | ApplePayJS.ApplePayPaymentAuthorizationResult): void;

    /**
     * Call after a payment method has been selected for Apple Pay JS versions 1 and 2.
     * @param newTotal - An ApplePayLineItem dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of ApplePayLineItem dictionaries.
     */
    completePaymentMethodSelection(
        newTotal: ApplePayJS.ApplePayLineItem,
        newLineItems: ApplePayJS.ApplePayLineItem[],
    ): void;

    /**
     * Completes the selection of a payment method with an update for Apple Pay JS version 3.
     * @param update - The updated payment method.
     */
    completePaymentMethodSelection(update: ApplePayJS.ApplePayPaymentMethodUpdate): void;

    /**
     * Completes the selection of a shipping contact with an update for Apple Pay JS versions 1 and 2.
     * @param status - The status of the shipping contact update.
     * @param newShippingMethods - A sequence of ApplePayShippingMethod dictionaries.
     * @param newTotal - An ApplePayLineItem dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of ApplePayLineItem dictionaries.
     */
    completeShippingContactSelection(
        status: number,
        newShippingMethods: ApplePayJS.ApplePayShippingMethod[],
        newTotal: ApplePayJS.ApplePayLineItem,
        newLineItems: ApplePayJS.ApplePayLineItem[],
    ): void;

    /**
     * Completes the selection of a shipping contact with an update for Apple Pay JS version 3.
     * @param update - The updated shipping contact.
     */
    completeShippingContactSelection(update: ApplePayJS.ApplePayShippingContactUpdate): void;

    /**
     * Call after the shipping method has been selected for Apple Pay JS versions 1 and 2.
     * @param status - The status of the shipping method update.
     * @param newTotal - An ApplePayLineItem dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of ApplePayLineItem dictionaries.
     */
    completeShippingMethodSelection(
        status: number,
        newTotal: ApplePayJS.ApplePayLineItem,
        newLineItems: ApplePayJS.ApplePayLineItem[],
    ): void;

    /**
     * Completes the selection of a shipping method with an update for Apple Pay JS version 3.
     * @param update - The updated shipping method.
     */
    completeShippingMethodSelection(update: ApplePayJS.ApplePayShippingMethodUpdate): void;

    /**
     * The requested action succeeded.
     */
    static readonly STATUS_SUCCESS: number;

    /**
     * The requested action failed.
     */
    static readonly STATUS_FAILURE: number;

    /**
     * The billing address is not valid.
     */
    static readonly STATUS_INVALID_BILLING_POSTAL_ADDRESS: number;

    /**
     * The shipping address is not valid.
     */
    static readonly STATUS_INVALID_SHIPPING_POSTAL_ADDRESS: number;

    /**
     * The shipping contact information is not valid.
     */
    static readonly STATUS_INVALID_SHIPPING_CONTACT: number;

    /**
     * The PIN information is not valid. Cards on the China Union Pay network may require a PIN.
     */
    static readonly STATUS_PIN_INCORRECT: number;

    /**
     * The maximum number of tries for a PIN has been reached and the user has been locked out. Cards on the China Union Pay network may require a PIN.
     */
    static readonly STATUS_PIN_LOCKOUT: number;

    /**
     * The required PIN information was not provided. Cards on the China Union Pay payment network may require a PIN to authenticate the transaction.
     */
    static readonly STATUS_PIN_REQUIRED: number;
}

/**
 * A customizable error type that you create to indicate problems with the address or contact information on an Apple Pay sheet.
 */
declare class ApplePayError implements ApplePayJS.ApplePayError {
    /**
     * Construct a new ApplePayError instance.
     *
     * @param errorCode - The error code for the new instance.
     * @param contactField - The name of the field that contains the error.
     * @param message - A localized, user-facing string that describes the error.
     */
    constructor(
        errorCode: ApplePayJS.ApplePayErrorCode,
        contactField?: ApplePayJS.ApplePayErrorContactField,
        message?: string,
    );

    /**
     * The error code for this instance.
     */
    code: ApplePayJS.ApplePayErrorCode;

    /**
     * The name of the field that contains the error.
     */
    contactField?: ApplePayJS.ApplePayErrorContactField | undefined;

    /**
     * A localized, user-facing string that describes the error.
     */
    message: string;
}

declare namespace ApplePayJS {
    /**
     * Field names used for requesting contact information in a payment request.
     */
    type ApplePayContactField = "email" | "name" | "phone" | "postalAddress" | "phoneticName";

    /**
     * A customizable error type that you create to indicate problems with the address or contact information on an Apple Pay sheet.
     */
    interface ApplePayError {
        /**
         * The error code for this instance.
         */
        code: ApplePayErrorCode;

        /**
         * The name of the field that contains the error.
         */
        contactField?: ApplePayErrorContactField | undefined;

        /**
         * A localized, user-facing string that describes the error.
         */
        message: string;
    }

    /**
     * The error code that indicates whether an error on the payment sheet is for shipping or billing information, or for another kind of error.
     */
    type ApplePayErrorCode =
        /**
         * Shipping address or contact information is invalid or missing.
         */
        | "shippingContactInvalid"
        /**
         * Billing address information is invalid or missing.
         */
        | "billingContactInvalid"
        /**
         * The merchant cannot provide service to the shipping address (for example, can't deliver to a P.O. Box).
         */
        | "addressUnserviceable"
        /**
         * An unknown but nonfatal error occurred during payment processing. The user can attempt authorization again.
         */
        | "unknown";

    /**
     * Names of the fields in the shipping or billing contact information, used to locate errors in the payment sheet.
     */
    type ApplePayErrorContactField =
        | "phoneNumber"
        | "emailAddress"
        | "name"
        | "phoneticName"
        | "postalAddress"
        | "addressLines"
        | "locality"
        | "subLocality"
        | "postalCode"
        | "administrativeArea"
        | "subAdministrativeArea"
        | "country"
        | "countryCode";

    /**
     * Defines a line item in a payment request - for example, total, tax, discount, or grand total.
     */
    interface ApplePayLineItem {
        /**
         * A short, localized description of the line item.
         */
        label: string;

        /**
         * The line item's amount.
         */
        amount: string;

        /**
         * A value that indicates if the line item is final or pending.
         */
        type?: ApplePayLineItemType | undefined;

        /**
         * The time that the payment occurs as part of a successful transaction.
         */
        paymentTiming?: ApplePayPaymentTiming;

        /**
         * The [ISO 8601 formatted] date of the first payment.
         */
        recurringPaymentStartDate?: string;

        /**
         * The amount of time — in calendar units, such as day, month, or year — that represents a fraction of the total payment interval.
         */
        recurringPaymentIntervalUnit?: ApplePayRecurringPaymentDateUnit;

        /**
         * The number of interval units that make up the total payment interval.
         */
        recurringPaymentIntervalCount?: number;

        /**
         * The [ISO 8601 formatted] date of the final payment.
         */
        recurringPaymentEndDate?: string;

        /**
         * The [ISO 8601 formatted] date, in the future, of the payment.
         */
        deferredPaymentDate?: string;

        /**
         * The balance an account reaches before the merchant applies the automatic reload amount.
         */
        automaticReloadPaymentThresholdAmount?: string;
    }

    /**
     * A type that indicates the time a payment occurs in a transaction.
     */
    type ApplePayPaymentTiming =
        /**
         * A value that specifies that the payment occurs when the transaction is complete.
         */
        | "immediate"
        /**
         * A value that specifies that the payment occurs on a regular basis.
         */
        | "deferred"
        /**
         * A value that specifies that the payment occurs in the future.
         */
        | "recurring"
        /**
         * A value that specifies that the payment occurs automatically when the account falls below the automaticReloadPaymentThresholdAmount amount.
         */
        | "automaticReload";

    /**
     * A type that indicates calendrical units, such as year, month, day, and hour.
     */
    type ApplePayRecurringPaymentDateUnit =
        /**
         * A value that specifies the year unit.
         */
        | "year"
        /**
         * A value that specifies the month unit.
         */
        | "month"
        /**
         * A value that specifies the day unit.
         */
        | "day"
        /**
         * A value that specifies the hour unit.
         */
        | "hour"
        /**
         * A value that specifies the minute unit.
         */
        | "minute";

    /**
     * A type that indicates whether a line item is final or pending.
     */
    type ApplePayLineItemType =
        /**
         * A line item representing the known, final cost.
         */
        | "final"
        /**
         * A line item representing an estimated or unknown cost.
         */
        | "pending";

    /**
     * The payment capabilities supported by the merchant.
     */
    type ApplePayMerchantCapability =
        /**
         * Required. This value must be supplied.
         */
        | "supports3DS"
        /**
         * Include this value only if you support China Union Pay transactions.
         */
        | "supportsEMV"
        /**
         * Optional. If present, only transactions that are categorized as credit cards are allowed.
         */
        | "supportsCredit"
        /**
         * Optional. If present, only transactions that are categorized as debit cards are allowed.
         */
        | "supportsDebit";

    /**
     * Represents the result of authorizing a payment request and contains encrypted payment information.
     */
    interface ApplePayPayment {
        /**
         * The encrypted information for an authorized payment.
         */
        token: ApplePayPaymentToken;

        /**
         * The billing contact selected by the user for this transaction.
         */
        billingContact?: ApplePayPaymentContact | undefined;

        /**
         * The shipping contact selected by the user for this transaction.
         */
        shippingContact?: ApplePayPaymentContact | undefined;
    }

    /**
     * The ApplePayPaymentAuthorizedEvent class defines the attributes contained by the ApplePaySession.onpaymentauthorized callback function.
     */
    abstract class ApplePayPaymentAuthorizedEvent extends Event {
        /**
         * The authorized payment information for this transaction.
         */
        readonly payment: ApplePayPayment;
    }

    /**
     * The result of payment authorization, including status and errors.
     */
    interface ApplePayPaymentAuthorizationResult {
        /**
         * The status code for the authorization result.
         */
        status: number;

        /**
         * A list of custom errors to display on the payment sheet.
         */
        errors?: ApplePayError[] | undefined;
    }

    /**
     * Encapsulates contact information needed for billing and shipping.
     */
    interface ApplePayPaymentContact {
        /**
         * An email address for the contact.
         */
        emailAddress?: string | undefined;

        /**
         * The contact's family name.
         */
        familyName?: string | undefined;

        /**
         * The contact's given name.
         */
        givenName?: string | undefined;

        /**
         * A phone number for the contact.
         */
        phoneNumber?: string | undefined;

        /**
         * The phonetic spelling of the contact's family name.
         */
        phoneticFamilyName?: string | undefined;

        /**
         * The phonetic spelling of the contact's given name.
         */
        phoneticGivenName?: string | undefined;

        /**
         * The street portion of the address for the contact.
         */
        addressLines?: string[] | undefined;

        /**
         * The city for the contact.
         */
        locality?: string | undefined;

        /**
         * Additional information associated with the location, typically defined at the city or town level (such as district or neighborhood), in a postal address.
         */
        subLocality?: string | undefined;

        /**
         * The state for the contact.
         */
        administrativeArea?: string | undefined;

        /**
         * The subadministrative area (such as a county or other region) in a postal address.
         */
        subAdministrativeArea?: string | undefined;

        /**
         * The zip code or postal code, where applicable, for the contact.
         */
        postalCode?: string | undefined;

        /**
         * The name of the country for the contact.
         */
        country?: string | undefined;

        /**
         * The contact’s two-letter ISO 3166 country code.
         */
        countryCode?: string | undefined;
    }

    /**
     * A dictionary that describes an Apple Pay payment card.
     */
    interface ApplePayPaymentMethod {
        /**
         * A string, suitable for display, that describes the card.
         */
        displayName: string;

        /**
         * A string, suitable for display, that is the name of the payment network backing the card.
         */
        network: string;

        /**
         * A value representing the card's type of payment.
         */
        type: ApplePayPaymentMethodType;

        /**
         * The payment pass object currently selected to complete the payment.
         */
        paymentPass: ApplePayPaymentPass;

        /**
         * The billing contact associated with the card.
         */
        billingContact?: ApplePayPaymentContact | undefined;
    }

    /**
     * A payment card's type of payment.
     */
    type ApplePayPaymentMethodType = "debit" | "credit" | "prepaid" | "store";

    /**
     * The ApplePayPaymentMethodSelectedEvent class defines the attributes contained by the ApplePaySession.onpaymentmethodselected callback function.
     */
    abstract class ApplePayPaymentMethodSelectedEvent extends Event {
        /**
         * The card used to complete a payment.
         */
        readonly paymentMethod: ApplePayPaymentMethod;
    }

    /**
     * Updated transaction details resulting from a change in payment method.
     * See more: https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentmethodupdate
     */
    interface ApplePayPaymentMethodUpdate {
        /**
         * An optional list of line items.
         */
        newLineItems?: ApplePayLineItem[] | undefined;

        /**
         * The new total resulting from a change in the payment method.
         */
        newTotal: ApplePayLineItem;

        /**
         * An array of updated multitoken contexts for a multimerchant payment request.
         */
        newMultiTokenContexts?: ApplePayPaymentTokenContext[];

        /**
         * An updated request for an automatic reload payment.
         */
        newAutomaticReloadPaymentRequest?: ApplePayAutomaticReloadPaymentRequest;

        /**
         * An updated request for a recurring payment.
         */
        newRecurringPaymentRequest?: ApplePayRecurringPaymentRequest;

        /**
         * A list of customized errors you provide that results from the user's change to the payment method.
         */
        errors?: ApplePayError[];

        /**
         * The updated list of available shipping methods that results from the user's change to the payment method.
         */
        newShippingMethods?: ApplePayShippingMethod[];
    }

    /**
     * Represents a provisioned payment card for Apple Pay payments.
     */
    interface ApplePayPaymentPass {
        /**
         * The unique identifier for the primary account number for the payment card.
         */
        primaryAccountIdentifier: string;

        /**
         * A version of the primary account number suitable for display in your UI.
         */
        primaryAccountNumberSuffix: string;

        /**
         * The unique identifier for the device-specific account number.
         */
        deviceAccountIdentifier?: string | undefined;

        /**
         * A version of the device account number suitable for display in your UI.
         */
        deviceAccountNumberSuffix?: string | undefined;

        /**
         * The activation state of the pass.
         */
        activationState: ApplePayPaymentPassActivationState;
    }

    /**
     * Payment pass activation states.
     */
    type ApplePayPaymentPassActivationState =
        /**
         * Active and ready to be used for payment.
         */
        | "activated"
        /**
         * Not active but may be activated by the issuer.
         */
        | "requiresActivation"
        /**
         * Not ready for use but activation is in progress.
         */
        | "activating"
        /**
         * Not active and can't be activated.
         */
        | "suspended"
        /**
         * Not active because the issuer has disabled the account associated with the device.
         */
        | "deactivated";

    /**
     * Encapsulates a request for payment, including information about payment processing capabilities, the payment amount, and shipping information.
     */
    interface ApplePayPaymentRequest {
        /**
         * The merchant's two-letter ISO 3166 country code.
         */
        countryCode: string;

        /**
         * The three-letter ISO 4217 currency code for the payment.
         */
        currencyCode: string;

        /**
         * A set of line items that explain recurring payments and/or additional charges.
         */
        lineItems?: ApplePayLineItem[] | undefined;

        /**
         * The payment capabilities supported by the merchant.
         * The value must at least contain ApplePayMerchantCapability.supports3DS.
         */
        merchantCapabilities: ApplePayMerchantCapability[];

        /**
         * The payment networks supported by the merchant.
         */
        supportedNetworks: string[];

        /**
         * A line item representing the total for the payment.
         */
        total: ApplePayLineItem;

        /**
         * Billing contact information for the user.
         */
        billingContact?: ApplePayPaymentContact | undefined;

        /**
         * The billing information that you require from the user in order to process the transaction.
         */
        requiredBillingContactFields?: ApplePayContactField[] | undefined;

        /**
         * The shipping information that you require from the user in order to fulfill the order.
         */
        requiredShippingContactFields?: ApplePayContactField[] | undefined;

        /**
         * Shipping contact information for the user.
         */
        shippingContact?: ApplePayPaymentContact | undefined;

        /**
         * A set of shipping method objects that describe the available shipping methods.
         */
        shippingMethods?: ApplePayShippingMethod[] | undefined;

        /**
         * How the items are to be shipped.
         */
        shippingType?: ApplePayShippingType | undefined;

        /**
         * A list of ISO 3166 country codes for limiting payments to cards from specific countries.
         */
        supportedCountries?: string[] | undefined;

        /**
         * Optional user-defined data.
         */
        applicationData?: string | undefined;

        /**
         * This property is optional. Use it to indicate that the payment request is for a recurring payment.
         * Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens.
         * Otherwise, Apple Pay issues a device token for the payment request.
         *
         * Important
         * You can’t use this property with multiTokenContexts or automaticReloadPaymentRequest properties.
         * Simultaneous use of these properties results in an error and cancels the payment request.
         */
        recurringPaymentRequest?: ApplePayRecurringPaymentRequest;

        /**
         * A property that requests an automatic reload payment, such as a store card top-up.
         */
        automaticReloadPaymentRequest?: ApplePayAutomaticReloadPaymentRequest;

        /**
         * An array of payment token contexts that requests multiple payment tokens to support a multimerchant payment.
         */
        multiTokenContexts?: ApplePayPaymentTokenContext[];
    }

    /**
     * A dictionary that represents a request to set up a recurring payment, typically a subscription.
     *
     * Important
     * You must include the recurringPaymentRequest property in the ApplePayPaymentRequest object to specify a request for a recurring payment.
     * Use an ApplePayRecurringPaymentRequest object to provide the user with payment details and a way to manage payment methods for a recurring payment.
     * You can optionally display a billing agreement and set up merchant token life-cycle notifications for the request.
     */
    interface ApplePayRecurringPaymentRequest {
        /**
         * A description of the recurring payment that Apple Pay displays to the user in the payment sheet.
         */
        paymentDescription: string;

        /**
         * A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.
         */
        billingAgreement?: string;

        /**
         * The regular billing cycle for the recurring payment, including start and end dates, an interval, and an interval count.
         */
        regularBilling: ApplePayLineItem;

        /**
         * The trial billing cycle for the recurring payment.
         */
        trialBilling?: ApplePayLineItem;

        /**
         * A URL to a web page where the user can update or delete the payment method for the recurring payment.
         */
        managementURL: string;

        /**
         * A URL you provide for receiving life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the recurring payment.
         */
        tokenNotificationURL?: string;
    }

    /**
     * Use an ApplePayAutomaticReloadPaymentRequest object to provide the user with payment details and a way to manage payment methods for an automatic reload payment.
     * You can optionally display a billing agreement and set up merchant token life-cycle notifications for the request.
     * For more information about the merchant token life-cycle notifications, see Apple Pay Merchant Token Management API.
     *
     * Apple Pay issues an Apple Pay Merchant Token if the user’s payment network supports merchant-specific payment tokens.
     * Otherwise, Apple Pay issues a device token for the payment request.
     */
    interface ApplePayAutomaticReloadPaymentRequest {
        /**
         * A description of the automatic reload payment that Apple Pay displays in the payment sheet.
         */
        paymentDescription: string;

        /**
         * A line item that contains the reload amount and balance threshold for the automatic reload payment.
         */
        automaticReloadBilling: ApplePayLineItem;

        /**
         * A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.
         */
        billingAgreement?: string;

        /**
         * A URL to a web page where the user can update or delete the payment method for the automatic reload payment.
         */
        managementURL: string;

        /**
         * A URL you provide to receive life-cycle notifications from the Apple Pay servers about the Apple Pay merchant token for the recurring payment.
         */
        tokenNotificationURL?: string;
    }

    /**
     * Use ApplePayPaymentTokenContext to authorize a payment amount for each payment token in a multimerchant payment request.
     * To enable multiple merchants for a transaction, use one ApplePayPaymentTokenContext object for each merchant.
     *
     * You can optionally associate each payment token with the merchant’s top-level domain.
     */
    interface ApplePayPaymentTokenContext {
        /**
         * The Apply Pay merchant identifier.
         */
        merchantIdentifier: string;

        /**
         * An external identifier for the merchant.
         */
        externalIdentifier: string;

        /**
         * The merchant’s display name that the Apple Pay server associates with the payment token.
         */
        merchantName: string;

        /**
         * The merchant’s top-level domain that the Apple Pay server associates with the payment token.
         */
        merchantDomain?: string;

        /**
         * The amount to authorize for the payment token context.
         */
        amount: string;
    }

    /**
     * An object that contains the user's payment credentials.
     */
    interface ApplePayPaymentToken {
        /**
         * An object containing the encrypted payment data.
         */
        paymentData: any;

        /**
         * Information about the card used in the transaction.
         */
        paymentMethod: ApplePayPaymentMethod;

        /**
         * A unique identifier for this payment.
         */
        transactionIdentifier: string;
    }

    /**
     * Encapsulates the attributes contained by the onshippingcontactselected callback function.
     */
    abstract class ApplePayShippingContactSelectedEvent extends Event {
        /**
         * The shipping address selected by the user.
         */
        readonly shippingContact: ApplePayPaymentContact;
    }

    /**
     * Updated transaction details resulting from a change in shipping contact, including any errors.
     */
    class ApplePayShippingContactUpdate {
        /**
         * List of custom errors to display on the payment sheet.
         */
        errors?: ApplePayError[] | undefined;

        /**
         * An optional list of updated line items.
         */
        newLineItems?: ApplePayLineItem[] | undefined;

        /**
         * A list of shipping methods that are available to the updated shipping contact.
         */
        newShippingMethods?: ApplePayShippingMethod[] | undefined;

        /**
         * The new total resulting from a change in the shipping contact.
         */
        newTotal: ApplePayLineItem;
    }

    /**
     * Defines a shipping method for delivering physical goods.
     */
    interface ApplePayShippingMethod {
        /**
         * A short description of the shipping method.
         */
        label: string;

        /**
         * A further description of the shipping method.
         */
        detail: string;

        /**
         * The amount associated with this shipping method.
         */
        amount: string;

        /**
         * A client-defined identifier.
         */
        identifier: string;

        /**
         * A dictionary that specifies the start and end dates for a range of time.
         */
        dateComponentsRange?: ApplePayDateComponentsRange;
    }

    /**
     * A dictionary that specifies the start and end dates for a range of time.
     */
    interface ApplePayDateComponentsRange {
        /**
         * The start date and time of the range.
         */
        startDateComponents: ApplePayDateComponents;
        /**
         * The end date and time of the range.
         */
        endDateComponents: ApplePayDateComponents;
    }

    /**
     * When specifying a range using date components, provide all elements of the ApplePayDateComponents down to the level of granularity that you want to expose.
     * For example, if you specify a range of days, be sure to include values for both months and years in addition to days in the ApplePayDateComponents.
     *
     * Apple Pay on the Web uses the Gregorian calendar when processing dates.
     */
    interface ApplePayDateComponents {
        /**
         * A number that represents a day.
         */
        days: number;

        /**
         * A number between 1 and 12 that represents a month.
         */
        months: number;

        /**
         * A number that represents a year.
         */
        years: number;

        /**
         * A number that represents an hour.
         */
        hours: number;
    }

    /**
     * The ApplePayShippingMethodSelectedEvent class defines the attribute contained by the ApplePaySession.onshippingmethodselected callback function.
     */
    abstract class ApplePayShippingMethodSelectedEvent extends Event {
        /**
         * The shipping method selected by the user.
         */
        readonly shippingMethod: ApplePayShippingMethod;
    }

    /**
     * Updated transaction details resulting from a change in shipping method.
     */
    interface ApplePayShippingMethodUpdate {
        /**
         * An optional list of updated line items.
         */
        newLineItems?: ApplePayLineItem[] | undefined;

        /**
         * The new total resulting from a change in the shipping method.
         */
        newTotal: ApplePayLineItem;
    }

    /**
     * A type that indicates how purchased items are to be shipped.
     */
    type ApplePayShippingType = "shipping" | "delivery" | "storePickup" | "servicePickup";

    /**
     * The attributes contained by the onvalidatemerchant callback function.
     */
    abstract class ApplePayValidateMerchantEvent extends Event {
        /**
         * The URL your server must use to validate itself and obtain a merchant session object.
         */
        readonly validationURL: string;
    }

    abstract class Event {
        readonly bubbles: boolean;

        cancelBubble: boolean;

        readonly cancelable: boolean;

        readonly composed: boolean;

        readonly currentTarget: EventTarget;

        readonly defaultPrevented: boolean;

        readonly eventPhase: number;

        readonly isTrusted: boolean;

        returnValue: boolean;

        readonly srcElement: EventTarget;

        readonly target: EventTarget;

        readonly timeStamp: string;

        readonly type: string;

        composedPath(): Node[];

        initEvent(type?: string, bubbles?: boolean, cancelable?: boolean): void;

        preventDefault(): void;

        stopImmediatePropagation(): void;

        stopPropagation(): void;

        static readonly AT_TARGET: number;

        static readonly BLUR: number;

        static readonly BUBBLING_PHASE: number;

        static readonly CAPTURING_PHASE: number;

        static readonly CHANGE: number;

        static readonly CLICK: number;

        static readonly DBLCLICK: number;

        static readonly DRAGDROP: number;

        static readonly FOCUS: number;

        static readonly KEYDOWN: number;

        static readonly KEYPRESS: number;

        static readonly KEYUP: number;

        static readonly MOUSEDOWN: number;

        static readonly MOUSEDRAG: number;

        static readonly MOUSEMOVE: number;

        static readonly MOUSEOUT: number;

        static readonly MOUSEOVER: number;

        static readonly MOUSEUP: number;

        static readonly NONE: number;

        static readonly SELECT: number;
    }
}

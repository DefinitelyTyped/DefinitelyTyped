// Type definitions for Apple Pay JS 1.0
// Project: https://developer.apple.com/reference/applepayjs
// Definitions by: Martin Costello <https://martincostello.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A session object for managing the payment process on the web.
 */
declare class ApplePaySession extends EventTarget {
    /**
     * Creates a new instance of the ApplePaySession class.
     * @param version - The version of the ApplePay JS API you are using.
     * @param paymentRequest - An Apple​Pay​Payment​Request object that contains the information that is displayed on the Apple Pay payment sheet.
     */
    constructor(version: number, paymentRequest: ApplePayJS.ApplePayPaymentRequest);

    /**
     * A callback function that is automatically called when the payment UI is dismissed with an error.
     */
    oncancel: (event: ApplePayJS.Event) => void;

    /**
     * A callback function that is automatically called when the user has authorized the Apple Pay payment, typically via TouchID.
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
     * Indicates whether or not the device supports Apple Pay.
     * @returns true if the device supports making payments with Apple Pay; otherwise, false.
     */
    static canMakePayments(): boolean;

    /**
     * Indicates whether or not the device supports Apple Pay and if the user has an active card in Wallet.
     * @param merchantIdentifier - The merchant ID received when the merchant enrolled in Apple Pay.
     * @returns true if the device supports Apple Pay and there is at least one active card in Wallet; otherwise, false.
     */
    static canMakePaymentsWithActiveCard(merchantIdentifier: string): Promise<boolean>;

    /**
     * Displays the Set up Apple Pay button.
     * @param merchantIdentifier - The merchant ID received when the merchant enrolled in Apple Pay.
     * @returns A boolean value indicating whether setup was successful.
     */
    static openPaymentSetup(merchantIdentifier: string): Promise<boolean>;

    /**
     * Verifies if a web browser supports a given Apple Pay JS API version.
     * @param version - A number representing the Apple Pay JS API version being checked. The initial version is 1.
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
     * Call after the merchant has been validated.
     * @param merchantSession - An opaque message session object.
     */
    completeMerchantValidation(merchantSession: any): void;

    /**
     * Call when a payment has been authorized.
     * @param status - The status of the payment.
     */
    completePayment(status: number): void;

    /**
     * Call after a payment method has been selected.
     * @param newTotal - An Apple​Pay​Line​Item dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of Apple​Pay​Line​Item dictionaries.
     */
    completePaymentMethodSelection(newTotal: ApplePayJS.ApplePayLineItem, newLineItems: ApplePayJS.ApplePayLineItem[]): void;

    /**
     * Call after a shipping contact has been selected.
     * @param status - The status of the shipping contact update.
     * @param newShippingMethods - A sequence of ApplePayShippingMethod dictionaries.
     * @param newTotal - An Apple​Pay​Line​Item dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of Apple​Pay​Line​Item dictionaries.
     */
    completeShippingContactSelection(
        status: number,
        newShippingMethods: ApplePayJS.ApplePayShippingMethod[],
        newTotal: ApplePayJS.ApplePayLineItem,
        newLineItems: ApplePayJS.ApplePayLineItem[]): void;

    /**
     * Call after the shipping method has been selected.
     * @param status - The status of the shipping method update.
     * @param newTotal - An Apple​Pay​Line​Item dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of Apple​Pay​Line​Item dictionaries.
     */
    completeShippingMethodSelection(status: number, newTotal: ApplePayJS.ApplePayLineItem, newLineItems: ApplePayJS.ApplePayLineItem[]): void;

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

declare namespace ApplePayJS {
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
        type?: string;
    }

    /**
     * Represents the result of authorizing a payment request and contains encrypted payment information.
     */
    interface ApplePayPayment {
        /**
         * The encrypted token for an authorized payment.
         */
        token: ApplePayPaymentToken;

        /**
         * The billing contact selected by the user for this transaction.
         */
        billingContact?: ApplePayPaymentContact;

        /**
         * The shipping contact selected by the user for this transaction.
         */
        shippingContact?: ApplePayPaymentContact;
    }

    /**
     * The Apple​Pay​Payment​Authorized​Event class defines the attributes contained by the ApplePaySession.onpaymentauthorized callback function.
     */
    abstract class ApplePayPaymentAuthorizedEvent extends Event {
        /**
         * The payment token used to authorize a payment.
         */
        readonly payment: ApplePayPayment;
    }

    /**
     * Encapsulates contact information needed for billing and shipping.
     */
    interface ApplePayPaymentContact {
        /**
         * An email address for the contact.
         */
        emailAddress: string;

        /**
         * The contact's family name.
         */
        familyName: string;

        /**
         * The contact's given name.
         */
        givenName: string;

        /**
         * A phone number for the contact.
         */
        phoneNumber: string;

        /**
         * The address for the contact.
         */
        addressLines: string[];

        /**
         * The city for the contact.
         */
        locality: string;

        /**
         * The state for the contact.
         */
        administrativeArea: string;

        /**
         * The zip code, where applicable, for the contact.
         */
        postalCode: string;

        /**
         * The colloquial country name for the contact.
         */
        country: string;

        /**
         * The contact's ISO country code.
         */
        countryCode: string;
    }

    /**
     * Contains information about an Apple Pay payment card.
     */
    interface ApplePayPaymentMethod {
        /**
         * A string, suitable for display, that describes the card.
         */
        displayName: string;

        /**
         * A string, suitable for display, that is the name of the payment network backing the card.
         * The value is one of the supported networks specified in the supported​Networks property of the Apple​Pay​Payment​Request.
         */
        network: string;

        /**
         * A value representing the card's type of payment.
         */
        type: string;

        /**
         * The payment pass object associated with the payment.
         */
        paymentPass: ApplePayPaymentPass;
    }

    /**
     * The Apple​Pay​Payment​Method​Selected​Event class defines the attributes contained by the ApplePaySession.onpaymentmethodselected callback function.
     */
    abstract class ApplePayPaymentMethodSelectedEvent extends Event {
        /**
         * The card used to complete a payment.
         */
        readonly paymentMethod: ApplePayPaymentMethod;
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
        deviceAccountIdentifier?: string;

        /**
         * A version of the device account number suitable for display in your UI.
         */
        deviceAccountNumberSuffix?: string;

        /**
         * The activation state of the pass.
         */
        activationState: string;
    }

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
        lineItems?: ApplePayLineItem[];

        /**
         * The payment capabilities supported by the merchant.
         * The value must at least contain ApplePayMerchantCapability.supports3DS.
         */
        merchantCapabilities: string[];

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
        billingContact?: ApplePayPaymentContact;

        /**
         * The billing information that you require from the user in order to process the transaction.
         */
        requiredBillingContactFields?: string[];

        /**
         * The shipping information that you require from the user in order to fulfill the order.
         */
        requiredShippingContactFields?: string[];

        /**
         * Shipping contact information for the user.
         */
        shippingContact?: ApplePayPaymentContact;

        /**
         * A set of shipping method objects that describe the available shipping methods.
         */
        shippingMethods?: ApplePayShippingMethod[];

        /**
         * How the items are to be shipped.
         */
        shippingType?: string;

        /**
         * Optional user-defined data.
         */
        applicationData?: string;
    }

    /**
     * Contains the user's payment credentials.
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
     * The Apple​Pay​Shipping​Contact​Selected​Event class defines the attributes contained by the ApplePaySession.onshippingcontactselected callback function.
     */
    abstract class ApplePayShippingContactSelectedEvent extends Event {
        /**
         * The shipping address selected by the user.
         */
        readonly shippingContact: ApplePayPaymentContact;
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
        detail?: string;

        /**
         * The amount associated with this shipping method.
         */
        amount: string;

        /**
         * A client-defined identifier.
         */
        identifier?: string;
    }

    /**
     * The Apple​Pay​Shipping​Method​Selected​Event class defines the attribute contained by the ApplePaySession.onshippingmethodselected callback function.
     */
    abstract class ApplePayShippingMethodSelectedEvent extends Event {
        /**
         * The shipping method selected by the user.
         */
        readonly shippingMethod: ApplePayShippingMethod;
    }

    /**
     * The Apple​Pay​Validate​Merchant​Event class defines the attributes contained by the ApplePaySession.onvalidatemerchant callback function.
     */
    abstract class ApplePayValidateMerchantEvent extends Event {
        /**
         * The URL used to validate the merchant server.
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

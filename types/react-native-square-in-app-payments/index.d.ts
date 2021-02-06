// Type definitions for react-native-square-in-app-payments 1.4
// Project: https://github.com/square/in-app-payments-react-native-plugin
// Definitions by: Phillip Sgardelis <https://github.com/Phillip-Cognativ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// https://github.com/square/in-app-payments-react-native-plugin/blob/master/docs/reference.md

// Types

/** Supported brands for `card` payments accepted during the In-App Payments SDK checkout flow. */
export type Brand =
    /** Visa Inc. credit or debit card. */
    | 'VISA'
    /** Mastercard Incorporated credit or debit card. */
    | 'MASTERCARD'
    /** American Express Company credit card. */
    | 'AMERICAN_EXPRESS'
    /** Discover Financial Services credit card. */
    | 'DISCOVER'
    /** Diners Club International credit card. */
    | 'DISCOVER_DINERS'
    /** Japan Credit Bureau credit card. */
    | 'JCB'
    /** China UnionPay credit card. */
    | 'CHINA_UNION_PAY'
    /** An unexpected card type. */
    | 'OTHER_BRAND';

/** The type of card (for example, Credit or Debit). Note: This property is experimental and will always return UNKNOWN. */
export type CardType =
    /** Debit card */
    | 'DEBIT'
    /** Credit Card */
    | 'CREDIT'
    /** Unable to determine type of the card */
    | 'UNKNOWN';

/** The prepaid type of the credit card (for example, a Prepaid Gift Card). Note: This property is experimental and will always return UNKNOWN */
export type CardPrepaidType =
    /** Prepaid Card */
    | 'PREPAID'
    /** Card that is not prepaid */
    | 'NOT_PREPAID'
    /** Unable to determine whether the card is prepaid or not */
    | 'UNKNOWN';

/** Represents the non-confidential details of a card. */
export interface Card {
    /** The brand (for example, VISA) of the card. */
    brand: Brand;
    /** The last 4 digits of this card's number. */
    lastFourDigits: string;
    /** The expiration month of the card. Ranges between 1 and 12, with 1 corresponding to January and 12 to December. */
    expirationMonth: number;
    /** The four-digit expiration year of the card. */
    expirationYear: number;
    /** The billing postal code associated with the card. */
    postalCode: string | null;
    /** The type of card (for example, Credit or Debit). Note: This property is experimental and will always return UNKNOWN */
    type: CardType;
    /** The prepaid type of the credit card (for example, a Prepaid Gift Card). Note: This property is experimental and will always return UNKNOWN */
    prepaidType: CardPrepaidType;
}

/** Represents the result of a successful request to process payment card information. */
export interface CardDetails {
    /** A one-time-use payment token that can be used with the Square Connect APIs to charge the card or save the card information. */
    nonce: string;
    /** Non-confidential details about the entered card, such as the brand and last four digits of the card number. */
    card: Card;
}

// Errors

/** Error Codes */
export enum SQIPErrorCodes {
    /**
     * In-App Payments SDK was used in an unexpected or unsupported way.
     * Returned by all methods
     */
    USAGE_ERROR = 'usageError',
    /**
     * In-App Payments SDK could not connect to the network.
     * Returned by: `applePayNonceRequestFailureCallback`, `googlePayNonceRequestFailureCallback`
     */
    NO_NETWORK = 'noNetwork',
    /**
     * Square Buyer Verification SDK could not verify the provided card.
     * Returned by: `BuyerVerificationErrorCallback`
     */
    FAILED = 'failed',
    /**
     * The result when the customer cancels the Square Buyer Verification flow before a card is successfully verified.
     * Returned by: `BuyerVerificationErrorCallback`
     */
    CANCELED = 'canceled',
    /**
     * The version of the Square Buyer Verification SDK used by this application is no longer supported.
     * Returned by: `BuyerVerificationErrorCallback`
     */
    UNSUPPORTED_SDK_VERSION = 'unsupportedSDKVersion',
}

/** Signals that card entry exception of some sort has occurred. This class is the general class of exceptions produced by failed payment card processing operations. */
export interface InAppPaymentsException {
    /** The enumerated error types */
    code: SQIPErrorCodes;
    /** A description of the usage error */
    message: string;
    /** Information about error state */
    debugCode: string;
    /** A description of the error state */
    debugMessage: string;
}

/** Contains information about a payment card processing error. */
export interface Error {
    /** The enumerated error types */
    code: SQIPErrorCodes;
    /** A description of the usage error */
    message: string;
    /** Information about error state */
    debugCode: string;
    /** A description of the error state */
    debugMessage: string;
}

/** Setup */
export namespace SQIPCore {
    /**
     * Sets the Square Application ID.
     * Used to set a Square Application ID on the InAppPaymentsSDK object.
     * @param applicationId - The Square Application ID obtained from the developer portal
     */
    function setSquareApplicationId(applicationId: string): Promise<void>;
}

/** Card Payments */
export namespace SQIPCardEntry {
    // Types

    interface CardEntryConfig {
        /**
         * Indicates that the customer must enter the postal code associated with their payment card. When false, the postal code field will not be displayed. Defaults to true.
         * A Postal code must be collected for processing payments for Square accounts based in the United States, Canada, and United Kingdom.
         * Disabling postal code collection in those regions will result in all credit card transactions being declined.
         */
        collectPostalCode: boolean;
        /**
         * The location that is being verified against.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        squareLocationId?: string;
        /**
         * Indicates the action (Charge or Store) that will be performed onto the card after retrieving the verification token.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        buyerAction?: string;
        /**
         * Payment amount
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        amount?: number;
        /**
         * ISO currency code of the payment amount.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        currencyCode?: string;
        /**
         * Given name of the contact.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        givenName?: string;
        /**
         * Last name of the contact.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        familyName?: string;
        /**
         * The street address lines of the contact address.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        addressLines?: string[];
        /**
         * The city name of the contact address.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        city?: string;
        /**
         * A 2-letter string containing the ISO 3166-1 country code of the contact address.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        countryCode?: string;
        /**
         * Email address of the contact.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        email?: string;
        /**
         * The telephone number of the contact.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        phone?: string;
        /**
         * The postal code of the contact address.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        postalCode?: string;
        /**
         * The applicable administrative region (e.g., province, state) of the contact address.
         * Should be specified if calling `startCardEntryFlowWithBuyerVerification` method.
         */
        region?: string;
    }

    /** Represents the result of a successful buyer verification request. */
    interface BuyerVerificationDetails {
        /** A one-time-use payment token that can be used with the Square Connect APIs to charge the card or save the card information. */
        nonce: string;
        /** Non-confidential details about the entered card, such as the brand and last four digits of the card number. */
        card: Card;
        /** The token representing a verified buyer. */
        token: string;
    }

    interface Font {
        size: number;
        name: string;
    }
    interface RGBAColor {
        r: number;
        g: number;
        b: number;
        a: number;
    }
    type KeyboardAppearance = 'Light' | string;

    /** Encapsulates options used to style the iOS native card entry view controller. */
    interface ThemeIOS {
        /** The text field font. */
        font?: Font;
        /** The background color of the card entry view controller. */
        backgroundColor?: RGBAColor;
        /** The fill color for text fields. */
        foregroundColor?: RGBAColor;
        /** The text field text color. */
        textColor?: RGBAColor;
        /** The text field placeholder text color. */
        placeholderTextColor?: RGBAColor;
        /** The tint color reflected in the text field cursor and submit button background color when enabled. */
        tintColor?: RGBAColor;
        /** The text color used to display informational messages. */
        messageColor?: RGBAColor;
        /** The text color when the text is invalid. */
        errorColor?: RGBAColor;
        /** The text of the entry completion button */
        saveButtonTitle?: string;
        /** The save button font. */
        saveButtonFont?: Font;
        /** The save button text color when enabled. */
        saveButtonTextColor?: RGBAColor;
        /** The appearance of the keyboard. */
        keyboardAppearance?: KeyboardAppearance;
    }

    // Callbacks

    /**
     * Callback invoked when card entry is returned successfully with card details.
     * @param cardDetails - The results of a successful card entry
     */
    type CardEntryNonceRequestSuccessCallback = (cardDetails: CardDetails) => void;

    /**
     * Callback invoked when Buyer Verification flow succeeds.
     * @param buyerVerificationDetails
     */
    type BuyerVerificationSuccessCallback = (buyerVerificationDetails: BuyerVerificationDetails) => void;

    /**
     * Callback invoked when Buyer Verification flow fails.
     */
    type BuyerVerificationErrorCallback = () => void;

    /**
     * Callback invoked when card entry canceled and has been closed.
     * Do not call completeCardEntry because the operation is complete and the card entry form is closed.
     */
    type CardEntryCancelCallback = () => void;

    /**
     * Callback invoked when card entry is completed and has been closed.
     */
    type CardEntryCompleteCallback = () => void;

    // Functions

    /**
     * Displays a full-screen card entry view.
     * The method takes one configuration object and two call back parameters which correspond to the possible results of the request.
     * @param cardEntryConfig - Configuration object for card entry behavior, pass null for default configuration
     * @param onCardNonceRequestSuccess - Invoked when card entry is completed and the SDK has processed the payment card information.
     * @param onCardEntryCancel - Invoked when card entry is canceled.
     */
    function startCardEntryFlow(
        cardEntryConfig: CardEntryConfig | null,
        onCardNonceRequestSuccess: CardEntryNonceRequestSuccessCallback,
        onCardEntryCancel: CardEntryCancelCallback,
    ): Promise<void>;

    /**
     * Displays a full-screen card entry view with buyer verification flow enabled.
     * The method takes one configuration object and three call back parameters which correspond to the possible results of the request
     * @param cardEntryConfig - Configuration object for card entry behavior, pass null for default configuration
     * @param onBuyerVerificationSuccess - Invoked when card entry with buyer verification is completed successfully.
     * @param onBuyerVerificationFailure - Invoked when card entry with buyer verification encounters errors.
     * @param onCardEntryCancel - Invoked when card entry is canceled.
     */
    function startCardEntryFlowWithBuyerVerification(
        cardEntryConfig: CardEntryConfig | null,
        onBuyerVerificationSuccess: BuyerVerificationSuccessCallback,
        onBuyerVerificationFailure: BuyerVerificationErrorCallback,
        onCardEntryCancel: CardEntryCancelCallback,
    ): Promise<void>;

    /**
     * Called in the `onCardNonceRequestSuccess` callback. Closes the card entry form.
     * `completeCardEntry` should be called after all other callback logic is executed.
     * If callback logic makes a server call to process the supplied nonce, this method is called after getting a success response from the server.
     * If any nonce processing logic is to be executed after the card entry form is closed,
     * call completeCardEntry after getting the card nonce from the `onCardNonceRequestSuccess` cardDetails parameter.
     * @param onCardEntryComplete - The callback invoked when card entry is completed and is closed.
     */
    function completeCardEntry(onCardEntryComplete: CardEntryCompleteCallback): Promise<void>;

    /**
     * Called in the `onCardNonceRequestSuccess` callback. Returns execution to the card entry form with an error string to be shown in the form.
     * `showCardNonceProcessingError` should be called after all other callback logic is executed.
     * If callback logic makes a server call to request a payment with the supplied nonce, this method is called after getting an error response from the server call.
     * @param errorMessage - The error message to be shown in the card entry form.
     */
    function showCardNonceProcessingError(errorMessage: string): Promise<void>;

    /**
     * Sets the customization theme for the card entry view controller in the native layer.
     * It is not necessary to call this method before starting Apple Pay. The SDK provides a default theme which can be customized to match the theme of your app.
     * @platform IOS
     * @param themeConfiguration - An object that defines the theme of an iOS card entry view controller.
     */
    function setIOSCardEntryTheme(themeConfiguration: ThemeIOS): Promise<void>;
}

/** Apple Pay */
export namespace SQIPApplePay {
    // Types

    enum ApplePayPaymentType {
        /** A summary item representing an estimated or unknown cost. */
        PaymentTypePending = 1,
        /** A summary item representing the known, final cost. */
        PaymentTypeFinal = 2,
    }

    /** Represents the Apple Pay configuration. */
    interface ApplePayConfig {
        /** The payment authorization amount as a string. */
        price: string;
        /** A label that displays the checkout summary in the Apple Pay view. */
        summaryLabel: string;
        /** The Apple Pay country code. */
        countryCode: string;
        /** ISO currency code of the payment amount. */
        currencyCode: string;
        /** Type of the payment summary item, PaymentTypeFinal for default */
        paymentType?: ApplePayPaymentType;
    }

    // Callbacks

    /**
     * Callback invoked when Apple Pay card details are available
     * This is called before the Apple Pay payment authorization sheet is closed. Call `completeApplePayAuthorization` to close the apple pay sheet.
     * @platform IOS
     * @param cardDetails - The non-confidential details of the card and a nonce.
     */
    type ApplePayNonceRequestSuccessCallback = (cardDetails: CardDetails) => void;

    /**
     * Callback invoked when a card nonce cannot be generated from Apple Pay payment authorization card input values.
     * This callback is invoked before the native iOS Apple Pay payment authorization view controller is closed.
     * Call `completeApplePayAuthorization` with an error message to let the user modify input values and resubmit.
     * @platform IOS
     * @param error - Information about the error condition that prevented a nonce from being generated.
     */
    type ApplePayNonceRequestFailureCallback = (error: Error) => void;

    /**
     * Callback invoked when the native iOS Apple Pay payment authorization sheet is closed with success, failure, or cancellation.
     * This callback notifies caller widget when it should switch to other views.
     * @platform IOS
     */
    type ApplePayCompleteCallback = () => void;

    // Functions

    /**
     * Initializes the In-App Payments React Native plugin for Apple Pay.
     * This is a method called only once when React Native app is being initialized on an iOS device.
     * Call this method only on an iOS device and when your app is intended to support Apple Pay.
     * @platform IOS
     * @param applePayMerchantId - Registered Apple Pay merchant ID
     */
    function initializeApplePay(applePayMerchantId: string): Promise<void>;

    /**
     * Returns true if the device supports Apple Pay and the user has added at least one card that Square supports.
     * Not all brands supported by Apple Pay are supported by Square.
     * @platform IOS
     */
    function canUseApplePay(): Promise<boolean>;

    /**
     * Starts the Apple Pay payment authorization and returns a nonce based on the authorized Apple Pay payment token.
     * @platform IOS
     * @param applePayConfig - Configuration for Apple Pay
     * @param onApplePayNonceRequestSuccess - Invoked before Apple Pay sheet is closed. The success callback carries the generated nonce
     * @param onApplePayNonceRequestFailure - Invoked before Apple Pay sheet is closed. The failure callback carries information about the failure.
     * @param onApplePayComplete - Invoked when Apple Pay sheet is closed after success, failure, or cancellation.
     * @throws ex
     */
    function requestApplePayNonce(
        applePayConfig: ApplePayConfig,
        onApplePayNonceRequestSuccess: ApplePayNonceRequestSuccessCallback,
        onApplePayNonceRequestFailure: ApplePayNonceRequestFailureCallback,
        onApplePayComplete: ApplePayCompleteCallback,
    ): Promise<void>;

    /**
     * Notifies the native layer to close the Apple Pay sheet with success or failure status.
     * @platform IOS
     * @param isSuccess - Indicates success or failure.
     * @param [errorMessage] - The error message that Apple Pay displays in the native layer card entry view controller.
     * @throws ex
     */
    function completeApplePayAuthorization(isSuccess: boolean, errorMessage?: string): Promise<void>;
}

export namespace SQIPGooglePay {
    // Types

    enum GooglePayPriceStatus {
        /** used for a capability check */
        TotalPriceStatusNotCurrentlyKnown = 1,
        /** Total price may adjust based on the details of the response, such as sales tax collected based on a billing address. */
        TotalPriceStatusEstimated = 2,
        /** Total price will not change from the amount presented to the user. */
        TotalPriceStatusFinal = 3,
    }

    enum GooglePayEnvironment {
        /** Environment to be used when an app is granted access to the Google Pay production environment. */
        EnvironmentProduction = 1,
        /** Environment to be used for development and testing an application before approval for production. */
        EnvironmentTest = 3,
    }

    /** Represents the Google Pay configuration. */
    interface GooglePayConfig {
        /** The payment authorization amount as a string. */
        price: string;
        /** ISO currency code of the payment amount. */
        currencyCode: string;
        /** The status of the total price used */
        priceStatus: GooglePayPriceStatus;
    }

    // Callbacks

    /**
     * Callback invoked with cardDetails with Google Pay are available.
     * @platform Android
     * @param cardDetails - The non-confidential details of the card and a nonce.
     */
    type GooglePayNonceRequestSuccessCallback = (cardDetails: CardDetails) => void;

    /**
     * Callback invoked a card nonce could not be obtained.
     * @platform Android
     * @param error - Information about the cause of the error.
     */
    type GooglePayNonceRequestFailureCallback = (error: Error) => void;

    /**
     * Callback invoked when Google Pay payment authorization is canceled.
     * @platform Android
     */
    type GooglePayCancelCallback = () => void;

    // Functions

    /**
     * Used to enable Google Pay in an Android app. Initialize React Native plugin for google pay.
     * This is a method called only once when React Native app is being initialized on an Android device.
     * @platform Android
     * @param squareLocationId - The Square Location ID from the developer portal.
     * @param environment - Specifies the Google Pay environment to run Google Pay in: Test or Production
     */
    function initializeGooglePay(squareLocationId: string, environment: GooglePayEnvironment): Promise<void>;

    /**
     * Returns true if the device supports Google Pay and the user has added at least one card that Square supports.
     * Square doesn't support all the brands apple pay supports.
     * @platform Android
     * @throws ex
     */
    function canUseGooglePay(): Promise<boolean>;

    /**
     * Starts the Google Pay payment authorization and returns a nonce based on the authorized Google Pay payment token.
     * @platform Android
     * @param googlePayConfig - Configuration for Google Pay
     * @param onGooglePayNonceRequestSuccess - Success callback invoked when a nonce is available.
     * @param onGooglePayNonceRequestFailure - Failure callback invoked when SDK failed to produce a nonce.
     * @param onGooglePayCanceled - Cancel callback invoked when user cancels payment authorization.
     * @throws ex
     */
    function requestGooglePayNonce(
        googlePayConfig: GooglePayConfig,
        onGooglePayNonceRequestSuccess: GooglePayNonceRequestSuccessCallback,
        onGooglePayNonceRequestFailure: GooglePayNonceRequestFailureCallback,
        onGooglePayCanceled: GooglePayCancelCallback,
    ): Promise<void>;
}

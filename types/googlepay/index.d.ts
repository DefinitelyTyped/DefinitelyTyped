// Type definitions for non-npm package Google Pay API 0.6
// Project: https://developers.google.com/pay/api/web/
// Definitions by: Florian Luccioni <https://github.com/Fluccioni>,
//                 Radu Raicea <https://github.com/Radu-Raicea>,
//                 Filip Stanis <https://github.com/fstanis>
//                 Alexandre Couret <https://github.com/ozotek>
//                 Sergi Ferriz <https://github.com/mumpo>
//                 Soc Sieng <https://github.com/socsieng>
//                 Jose L Ugia <https://github.com/JlUgia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

/**
 * Spec for the Google Pay APIs.
 */
declare namespace google.payments.api {
    /**
     * Request for payment data.
     *
     * Contains several options to describe which information is being
     * requested and how it will be transferred.
     */
    interface PaymentDataRequest {
        /**
         * Detailed merchant information.
         *
         * This field is required.
         */
        merchantInfo: MerchantInfo;

        /**
         * Major API version.
         *
         * For this specification's version, this value should be 2.
         *
         * This field is required.
         */
        apiVersion: number;

        /**
         * Minor API version.
         *
         * For this specification's version, this value should be 0.
         *
         * This field is required.
         */
        apiVersionMinor: number;

        /**
         * Whether to collect the email from the buyer.
         *
         * The returned email can be retrieved from
         * [[PaymentData.email|`PaymentData.email`]]
         *
         * If omitted, defaults to `false`.
         *
         * @default false
         */
        emailRequired?: false | true | undefined;

        /**
         * Whether a shipping address is required from the buyer.
         *
         * The returned shipping address can be retrieved from
         * [[Address|`Address`]].
         *
         * If omitted, defaults to `false`.
         *
         * @default false
         */
        shippingAddressRequired?: false | true | undefined;

        /**
         * Optional shipping address parameters.
         *
         * If omitted, the default values specified in
         * [[ShippingAddressParameters|`ShippingAddressParameters`]] will be
         * assumed.
         */
        shippingAddressParameters?: ShippingAddressParameters | undefined;

        /**
         * List of allowed payment methods.
         *
         * This field is required and must contain at least one
         * [[PaymentMethodSpecification|`PaymentMethodSpecification`]].
         */
        allowedPaymentMethods: PaymentMethodSpecification[];

        /**
         * Detailed information about the transaction.
         *
         * This field is required.
         */
        transactionInfo: TransactionInfo;

        /**
         * Offers available for redemption that can be used with the current
         * order.
         */
        offerInfo?: OfferInfo | undefined;

        /**
         * Whether a shipping option is required from the buyer.
         *
         * If omitted, defaults to `false`.
         * Note: This field is currently only for web only.
         *
         * @default false
         */
        shippingOptionRequired?: false | true | undefined;

        /**
         * Parameters for shipping option that can be used in this request.
         *
         * This should only be set if
         * [[PaymentDataRequest.shippingOptionRequired|`PaymentDataRequest.shippingOptionRequired`]]
         * is set to true.
         *
         * Note: This field is currently only for web only.
         */
        shippingOptionParameters?: ShippingOptionParameters | undefined;

        /**
         * List of callbacks that the developer intents to handle.
         * Upon selection by the user, these intents can be used to update the
         * request with new data based on that selection (e.g. if a shipping
         * option is selected, the developer could update the `transactionInfo`
         * with new `totalPrice` and `diplayItems`).
         *
         * Note: This  functionality is only available for web.
         */
        callbackIntents?: CallbackIntent[] | undefined;
    }

    /**
     * Request for the user's ability to display the Google Pay payment sheet
     * and provide at least one of the payment methods specified.
     *
     * A user's ability to pay may be tied to the capabilities of the current
     * context (browser/device) to display required components for the
     * specified payment methods including logging in to a Google Account and
     * providing one of the payment methods specified in
     * [[IsReadyToPayRequest.allowedPaymentMethods|`allowedPaymentMethods`]]
     *
     * Optionally provides a signal if one or more of the specified payment
     * methods exists for the current user.
     */
    interface IsReadyToPayRequest {
        /**
         * Major API version.
         *
         * For this specification's version, this value should be 2.
         *
         * Make sure this matches
         * [[PaymentDataRequest.apiVersion|`PaymentDataRequest.apiVersion`]] so
         * the `isReadyToPay` client method can correctly check whether the
         * specified API version is supported for the current context.
         *
         * This field is required.
         */
        apiVersion: number;

        /**
         * Minor API version.
         *
         * For this specification's version, this value should be 0.
         *
         * Make sure this matches
         * [[PaymentDataRequest.apiVersionMinor|`PaymentDataRequest.apiVersionMinor`]]
         * so the `isReadyToPay` client method can correctly check whether the
         * specified API version is supported for the current context.
         *
         * This field is required.
         */
        apiVersionMinor: number;

        /**
         * List of allowed payment methods.
         *
         * This field is required and must contain at least one
         * allowed payment method.
         *
         * Check each filtering criteria within the payment method's
         * parameters field to see if the properties within are applicable for
         * `IsReadyToPayRequest`.
         */
        allowedPaymentMethods: IsReadyToPayPaymentMethodSpecification[];

        /**
         * If set to `true` then the
         * [[IsReadyToPayResponse.paymentMethodPresent|`IsReadyToPayResponse.paymentMethodPresent`]]
         * property will be populated with a boolean indicating the current
         * user's ability to pay with one or more of the payment methods
         * specified in
         * [[IsReadyToPayRequest.allowedPaymentMethods|`IsReadyToPayRequest.allowedPaymentMethods`]]
         *
         * @default false
         */
        existingPaymentMethodRequired?: false | true | undefined;
    }

    /**
     * Payment data.
     *
     * Contains the payment data requested in
     * [[PaymentDataRequest|`PaymentDataRequest`]]
     */
    interface PaymentData {
        /**
         * Major API version.
         *
         * This value will match what was set in
         * [[PaymentDataRequest.apiVersion|`PaymentDataRequest.apiVersion`]].
         */
        apiVersion: number;

        /**
         * Minor API version.
         *
         * This value will match what was set in
         * [[PaymentDataRequest.apiVersionMinor|`PaymentDataRequest.apiVersionMinor`]].
         */
        apiVersionMinor: number;

        /**
         * The buyer's email.
         *
         * This value will only be set if
         * [[PaymentDataRequest.emailRequired|`PaymentDataRequest.emailRequired`]]
         * was set to `true`.
         */
        email?: string | undefined;

        /**
         * The shipping address.
         *
         * This object will only be returned if
         * [[PaymentDataRequest.shippingAddressRequired|`PaymentDataRequest.shippingAddressRequired`]]
         * was set to `true`.
         */
        shippingAddress?: Address | undefined;

        /**
         * Data about the selected payment method.
         */
        paymentMethodData: PaymentMethodData;

        /**
         * Contains the data for the offer applied by the user. This will be
         * populated if an offer is applied to the transaction.
         */
        offerData?: OfferData | undefined;

        /**
         * Contains the data for shipping option selected by the user.
         */
        shippingOptionData?: SelectionOptionData | undefined;
    }

    /**
     * Intermediate version of payment data.
     *
     * Contains limited user information for developer callbacks.
     */
    interface IntermediatePaymentData {
        /**
         * Indicate the changing field that triggers the callback.
         */
        callbackTrigger: CallbackTrigger;

        /**
         * Contains limited data for user selected card information.
         */
        paymentMethodData: IntermediatePaymentMethodData;

        /**
         * Contains limited data for user selected shipping address information.
         */
        shippingAddress?: IntermediateAddress | undefined;

        /**
         * Contains the data for shipping option selected by the user.
         */
        shippingOptionData?: SelectionOptionData | undefined;

        /**
         * Contains the data for offers applied by the user.
         */
        offerData?: OfferData | undefined;
    }

    /**
     * Information about a user's ability to provide payment information
     * through the Google Pay payment sheet.
     *
     * @example
     * ```
     * // The current user is able to provide payment
     * // information through the Google Pay payment sheet.
     * {
     *   "result": true
     * }
     * ```
     */
    interface IsReadyToPayResponse {
        /**
         * Whether the user is able to provide payment information through the
         * Google Pay payment sheet.
         *
         * A user's ability to pay may be tied to the capabilities of the
         * current context (browser/device) to display required components for
         * the specified payment methods including logging in to a Google
         * Account and providing one of the payment methods specified in
         * [[IsReadyToPayRequest.allowedPaymentMethods|`IsReadyToPayRequest.allowedPaymentMethods`]].
         */
        result: boolean;

        /**
         * The current user's ability to pay with one or more of the payment
         * methods specified in
         * [[IsReadyToPayRequest.allowedPaymentMethods|`IsReadyToPayRequest.allowedPaymentMethods`]]
         *
         * This property only exists if
         * [[IsReadyToPayRequest.existingPaymentMethodRequired|`IsReadyToPayRequest.existingPaymentMethodRequired`]]
         * was set to `true`. The property value will always be `true` if the
         * [[PaymentsClient|`PaymentsClient`]] is configured for a test
         * environment.
         */
        paymentMethodPresent?: false | true | undefined;
    }

    /**
     * An updated request for payment data.
     *
     * This is generated after a callback has been triggered and should be
     * used to patch the old PaymentDataRequest. Note that only the fields
     * that's been changed need to be set in this request update.
     *
     * Note: This interface is currently only for web only.
     */
    interface PaymentDataRequestUpdate {
        /**
         * Contains updated totals and line items. Only changes in totalPrice,
         * totalPriceStatus, transactionNote, displayItems will be allowed.
         *
         * Note: This field is currently only for web only.
         */
        newTransactionInfo?: TransactionInfo | undefined;

        /**
         * Contains updated shipping option parameters. All fields in
         * ShippingOptionParameters are allowed in the update.
         *
         * If this field is present it should be the full list of shipping
         * options instead of a delta of any earlier version. Note: This field
         * is currently only for web only.
         */
        newShippingOptionParameters?: ShippingOptionParameters | undefined;

        /**
         * Contains the updated offer information. All fields in OfferInfo are
         * allowed in the update.
         *
         * If this field is present it should be the full list of offer info
         * instead of a delta of any earlier version. Note: This field is
         * currently only for web only.
         */
        newOfferInfo?: OfferInfo | undefined;

        /**
         * Error for the last PaymentData, will be displayed to the user.
         *
         * Note: This field is currently only for web only.
         */
        error?: PaymentDataError | undefined;
    }

    /**
     * Callback result for a payment authorization update.
     */
    interface PaymentAuthorizationResult {
        /**
         * Error for the last PaymentData, will be displayed to the user.
         */
        error?: PaymentDataError | undefined;

        /**
         * Represents the state of the transaction after callback is performed.
         */
        transactionState: TransactionState;
    }

    /**
     * Optional shipping address parameters for the returned shipping address.
     */
    interface ShippingAddressParameters {
        /**
         * Allowed country codes for the shipping address.
         *
         * This list should be an array of ISO 3166-1 alpha-2 country codes
         * (e.g., `["US", "CA", "JP"]`).
         *
         * If omitted, a shipping address from any supported country may be
         * returned.
         */
        allowedCountryCodes: string[];

        /**
         * Whether a phone number is additionally required from the buyer for
         * the shipping address (the phone number will only be returned if an
         * address is required, otherwise this field has no effect).
         *
         * If omitted, defaults to `false`.
         *
         * @default false
         */
        phoneNumberRequired?: false | true | undefined;
    }

    /**
     * Description of a user's address.
     */
    interface Address {
        /**
         * Name of the recipient at this address.
         */
        name?: string | undefined;

        /**
         * The first line of the address.
         *
         * Will be set to empty string if the address does not have a first
         * line.
         *
         * @default ""
         */
        address1?: string | undefined;

        /**
         * The second line of the address.
         *
         * Will be set to empty string if the address does not have a second
         * line.
         *
         * @default ""
         */
        address2?: string | undefined;

        /**
         * The third line of the address.
         *
         * Will be set to empty string if the address does not have a third
         * line.
         *
         * @default ""
         */
        address3?: string | undefined;

        /**
         * The locality (e.g. city or town).
         */
        locality: string;

        /**
         * The administrative area (e.g. state or province).
         */
        administrativeArea: string;

        /**
         * The two-letter ISO-3166 country code.
         */
        countryCode: string;

        /**
         * The postal code (also known in some places as ZIP code).
         *
         * Note: some regions do not have postal codes. In those cases
         * this field will be set to an empty string.
         */
        postalCode: string;

        /**
         * The sorting code.
         *
         * Note: some regions do not have sorting codes. In those cases
         * this field will be set to an empty string.
         */
        sortingCode?: string | undefined;

        /**
         * The phone number.
         *
         * This field will only be present if the caller requested that a phone
         * number be returned.
         */
        phoneNumber?: string | undefined;
    }

    /**
     * Limited information about user address for developer callbacks.
     */
    interface IntermediateAddress {
        /**
         * The administrative area (e.g. state or province).
         */
        administrativeArea: string;

        /**
         * The two-letter ISO-3166 country code.
         */
        countryCode: string;

        /**
         * The postal code (also known in some places as ZIP code).
         *
         * Note: some regions do not have postal codes. In those cases
         * this field will be set to an empty string.
         *
         * Also note: The returned postal code may vary based on the user's
         * geographic region. For Canada and United Kingdom, this contains only
         * the first three characters. For US, the this contain the first five
         * digits.
         */
        postalCode: string;

        /**
         * The locality (e.g. city or town).
         */
        locality: string;
    }

    /**
     * Specification of accepted payment method for use in `isReadyToPay`.
     */
    interface IsReadyToPayPaymentMethodSpecification {
        /**
         * Type of payment method.
         *
         * This field is required.
         */
        type: PaymentMethodType;

        /**
         * Payment method parameters.
         *
         * The parameters set here affect which payment methods will be
         * available for the user to choose from.
         */
        parameters: CardParameters;

        /**
         * Tokenization parameters.
         *
         * These parameters will be used to tokenize/transmit the
         * payment method returned to you in a format you can charge or
         * reference.
         */
        tokenizationSpecification?: PaymentMethodTokenizationSpecification | undefined;
    }

    /**
     * Specification of accepted payment method for use in `loadPaymentData`.
     */
    interface PaymentMethodSpecification {
        /**
         * Type of payment method.
         *
         * This field is required.
         */
        type: PaymentMethodType;

        /**
         * Payment method parameters.
         *
         * The parameters set here affect which payment methods will be
         * available for the user to choose from.
         */
        parameters: CardParameters;

        /**
         * Tokenization parameters.
         *
         * These parameters will be used to tokenize/transmit the
         * payment method returned to you in a format you can charge or
         * reference.
         */
        tokenizationSpecification: PaymentMethodTokenizationSpecification;
    }

    /**
     * Payment gateway tokenization parameters.
     *
     * These parameters will be used to tokenize/transmit the
     * payment method returned to you in a format you can charge or reference.
     */
    interface PaymentGatewayTokenizationSpecification {
        /**
         * The type of payment method tokenization to apply to the selected
         * payment method.
         */
        type: "PAYMENT_GATEWAY";

        /**
         * Specific parameters used for payment gateway tokenization.
         */
        parameters: PaymentGatewayTokenizationParameters;
    }

    /**
     * Direct tokenization parameters.
     *
     * These parameters will be used to tokenize/transmit the direct
     * payment method returned to you in a format you can charge or reference.
     */
    interface DirectTokenizationSpecification {
        /**
         * The type of payment method tokenization to apply to the selected
         * payment method.
         */
        type: "DIRECT";

        /**
         * Specific parameters used for direct tokenization.
         */
        parameters: DirectTokenizationParameters;
    }

    /**
     * Specific tokenization parameters used for
     * [[PaymentMethodTokenizationType|`DIRECT`]].
     *
     * Depending on the payment method you may be required to receive the
     * sensitive data in an encrypted and signed format.
     *
     * Currently the following payment methods require encryption:
     *
     * - [[PaymentMethodType|`CARD`]]
     *
     * See [Payment data
     * cryptography](https://developers.google.com/pay/api/payment-data-cryptography")
     * for more information on how to perform signature
     * verification and decryption of a payment response.
     */
    interface DirectTokenizationParameters {
        /**
         * The version of the encryption/signature protocol being used.
         *
         * This field is required when the payment method requires encryption.
         * Unless you were already using an older `protocolVersion`, you
         * should be using the latest version defined in
         * https://developers.google.com/pay/api/web/payment-data-cryptography.
         */
        protocolVersion: string;

        /**
         * Elliptic Curve public key suitable for using with the NIST P-126
         * curve. This public key will used to encrypt the sensitive payment
         * method information.
         *
         * This field is required when the payment method requires encryption.
         */
        publicKey: string;
    }

    /**
     * Specific tokenization parameters used for
     * [[PaymentMethodTokenizationType|`PAYMENT_GATEWAY`]]
     *
     * This object will generally have the following format:
     *
     * ```
     * {
     *   "gateway": "nameOfTheGateway",
     *   "param1": "value1",
     *   "param2": "value2",
     *   ...
     * }
     * ```
     *
     * The specific keys that you must set will depend on the gateway you
     * have specified. Please consult your gateway or processor documentation
     * on which parameters must be specified in this object.
     *
     * All values must be strings.
     */
    interface PaymentGatewayTokenizationParameters {
        /**
         * All keys must be strings.
         *
         * All values must be strings.
         */
        [key: string]: string;
    }

    /**
     * Optional billing address parameters for the returned billing address.
     */
    interface BillingAddressParameters {
        /**
         * Billing address format.
         *
         * If omitted, defaults to [[BillingAddressFormat|`MIN`]].
         *
         * Note: you should only set format to [[BillingAddressFormat|`FULL`]]
         * when it is required to process the order. Additional form entry or
         * customer data requests can increase friction during the checkout
         * process and can lead to a lower conversion rate.
         */
        format: BillingAddressFormat;

        /**
         * Whether billing phone number required.
         *
         * If omitted, defaults to `false`.
         *
         * Note: you should only set this to `true` when a phone number
         * is required to process the order. Additional form entry or customer
         * data requests can increase friction during the checkout process and
         * can lead to a lower conversion rate.
         *
         * @default false
         */
        phoneNumberRequired?: false | true | undefined;
    }

    /**
     * Parameters for [[PaymentMethodType|`PaymentMethodType.CARD`]].
     *
     * The parameters specified here affect which payment methods are
     * available for users to choose from. For example, the list of supported
     * card networks can be filtered by setting the
     * [[CardParameters.allowedCardNetworks|`allowedCardNetworks`]] property.
     */
    interface CardParameters {
        /**
         * Allowed authentication methods.
         *
         * This field specifies what set of fields or your gateway/processor
         * supports for authenticating a card transaction. Please note that some
         * of your processor's capabilities may vary by market, so consult your
         * processor to determine the authentication forms they support.
         *
         * In general, you should list/support as many authentication methods
         * possible as to increase the chances that a user will be able to
         * complete a purchase. Not all cards support all authentication
         * methods, so the more methods you or your processor support the
         * better.
         *
         * This field is required.
         */
        allowedAuthMethods: CardAuthMethod[];

        /**
         * Allowed card networks.
         *
         * This field specifies what set of card networks your gateway/processor
         * supports for a card transaction.
         *
         * Note: Some cards may contain multiple brands and be processed across
         * different networks. In particular when
         * [[TransactionInfo.countryCode|`TransactionInfo.countryCode`]] is set
         * to
         * `"BR", users will be prompted to choose whether to process the
         * transaction over a debit network or credit network and you should use
         * this field to know which network to process the transaction with. For
         * all other markets, this field will be set to a suggestion of a card
         * network to use for processing, but you or your processor may choose
         * to use different rails.
         *
         * This card network value **should not** be displayed.
         *
         * This field is required.
         */
        allowedCardNetworks: CardNetwork[];

        /**
         * Whether a prepaid card may be used for this transaction.
         *
         * If omitted, defaults to `true`.
         *
         * @default true
         */
        allowPrepaidCards?: false | true | undefined;

        /**
         * Whether a credit card may be used for this transaction.
         *
         * If omitted, defaults to `true`.
         *
         * @default true
         */
        allowCreditCards?: false | true | undefined;

        /**
         * Set to `true` to request assuranceDetails.
         *
         * If omitted, defaults to `false`.
         *
         * You may set if you need object provides information about the validation performed on the returned payment data.
         *
         * @default false
         */
        assuranceDetailsRequired?: boolean | undefined;

        /**
         * Whether a billing address is required from the buyer.
         *
         * If omitted, defaults to `false`.
         *
         * Note: you should only set this field to `true` when billing
         * address is required to process the order. Additional form entry or
         * customer data requests can increase friction during the checkout
         * process and can lead to a lower conversion rate.
         *
         * @default false
         */
        billingAddressRequired?: false | true | undefined;

        /**
         * Optional billing address parameters.
         *
         * If omitted, the default values specified in
         * [[BillingAddressParameters|`BillingAddressParameters`]] will be
         * assumed.
         */
        billingAddressParameters?: BillingAddressParameters | undefined;

        /**
         * List of card network parameters.
         *
         * This field is optional. You may set it when network specific
         * parameters are needed to complete a transaction.
         */
        cardNetworkParameters?: CardNetworkParameters[] | undefined;
    }

    /**
     * Assurance details about what validation has been performed on the returned payment credentials so that appropriate instrument risk checks can be applied.
     *
     *  Note: If both cardHolderAuthenticated and accountVerified are true, you don’t need to step up the returned credentials.
     *  If both aren’t, we recommend you to run the same risk checks and , authentication including 3D Secure flow if applicable.
     */
    interface AssuranceDetails {
        /**
         * If true, indicates that Cardholder possession validation has been performed on returned payment credential.
         */
        accountVerified?: boolean | undefined;

        /**
         * If true, indicates that identification and verifications (ID&V) was performed on the returned payment credential.
         *
         * If false, the same risk-based authentication can be performed as you would for card transactions.
         * This risk-based authentication can include, but not limited to, step-up with 3D Secure protocol if applicable.
         */
        cardHolderAuthenticated?: boolean | undefined;
    }

    /**
     * Parameters for card networks that can be used in this request.
     *
     * This should only be set for [[PaymentMethodType|`CARD`]].
     */
    interface CardNetworkParameters {
        /**
         * Type of card network parameters. Currently only
         * [[CardNetwork|`VISA`]] and [[CardNetwork|`MASTERCARD`]] are
         * supported.
         *
         * This field is required.
         */
        cardNetwork: CardNetwork;

        /**
         * Acquiring institution identification code as assigned by the DS
         * receiving the AReq message for the given card network.
         *
         * This is an optional field. We recommend setting this field to allow
         * SCA challenges to be done for the given card network.
         */
        acquirerBin?: string | undefined;

        /**
         * Acquirer-assigned Merchant identifier for VISA.
         *
         * This is an optional field. We recommend setting this field to allow
         * SCA challenges to be done for the given card network.
         */
        acquirerMerchantId?: string | undefined;
    }

    /**
     * Detailed information about the merchant.
     */
    interface MerchantInfo {
        /**
         * The ID of the merchant account with Google Pay.
         *
         * You can find this ID on {@link
         * https://payments.developers.google.com} once you have registered for
         * the Google Pay API.
         *
         * This field should only be set when you integrate on web on the
         * production environment.
         */
        merchantId: string;

        /**
         * A user visible merchant name.
         *
         * This name may be shown to the user in Google Pay to describe who the
         * user made a transaction with.
         *
         * This field is optional. If not set, the Business name in your Google
         * Pay Developer Profile will be used.
         */
        merchantName?: string | undefined;

        /**
         * The info of the software used by merchants to integrate with GPay.
         *
         * This field is optional and its values may be set by software
         * providers to identify the software the merchant is using.
         */
        softwareInfo?: SoftwareInfo | undefined;
    }

    /**
     * The info of the software used by merchants to integrate with GPay.
     */
    interface SoftwareInfo {
        /**
         * The identifier of the software used by merchants to integrate with
         * GPay.
         *
         * Partner's domain name can be used as the identifier.
         *
         * This field is optional.
         */
        id?: string | undefined;

        /**
         * The version of the software.
         *
         * GPay metrics are provided per version.
         *
         * This field is optional.
         */
        version?: string | undefined;
    }

    /**
     * Detailed information about the transaction.
     */
    interface TransactionInfo {
        /**
         * Correlation ID to refer to this transaction.
         *
         * This field is optional. It is generated by the merchant and is used
         * for referring to this transaction later on (e.g. for debugging issues
         * when communicating with Google).
         */
        transactionId?: string | undefined;

        /**
         * ISO 4217 alphabetic currency code of the transaction.
         *
         * This is a required field.
         */
        currencyCode: string;

        /**
         * ISO 3166-1 alpha-2 country code for the country where the transaction
         * will be completed/processed.
         *
         * This is an optional field. We recommend setting this field to allow
         * country-specific customizations (for example, in some countries we
         * may need to provide extra information to you or your processor in
         * order to complete a transaction).
         */
        countryCode?: string | undefined;

        /**
         * Total price of this transaction.
         *
         * The format of this string should follow the regular expression
         * format:
         * `[0-9]+(\.[0-9][0-9])?` (e.g., `"10.45"`)
         *
         * This field is required if
         * [[CheckoutOption.TransactionInfo.totalPriceStatus|`CheckoutOption.TransactionInfo.totalPriceStatus`]]
         * is set to
         * [[TotalPriceStatus|`ESTIMATED`]] or
         * [[TotalPriceStatus|`FINAL`]].
         */
        totalPrice: string;

        /**
         * Total price label of this transaction.
         *
         * The string will be shown as the total price label on the cart modal
         * dialog page.
         *
         * This field is optional, but required if developer wants to show cart
         * information. Otherwise the cart modal dialog will not be rendered
         * even if transactionInfo.displayItems is set.
         */
        totalPriceLabel?: string | undefined;

        /**
         * Status of this transaction's total price.
         *
         * This field is required.
         *
         * Note: some payment methods require that this field be set to
         * [[TotalPriceStatus|`FINAL`]] and that
         * the total price to be specified and final.
         */
        totalPriceStatus: TotalPriceStatus;

        /**
         * Transaction note.
         *
         * This field is optional except when the following payment methods are
         * used:
         *
         * - [[PaymentMethodType|`UPI`]]
         *   this will be passed to NPCI (National Payments Corporation of
         *   India) and can seen as the transaction description in the order
         *   screen. The note should have details related to the order or the
         *   reservation details. The maximum length allowed for this field
         *   is 80.
         */
        transactionNote?: string | undefined;

        /**
         * Optional checkout option parameter. Whether to use the 'Continue' or
         * the 'Pay Now' button for a buy flow.
         *
         * If omitted, defaults to [[CheckoutOption|`DEFAULT`]] and renders
         * the 'Continue' button for a buy flow.
         *
         * @default "DEFAULT"
         */
        checkoutOption?: CheckoutOption | undefined;

        /**
         * This can be used to display a high level breakdown of the total
         * price. e.g. 'subtotal', 'discount'.
         */
        displayItems?: DisplayItem[] | undefined;
    }

    /**
     * Data for a payment method.
     */
    interface PaymentMethodData {
        /**
         * Type of payment method.
         */
        type: PaymentMethodType;

        /**
         * Payment method information.
         *
         * The definition of this field depends
         * on which payment method type was set in
         * [[PaymentMethodData.type|`PaymentMethodData.type`]].
         *
         * - For [[PaymentMethodType|`CARD`]], this field
         *   will be an object conforming to [[CardInfo|`CardInfo`]].
         */
        info?: CardInfo | undefined;

        /**
         * User-facing message to describe the payment method funding this
         * transaction.
         *
         * You are required to show this message to the buyer as confirmation of
         * their funding source. Please refer to the
         * [documentation](https://developers.google.com/pay/api/|documentation)
         * for more information.
         *
         * **IMPORTANT:** Do not attempt to parse the contents of this string as
         * the format, contents, and length may change at any time. If you need
         * additional details, see
         * [[PaymentMethodData.info|`PaymentMethodData.info`]].
         */
        description?: string | undefined;

        /**
         * Tokenization data for the payment method.
         */
        tokenizationData: PaymentMethodTokenizationData;
    }

    /**
     * Limited data for a payment method for developer callbacks.
     */
    interface IntermediatePaymentMethodData {
        /**
         * Type of payment method.
         */
        type: PaymentMethodType;

        /**
         * Payment method information.
         *
         * The definition of this field depends
         * on which payment method type was set in
         * [[PaymentMethodData.type|`PaymentMethodData.type`]].
         *
         * - For [[PaymentMethodType|`PaymentMethodType.CARD`]], this field
         *   will be an object conforming to
         *   [[IntermediateCardInfo|`IntermediateCardInfo`]].
         */
        info?: IntermediateCardInfo | undefined;
    }

    /**
     * Data for a [[PaymentMethodType|`PaymentMethodType.CARD`]] payment
     * method.
     */
    interface CardInfo {
        /*
         *  AssuranceDetails
         *
         *  This object provides information about what validation
         *  has been performed on the returned payment credentials
         *  so that appropriate instrument risk checks can be applied.
         *
         *  To receive this object, set assuranceDetailsRequired: true inside CardParameters
         */
        assuranceDetails?: AssuranceDetails | undefined;

        /**
         * The card network.
         *
         * This card network value **should not** be displayed to
         * the buyer, but can be used when the details of a buyer's card are
         * needed. An example would be for customer support to help the buyer
         * identify the card used for this transaction. For a user-visible
         * description, use
         * [[PaymentMethodData.description|`PaymentMethodData.description`]]
         * instead.
         */
        cardNetwork: CardNetwork;

        /**
         * The details about the card.
         *
         * This value will be generally the last 4 digits of the card.
         *
         * These details **should not** be displayed to the buyer,
         * but can be used when the details of a buyer's card are needed. An
         * example would be for customer support to help the buyer identify the
         * card used for this transaction. For a user-visible description, use
         * [[PaymentMethodData.description|`PaymentMethodData.description`]]
         * instead.
         */
        cardDetails: string;

        /**
         * The billing address associated with the card.
         *
         * Note this billing address will only be populated when billing address
         * is set as required through
         * [[CardParameters.billingAddressRequired|`CardParameters.billingAddressRequired`]].
         */
        billingAddress?: Address | undefined;
    }

    /**
     * Limited information for a
     * [[PaymentMethodType|`PaymentMethodType.CARD`]] payment method used for
     * developer callbacks.
     */
    interface IntermediateCardInfo {
        /**
         * The card network.
         *
         * This card network value **should not** be displayed to
         * the buyer, but can be used when the details of a buyer's card are
         * needed. An example would be for customer support to help the buyer
         * identify the card used for this transaction. For a user-visible
         * description, use
         * [[PaymentMethodData.description|`PaymentMethodData.description`]]
         * instead.
         */
        cardNetwork: CardNetwork;
    }

    /**
     * Tokenization data for the payment method.
     *
     * @see PaymentMethodTokenizationSpecification
     */
    interface PaymentMethodTokenizationData {
        /**
         * The type of tokenization to be applied to the selected payment
         * method.
         *
         * This value will match the
         * [[PaymentMethodTokenizationSpecification.type|`PaymentMethodTokenizationSpecification.type`]]
         * specified in the request.
         */
        type: PaymentMethodTokenizationType;

        /**
         * The generated payment method token.
         *
         * The contents of this token and how it should be used will depend on
         * the selected
         * [[PaymentMethodTokenizationSpecification.type|`PaymentMethodTokenizationSpecification.type`]].
         */
        token: string;
    }

    /**
     * Definition of merchant provided offers that may be applicable to the
     * current order.
     */
    interface OfferInfo {
        /**
         * List of merchant provided offers applicable to the current order.
         */
        offers: OfferDetail[];
    }

    /**
     * Definition for each offer to be applied to this Payment Request.
     */
    interface OfferDetail {
        /**
         * Redemption code available for this transaction. This is used to
         * identify the offer when the user decides to apply the offer.
         */
        redemptionCode: string;

        /**
         * Description for the offer visible to the user to inform them about
         * the offer. The description is displayed in buyflow and should be less
         * than 60 characters long.
         */
        description: string;
    }

    /**
     * Definition for each offer to be applied to this payment request.
     */
    interface OfferData {
        /**
         * Redemption codes of the offers applied by the user.
         */
        redemptionCodes: string[];
    }

    /**
     * Parameters of merchant provided shipping option. If
     * paymentDataRequest#shippingOptionRequired is set then the request must
     * also provide ShippingOptionParameters with at least one option.
     * Developer can set a shipping option labeled "PENDING" if there's
     * nothing to show at initial request time.
     */
    interface ShippingOptionParameters {
        /**
         * All the shipping options available for the current request. Will be
         * rendered in the UI with given order.
         *
         * This field is required.
         */
        shippingOptions: SelectionOption[];

        /**
         * Identifier to the default selected shipping option. If this field is
         * not provided the first option will be the default option.
         *
         * This field is optional.
         */
        defaultSelectedOptionId?: string | undefined;
    }

    /**
     * Detailed info for a selectable option.
     */
    interface SelectionOption {
        /**
         * A unique identifier for the option.
         *
         * This field is required.
         */
        id: string;

        /**
         * The label to be displayed as the option.
         *
         * This field is required.
         */
        label: string;

        /**
         * A descriptive text that will be displayed below option label.
         *
         * This field is optional.
         */
        description?: string | undefined;
    }

    /**
     * Data for a [[SelectionOption|`SelectionOption`]].
     */
    interface SelectionOptionData {
        /**
         * Unique identifier of a [[SelectionOption|`SelectionOption`]].
         * Must match with [[SelectionOption.id|`SelectionOption.id`]]
         * field.
         */
        id: string;
    }

    /**
     * Definition of a cart item.
     */
    interface DisplayItem {
        /**
         * The label to be displayed for the item.
         *
         * This field is required.
         */
        label: string;

        /**
         * Type of displayed line item, this is going to be used for analysis
         * purpose.
         *
         * This field is required.
         */
        type: DisplayItemType;

        /**
         * Price of this item.
         *
         * The format of this string should follow the regular expression
         * format:
         * `^[0-9]+(\.[0-9][0-9])?$` (e.g., `"10.45"`)
         */
        price: string;

        /**
         * The status of a DisplayItem.
         *
         * This field is optional and default value is
         * [[DisplayItemStatus|`FINAL`]] if absent.
         */
        status?: DisplayItemStatus | undefined;
    }

    /**
     * Definition of an error in PaymentData.
     */
    interface PaymentDataError {
        /**
         * Predifined error reason
         *
         * This field is required.
         */
        reason: ErrorReason;

        /**
         * Intent of where the error occurs. Only data that specified in the
         * callback intent will be returned so an exception will be thrown if
         * the intent does not fall into one of the provided intents in
         * PaymentRequest.
         *
         * This field is required.
         */
        intent: CallbackIntent;

        /**
         * Custom user visible error that will be displayed in a dialog.
         *
         * This field is required.
         */
        message: string;
    }

    /**
     * Payment method type enum string.
     *
     * Options:
     *
     * - `CARD`:
     *   CARD payment method.
     *
     *   Note that the payment method information that may be returned to you
     *   or your processor for a credit card transaction is meant to be used
     *   only once. If you need to charge the user again you must call the
     *   APIs to obtain new payment credentials.
     *
     *   Also note that when we transfer information like PAN (personal
     *   account number) to either you or your gateway/processor, they may not
     *   correspond to the user's physical card. For support purposes, please
     *   use user's card info returned in [[CardInfo|`CardInfo`]] instead.
     *
     * - `PAYPAL`:
     *   PAYPAL payment method.
     */
    type PaymentMethodType = "CARD" | "PAYPAL";

    /**
     * Tokenization parameters.
     *
     * These parameters will be used to tokenize/transmit the
     * payment method returned to you in a format you can charge or reference.
     */
    type PaymentMethodTokenizationSpecification = PaymentGatewayTokenizationSpecification | DirectTokenizationSpecification;

    /**
     * Payment method tokenization type enum string.
     *
     * Options:
     *
     * - `PAYMENT_GATEWAY`:
     *   Tokenize a payment response to be consumed or charged by a specified
     *   third-party gateway service.
     *
     * - `DIRECT`:
     *   Tokenize to be consumed/charged directly by the merchant.
     */
    type PaymentMethodTokenizationType = "PAYMENT_GATEWAY" | "DIRECT";

    /**
     * Card network enum string.
     *
     * Options:
     *
     * - `AMEX`:
     *   American Express card network.
     *
     * - `DISCOVER`:
     *   Discover card network.
     *
     * - `ELECTRON`:
     *   Visa's Electron card network.
     *
     *   Note that this option can only be set when
     *   [[TransactionInfo.countryCode|`TransactionInfo.countryCode`]] is set
     *   to `"BR"`, and
     *   [[CardParameters.allowedCardNetworks|`CardParameters.allowedCardNetworks`]]
     *   must also contain [[CardNetwork|`VISA`]]
     *
     *   For processing purposes, you should use this as an indication that
     *   the card must be processed through the Electron debit network.
     *
     * - `ELO`:
     *   Elo card network.
     *
     *   Note that this option can only be set when
     *   [[TransactionInfo.countryCode|`TransactionInfo.countryCode`]] is set
     *   to `"BR"`.
     *
     * - `ELO_DEBIT`:
     *   Elo's debit network rail.
     *
     *   Note that this option can only be set when
     *   [[TransactionInfo.countryCode|`TransactionInfo.countryCode`]] is set
     *   to
     *   `"BR"`, and
     *   [[CardParameters.allowedCardNetworks|`CardParameters.allowedCardNetworks`]]
     *   must also contain [[CardNetwork|`ELO`]]
     *
     *   For processing purposes, you should use this as an indication that
     *   the card must be processed through the ELO debit network.
     *
     * - `INTERAC`:
     *   Interac card network.
     *
     * - `JCB`:
     *   JCB card network.
     *
     * - `MAESTRO`:
     *   Maestro card network.
     *
     *   Note that this option can only be set when
     *   [[TransactionInfo.countryCode|`TransactionInfo.countryCode`]] is set
     *   to `"BR"`, and
     *   [[CardParameters.allowedCardNetworks|`CardParameters.allowedCardNetworks`]]
     *   must also contain [[CardNetwork|`MASTERCARD`]]
     *
     *   For processing purposes, you should use this as an indication that
     *   the card must be processed through the Maestro debit network.
     *
     * - `MASTERCARD`:
     *   Mastercard card network.
     *
     * - `VISA`:
     *   Visa card network.
     */
    type CardNetwork = "AMEX" | "DISCOVER" | "ELECTRON" | "ELO" | "ELO_DEBIT" | "INTERAC" | "JCB" | "MAESTRO" | "MASTERCARD" | "VISA";

    /**
     * Card authentication method enum string.
     *
     * Options:
     *
     * - `PAN_ONLY`:
     *   Authenticate using a PAN (personal account number) only.
     *
     *   Note: in addition to the PAN (personal account number) there will
     *   also be an expiration month and year.
     *
     *   If you are using [[PaymentMethodTokenizationType|`PAYMENT_GATEWAY`]],
     *   you will not need to handle this sensitive data as it will be
     *   delivered to your gateway.
     *
     *   Warning: do not rely on the PAN returned being stable or being able
     *   to be used to reauthorize new transactions as the PAN is meant for
     *   one-time use only. Authorization for new transactions may fail if you
     *   reuse the credential across unrelated transactions.
     *
     * - `CRYPTOGRAM_3DS`:
     *   Authenticate using the a 3-D Secure (3DS) cryptogram.
     *
     *   Note: in addition to the 3DS cryptogram there will also be an
     *   associated PAN (personal account number), expiration month and year,
     *   and Electronic Commerce Indicator for certain card networks.
     *
     *   If you are using [[PaymentMethodTokenizationType|`PAYMENT_GATEWAY`]],
     *   you will not need to handle this sensitive data as it will be
     *   delivered to your gateway.
     *
     *   Warning: do not rely on the PAN returned being stable or being able
     *   to be used to reauthorize new transactions as the PAN and associated
     *   3DS cryptogram are meant for one-time use only. Authorization for new
     *   transactions may fail if you reuse the credential across unrelated
     *   transactions.
     */
    type CardAuthMethod = "PAN_ONLY" | "CRYPTOGRAM_3DS";

    /**
     * Billing address format enum string.
     *
     * Options:
     *
     * - `MIN`:
     *   Minimal billing address
     *
     *   When this format is used, the billing address returned will only
     *   contain the following fields:
     *
     *   - [[Address.name|`name`]]
     *   - [[Address.countryCode|`countryCode`]]
     *   - [[Address.postalCode|`postalCode`]]
     *   - [[Address.phoneNumber|`phoneNumber`]] if
     *     [[BillingAddressParameters.phoneNumberRequired|`BillingAddressParameters.phoneNumberRequired`]]
     *     is set to `true`.
     *
     *   Note: some countries do not use postal codes. The postal code field
     *   will be empty in those countries.
     *
     * - `FULL`:
     *   Full billing address
     *
     *   All the fields in [[Address|`Address`]] will
     *   be returned, with the possible exception of
     *   [[Address.phoneNumber|`Address.phoneNumber`]] which will only be
     *   returned if
     *   [[BillingAddressParameters.phoneNumberRequired|`BillingAddressParameters.phoneNumberRequired`]]
     *   is set to `true`.
     *
     *   Only select this format when it is required to process the order.
     *   Additional form entry or customer data requests can increase friction
     *   during the checkout process and can lead to a lower conversion rate.
     */
    type BillingAddressFormat = "MIN" | "FULL";

    /**
     * The status of the total price used.
     *
     * Options:
     *
     * - `NOT_CURRENTLY_KNOWN`:
     *   The total price is not known currently.
     *
     * - `ESTIMATED`:
     *   The total price provided is an estimated price. The final price may
     *   change depending on the selected shipping address or billing address,
     *   if requested.
     *
     * - `FINAL`:
     *   The total price is the final total price of the transaction, and will
     *   not change based on selections made by the buyer.
     */
    type TotalPriceStatus = "NOT_CURRENTLY_KNOWN" | "ESTIMATED" | "FINAL";

    /**
     * The options for checkout.
     *
     * Options:
     *
     * - `DEFAULT`:
     *   The default option for checkout. Use the 'Continue' button for a buy
     *   flow in the payments sheet. Once loadPaymentData completes, the
     *   integrator should show an order confirmation screen to finalize the
     *   purchase.
     *
     * - `COMPLETE_IMMEDIATE_PURCHASE`:
     *   Use the 'Pay' button to indicate a buy flow without a confirmation in
     *   the payments sheet to indicate that no further confirmation will be
     *   shown and the transaction will be processed once the user confirms
     *   only if
     *   [[TransactionInfo.totalPriceStatus|`TransactionInfo.totalPriceStatus`]]
     *   is set to [[TotalPriceStatus|`FINAL`]]. Otherwise,
     *   a payment data request will fail.
     */
    type CheckoutOption = "DEFAULT" | "COMPLETE_IMMEDIATE_PURCHASE";

    /**
     * Enum string of a display item.
     *
     * Options:
     *
     * - `LINE_ITEM`:
     *   Regular line item.
     *
     * - `SUBTOTAL`:
     *   Subtotal of all regular items.
     *
     * - `TAX`:
     *   Item for the collected tax.
     *
     * - `DISCOUNT`:
     *   Item for a discount.
     *
     * - `SHIPPING_OPTION`:
     *   Item for shipping option.
     */
    type DisplayItemType = "LINE_ITEM" | "SUBTOTAL" | "TAX" | "DISCOUNT" | "SHIPPING_OPTION";

    /**
     * Enum string of a display item status.
     *
     * Options:
     *
     * - `FINAL`:
     *   DisplayItem is final and the item displays the value in price.
     *
     * - `PENDING`:
     *   DisplayItem does not display value in price but instead display as
     *   "pending".
     */
    type DisplayItemStatus = "FINAL" | "PENDING";

    /**
     * Enum string for the callback intents.
     *
     * Options:
     *
     * - `OFFER`:
     *   Callback occurs when offer info is changed.
     *
     * - `SHIPPING_ADDRESS`:
     *   Callback occurs when shipping address is changed.
     *
     * - `SHIPPING_OPTION`:
     *   Callback occurs when shipping option is changed.
     *
     *   If this callback intent is set, then
     *   [[PaymentDataRequest.shippingOptionRequired|`PaymentDataRequest.shippingOptionRequired`]]
     *   must be set to true.
     *
     *   [[PaymentDataRequest.shippingOptionParameters|`PaymentDataRequest.shippingOptionParameters`]]
     *   can optionally be set, if omitted, we will render a placeholder
     *   shipping option named "Shipping option pending" with id
     *   "shipping_option_unselected".
     *
     *   If developers receive a
     *   [[IntermediatePaymentData.shippingOptionData|`IntermediatePaymentData.shippingOptionData`]]
     *   with id "shipping_option_unselected", it means they need to populate
     *   valid
     *   [[PaymentDataRequest.shippingOptionParameters|`PaymentDataRequest.shippingOptionParameters`]]
     *   in the
     *   [[PaymentDataRequestUpdate.newShippingOptionParameters|`PaymentDataRequestUpdate.newShippingOptionParameters`]].
     *
     * - `PAYMENT_AUTHORIZATION`:
     *   Callback occurs when user authorized payment and
     *   [[PaymentData|`PaymentData`]] will be returned.
     *
     * - `PAYMENT_METHOD`:
     *   Callback occurs when payment method is changed.
     *
     *   Developer will receive callback data in
     *   [[IntermediatePaymentData.paymentMethodData|`IntermediatePaymentData.paymentMethodData`]]
     */
    type CallbackIntent = "OFFER" | "SHIPPING_ADDRESS" | "SHIPPING_OPTION" | "PAYMENT_AUTHORIZATION" | "PAYMENT_METHOD";

    /**
     * Enum string for the callback trigger.
     *
     * Options:
     *
     * - `OFFER`:
     *   Callback occurs after offer info is changed.
     *
     * - `SHIPPING_ADDRESS`:
     *   Callback occurs after shipping address is changed.
     *
     * - `SHIPPING_OPTION`:
     *   Callback occurs after shipping option is changed.
     *
     * - `INITIALIZE`:
     *   Callback occurs on initialize, every field specified by callback
     *   intent would be returned in
     *   [[IntermediatePaymentData|`IntermediatePaymentData`]] if applicable.
     *
     *   Note that this callback trigger may be triggered multiple times along
     *   a single call to loadPaymentData, so you must make sure you can
     *   handle multiple calls to it. For example, when the user changes
     *   accounts, we will call initialize again with data from the new
     *   account.
     */
    type CallbackTrigger = "OFFER" | "SHIPPING_ADDRESS" | "SHIPPING_OPTION" | "INITIALIZE";

    /**
     * Enum string for error reason.
     *
     * Options:
     *
     * - `SHIPPING_ADDRESS_INVALID`:
     *   Error when the provided shipping address is an invalid address.
     *
     * - `SHIPPING_ADDRESS_UNSERVICEABLE`:
     *   Error when the provided shipping address cannot be served
     *   for this request.
     *
     * - `SHIPPING_OPTION_INVALID`:
     *   Error when the provided shipping option is not applicable to the
     *   current request. An example would be shipping option cannot be used
     *   for the selected shipping address.
     *
     * - `OFFER_INVALID`:
     *   Error when the provided offer info is invalid.
     *
     * - `PAYMENT_DATA_INVALID`:
     *   Error when the provided payment data is invalid. e.g. Payment token
     *   cannot be charged.
     *
     * - `OTHER_ERROR`:
     *   A catch all for error not fitting anywhere else.
     */
    type ErrorReason = "SHIPPING_ADDRESS_INVALID" | "SHIPPING_ADDRESS_UNSERVICEABLE" | "SHIPPING_OPTION_INVALID" | "OFFER_INVALID" | "PAYMENT_DATA_INVALID" | "OTHER_ERROR";

    /**
     * Enum strings for the state of the transaction.
     *
     * Options:
     *
     * - `SUCCESS`:
     *   Indicates the transaction was successful and the payment sheet should
     *   be dismissed.
     *
     * - `ERROR`:
     *   Indicates there's an error in the flow.
     *
     *   The Google Pay UI will show the merchant error message and allow user
     *   to retry.
     */
    type TransactionState = "SUCCESS" | "ERROR";

    /**
     * This object allows you to configure a Google Pay payment button. For
     * more information about button types, colors, and display requirements,
     * see Google's [Brand
     * guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines).
     */
    interface ButtonOptions {
        /**
         * An [event listener
         * callback](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#The_event_listener_callback)
         * to call when a click event is delivered to the `<button>` target.
         */
        onClick: (event: Event) => void;

        /**
         * Specifies the button color of the Google Pay button.
         *
         * @default "default"
         */
        buttonColor?: ButtonColor | undefined;

        /**
         * Specifies the text to be displayed within the Google Pay button.
         *
         * @default "buy"
         */
        buttonType?: ButtonType | undefined;

        /**
         * Determines how the button's size should change relative to the
         * button's parent element.
         *
         * @default "static"
         */
        buttonSizeMode?: ButtonSizeMode | undefined;

        /**
         * Specifies how to append Google Pay resources, such as `<style>` tags,
         * in the DOM. Its default value is document.
         *
         * Use this property to integrate Google Pay with Web Components and the
         * shadow DOM. Set its value to the result of
         * [`container.getRootNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode).
         *
         * @default document
         */
        buttonRootNode?: HTMLDocument | ShadowRoot | undefined;

        /**
         * The [ISO
         * 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code
         * representing the desired button language.
         *
         * Supported locales include `en`, `ar`, `bg`, `ca`, `cs`, `da`, `de`,
         * `el`, `es`, `et`, `fi`, `fr`, `hr`, `id`, `it`, `ja`, `ko`, `ms`,
         * `nl`, `no`, `pl`, `pt`, `ru`, `sk`, `sl`, `sr`, `sv`, `th`, `tr`,
         * `uk`, and `zh`.
         *
         * @default browser or operating system language
         */
        buttonLocale?: string;

        /**
         * List of allowed payment methods.
         *
         * This is an optional field for filtering card info for dynamic
         * buttons. No filtering will happen if this field is not set.
         */
        allowedPaymentMethods?: IsReadyToPayPaymentMethodSpecification[];
    }

    /**
     * This reference describes the JavaScript client methods to use to
     * implement the Google Pay API in your web applications.
     */
    class PaymentsClient {
        /**
         * Initializes the [[PaymentsClient|`PaymentsClient`]] object. You must
         * call this constructor before calling member methods.
         *
         * @param paymentOptions An object containing key-value pairs of Google
         *     Pay API configuration data.
         *
         * Example: `{environment:'PRODUCTION'}`
         *
         * @throws `Error` The passed environment property value isn't
         *     supported.
         */
        constructor(paymentOptions: PaymentOptions);

        /**
         * This method determines a shopper's ability to return a form of
         * payment from the Google Pay API.
         *
         * @param request An object that contains methods of payment supported
         *     by the merchant.
         * @returns
         * Resolved: An object that contains information about the user's
         * ability to pay.
         *
         * Rejected: An error object that contains more information about the
         * reason for rejection. See [[`PaymentsError`]] for more information.
         *
         * - `DEVELOPER_ERROR`:
         *   - The passed [[IsReadyToPayRequest|`IsReadyToPayRequest`]] object
         *     was improperly formatted, missed the minimum required parameters
         *     to determine a user's readiness to pay, or contains an invalid
         *     parameter and/or value.
         *   - The request was initiated from a security context the payment
         *     agent or the browser chose not to fulfill. Most commonly an
         *     [insecure browser
         *     context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).
         */
        isReadyToPay(request: IsReadyToPayRequest): Promise<IsReadyToPayResponse>;

        /**
         * The convenience method is used to generate a Google Pay payment
         * button styled with the latest Google Pay branding for insertion into
         * a webpage.
         *
         * The generated `HTMLElement` includes dynamically inserted CSS and an
         * SVG image hosted on Google's CDN.
         *
         * Reference our [Brand
         * guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines)
         * for more information about how to select the appropriate button color
         * and button type for your site's design. You might need to alter the
         * dimensions of a returned Google Pay payment button to match similar
         * buttons or checkout elements on your page.
         *
         * @param options An object that contains key-value pairs for a button
         *     configuration.
         *
         * Example: `{onClick:onGooglePaymentButtonClicked}`
         * @returns An HTML `<button>` inside a generic flow content container
         *     such as a `<div>`.
         *
         * @throws `Error` A required property isn't set.
         */
        createButton(options: ButtonOptions): HTMLElement;

        /**
         * This method presents a Google Pay payment sheet that allows selection
         * of a payment method and optionally configured parameters.
         *
         * This method must be called while the browser processes an [activation
         * behavior](https://html.spec.whatwg.org/multipage/interaction.html#activation)
         * as a result of a click event. A popup window may be presented to the
         * user to select a payment method or other required data specified in
         * the passed request parameter.
         *
         * @param request An object that contains key-value pairs of full Google
         *     Pay API configuration.
         * @returns
         * Resolved: An object that contains the requested shopper data.
         *
         * Rejected: An object containing an error code and more information
         * about the reason for rejection. See [[`PaymentsError`]] for more
         * information.
         *
         * - `CANCELED`:
         *   - The current browser or logged-in Google user isn't supported.
         *   - The shopper dismissed the Google Pay payment sheet without
         *     payment authorization.
         *   - The request was initiated from a security context the payment
         *     agent or the browser chose not to fulfill. Most commonly an
         *     [insecure browser
         *     context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).
         *   - The method was called while the Google Pay payment sheet was
         *     already shown.
         *   - The passed [[PaymentDataRequest|`PaymentDataRequest`]] object was
         *     rejected by the Google Pay payment sheet. Missed or incomplete
         *     [[PaymentMethodTokenizationSpecification|`PaymentMethodTokenizationSpecification`]]
         *     parameters for your gateway or invalid parameter values are a
         *     common cause.
         * - `DEVELOPER_ERROR`:
         *   - The passed [[PaymentDataRequest|`PaymentDataRequest`]] object was
         *     improperly formatted, missing the minimum required parameters, or
         *     contains an invalid parameter and/or value.
         */
        loadPaymentData(request: PaymentDataRequest): Promise<PaymentData>;

        /**
         * Use this method to prefetch a
         * [[PaymentDataRequest|`PaymentDataRequest`]] configuration to improve
         * [[PaymentsClient.loadPaymentData|`loadPaymentData`]] execution time
         * on later user interaction. No value is returned.
         *
         * Prefetch optimizations are currently available on Chrome for Android.
         * Other browsers and platforms to follow.
         *
         * @param request An object that contains key-value pairs of full Google
         *     Pay API configuration. A change in the `transactionInfo` property
         *     doesn't affect the cached prefetch value.
         */
        prefetchPaymentData(request: PaymentDataRequest): void;
    }

    /**
     * Defines callback methods for handling payment data changed and payment
     * authorized events.
     *
     * If you set up Dynamic Price Updates in your integration, be sure to add
     * the following [[PaymentDataChangedHandler|`onPaymentDataChanged`]] and
     * [[PaymentAuthorizedHandler|`onPaymentAuthorized`]] callbacks.
     *
     * Example:
     *
     * The following example configuration uses the callbacks needed to set up
     * Dynamic Price Updates:
     *
     * ```js
     * {
     *   onPaymentDataChanged: onPaymentDataChanged,
     *   onPaymentAuthorized: onPaymentAuthorized
     * }
     * ```
     */
    interface PaymentDataCallbacks {
        /**
         * This method handles payment data changes in the payment sheet such as
         * shipping address and shipping options.
         */
        onPaymentDataChanged?: PaymentDataChangedHandler | undefined;

        /**
         * This method is called when a payment is authorized in the payment
         * sheet.
         */
        onPaymentAuthorized?: PaymentAuthorizedHandler | undefined;
    }

    /**
     * Configure this object for a production environment once you've tested
     * your implementation and you're ready to receive payments from shoppers.
     *
     * If you set up Dynamic Price Updates in your integration, be sure to add
     * [[MerchantInfo|`MerchantInfo`]] and
     * [[PaymentDataCallbacks|`PaymentDataCallbacks`]] fields.
     *
     * Example:
     *
     * ```js
     * {
     *   environment: "TEST",
     *   merchantInfo: {
     *     merchantName: "Example Merchant",
     *     merchantId: "0123456789"
     *   },
     *   paymentDataCallbacks: {
     *     onPaymentDataChanged: onPaymentDataChanged,
     *     onPaymentAuthorized: onPaymentAuthorized
     *   }
     * }
     * ```
     */
    interface PaymentOptions {
        /**
         * This value specifies which Google Pay environment to target
         *
         * @default "TEST"
         */
        environment?: Environment | undefined;

        /**
         * This object provides information about the merchant that requests
         * payment data.
         */
        merchantInfo?: MerchantInfo | undefined;

        /**
         * This object declares the callbacks used for Dynamic Price Updates.
         */
        paymentDataCallbacks?: PaymentDataCallbacks | undefined;
    }

    /**
     * This object contains details about errors returned by client JavaScript
     * methods. Errors might not be displayed in a user-facing dialog.
     */
    interface PaymentsError {
        /**
         * Short code that describes the type of error.
         */
        statusCode: PaymentsErrorStatusCode | string;

        /**
         * Developer-facing message that describes the error encountered and
         * possible steps to correct it.
         */
        statusMessage: string;
    }

    /**
     * Supported colors for the Google Pay button.
     *
     * Options:
     *
     * - `default`:
     *   A Google-selected default value. Currently black but it may change
     *   over time.
     *
     * - `black`:
     *   A black button suitable for use on white or light backgrounds.
     *
     * - `white`:
     *   A white button suitable for use on colorful backgrounds.
     */
    type ButtonColor = "default" | "black" | "white";

    /**
     * Supported methods for presenting the Google Pay button.
     *
     * A translated button label may appear if a language specified in the
     * viewer's browser matches an [available
     * language](https://developers.google.com/pay/api/web/guides/brand-guidelines#payment-buttons-assets).
     *
     *
     * Options:
     *
     * - `book`:
     *   "Book with Google Pay" button.
     *
     * - `buy`:
     *   "Buy with Google Pay" button.
     *
     * - `checkout`:
     *   "Checkout with Google Pay" button.
     *
     * - `donate`:
     *   "Donate with Google Pay" button.
     *
     * - `order`:
     *   "Order with Google Pay" button.
     *
     * - `pay`:
     *   "Pay with Google Pay" button.
     *
     * - `plain`:
     *   "Google Pay" button without text.
     *
     * - `subscribe`:
     *   "Subscribe with Google Pay" button.
     *
     * - `long`:
     *   Same as "buy".
     *
     * - `short`:
     *   Same as "plain".
     */
    type ButtonType = "book" | "buy" | "checkout" | "donate" | "order" | "pay" | "plain" | "subscribe" | "long" | "short";

    /**
     * Supported methods for controlling the size of the Google Pay button.
     *
     * Options:
     *
     * - `static`:
     *   Default behavior. The button has a fixed width and height.
     *
     * - `fill`:
     *   The button fills its container.
     */
    type ButtonSizeMode = "static" | "fill";

    /**
     * Supported environment names to run Google Pay.
     *
     * Options:
     *
     * - `PRODUCTION`:
     *   Used to return chargeable payment methods when a valid Google
     *   merchant ID is specified and configured for the domain.
     *
     * - `TEST`:
     *   Dummy payment methods that are suitable for testing (default).
     */
    type Environment = "PRODUCTION" | "TEST";

    /**
     * This handler is used when a payment is authorized in the payment sheet.
     */
    type PaymentAuthorizedHandler =
        /**
         * @param paymentData An object that contains the requested shopper
         *     data.
         * @returns
         * This method should always return a resolved promise of type
         * [[PaymentAuthorizationResult|`PaymentAuthorizationResult`]].
         *
         * When the payment has been successfully authorized, the promise
         * should resolve to
         * [[PaymentAuthorizationResult|`PaymentAuthorizationResult`]] with a
         * [[PaymentAuthorizationResult.transactionState|`transactionState`]]
         * of `SUCCESS`.
         *
         * If authorization fails, the promise should resolve to
         * [[PaymentAuthorizationResult|`PaymentAuthorizationResult`]] with a
         * [[PaymentAuthorizationResult.transactionState|`transactionState`]]
         * of `ERROR` with an [[PaymentAuthorizationResult.error|`error`]]
         * including the technical [[PaymentDataError.reason|`reason`]] and a
         * [[PaymentDataError.message|`message`]] to be displayed to the user.
         */
        (paymentData: PaymentData) => Promise<PaymentAuthorizationResult> | PaymentAuthorizationResult;

    /**
     * This handler is used when payment data changes in the payment sheet
     * such as shipping address and shipping options.
     */
    type PaymentDataChangedHandler =
        /**
         * @param intermediatePaymentData An object that contains the selected
         *     address and shipping option in the payment sheet.
         * @returns
         * Resolved: An object that contains information about new transaction
         * information, shipping options, and payment data errors.
         *
         * Rejected: An error object with an error intent and message to be
         * rendered in the payment sheet. For details, see
         * [[PaymentDataError|`PaymentDataError`]].
         *
         * *Note: Reject isn't used to update the payment sheet with new
         * shipping options and transaction info. Don't intentionally return
         * reject if possible.*
         */
        (intermediatePaymentData: IntermediatePaymentData) => Promise<PaymentDataRequestUpdate> | PaymentDataRequestUpdate;

    /**
     * This object contains details about errors returned by client JavaScript
     * methods. Errors might not be displayed in a user-facing dialog.
     *
     * Options:
     *
     * - `BUYER_ACCOUNT_ERROR`:
     *   The current Google user is unable to provide payment information.
     *
     * - `DEVELOPER_ERROR`:
     *   A passed parameter is improperly formatted. An [error message may
     *   appear in the browser
     *   console](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)
     *   for all configured environments.
     *
     * - `MERCHANT_ACCOUNT_ERROR`:
     *   The site accessing the Google Pay API does not have the right
     *   permission. This could be due to either an incorrect configuration or
     *   an incorrect merchant identifier set in the request. Check the
     *   `statusMessage` field for more details. If you continue to have
     *   trouble, please [contact
     *   support](https://developers.google.com/pay/api/web/support/how-to-get-help).
     *
     * - `INTERNAL_ERROR`:
     *   General server error.
     */
    type PaymentsErrorStatusCode = "BUYER_ACCOUNT_ERROR" | "DEVELOPER_ERROR" | "MERCHANT_ACCOUNT_ERROR" | "INTERNAL_ERROR";
}

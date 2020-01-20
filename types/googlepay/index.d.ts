// Type definitions for non-npm package Google Pay API 0.2
// Project: https://developers.google.com/pay/api/web/
// Definitions by: Florian Luccioni <https://github.com/Fluccioni>,
//                 Radu Raicea <https://github.com/Radu-Raicea>,
//                 Filip Stanis <https://github.com/fstanis>
//                 Alexandre Couret <https://github.com/ozotek>
//                 Sergi Ferriz <https://github.com/mumpo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace google.payments.api {
    interface ApiVersion {
        apiVersion: number;
        apiVersionMinor: number;
    }

    type EnvironmentType = 'PRODUCTION' | 'TEST';

    interface PaymentOptions {
        environment?: EnvironmentType;
    }

    type ButtonColor = 'default' | 'black' | 'white';
    type ButtonType = 'long' | 'short';

    interface ButtonOptions {
        onClick: EventListener;
        buttonColor?: ButtonColor;
        buttonType?: ButtonType;
    }

    interface IsReadyToPayRequest extends ApiVersion {
        allowedPaymentMethods: PaymentMethod[];
        existingPaymentMethodRequired?: boolean;
    }

    interface IsReadyToPayResponse {
        result: boolean;
        paymentMethodPresent?: boolean;
    }

    type PaymentMethod = CardPaymentMethod;
    type AllowedPaymentMethodType = 'CARD';

    interface BasePaymentMethod {
        type: AllowedPaymentMethodType;
        tokenizationSpecification?: PaymentMethodTokenizationSpecification;
    }

    type PaymentMethodTokenizationSpecification = PaymentGatewayTokenizationSpecification | DirectTokenizationSpecification;
    type TokenizationType = 'DIRECT' | 'PAYMENT_GATEWAY';

    interface BasePaymentMethodTokenizationSpecification {
        type: TokenizationType;
    }

    interface PaymentGatewayTokenizationSpecification extends BasePaymentMethodTokenizationSpecification {
        type: 'PAYMENT_GATEWAY';
        parameters: {
            [parameter: string]: string;
        };
    }

    interface DirectTokenizationSpecification extends BasePaymentMethodTokenizationSpecification {
        type: 'DIRECT';
        parameters: {
            protocolVersion: string;
            publicKey: string;
        };
    }

    interface CardPaymentMethod extends BasePaymentMethod {
        type: 'CARD';
        parameters: CardParameters;
    }

    type AllowedAuthMethod = 'PAN_ONLY' | 'CRYPTOGRAM_3DS';
    type AllowedCardNetwork = 'AMEX' | 'DISCOVER' | 'JCB' | 'MASTERCARD' | 'VISA' | 'INTERAC';

    interface CardParameters {
        allowedAuthMethods: AllowedAuthMethod[];
        allowedCardNetworks: AllowedCardNetwork[];
        allowPrepaidCards?: boolean;
        billingAddressRequired?: boolean;
        billingAddressParameters?: BillingAddressParameters;
    }

    type BillingAddressFormat = 'FULL' | 'MIN';

    interface BillingAddressParameters {
        format?: BillingAddressFormat;
        phoneNumberRequired?: boolean;
    }

    interface PaymentDataRequest extends ApiVersion {
        merchantInfo: MerchantInfo;
        allowedPaymentMethods: PaymentMethod[];
        transactionInfo: TransactionInfo;
        emailRequired?: boolean;
        shippingAddressRequired?: boolean;
        shippingAddressParameters?: ShippingAddressParameters;
    }

    interface PaymentData extends ApiVersion {
        paymentMethodData: PaymentMethodData;
        email?: string;
        shippingAddress?: Address;
    }

    interface MerchantInfo {
        merchantId: string;
        merchantName?: string;
        merchantOrigin?: string;
    }

    type TransactionInfo = UnknownPriceTransactionInfo | EstimatedPriceTransactionInfo | FinalPriceTransactionInfo;
    type TotalPriceStatus = 'ESTIMATED' | 'FINAL' | 'NOT_CURRENTLY_KNOWN';
    type CheckoutOption = 'DEFAULT' | 'COMPLETE_IMMEDIATE_PURCHASE';

    interface BaseTransactionInfo {
        totalPriceStatus: TotalPriceStatus;
        currencyCode: string;
        countryCode?: string;
        transactionId?: string;
        displayItems?: DisplayItem[];
        totalPriceLabel?: string;
        checkoutOption?: CheckoutOption;
    }

    interface UnknownPriceTransactionInfo extends BaseTransactionInfo {
        totalPriceStatus: 'NOT_CURRENTLY_KNOWN';
        checkoutOption?: 'DEFAULT';
    }

    interface KnownPriceTransactionInfo extends BaseTransactionInfo {
        totalPriceStatus: 'ESTIMATED' | 'FINAL';
        totalPrice: string;
    }

    interface EstimatedPriceTransactionInfo extends KnownPriceTransactionInfo {
        totalPriceStatus: 'ESTIMATED';
        checkoutOption?: 'DEFAULT';
    }

    interface FinalPriceTransactionInfo extends KnownPriceTransactionInfo {
        totalPriceStatus: 'FINAL';
        checkoutOption?: 'DEFAULT' | 'COMPLETE_IMMEDIATE_PURCHASE';
    }

    interface DisplayItem {
        label: string;
        type: DisplayItemType;
        price: string;
        status?: DisplayItemStatus;
    }

    type DisplayItemType = 'LINE_ITEM' | 'SUBTOTAL';
    type DisplayItemStatus = 'FINAL' | 'PENDING';

    interface ShippingAddressParameters {
        allowedCountryCodes?: string[];
        phoneNumberRequired?: boolean;
    }

    type PaymentMethodData = CardPaymentMethodData;

    interface BasePaymentMethodData {
        type: AllowedPaymentMethodType;
        description: string;
        tokenizationData: PaymentMethodTokenizationData;
    }

    interface PaymentMethodTokenizationData {
        type: TokenizationType;
        token?: string;
    }

    interface CardPaymentMethodData extends BasePaymentMethodData {
        type: 'CARD';
        info: CardInfo;
    }

    interface CardInfo {
        cardDetails: string;
        cardNetwork: AllowedCardNetwork;
        billingAddress?: Address;
    }

    type Address = AddressMin | AddressFull;

    interface AddressMin {
        name: string;
        postalCode: string;
        countryCode: string;
        phoneNumber?: string;
    }

    interface AddressFull extends AddressMin {
        address1: string;
        address2: string;
        address3: string;
        locality: string;
        administrativeArea: string;
        sortingCode: string;
    }

    type ErrorStatusCode = 'BUYER_ACCOUNT_ERROR' | 'CANCELED' | 'DEVELOPER_ERROR' | 'INTERNAL_ERROR';

    interface PaymentsError {
        statusCode: ErrorStatusCode;
        statusMessage: string;
    }

    class PaymentsClient {
        constructor(paymentOptions: PaymentOptions);
        createButton(request: ButtonOptions): HTMLElement;
        isReadyToPay(request: IsReadyToPayRequest): Promise<IsReadyToPayResponse>;
        loadPaymentData(request: PaymentDataRequest): Promise<PaymentData>;
        prefetchPaymentData(request: PaymentDataRequest): void;
    }
}

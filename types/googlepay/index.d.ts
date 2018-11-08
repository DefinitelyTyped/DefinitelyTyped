// Type definitions for Google Pay API 0.2
// Project: https://developers.google.com/pay/api/web/
// Definitions by: Florian Luccioni <https://github.com/Fluccioni>,
//                 Radu Raicea <https://github.com/Radu-Raicea>,
//                 Filip Stanis <https://github.com/fstanis>
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
    type AllowedCardNetwork = 'AMEX' | 'DISCOVER' | 'JCB' | 'MASTERCARD' | 'VISA';

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

    type TransactionInfo = UnknownPriceTransactionInfo | KnownPriceTransactionInfo;
    type TotalPriceStatus = 'ESTIMATED' | 'FINAL' | 'NOT_CURRENTLY_KNOWN';

    interface BaseTransactionInfo {
        totalPriceStatus: TotalPriceStatus;
        currencyCode: string;
    }

    interface UnknownPriceTransactionInfo extends BaseTransactionInfo {
        totalPriceStatus: 'NOT_CURRENTLY_KNOWN';
    }

    interface KnownPriceTransactionInfo extends BaseTransactionInfo {
        totalPriceStatus: 'ESTIMATED' | 'FINAL';
        totalPrice: string;
    }

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

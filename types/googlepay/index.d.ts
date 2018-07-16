// Type definitions for Google Pay API 0.1
// Project: https://developers.google.com/pay/api/web/setup/
// Definitions by: Florian Luccioni <https://github.com/Fluccioni>,
//                 Radu Raicea <https://github.com/Radu-Raicea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace google.payments.api {
    type AddressFormat = 'FULL' | 'MIN';
    type AllowedCardNetwork = 'AMEX' | 'DISCOVER' | 'JCB' | 'MASTERCARD' | 'VISA';
    type AllowedPaymentMethod = 'CARD' | 'TOKENIZED_CARD';
    type ButtonColor = 'default' | 'black' | 'white';
    type ButtonType = 'long' | 'short';
    type CardClass = 'CREDIT' | 'DEBIT';
    type CardInfo = CardInfoMin | CardInfoFull;
    type CardRequirements = CardRequirementsMin | CardRequirementsFull;
    type EnvironmentType = 'PRODUCTION' | 'TEST';
    type ErrorStatusCode = 'BUYER_ACCOUNT_ERROR' | 'CANCELED' | 'DEVELOPER_ERROR' | 'INTERNAL_ERROR';
    type PaymentMethodTokenizationParameters = PaymentMethodDirectTokenizationParameters | PaymentMethodGatewayTokenizationParameters;
    type TokenizationType = 'DIRECT' | 'PAYMENT_GATEWAY';
    type TotalPriceStatus =  'ESTIMATED' | 'FINAL' | 'NOT_CURRENTLY_KNOWN';
    type UserAddress = UserAddressFull | UserAddressMin;
    type PaymentDataRequest = PaymentDataRequestMin | PaymentDataRequestFull;
    type PaymentData = PaymentDataMin | PaymentDataFull;

    interface ButtonOptions {
        onClick: EventListener;
        buttonColor?: ButtonColor;
        buttonType?: ButtonType;
    }

    interface PaymentOptions {
        environment?: EnvironmentType;
    }

    interface IsReadyToPayRequest {
        allowedPaymentMethods: AllowedPaymentMethod[];
    }

    interface BasePaymentDataRequest {
        merchantId: string;
        transactionInfo: TransactionInfo;
        cardRequirements: CardRequirements;
        paymentMethodTokenizationParameters: PaymentMethodTokenizationParameters;
        allowedPaymentMethods: AllowedPaymentMethod[];
        phoneNumberRequired?: boolean;
        emailRequired?: boolean;
        shippingAddressRequired?: boolean;
        shippingAddressRequirements?: ShippingAddressRequirements;
    }

    interface PaymentDataRequestMin extends BasePaymentDataRequest {
        cardRequirements: CardRequirementsMin;
    }

    interface PaymentDataRequestFull extends BasePaymentDataRequest {
        cardRequirements: CardRequirementsFull;
    }

    interface BasePaymentMethodTokenizationParameters {
        tokenizationType: TokenizationType;
    }

    interface PaymentMethodGatewayTokenizationParameters extends BasePaymentMethodTokenizationParameters {
        tokenizationType: 'PAYMENT_GATEWAY';
        parameters: {
            [parameter: string]: string;
        };
    }

    interface PaymentMethodDirectTokenizationParameters extends BasePaymentMethodTokenizationParameters {
        tokenizationType: 'DIRECT';
        parameters: {
            publicKey: string;
        };
    }

    interface BaseCardRequirements {
        allowedCardNetworks: AllowedCardNetwork[];
        billingAddressRequired?: boolean;
        billingAddressFormat?: AddressFormat;
    }

    interface CardRequirementsMin extends BaseCardRequirements {
        billingAddressFormat?: 'MIN';
    }

    interface CardRequirementsFull extends BaseCardRequirements {
        billingAddressFormat?: 'FULL';
    }

    interface ShippingAddressRequirements {
        allowedCountryCodes?: string[];
    }

    interface TransactionInfo {
        totalPriceStatus: TotalPriceStatus;
        totalPrice?: string;
        currencyCode?: string;
    }

    interface BasePaymentData {
        cardInfo: CardInfo;
        paymentMethodToken: PaymentMethodToken;
        shippingAddress?: UserAddressFull;
        email?: string;
    }

    interface PaymentDataMin extends BasePaymentData {
        cardInfo: CardInfoMin;
    }

    interface PaymentDataFull extends BasePaymentData {
        cardInfo: CardInfoFull;
    }

    interface BaseCardInfo {
        cardDescription: string;
        cardClass: CardClass;
        cardDetails: string;
        cardNetwork: AllowedCardNetwork;
        billingAddress?: UserAddress;
    }

    interface CardInfoMin extends BaseCardInfo {
        billingAddress?: UserAddressMin;
    }

    interface CardInfoFull extends BaseCardInfo {
        billingAddress?: UserAddressFull;
    }

    interface UserAddressMin {
        name: string;
        postalCode: string;
        countryCode: string;
        phoneNumber?: string;
    }

    interface UserAddressFull extends UserAddressMin {
        companyName: string;
        address1: string;
        address2: string;
        address3: string;
        address4: string;
        address5: string;
        locality: string;
        administrativeArea: string;
        sortingCode: string;
    }

    interface PaymentMethodToken {
        tokenizationType: TokenizationType;
        token: string;
    }

    interface PaymentsError {
        statusCode: ErrorStatusCode;
        statusMessage: string;
    }

    class PaymentsClient {
        constructor(paymentOptions: PaymentOptions);
        createButton(request: ButtonOptions): HTMLElement;
        isReadyToPay(request: IsReadyToPayRequest): Promise<{result: boolean}>;
        loadPaymentData(request: PaymentDataRequestMin): Promise<PaymentDataMin>;
        loadPaymentData(request: PaymentDataRequestFull): Promise<PaymentDataFull>;
        loadPaymentData(request: PaymentDataRequest): Promise<PaymentData>;
        prefetchPaymentData(request: PaymentDataRequest): void;
    }
}

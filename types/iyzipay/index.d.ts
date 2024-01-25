/* eslint-disable @typescript-eslint/naming-convention */

/**
 * author: Can Gökçeaslan
 * description: This peace of code is a typescript definition file for iyzipay nodejs sdk.
 * website: https://www.cangokceaslan.com
 * github: https://www.github.com/cangokceaslan
 * npm: https://www.npmjs.com/package/@types/iyzipay
 */

/* ENUMARATIONS */
export type LOCALE = "tr" | "en";

export type PAYMENT_GROUP = "PRODUCT" | "LISTING" | "SUBSCRIPTION";

export type BASKET_ITEM_TYPE = "PHYSICAL" | "VIRTUAL";

export type PAYMENT_CHANNEL =
    | "MOBILE"
    | "WEB"
    | "MOBILE_WEB"
    | "MOBILE_IOS"
    | "MOBILE_ANDROID"
    | "MOBILE_WINDOWS"
    | "MOBILE_TABLET"
    | "MOBILE_PHONE";

export type SUB_MERCHANT_TYPE = "PERSONAL" | "PRIVATE_COMPANY" | "LIMITED_OR_JOINT_STOCK_COMPANY";

export type CURRENCY = "TRY" | "EUR" | "USD" | "IRR" | "GBP" | "NOK" | "RUB" | "CHF";

export type APM_TYPE = "SOFORT" | "IDEAL" | "QIWI" | "GIROPAY";

export type REFUND_REASON = "double_payment" | "buyer_request" | "fraud" | "other";

export type PLAN_PAYMENT_TYPE = "RECURRING";

export type SUBSCRIPTION_PRICING_PLAN_INTERVAL = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";

export type SUBSCRIPTION_UPGRADE_PERIOD = "NOW";

export type SUBSCRIPTION_STATUS = "EXPIRED" | "UNPAID" | "CANCELED" | "ACTIVE" | "PENDING" | "UPGRADED";

export type SUBSCRIPTION_INITIAL_STATUS = "ACTIVE" | "PENDING";

/* INTERFACES */
export interface ILOCALE {
    TR: "tr";
    EN: "en";
}

export interface IPAYMENT_GROUP {
    PRODUCT: "PRODUCT";
    LISTING: "LISTING";
    SUBSCRIPTION: "SUBSCRIPTION";
}

export interface IBASKET_ITEM_TYPE {
    PHYSICAL: "PHYSICAL";
    VIRTUAL: "VIRTUAL";
}

export interface IPAYMENT_CHANNEL {
    MOBILE: "MOBILE";
    WEB: "WEB";
    MOBILE_WEB: "MOBILE_WEB";
    MOBILE_IOS: "MOBILE_IOS";
    MOBILE_ANDROID: "MOBILE_ANDROID";
    MOBILE_WINDOWS: "MOBILE_WINDOWS";
    MOBILE_TABLET: "MOBILE_TABLET";
    MOBILE_PHONE: "MOBILE_PHONE";
}

export interface ISUB_MERCHANT_TYPE {
    PERSONAL: "PERSONAL";
    PRIVATE_COMPANY: "PRIVATE_COMPANY";
    LIMITED_OR_JOINT_STOCK_COMPANY: "LIMITED_OR_JOINT_STOCK_COMPANY";
}

export interface ICURRENCY {
    TRY: "TRY";
    EUR: "EUR";
    USD: "USD";
    IRR: "IRR";
    GBP: "GBP";
    NOK: "NOK";
    RUB: "RUB";
    CHF: "CHF";
}

export interface IAPM_TYPE {
    SOFORT: "SOFORT";
    IDEAL: "IDEAL";
    QIWI: "QIWI";
    GIROPAY: "GIROPAY";
}

export interface IREFUND_REASON {
    DOUBLE_PAYMENT: "double_payment";
    BUYER_REQUEST: "buyer_request";
    FRAUD: "fraud";
    OTHER: "other";
}

export interface IPLAN_PAYMENT_TYPE {
    RECURRING: "RECURRING";
}

export interface ISUBSCRIPTION_PRICING_PLAN_INTERVAL {
    DAILY: "DAILY";
    WEEKLY: "WEEKLY";
    MONTHLY: "MONTHLY";
    YEARLY: "YEARLY";
}

export interface ISUBSCRIPTION_UPGRADE_PERIOD {
    NOW: "NOW";
}

export interface ISUBSCRIPTION_STATUS {
    EXPIRED: "EXPIRED";
    UNPAID: "UNPAID";
    CANCELED: "CANCELED";
    ACTIVE: "ACTIVE";
    PENDING: "PENDING";
    UPGRADED: "UPGRADED";
}

export interface ISUBSCRIPTION_INITIAL_STATUS {
    ACTIVE: "ACTIVE";
    PENDING: "PENDING";
}

/* GENERIC INTERFACES */
export interface IConfigOptions {
    apiKey: string;
    secretKey: string;
    uri: string;
}

export interface IPaymentCard {
    cardHolderName: string;
    cardNumber: string;
    expireMonth: string;
    expireYear: string;
    cvc?: string;
    registerCard?: number;
    registerConsumerCard?: boolean;
    cardAlias: string;
}

export interface ISavedPaymentCard {
    cardToken?: string;
    cardUserKey: string;
    ucsToken?: string;
    consumerToken?: string;
}

export interface ISavedPaymentCardDetail {
    cardToken: string;
    cardAlias: string;
    binNumber: string;
    lastFourDigits: string;
    cardType: string;
    cardAssociation: string;
    cardFamily: string;
    cardBankCode: number;
    cardBankName: string;
}

export interface IBuyerDetails {
    id: string;
    name: string;
    surname: string;
    gsmNumber?: string;
    email: string;
    identityNumber: string;
    lastLoginDate?: string;
    registrationDate?: string;
    registrationAddress: string;
    ip: string;
    city: string;
    country: string;
    zipCode?: string;
}

export interface IAddressDetails {
    contactName: string;
    city: string;
    country: string;
    address: string;
    zipCode?: string;
}

export interface IBasketItem {
    id: string;
    name: string;
    category1: string;
    category2?: string;
    itemType: BASKET_ITEM_TYPE;
    price: number | string;
    subMerchantPrice?: number | string;
    subMerchantKey?: string;
}

/* Result Parts */
export interface IConvertedPayout {
    paidPrice: number | string;
    iyzicoCommissionRateAmount: number;
    iyzicoCommissionFee: number;
    blockageRateAmountMerchant: number;
    blockageRateAmountSubMerchant: number;
    subMerchantPayoutAmount: number;
    merchantPayoutAmount: number;
    iyziConversionRate: number;
    iyziConversionRateAmount: number;
    currency: CURRENCY;
}

export interface IItemTransaction {
    itemId: string;
    paymentTransactionId: string;
    transactionStatus: number;
    price: number | string;
    paidPrice: number | string;
    merchantCommissionRate: number;
    merchantCommissionRateAmount: number;
    iyzicoCommissionRateAmount: number;
    iyzicoCommissionFee: number;
    blockageRate: number;
    blockageRateAmountMerchant: number;
    blockageRateAmountSubMerchant: number;
    blockageResolvedDate: string;
    subMerchantPrice: number;
    subMerchantPayoutRate: number;
    subMerchantPayoutAmount: number;
    merchantPayoutAmount: number;
    convertedPayout: IConvertedPayout;
}

/* REQUEST - RESULT INTERFACES */
export interface IApprovalPaymentRequestData {
    locale?: LOCALE;
    conversationId?: string;
    paymentTransactionId: string;
}

export interface IApprovalPaymentResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
}

export interface IApiTestRequestData {
    locale?: LOCALE;
    conversationId?: string;
}

export interface IApiTestResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
}

export interface IBinNumberRequestData {
    locale?: LOCALE;
    conversationId?: string;
    binNumber: string;
}

export interface IBinNumberResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    binNumber: string;
    cardType: string;
    cardAssociation: string;
    cardFamily: string;
    bankName: string;
    bankCode: number;
}

export interface ICancelPaymentRequestData {
    locale?: LOCALE;
    conversationId?: string;
    paymentId: string;
    ip: string;
    reason?: REFUND_REASON;
    description?: string;
}

export interface ICancelPaymentResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
}

export interface ISavePaymentCardRequestData {
    locale?: LOCALE;
    conversationId?: string;
    email: string;
    externalId?: string;
    cardUserKey?: string;
    card: IPaymentCard;
}

export interface IListUserCardsRequestData {
    locale?: LOCALE;
    conversationId?: string;
    cardUserKey: string;
}

export interface IDeleteUserCardRequestData {
    locale?: LOCALE;
    conversationId?: string;
    cardUserKey: string;
    cardToken: string;
}

export interface IListUserCardsResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    cardDetails: ISavedPaymentCardDetail[];
}

export interface IDeleteUserCardResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
}

export interface ISavePaymentCardResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    externalId?: string;
    email: string;
    cardUserKey: string;
    cardToken: string;
    cardAlias: string;
    binNumber: string;
    lastFourDigits: string;
    cardType: string;
    cardAssociation: string;
    cardFamily: string;
    cardBankCode: number;
    cardBankName: string;
}

// export interface ICheckoutFormInitializeRequestData extends IThreeDSInitializePaymentRequestData { }

export interface ICheckoutFormInitialResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

export interface ICheckoutFormRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    token: string;
}

export interface ICheckoutFormRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    token: string;
    paymentStatus: string;
    fraudStatus: number;
    price: number | string;
    paidPrice: number | string;
    currency: CURRENCY;
    installment: number;
    basketId: string;
    paymentId: string;
    paymentItems: IItemTransaction[];
    paymentCard: ISavedPaymentCardDetail;
    buyer: IBuyerDetails;
    shippingAddress: IAddressDetails;
    billingAddress: IAddressDetails;
    basketItems: IBasketItem[];
}

export interface IUniversalCardStorageInitializeRequestData {
    locale?: LOCALE;
    conversationId?: string;
    gsmNumber: string;
    email: string;
}

export interface IUniversalCardStorageInitializeResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    token: string;
    callbackUrl: string;
}

export interface IInstallmentInfoRequestData {
    locale?: LOCALE;
    conversationId?: string;
    price: number | string;
    binNumber: string;
}

export interface IInstallmentDetail {
    installmentNumber: number;
    totalPrice: number | string;
    installmentPrice: number | string;
    installmentRate: number;
}

export interface IInstallmentInfoResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    binNumber: string;
    price: number | string;
    installmentDetails: IInstallmentDetail[];
}

export interface IPaymentRequestData {
    locale?: LOCALE;
    conversationId?: string;
    price: number | string;
    paidPrice: number | string;
    currency?: CURRENCY;
    installments: number;
    basketId?: string;
    paymentChannel?: PAYMENT_CHANNEL;
    paymentGroup?: PAYMENT_GROUP;
    paymentCard: ISavedPaymentCard | IPaymentCard;
    buyer: IBuyerDetails;
    shippingAddress: IAddressDetails;
    billingAddress: IAddressDetails;
    basketItems: IBasketItem[];
}

export interface IPaymentResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    price: number | string;
    paidPrice: number | string;
    installment: number;
    paymentId: string;
    fraudStatus: number;
    merchantCommissionRate: number;
    merchantCommissionRateAmount: number;
    iyziCommissionRateAmount: number;
    iyziCommissionFee: number;
    cardType: string;
    cardAssociation: string;
    cardFamily: string;
    cardToken: string;
    cardUserKey: string;
    binNumber: string;
    lastFourDigits: string;
    basketId: string;
    currency: CURRENCY;
    itemTransactions: IItemTransaction[];
    authCode: string;
    phase: string;
    mdStatus: string;
    hostReference: string;
}

export interface IPaymentRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    paymentId: string;
    paymentConversationId?: string;
}

// export interface IPaymentRetrieveResult extends IPaymentResult { }

export interface IPaymentItemRequestData {
    paymentTransactionId: string;
    subMerchantKey?: string;
    subMerchantPrice?: number | string;
}

export interface IPaymentItemResult {
    itemId: string;
    paymentTransactionId: string;
    transactionStatus: number;
    price: number | string;
    paidPrice: number | string;
    merchantCommissionRate: number;
    merchantCommissionRateAmount: number;
    iyziCommissionRateAmount: number;
    iyziCommissionFee: number;
    blockageRate: number;
    blockageRateAmountMerchant: number;
    blockageRateAmountSubMerchant: number;
    blockageResolvedDate: string;
    subMerchantPrice: number;
    subMerchantPayoutRate: number;
    subMerchantPayoutAmount: number;
    merchantPayoutAmount: number;
    convertedPayout: IConvertedPayout;
}

export interface IPeccoInitializeRequestData {
    locale?: LOCALE;
    conversationId?: string;
    price: number | string;
    paidPrice: number | string;
    currency?: CURRENCY;
    installments: number;
    basketId?: string;
    paymentChannel?: PAYMENT_CHANNEL;
    paymentGroup?: PAYMENT_GROUP;
    buyer: IBuyerDetails;
    shippingAddress: IAddressDetails;
    billingAddress: IAddressDetails;
    basketItems: IBasketItem[];
    callbackUrl: string;
}

export interface IPeccoInitializeResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

export interface IPeccoPaymentRequestData {
    locale?: LOCALE;
    conversationId?: string;
    token: string;
}

export interface IPeccoPaymentResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    token: string;
    paymentStatus: string;
    fraudStatus: number;
    price: number | string;
    paidPrice: number | string;
    currency: CURRENCY;
    installment: number;
    basketId: string;
    paymentId: string;
    paymentItems: IItemTransaction[];
    paymentCard: ISavedPaymentCardDetail;
    buyer: IBuyerDetails;
    shippingAddress: IAddressDetails;
    billingAddress: IAddressDetails;
    basketItems: IBasketItem[];
}

export interface IRefundRequestData {
    locale?: LOCALE;
    conversationId?: string;
    paymentTransactionId: string;
    price: number | string;
    ip: string;
    currency: CURRENCY;
    reason?: REFUND_REASON;
    description?: string;
}

export interface IRefundResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
    price: number | string;
    currency: CURRENCY;
    hostReference?: string;
}

export interface IRefundToBalanceRequestData {
    locale?: LOCALE;
    conversationId?: string;
    paymentId: string;
    callbackUrl: string;
}

export interface IRefundToBalanceResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
    price: number | string;
    currency: CURRENCY;
    hostReference?: string;
}

export interface IPayoutCompletedTransactionListRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    date: string;
    page?: number;
    count?: number;
}

/* export interface IPayoutCompletedTransaction extends IPaymentResult {

} */

export interface IPayoutCompletedTransactionListRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    payoutCompletedTransactionList: IPaymentResult[];
}

export interface ISubMerchantCreateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subMerchantExternalId: string;
    subMerchantType: SUB_MERCHANT_TYPE;
    address: string;
    taxOffice?: string;
    legalCompanyTitle?: string;
    contactName?: string;
    contactSurname?: string;
    email: string;
    gsmNumber: string;
    name: string;
    iban: string;
    identityNumber: string;
    currency: CURRENCY;
}

export interface ISubMerchantCreateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    subMerchantType: SUB_MERCHANT_TYPE;
    address: string;
    taxOffice?: string;
    legalCompanyTitle?: string;
    contactName?: string;
    contactSurname?: string;
    email: string;
    gsmNumber: string;
    name: string;
    iban: string;
    identityNumber: string;
    currency: CURRENCY;
}

export interface ISubMerchantUpdateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subMerchantKey: string;
    address?: string;
    taxOffice?: string;
    legalCompanyTitle?: string;
    contactName?: string;
    contactSurname?: string;
    email?: string;
    gsmNumber?: string;
    name?: string;
    iban?: string;
    identityNumber?: string;
    currency?: CURRENCY;
}

export interface ISubMerchantUpdateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    subMerchantType: SUB_MERCHANT_TYPE;
    address: string;
    taxOffice?: string;
    legalCompanyTitle?: string;
    contactName?: string;
    contactSurname?: string;
    email: string;
    gsmNumber: string;
    name: string;
    iban: string;
    identityNumber: string;
    currency: CURRENCY;
}

export interface ISubMerchantRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subMerchantExternalId: string;
}

export interface ISubMerchantRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    subMerchantType: SUB_MERCHANT_TYPE;
    address: string;
    taxOffice?: string;
    legalCompanyTitle?: string;
    contactName?: string;
    contactSurname?: string;
    email: string;
    gsmNumber: string;
    name: string;
    iban: string;
    identityNumber: string;
    currency: CURRENCY;
}

export interface IBouncedBackTransactionListRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    date: string;
    page?: number;
    count?: number;
}

/* export interface IBouncedBackTransaction extends IPaymentResult {

} */

export interface IBouncedBackTransactionListRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    bouncedBackTransactionList: IPaymentResult[];
}

export interface IThreeDSInitializePaymentRequestData extends IPaymentRequestData {
    callbackUrl: string;
}

export interface IThreeDSInitializePaymentResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    threeDSHtmlContent: string;
}

export interface IThreeDSPaymentCompleteRequestData {
    locale?: LOCALE;
    conversationId?: string;
    paymentId: string;
    conversationData?: string;
}

// export interface IThreeDSPaymentCompleteResult extends IPaymentResult { }

export interface ISettlementToBalanceRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subMerchantKey: string;
    callbackUrl?: string;
    price: number | string;
}

export interface ISettlementToBalanceResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    price: number | string;
    currency: CURRENCY;
    hostReference?: string;
}

export interface ISubscriptionProductCreateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    name: string;
    description?: string;
}

export interface ISubscriptionProductCreateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

export interface ISubscriptionProductUpdateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    productReferenceCode: string;
    name?: string;
    description?: string;
}

export interface ISubscriptionProductUpdateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

export interface ISubscriptionProductRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    productReferenceCode: string;
}

export interface ISubscriptionProductRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

export interface ISubscriptionProductRetrieveListRequestData {
    locale?: LOCALE;
    conversationId?: string;
    page?: number;
    count?: number;
}

export interface ISubscriptionProductItem {
    productReferenceCode: string;
    name: string;
    description: string;
}

export interface ISubscriptionProductRetrieveListResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionProductItem[];
}

export interface ISubscriptionPricingPlanCreateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: CURRENCY;
    paymentInterval: SUBSCRIPTION_PRICING_PLAN_INTERVAL;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PLAN_PAYMENT_TYPE;
}

export interface ISubscriptionPricingPlanCreateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: CURRENCY;
    paymentInterval: SUBSCRIPTION_PRICING_PLAN_INTERVAL;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PLAN_PAYMENT_TYPE;
}

export interface ISubscriptionPricingPlanUpdateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    pricingPlanReferenceCode: string;
    name?: string;
    trialPeriodDays?: number;
}

export interface ISubscriptionPricingPlanUpdateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: CURRENCY;
    paymentInterval: SUBSCRIPTION_PRICING_PLAN_INTERVAL;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PLAN_PAYMENT_TYPE;
}

export interface ISubscriptionPricingPlanRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    pricingPlanReferenceCode: string;
}

export interface ISubscriptionPricingPlanRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: CURRENCY;
    paymentInterval: SUBSCRIPTION_PRICING_PLAN_INTERVAL;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PLAN_PAYMENT_TYPE;
}

export interface ISubscriptionPricingPlanRetrieveListRequestData {
    locale?: LOCALE;
    conversationId?: string;
    productReferenceCode: string;
    page?: number;
    count?: number;
}

export interface ISubscriptionPricingPlanItem {
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: CURRENCY;
    paymentInterval: SUBSCRIPTION_PRICING_PLAN_INTERVAL;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PLAN_PAYMENT_TYPE;
}

export interface ISubscriptionPricingPlanRetrieveListResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionPricingPlanItem[];
}

export interface ISubscriptionCustomerCreateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    name: string;
    surname: string;
    identityNumber: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: IAddressDetails;
    shippingAddress?: IAddressDetails;
}

export interface ISubscriptionCustomerCreateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    customerReferenceCode: string;
    name: string;
    surname: string;
    identityNumber: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: IAddressDetails;
    shippingAddress?: IAddressDetails;
}

export interface ISubscriptionCustomerUpdateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    customerReferenceCode: string;
    name?: string;
    surname?: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: IAddressDetails;
    shippingAddress?: IAddressDetails;
}

export interface ISubscriptionCustomerUpdateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    customerReferenceCode: string;
    name: string;
    surname: string;
    identityNumber: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: IAddressDetails;
    shippingAddress?: IAddressDetails;
}

export interface ISubscriptionCustomerRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    customerReferenceCode: string;
}

export interface ISubscriptionCustomerRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    customerReferenceCode: string;
    name: string;
    surname: string;
    identityNumber: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: IAddressDetails;
    shippingAddress?: IAddressDetails;
}

export interface ISubscriptionCustomerRetrieveListRequestData {
    locale?: LOCALE;
    conversationId?: string;
    page?: number;
    count?: number;
}

export interface ISubscriptionCustomerItem {
    customerReferenceCode: string;
    name: string;
    surname: string;
    identityNumber: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: IAddressDetails;
    shippingAddress?: IAddressDetails;
}

export interface ISubscriptionCustomerRetrieveListResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionCustomerItem[];
}

export interface ISubscriptionCardUpdateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    customerReferenceCode: string;
    callbackUrl: string;
}

export interface ISubscriptionCardUpdateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    checkoutFormContent: string;
    token: string;
    tokenExpireTime: number;
}

export interface ISubscriptionCardUpdateWithSubscriptionReferenceCodeRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subscriptionReferenceCode: string;
    callbackUrl: string;
}

export interface ISubscriptionCardUpdateWithSubscriptionReferenceCodeResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    checkoutFormContent: string;
    token: string;
    tokenExpireTime: number;
}

export interface ISubscriptionPaymentRetryRequestData {
    locale?: LOCALE;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionPaymentRetryResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionCancelRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

export interface ISubscriptionCancelResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionActivateRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

export interface ISubscriptionActivateResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionUpgradeRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subscriptionReferenceCode: string;
    newPricingPlanReferenceCode: string;
    upgradePeriod?: SUBSCRIPTION_UPGRADE_PERIOD;
    useTrial?: boolean;
}

export interface ISubscriptionUpgradeResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

export interface ISubscriptionRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
    parentReferenceCode: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
    subscriptionStatus: SUBSCRIPTION_STATUS;
    subscriptionInitialStatus: SUBSCRIPTION_INITIAL_STATUS;
    subscriptionCreatedDate: string;
    subscriptionStartDate: string;
    subscriptionEndDate: string;
    trialStartDate?: string;
    trialEndDate?: string;
    customer: ISubscriptionCustomerItem;
    pricingPlan: ISubscriptionPricingPlanItem;
}

export interface ISubscriptionSearchRequestData {
    locale?: LOCALE;
    conversationId?: string;
    parentReferenceCode?: string;
    subscriptionReferenceCode?: string;
    customerReferenceCode?: string;
    subscriptionStatus?: SUBSCRIPTION_STATUS;
    subscriptionCreatedStartDate?: string;
    subscriptionCreatedEndDate?: string;
    page?: number;
    count?: number;
}

export interface ISubscriptionItem {
    referenceCode: string;
    parentReferenceCode: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
    subscriptionStatus: SUBSCRIPTION_STATUS;
    subscriptionInitialStatus: SUBSCRIPTION_INITIAL_STATUS;
    subscriptionCreatedDate: string;
    subscriptionStartDate: string;
    subscriptionEndDate: string;
    trialStartDate?: string;
    trialEndDate?: string;
    customer: ISubscriptionCustomerItem;
    pricingPlan: ISubscriptionPricingPlanItem;
}

export interface ISubscriptionSearchResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionItem[];
}

export interface ISubscriptionInitializeRequestData {
    locale?: LOCALE;
    conversationId?: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus?: SUBSCRIPTION_INITIAL_STATUS;
    customer: ISubscriptionCustomerCreateRequestData;
    paymentCard?: ISavedPaymentCard | IPaymentCard;
}

export interface ISubscriptionCheckoutFormInitializeRequestData {
    locale?: LOCALE;
    conversationId?: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus?: SUBSCRIPTION_INITIAL_STATUS;
    customer: ISubscriptionCustomerCreateRequestData;
}

export interface ISubscriptionCheckoutFormInitializeResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

export interface ISubscriptionCheckoutFormRetrieveRequestData {
    locale?: LOCALE;
    conversationId?: string;
    token: string;
}

export interface ISubscriptionCheckoutFormRetrieveResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
    parentReferenceCode: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
    subscriptionStatus: SUBSCRIPTION_STATUS;
    trialDays?: number;
    trialStartDate?: string;
    trialEndDate?: string;
    createdDate: string;
    startDate: string;
}

export interface ISubscriptionExistingCustomerInitializeRequestData {
    locale?: LOCALE;
    conversationId?: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
}

export interface ISubscriptionExistingCustomerInitializeResult {
    status: string;
    locale?: LOCALE;
    systemTime: number;
    conversationId?: string;
    token: string;
}

/* NAMESPACE INTERFACES */
export interface IApiTest {
    retrieve(data: IApiTestRequestData, callback: (err: Error, result: IApiTestResult) => void): void;
}

export interface IBinNumber {
    retrieve(data: IBinNumberRequestData, callback: (err: Error, result: IBinNumberResult) => void): void;
}

export interface IApproval {
    create(data: IApprovalPaymentRequestData, callback: (err: Error, result: IApprovalPaymentResult) => void): void;
}

export interface IDisapproval {
    create(data: IApprovalPaymentRequestData, callback: (err: Error, result: IApprovalPaymentResult) => void): void;
}

export interface IBKMInitialize {
    create(
        data: IThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: IThreeDSInitializePaymentResult) => void,
    ): void;
}

export interface IBKM {
    retrieve(
        data: IThreeDSPaymentCompleteRequestData,
        callback: (err: Error, result: IThreeDSPaymentCompleteRequestData) => void,
    ): void;
}

export interface ICancel {
    create(data: ICancelPaymentRequestData, callback: (err: Error, result: ICancelPaymentResult) => void): void;
}

export interface ICard {
    create(data: ISavePaymentCardRequestData, callback: (err: Error, result: ISavePaymentCardResult) => void): void;
    delete(data: IDeleteUserCardRequestData, callback: (err: Error, result: IDeleteUserCardResult) => void): void;
}

export interface ICardList {
    retreive(data: IListUserCardsRequestData, callback: (err: Error, result: IListUserCardsResult) => void): void;
}

export interface ICheckOutFormInitialize {
    create(
        data: IThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: ICheckoutFormInitialResult) => void,
    ): void;
}

export interface ICheckOutForm {
    retrieve(
        data: ICheckoutFormRetrieveRequestData,
        callback: (err: Error, result: ICheckoutFormRetrieveResult) => void,
    ): void;
}

export interface IUniversalCardStorageInitialize {
    retrieve(
        data: IUniversalCardStorageInitializeRequestData,
        callback: (err: Error, result: IUniversalCardStorageInitializeResult) => void,
    ): void;
}

export interface IInstallmentInfo {
    retrieve(data: IInstallmentInfoRequestData, callback: (err: Error, result: IInstallmentInfoResult) => void): void;
}

export interface IPayment {
    create(data: IPaymentRequestData, callback: (err: Error, result: IPaymentResult) => void): void;
    retrieve(data: IPaymentRetrieveRequestData, callback: (err: Error, result: IPaymentResult) => void): void;
}

export interface IPaymentItem {
    update(data: IPaymentItemRequestData, callback: (err: Error, result: IPaymentItemResult) => void): void;
}

export interface IPeccoInitialize {
    create(data: IPeccoInitializeRequestData, callback: (err: Error, result: IPeccoInitializeResult) => void): void;
}

export interface IPeccoPayment {
    create(data: IPeccoPaymentRequestData, callback: (err: Error, result: IPeccoPaymentResult) => void): void;
}

export interface IRefund {
    create(data: IRefundRequestData, callback: (err: Error, result: IRefundResult) => void): void;
}

export interface IRefundToBalance {
    create(data: IRefundToBalanceRequestData, callback: (err: Error, result: IRefundToBalanceResult) => void): void;
}

export interface IPayoutCompletedTransactionListRetrieve {
    retrieve(
        data: IPayoutCompletedTransactionListRetrieveRequestData,
        callback: (err: Error, result: IPayoutCompletedTransactionListRetrieveResult) => void,
    ): void;
}

export interface IBouncedBackTransactionListRetrieve {
    retrieve(
        data: IBouncedBackTransactionListRetrieveRequestData,
        callback: (err: Error, result: IBouncedBackTransactionListRetrieveResult) => void,
    ): void;
}

export interface ISubMerchant {
    create(data: ISubMerchantCreateRequestData, callback: (err: Error, result: ISubMerchantCreateResult) => void): void;
    update(data: ISubMerchantUpdateRequestData, callback: (err: Error, result: ISubMerchantUpdateResult) => void): void;
    retrieve(
        data: ISubMerchantRetrieveRequestData,
        callback: (err: Error, result: ISubMerchantRetrieveResult) => void,
    ): void;
}

export interface IThreeDSInitialize {
    create(
        data: IThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: IThreeDSInitializePaymentResult) => void,
    ): void;
}

export interface IThreedsPayment {
    create(data: IThreeDSPaymentCompleteRequestData, callback: (err: Error, result: IPaymentResult) => void): void;
}

export interface ISettlementToBalance {
    create(
        data: ISettlementToBalanceRequestData,
        callback: (err: Error, result: ISettlementToBalanceResult) => void,
    ): void;
}

export interface ISubscriptionProduct {
    create(
        data: ISubscriptionProductCreateRequestData,
        callback: (err: Error, result: ISubscriptionProductCreateResult) => void,
    ): void;
    update(
        data: ISubscriptionProductUpdateRequestData,
        callback: (err: Error, result: ISubscriptionProductUpdateResult) => void,
    ): void;
    retrieve(
        data: ISubscriptionProductRetrieveRequestData,
        callback: (err: Error, result: ISubscriptionProductRetrieveResult) => void,
    ): void;
    retrieveList(
        data: ISubscriptionProductRetrieveListRequestData,
        callback: (err: Error, result: ISubscriptionProductRetrieveListResult) => void,
    ): void;
}

export interface ISubscriptionPricingPlan {
    create(
        data: ISubscriptionPricingPlanCreateRequestData,
        callback: (err: Error, result: ISubscriptionPricingPlanCreateResult) => void,
    ): void;
    update(
        data: ISubscriptionPricingPlanUpdateRequestData,
        callback: (err: Error, result: ISubscriptionPricingPlanUpdateResult) => void,
    ): void;
    retrieve(
        data: ISubscriptionPricingPlanRetrieveRequestData,
        callback: (err: Error, result: ISubscriptionPricingPlanRetrieveResult) => void,
    ): void;
    retrieveList(
        data: ISubscriptionPricingPlanRetrieveListRequestData,
        callback: (err: Error, result: ISubscriptionPricingPlanRetrieveListResult) => void,
    ): void;
}

export interface ISubscriptionCustomer {
    create(
        data: ISubscriptionCustomerCreateRequestData,
        callback: (err: Error, result: ISubscriptionCustomerCreateResult) => void,
    ): void;
    update(
        data: ISubscriptionCustomerUpdateRequestData,
        callback: (err: Error, result: ISubscriptionCustomerUpdateResult) => void,
    ): void;
    retrieve(
        data: ISubscriptionCustomerRetrieveRequestData,
        callback: (err: Error, result: ISubscriptionCustomerRetrieveResult) => void,
    ): void;
    retrieveList(
        data: ISubscriptionCustomerRetrieveListRequestData,
        callback: (err: Error, result: ISubscriptionCustomerRetrieveListResult) => void,
    ): void;
}

export interface ISubscriptionCard {
    update(
        data: ISubscriptionCardUpdateRequestData,
        callback: (err: Error, result: ISubscriptionCardUpdateResult) => void,
    ): void;
    updateWithSubscriptionReferenceCode(
        data: ISubscriptionCardUpdateWithSubscriptionReferenceCodeRequestData,
        callback: (err: Error, result: ISubscriptionCardUpdateWithSubscriptionReferenceCodeResult) => void,
    ): void;
}

export interface ISubscriptionPayment {
    retry(
        data: ISubscriptionPaymentRetryRequestData,
        callback: (err: Error, result: ISubscriptionPaymentRetryResult) => void,
    ): void;
}

export interface ISubscription {
    cancel(
        data: ISubscriptionCancelRequestData,
        callback: (err: Error, result: ISubscriptionCancelResult) => void,
    ): void;
    activate(
        data: ISubscriptionActivateRequestData,
        callback: (err: Error, result: ISubscriptionActivateResult) => void,
    ): void;
    upgrade(
        data: ISubscriptionUpgradeRequestData,
        callback: (err: Error, result: ISubscriptionUpgradeResult) => void,
    ): void;
    retrieve(
        data: ISubscriptionRetrieveRequestData,
        callback: (err: Error, result: ISubscriptionRetrieveResult) => void,
    ): void;
    search(
        data: ISubscriptionSearchRequestData,
        callback: (err: Error, result: ISubscriptionSearchResult) => void,
    ): void;
    initialize(
        data: ISubscriptionInitializeRequestData,
        callback: (err: Error, result: ISubscriptionCheckoutFormInitializeResult) => void,
    ): void;
}

export interface ISubscriptionCheckoutForm {
    initialize(
        data: ISubscriptionCheckoutFormInitializeRequestData,
        callback: (err: Error, result: ISubscriptionCheckoutFormInitializeResult) => void,
    ): void;
    retrieve(
        data: ISubscriptionCheckoutFormRetrieveRequestData,
        callback: (err: Error, result: ISubscriptionCheckoutFormRetrieveResult) => void,
    ): void;
}

export interface ISubscriptionExistingCustomer {
    initialize(
        data: ISubscriptionExistingCustomerInitializeRequestData,
        callback: (err: Error, result: ISubscriptionExistingCustomerInitializeResult) => void,
    ): void;
}

export class Iyzipay {
    constructor(options?: IConfigOptions);
    apiTest: IApiTest;
    approval: IApproval;
    disapproval: IDisapproval;
    bkmInitialize: IBKMInitialize;
    bkm: IBKM;
    cancel: ICancel;
    card: ICard;
    cardList: ICardList;
    checkoutFormInitialize: ICheckOutFormInitialize;
    checkoutForm: ICheckOutForm;
    universalCardStorageInitialize: IUniversalCardStorageInitialize;
    installmentInfo: IInstallmentInfo;
    payment: IPayment;
    paymentItem: IPaymentItem;
    peccoInitialize: IPeccoInitialize;
    peccoPayment: IPeccoPayment;
    refund: IRefund;
    refundToBalance: IRefundToBalance;
    payoutCompletedTransactionListRetrieve: IPayoutCompletedTransactionListRetrieve;
    bouncedBackTransactionListRetrieve: IBouncedBackTransactionListRetrieve;
    subMerchant: ISubMerchant;
    threedsInitialize: IThreeDSInitialize;
    threedsPayment: IThreedsPayment;

    settlementToBalance: ISettlementToBalance;
    /* SUBSCRIPTION */
    subscriptionProduct: ISubscriptionProduct;
    subscriptionPricingPlan: ISubscriptionPricingPlan;
    subscriptionCustomer: ISubscriptionCustomer;
    subscriptionCard: ISubscriptionCard;
    subscriptionPayment: ISubscriptionPayment;
    subscription: ISubscription;
    subscriptionCheckoutForm: ISubscriptionCheckoutForm;
    subscriptionExistingCustomer: ISubscriptionExistingCustomer;
}

export namespace Iyzipay {
    const LOCALE: ILOCALE;
    const PAYMENT_GROUP: IPAYMENT_GROUP;
    const BASKET_ITEM_TYPE: IBASKET_ITEM_TYPE;
    const PAYMENT_CHANNEL: IPAYMENT_CHANNEL;
    const SUB_MERCHANT_TYPE: ISUB_MERCHANT_TYPE;
    const CURRENCY: ICURRENCY;
    const APM_TYPE: IAPM_TYPE;
    const REFUND_REASON: IREFUND_REASON;
    const PLAN_PAYMENT_TYPE: IPLAN_PAYMENT_TYPE;
    const SUBSCRIPTION_PRICING_PLAN_INTERVAL: ISUBSCRIPTION_PRICING_PLAN_INTERVAL;
    const SUBSCRIPTION_UPGRADE_PERIOD: ISUBSCRIPTION_UPGRADE_PERIOD;
    const SUBSCRIPTION_STATUS: ISUBSCRIPTION_STATUS;
    const SUBSCRIPTION_INITIAL_STATUS: ISUBSCRIPTION_INITIAL_STATUS;
}

export default Iyzipay;

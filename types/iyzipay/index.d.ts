export type Locale = "TR" | "EN";

export type PaymentGroup = "PRODUCT" | "LISTING" | "SUBSCRIPTION";

export type BasketItemType = "PHYSICAL" | "VIRTUAL";

export type PaymentChannel =
    | "MOBILE"
    | "WEB"
    | "MOBILE_WEB"
    | "MOBILE_IOS"
    | "MOBILE_ANDROID"
    | "MOBILE_WINDOWS"
    | "MOBILE_TABLET"
    | "MOBILE_PHONE";

export type SubMerchantType = "PERSONAL" | "PRIVATE_COMPANY" | "LIMITED_OR_JOINT_STOCK_COMPANY";

export type Currency = "TRY" | "EUR" | "USD" | "IRR" | "GBP" | "NOK" | "RUB" | "CHF";

export type ApmType = "SOFORT" | "IDEAL" | "QIWI" | "GIROPAY";

export type RefundReason = "DOUBLE_PAYMENT" | "BUYER_REQUEST" | "FRAUD" | "OTHER";

export type PlanPaymentType = "RECURRING";

export type SubscriptionPricingPlanInterval = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";

export type SubscriptionUpgradePeriod = "NOW";

export type SubscriptionStatus = "EXPIRED" | "UNPAID" | "CANCELED" | "ACTIVE" | "PENDING" | "UPGRADED";

export type SubscriptionInitialStatus = "ACTIVE" | "PENDING";

/* INTERFACES */
export interface Ilocale {
    TR: "TR";
    EN: "EN";
}

export interface IpaymentGroup {
    PRODUCT: "PRODUCT";
    LISTING: "LISTING";
    SUBSCRIPTION: "SUBSCRIPTION";
}

export interface IbasketItemType {
    PHYSICAL: "PHYSICAL";
    VIRTUAL: "VIRTUAL";
}

export interface IpaymentChannel {
    MOBILE: "MOBILE";
    WEB: "WEB";
    MOBILE_WEB: "MOBILE_WEB";
    MOBILE_IOS: "MOBILE_IOS";
    MOBILE_ANDROID: "MOBILE_ANDROID";
    MOBILE_WINDOWS: "MOBILE_WINDOWS";
    MOBILE_TABLET: "MOBILE_TABLET";
    MOBILE_PHONE: "MOBILE_PHONE";
}

export interface IsubMerchantType {
    PERSONAL: "PERSONAL";
    PRIVATE_COMPANY: "PRIVATE_COMPANY";
    LIMITED_OR_JOINT_STOCK_COMPANY: "LIMITED_OR_JOINT_STOCK_COMPANY";
}

export interface Icurrency {
    TRY: "TRY";
    EUR: "EUR";
    USD: "USD";
    IRR: "IRR";
    GBP: "GBP";
    NOK: "NOK";
    RUB: "RUB";
    CHF: "CHF";
}

export interface IapmType {
    SOFORT: "SOFORT";
    IDEAL: "IDEAL";
    QIWI: "QIWI";
    GIROPAY: "GIROPAY";
}

export interface IrefundReason {
    DOUBLE_PAYMENT: "DOUBLE_PAYMENT";
    BUYER_REQUEST: "BUYER_REQUEST";
    FRAUD: "FRAUD";
    OTHER: "OTHER";
}

export interface IplanPaymentType {
    RECURRING: "RECURRING";
}

export interface IsubscriptionPricingPlanInterval {
    DAILY: "DAILY";
    WEEKLY: "WEEKLY";
    MONTHLY: "MONTHLY";
    YEARLY: "YEARLY";
}

export interface IsubscriptionUpgradePeriod {
    NOW: "NOW";
}

export interface IsubscriptionStatus {
    EXPIRED: "EXPIRED";
    UNPAID: "UNPAID";
    CANCELED: "CANCELED";
    ACTIVE: "ACTIVE";
    PENDING: "PENDING";
    UPGRADED: "UPGRADED";
}

export interface IsubscriptionInitialStatus {
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
    itemType: BasketItemType;
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
    currency: Currency;
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
    locale?: Locale;
    conversationId?: string;
    paymentTransactionId: string;
}

export interface IApprovalPaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
}

export interface IApiTestRequestData {
    locale?: Locale;
    conversationId?: string;
}

export interface IApiTestResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
}

export interface IBinNumberRequestData {
    locale?: Locale;
    conversationId?: string;
    binNumber: string;
}

export interface IBinNumberResult {
    status: string;
    locale?: Locale;
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
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    ip: string;
    reason?: RefundReason;
    description?: string;
}

export interface ICancelPaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
}

export interface ISavePaymentCardRequestData {
    locale?: Locale;
    conversationId?: string;
    email: string;
    externalId?: string;
    cardUserKey?: string;
    card: IPaymentCard;
}

export interface IListUserCardsRequestData {
    locale?: Locale;
    conversationId?: string;
    cardUserKey: string;
}

export interface IDeleteUserCardRequestData {
    locale?: Locale;
    conversationId?: string;
    cardUserKey: string;
    cardToken: string;
}

export interface IListUserCardsResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    cardDetails: ISavedPaymentCardDetail[];
}

export interface IDeleteUserCardResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
}

export interface ISavePaymentCardResult {
    status: string;
    locale?: Locale;
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
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

export interface ICheckoutFormRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

export interface ICheckoutFormRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    paymentStatus: string;
    fraudStatus: number;
    price: number | string;
    paidPrice: number | string;
    currency: Currency;
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
    locale?: Locale;
    conversationId?: string;
    gsmNumber: string;
    email: string;
}

export interface IUniversalCardStorageInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    callbackUrl: string;
}

export interface IInstallmentInfoRequestData {
    locale?: Locale;
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
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    binNumber: string;
    price: number | string;
    installmentDetails: IInstallmentDetail[];
}

export interface IPaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    price: number | string;
    paidPrice: number | string;
    currency?: Currency;
    installments: number;
    basketId?: string;
    paymentChannel?: PaymentChannel;
    paymentGroup?: PaymentGroup;
    paymentCard: ISavedPaymentCard | IPaymentCard;
    buyer: IBuyerDetails;
    shippingAddress: IAddressDetails;
    billingAddress: IAddressDetails;
    basketItems: IBasketItem[];
}

export interface IPaymentResult {
    status: string;
    locale?: Locale;
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
    currency: Currency;
    itemTransactions: IItemTransaction[];
    authCode: string;
    phase: string;
    mdStatus: string;
    hostReference: string;
}

export interface IPaymentRetrieveRequestData {
    locale?: Locale;
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
    locale?: Locale;
    conversationId?: string;
    price: number | string;
    paidPrice: number | string;
    currency?: Currency;
    installments: number;
    basketId?: string;
    paymentChannel?: PaymentChannel;
    paymentGroup?: PaymentGroup;
    buyer: IBuyerDetails;
    shippingAddress: IAddressDetails;
    billingAddress: IAddressDetails;
    basketItems: IBasketItem[];
    callbackUrl: string;
}

export interface IPeccoInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

export interface IPeccoPaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

export interface IPeccoPaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    paymentStatus: string;
    fraudStatus: number;
    price: number | string;
    paidPrice: number | string;
    currency: Currency;
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
    locale?: Locale;
    conversationId?: string;
    paymentTransactionId: string;
    price: number | string;
    ip: string;
    currency: Currency;
    reason?: RefundReason;
    description?: string;
}

export interface IRefundResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

export interface IRefundToBalanceRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    callbackUrl: string;
}

export interface IRefundToBalanceResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

export interface IPayoutCompletedTransactionListRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    date: string;
    page?: number;
    count?: number;
}

/* export interface IPayoutCompletedTransaction extends IPaymentResult {

} */

export interface IPayoutCompletedTransactionListRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    payoutCompletedTransactionList: IPaymentResult[];
}

export interface ISubMerchantCreateRequestData {
    locale?: Locale;
    conversationId?: string;
    subMerchantExternalId: string;
    subMerchantType: SubMerchantType;
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
    currency: Currency;
}

export interface ISubMerchantCreateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    subMerchantType: SubMerchantType;
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
    currency: Currency;
}

export interface ISubMerchantUpdateRequestData {
    locale?: Locale;
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
    currency?: Currency;
}

export interface ISubMerchantUpdateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    subMerchantType: SubMerchantType;
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
    currency: Currency;
}

export interface ISubMerchantRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    subMerchantExternalId: string;
}

export interface ISubMerchantRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    subMerchantType: SubMerchantType;
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
    currency: Currency;
}

export interface IBouncedBackTransactionListRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    date: string;
    page?: number;
    count?: number;
}

/* export interface IBouncedBackTransaction extends IPaymentResult {

} */

export interface IBouncedBackTransactionListRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    bouncedBackTransactionList: IPaymentResult[];
}

export interface IThreeDSInitializePaymentRequestData extends IPaymentRequestData {
    callbackUrl: string;
}

export interface IThreeDSInitializePaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    threeDSHtmlContent: string;
}

export interface IThreeDSPaymentCompleteRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    conversationData?: string;
}

// export interface IThreeDSPaymentCompleteResult extends IPaymentResult { }

export interface ISettlementToBalanceRequestData {
    locale?: Locale;
    conversationId?: string;
    subMerchantKey: string;
    callbackUrl?: string;
    price: number | string;
}

export interface ISettlementToBalanceResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

export interface ISubscriptionProductCreateRequestData {
    locale?: Locale;
    conversationId?: string;
    name: string;
    description?: string;
}

export interface ISubscriptionProductCreateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

export interface ISubscriptionProductUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
    name?: string;
    description?: string;
}

export interface ISubscriptionProductUpdateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

export interface ISubscriptionProductRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
}

export interface ISubscriptionProductRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

export interface ISubscriptionProductRetrieveListRequestData {
    locale?: Locale;
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
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionProductItem[];
}

export interface ISubscriptionPricingPlanCreateRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: Currency;
    paymentInterval: SubscriptionPricingPlanInterval;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PlanPaymentType;
}

export interface ISubscriptionPricingPlanCreateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: Currency;
    paymentInterval: SubscriptionPricingPlanInterval;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PlanPaymentType;
}

export interface ISubscriptionPricingPlanUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
    name?: string;
    trialPeriodDays?: number;
}

export interface ISubscriptionPricingPlanUpdateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: Currency;
    paymentInterval: SubscriptionPricingPlanInterval;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PlanPaymentType;
}

export interface ISubscriptionPricingPlanRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
}

export interface ISubscriptionPricingPlanRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: Currency;
    paymentInterval: SubscriptionPricingPlanInterval;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PlanPaymentType;
}

export interface ISubscriptionPricingPlanRetrieveListRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
    page?: number;
    count?: number;
}

export interface ISubscriptionPricingPlanItem {
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: Currency;
    paymentInterval: SubscriptionPricingPlanInterval;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PlanPaymentType;
}

export interface ISubscriptionPricingPlanRetrieveListResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionPricingPlanItem[];
}

export interface ISubscriptionCustomerCreateRequestData {
    locale?: Locale;
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
    locale?: Locale;
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
    locale?: Locale;
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
    locale?: Locale;
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
    locale?: Locale;
    conversationId?: string;
    customerReferenceCode: string;
}

export interface ISubscriptionCustomerRetrieveResult {
    status: string;
    locale?: Locale;
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
    locale?: Locale;
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
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionCustomerItem[];
}

export interface ISubscriptionCardUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    customerReferenceCode: string;
    callbackUrl: string;
}

export interface ISubscriptionCardUpdateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    checkoutFormContent: string;
    token: string;
    tokenExpireTime: number;
}

export interface ISubscriptionCardUpdateWithSubscriptionReferenceCodeRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
    callbackUrl: string;
}

export interface ISubscriptionCardUpdateWithSubscriptionReferenceCodeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    checkoutFormContent: string;
    token: string;
    tokenExpireTime: number;
}

export interface ISubscriptionPaymentRetryRequestData {
    locale?: Locale;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionPaymentRetryResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionCancelRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

export interface ISubscriptionCancelResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionActivateRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

export interface ISubscriptionActivateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionUpgradeRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
    newPricingPlanReferenceCode: string;
    upgradePeriod?: SubscriptionUpgradePeriod;
    useTrial?: boolean;
}

export interface ISubscriptionUpgradeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

export interface ISubscriptionRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

export interface ISubscriptionRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
    parentReferenceCode: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
    subscriptionStatus: SubscriptionStatus;
    subscriptionInitialStatus: SubscriptionInitialStatus;
    subscriptionCreatedDate: string;
    subscriptionStartDate: string;
    subscriptionEndDate: string;
    trialStartDate?: string;
    trialEndDate?: string;
    customer: ISubscriptionCustomerItem;
    pricingPlan: ISubscriptionPricingPlanItem;
}

export interface ISubscriptionSearchRequestData {
    locale?: Locale;
    conversationId?: string;
    parentReferenceCode?: string;
    subscriptionReferenceCode?: string;
    customerReferenceCode?: string;
    subscriptionStatus?: SubscriptionStatus;
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
    subscriptionStatus: SubscriptionStatus;
    subscriptionInitialStatus: SubscriptionInitialStatus;
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
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionItem[];
}

export interface ISubscriptionInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus?: SubscriptionInitialStatus;
    customer: ISubscriptionCustomerCreateRequestData;
    paymentCard?: ISavedPaymentCard | IPaymentCard;
}

export interface ISubscriptionCheckoutFormInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus?: SubscriptionInitialStatus;
    customer: ISubscriptionCustomerCreateRequestData;
}

export interface ISubscriptionCheckoutFormInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

export interface ISubscriptionCheckoutFormRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

export interface ISubscriptionCheckoutFormRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
    parentReferenceCode: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
    subscriptionStatus: SubscriptionStatus;
    trialDays?: number;
    trialStartDate?: string;
    trialEndDate?: string;
    createdDate: string;
    startDate: string;
}

export interface ISubscriptionExistingCustomerInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
}

export interface ISubscriptionExistingCustomerInitializeResult {
    status: string;
    locale?: Locale;
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

export interface Ibkm {
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
    bkm: Ibkm;
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
    const Locale: Ilocale;
    const PaymentGroup: IpaymentGroup;
    const BasketItemType: IbasketItemType;
    const PaymentChannel: IpaymentChannel;
    const SubMerchantType: IsubMerchantType;
    const Currency: Icurrency;
    const ApmType: IapmType;
    const RefundReason: IrefundReason;
    const PlanPaymentType: IplanPaymentType;
    const SubscriptionPricingPlanInterval: IsubscriptionPricingPlanInterval;
    const SubscriptionUpgradePeriod: IsubscriptionUpgradePeriod;
    const SubscriptionStatus: IsubscriptionStatus;
    const SubscriptionInitialStatus: IsubscriptionInitialStatus;
}

export default Iyzipay;
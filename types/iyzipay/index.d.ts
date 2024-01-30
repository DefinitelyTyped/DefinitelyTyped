type Locale = "TR" | "EN";

type PaymentGroup = "PRODUCT" | "LISTING" | "SUBSCRIPTION";

type BasketItemType = "PHYSICAL" | "VIRTUAL";

type PaymentChannel =
    | "MOBILE"
    | "WEB"
    | "MOBILE_WEB"
    | "MOBILE_IOS"
    | "MOBILE_ANDROID"
    | "MOBILE_WINDOWS"
    | "MOBILE_TABLET"
    | "MOBILE_PHONE";

type SubMerchantType = "PERSONAL" | "PRIVATE_COMPANY" | "LIMITED_OR_JOINT_STOCK_COMPANY";

type Currency = "TRY" | "EUR" | "USD" | "IRR" | "GBP" | "NOK" | "RUB" | "CHF";

type ApmType = "SOFORT" | "IDEAL" | "QIWI" | "GIROPAY";

type RefundReason = "DOUBLE_PAYMENT" | "BUYER_REQUEST" | "FRAUD" | "OTHER";

type PlanPaymentType = "RECURRING";

type SubscriptionPricingPlanInterval = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";

type SubscriptionUpgradePeriod = "NOW";

type SubscriptionStatus = "EXPIRED" | "UNPAID" | "CANCELED" | "ACTIVE" | "PENDING" | "UPGRADED";

type SubscriptionInitialStatus = "ACTIVE" | "PENDING";

/* INTERFACES */
interface Ilocale {
    TR: "TR";
    EN: "EN";
}

interface IpaymentGroup {
    PRODUCT: "PRODUCT";
    LISTING: "LISTING";
    SUBSCRIPTION: "SUBSCRIPTION";
}

interface IbasketItemType {
    PHYSICAL: "PHYSICAL";
    VIRTUAL: "VIRTUAL";
}

interface IpaymentChannel {
    MOBILE: "MOBILE";
    WEB: "WEB";
    MOBILE_WEB: "MOBILE_WEB";
    MOBILE_IOS: "MOBILE_IOS";
    MOBILE_ANDROID: "MOBILE_ANDROID";
    MOBILE_WINDOWS: "MOBILE_WINDOWS";
    MOBILE_TABLET: "MOBILE_TABLET";
    MOBILE_PHONE: "MOBILE_PHONE";
}

interface IsubMerchantType {
    PERSONAL: "PERSONAL";
    PRIVATE_COMPANY: "PRIVATE_COMPANY";
    LIMITED_OR_JOINT_STOCK_COMPANY: "LIMITED_OR_JOINT_STOCK_COMPANY";
}

interface Icurrency {
    TRY: "TRY";
    EUR: "EUR";
    USD: "USD";
    IRR: "IRR";
    GBP: "GBP";
    NOK: "NOK";
    RUB: "RUB";
    CHF: "CHF";
}

interface IapmType {
    SOFORT: "SOFORT";
    IDEAL: "IDEAL";
    QIWI: "QIWI";
    GIROPAY: "GIROPAY";
}

interface IrefundReason {
    DOUBLE_PAYMENT: "DOUBLE_PAYMENT";
    BUYER_REQUEST: "BUYER_REQUEST";
    FRAUD: "FRAUD";
    OTHER: "OTHER";
}

interface IplanPaymentType {
    RECURRING: "RECURRING";
}

interface IsubscriptionPricingPlanInterval {
    DAILY: "DAILY";
    WEEKLY: "WEEKLY";
    MONTHLY: "MONTHLY";
    YEARLY: "YEARLY";
}

interface IsubscriptionUpgradePeriod {
    NOW: "NOW";
}

interface IsubscriptionStatus {
    EXPIRED: "EXPIRED";
    UNPAID: "UNPAID";
    CANCELED: "CANCELED";
    ACTIVE: "ACTIVE";
    PENDING: "PENDING";
    UPGRADED: "UPGRADED";
}

interface IsubscriptionInitialStatus {
    ACTIVE: "ACTIVE";
    PENDING: "PENDING";
}

/* GENERIC INTERFACES */
interface IConfigOptions {
    apiKey: string;
    secretKey: string;
    uri: string;
}

interface IPaymentCard {
    cardHolderName: string;
    cardNumber: string;
    expireMonth: string;
    expireYear: string;
    cvc?: string;
    registerCard?: number;
    registerConsumerCard?: boolean;
    cardAlias: string;
}

interface ISavedPaymentCard {
    cardToken?: string;
    cardUserKey: string;
    ucsToken?: string;
    consumerToken?: string;
}

interface ISavedPaymentCardDetail {
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

interface IBuyerDetails {
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

interface IAddressDetails {
    contactName: string;
    city: string;
    country: string;
    address: string;
    zipCode?: string;
}

interface IBasketItem {
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
interface IConvertedPayout {
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

interface IItemTransaction {
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
interface IApprovalPaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentTransactionId: string;
}

interface IApprovalPaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
}

interface IApiTestRequestData {
    locale?: Locale;
    conversationId?: string;
}

interface IApiTestResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
}

interface IBinNumberRequestData {
    locale?: Locale;
    conversationId?: string;
    binNumber: string;
}

interface IBinNumberResult {
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

interface ICancelPaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    ip: string;
    reason?: RefundReason;
    description?: string;
}

interface ICancelPaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
}

interface ISavePaymentCardRequestData {
    locale?: Locale;
    conversationId?: string;
    email: string;
    externalId?: string;
    cardUserKey?: string;
    card: IPaymentCard;
}

interface IListUserCardsRequestData {
    locale?: Locale;
    conversationId?: string;
    cardUserKey: string;
}

interface IDeleteUserCardRequestData {
    locale?: Locale;
    conversationId?: string;
    cardUserKey: string;
    cardToken: string;
}

interface IListUserCardsResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    cardDetails: ISavedPaymentCardDetail[];
}

interface IDeleteUserCardResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
}

interface ISavePaymentCardResult {
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

// interface ICheckoutFormInitializeRequestData extends IThreeDSInitializePaymentRequestData { }

interface ICheckoutFormInitialResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

interface ICheckoutFormRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

interface ICheckoutFormRetrieveResult {
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

interface IUniversalCardStorageInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    gsmNumber: string;
    email: string;
}

interface IUniversalCardStorageInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    callbackUrl: string;
}

interface IInstallmentInfoRequestData {
    locale?: Locale;
    conversationId?: string;
    price: number | string;
    binNumber: string;
}

interface IInstallmentDetail {
    installmentNumber: number;
    totalPrice: number | string;
    installmentPrice: number | string;
    installmentRate: number;
}

interface IInstallmentInfoResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    binNumber: string;
    price: number | string;
    installmentDetails: IInstallmentDetail[];
}

interface IPaymentRequestData {
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

interface IPaymentResult {
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

interface IPaymentRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    paymentConversationId?: string;
}

// interface IPaymentRetrieveResult extends IPaymentResult { }

interface IPaymentItemRequestData {
    paymentTransactionId: string;
    subMerchantKey?: string;
    subMerchantPrice?: number | string;
}

interface IPaymentItemResult {
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

interface IPeccoInitializeRequestData {
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

interface IPeccoInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

interface IPeccoPaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

interface IPeccoPaymentResult {
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

interface IRefundRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentTransactionId: string;
    price: number | string;
    ip: string;
    currency: Currency;
    reason?: RefundReason;
    description?: string;
}

interface IRefundResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

interface IRefundToBalanceRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    callbackUrl: string;
}

interface IRefundToBalanceResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

interface IPayoutCompletedTransactionListRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    date: string;
    page?: number;
    count?: number;
}

/* interface IPayoutCompletedTransaction extends IPaymentResult {

} */

interface IPayoutCompletedTransactionListRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    payoutCompletedTransactionList: IPaymentResult[];
}

interface ISubMerchantCreateRequestData {
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

interface ISubMerchantCreateResult {
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

interface ISubMerchantUpdateRequestData {
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

interface ISubMerchantUpdateResult {
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

interface ISubMerchantRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    subMerchantExternalId: string;
}

interface ISubMerchantRetrieveResult {
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

interface IBouncedBackTransactionListRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    date: string;
    page?: number;
    count?: number;
}

/* interface IBouncedBackTransaction extends IPaymentResult {

} */

interface IBouncedBackTransactionListRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    bouncedBackTransactionList: IPaymentResult[];
}

interface IThreeDSInitializePaymentRequestData extends IPaymentRequestData {
    callbackUrl: string;
}

interface IThreeDSInitializePaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    threeDSHtmlContent: string;
}

interface IThreeDSPaymentCompleteRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    conversationData?: string;
}

// interface IThreeDSPaymentCompleteResult extends IPaymentResult { }

interface ISettlementToBalanceRequestData {
    locale?: Locale;
    conversationId?: string;
    subMerchantKey: string;
    callbackUrl?: string;
    price: number | string;
}

interface ISettlementToBalanceResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

interface ISubscriptionProductCreateRequestData {
    locale?: Locale;
    conversationId?: string;
    name: string;
    description?: string;
}

interface ISubscriptionProductCreateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

interface ISubscriptionProductUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
    name?: string;
    description?: string;
}

interface ISubscriptionProductUpdateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

interface ISubscriptionProductRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
}

interface ISubscriptionProductRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

interface ISubscriptionProductRetrieveListRequestData {
    locale?: Locale;
    conversationId?: string;
    page?: number;
    count?: number;
}

interface ISubscriptionProductItem {
    productReferenceCode: string;
    name: string;
    description: string;
}

interface ISubscriptionProductRetrieveListResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionProductItem[];
}

interface ISubscriptionPricingPlanCreateRequestData {
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

interface ISubscriptionPricingPlanCreateResult {
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

interface ISubscriptionPricingPlanUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
    name?: string;
    trialPeriodDays?: number;
}

interface ISubscriptionPricingPlanUpdateResult {
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

interface ISubscriptionPricingPlanRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
}

interface ISubscriptionPricingPlanRetrieveResult {
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

interface ISubscriptionPricingPlanRetrieveListRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
    page?: number;
    count?: number;
}

interface ISubscriptionPricingPlanItem {
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: Currency;
    paymentInterval: SubscriptionPricingPlanInterval;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PlanPaymentType;
}

interface ISubscriptionPricingPlanRetrieveListResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionPricingPlanItem[];
}

interface ISubscriptionCustomerCreateRequestData {
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

interface ISubscriptionCustomerCreateResult {
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

interface ISubscriptionCustomerUpdateRequestData {
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

interface ISubscriptionCustomerUpdateResult {
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

interface ISubscriptionCustomerRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    customerReferenceCode: string;
}

interface ISubscriptionCustomerRetrieveResult {
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

interface ISubscriptionCustomerRetrieveListRequestData {
    locale?: Locale;
    conversationId?: string;
    page?: number;
    count?: number;
}

interface ISubscriptionCustomerItem {
    customerReferenceCode: string;
    name: string;
    surname: string;
    identityNumber: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: IAddressDetails;
    shippingAddress?: IAddressDetails;
}

interface ISubscriptionCustomerRetrieveListResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionCustomerItem[];
}

interface ISubscriptionCardUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    customerReferenceCode: string;
    callbackUrl: string;
}

interface ISubscriptionCardUpdateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    checkoutFormContent: string;
    token: string;
    tokenExpireTime: number;
}

interface ISubscriptionCardUpdateWithSubscriptionReferenceCodeRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
    callbackUrl: string;
}

interface ISubscriptionCardUpdateWithSubscriptionReferenceCodeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    checkoutFormContent: string;
    token: string;
    tokenExpireTime: number;
}

interface ISubscriptionPaymentRetryRequestData {
    locale?: Locale;
    conversationId?: string;
    referenceCode: string;
}

interface ISubscriptionPaymentRetryResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

interface ISubscriptionCancelRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

interface ISubscriptionCancelResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

interface ISubscriptionActivateRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

interface ISubscriptionActivateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

interface ISubscriptionUpgradeRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
    newPricingPlanReferenceCode: string;
    upgradePeriod?: SubscriptionUpgradePeriod;
    useTrial?: boolean;
}

interface ISubscriptionUpgradeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

interface ISubscriptionRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

interface ISubscriptionRetrieveResult {
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

interface ISubscriptionSearchRequestData {
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

interface ISubscriptionItem {
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

interface ISubscriptionSearchResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: ISubscriptionItem[];
}

interface ISubscriptionInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus?: SubscriptionInitialStatus;
    customer: ISubscriptionCustomerCreateRequestData;
    paymentCard?: ISavedPaymentCard | IPaymentCard;
}

interface ISubscriptionCheckoutFormInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus?: SubscriptionInitialStatus;
    customer: ISubscriptionCustomerCreateRequestData;
}

interface ISubscriptionCheckoutFormInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

interface ISubscriptionCheckoutFormRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

interface ISubscriptionCheckoutFormRetrieveResult {
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

interface ISubscriptionExistingCustomerInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
}

interface ISubscriptionExistingCustomerInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
}

/* NAMESPACE INTERFACES */
interface IApiTest {
    retrieve(data: IApiTestRequestData, callback: (err: Error, result: IApiTestResult) => void): void;
}

interface IBinNumber {
    retrieve(data: IBinNumberRequestData, callback: (err: Error, result: IBinNumberResult) => void): void;
}

interface IApproval {
    create(data: IApprovalPaymentRequestData, callback: (err: Error, result: IApprovalPaymentResult) => void): void;
}

interface IDisapproval {
    create(data: IApprovalPaymentRequestData, callback: (err: Error, result: IApprovalPaymentResult) => void): void;
}

interface IBKMInitialize {
    create(
        data: IThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: IThreeDSInitializePaymentResult) => void,
    ): void;
}

interface Ibkm {
    retrieve(
        data: IThreeDSPaymentCompleteRequestData,
        callback: (err: Error, result: IThreeDSPaymentCompleteRequestData) => void,
    ): void;
}

interface ICancel {
    create(data: ICancelPaymentRequestData, callback: (err: Error, result: ICancelPaymentResult) => void): void;
}

interface ICard {
    create(data: ISavePaymentCardRequestData, callback: (err: Error, result: ISavePaymentCardResult) => void): void;
    delete(data: IDeleteUserCardRequestData, callback: (err: Error, result: IDeleteUserCardResult) => void): void;
}

interface ICardList {
    retreive(data: IListUserCardsRequestData, callback: (err: Error, result: IListUserCardsResult) => void): void;
}

interface ICheckOutFormInitialize {
    create(
        data: IThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: ICheckoutFormInitialResult) => void,
    ): void;
}

interface ICheckOutForm {
    retrieve(
        data: ICheckoutFormRetrieveRequestData,
        callback: (err: Error, result: ICheckoutFormRetrieveResult) => void,
    ): void;
}

interface IUniversalCardStorageInitialize {
    retrieve(
        data: IUniversalCardStorageInitializeRequestData,
        callback: (err: Error, result: IUniversalCardStorageInitializeResult) => void,
    ): void;
}

interface IInstallmentInfo {
    retrieve(data: IInstallmentInfoRequestData, callback: (err: Error, result: IInstallmentInfoResult) => void): void;
}

interface IPayment {
    create(data: IPaymentRequestData, callback: (err: Error, result: IPaymentResult) => void): void;
    retrieve(data: IPaymentRetrieveRequestData, callback: (err: Error, result: IPaymentResult) => void): void;
}

interface IPaymentItem {
    update(data: IPaymentItemRequestData, callback: (err: Error, result: IPaymentItemResult) => void): void;
}

interface IPeccoInitialize {
    create(data: IPeccoInitializeRequestData, callback: (err: Error, result: IPeccoInitializeResult) => void): void;
}

interface IPeccoPayment {
    create(data: IPeccoPaymentRequestData, callback: (err: Error, result: IPeccoPaymentResult) => void): void;
}

interface IRefund {
    create(data: IRefundRequestData, callback: (err: Error, result: IRefundResult) => void): void;
}

interface IRefundToBalance {
    create(data: IRefundToBalanceRequestData, callback: (err: Error, result: IRefundToBalanceResult) => void): void;
}

interface IPayoutCompletedTransactionListRetrieve {
    retrieve(
        data: IPayoutCompletedTransactionListRetrieveRequestData,
        callback: (err: Error, result: IPayoutCompletedTransactionListRetrieveResult) => void,
    ): void;
}

interface IBouncedBackTransactionListRetrieve {
    retrieve(
        data: IBouncedBackTransactionListRetrieveRequestData,
        callback: (err: Error, result: IBouncedBackTransactionListRetrieveResult) => void,
    ): void;
}

interface ISubMerchant {
    create(data: ISubMerchantCreateRequestData, callback: (err: Error, result: ISubMerchantCreateResult) => void): void;
    update(data: ISubMerchantUpdateRequestData, callback: (err: Error, result: ISubMerchantUpdateResult) => void): void;
    retrieve(
        data: ISubMerchantRetrieveRequestData,
        callback: (err: Error, result: ISubMerchantRetrieveResult) => void,
    ): void;
}

interface IThreeDSInitialize {
    create(
        data: IThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: IThreeDSInitializePaymentResult) => void,
    ): void;
}

interface IThreedsPayment {
    create(data: IThreeDSPaymentCompleteRequestData, callback: (err: Error, result: IPaymentResult) => void): void;
}

interface ISettlementToBalance {
    create(
        data: ISettlementToBalanceRequestData,
        callback: (err: Error, result: ISettlementToBalanceResult) => void,
    ): void;
}

interface ISubscriptionProduct {
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

interface ISubscriptionPricingPlan {
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

interface ISubscriptionCustomer {
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

interface ISubscriptionCard {
    update(
        data: ISubscriptionCardUpdateRequestData,
        callback: (err: Error, result: ISubscriptionCardUpdateResult) => void,
    ): void;
    updateWithSubscriptionReferenceCode(
        data: ISubscriptionCardUpdateWithSubscriptionReferenceCodeRequestData,
        callback: (err: Error, result: ISubscriptionCardUpdateWithSubscriptionReferenceCodeResult) => void,
    ): void;
}

interface ISubscriptionPayment {
    retry(
        data: ISubscriptionPaymentRetryRequestData,
        callback: (err: Error, result: ISubscriptionPaymentRetryResult) => void,
    ): void;
}

interface ISubscription {
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

interface ISubscriptionCheckoutForm {
    initialize(
        data: ISubscriptionCheckoutFormInitializeRequestData,
        callback: (err: Error, result: ISubscriptionCheckoutFormInitializeResult) => void,
    ): void;
    retrieve(
        data: ISubscriptionCheckoutFormRetrieveRequestData,
        callback: (err: Error, result: ISubscriptionCheckoutFormRetrieveResult) => void,
    ): void;
}

interface ISubscriptionExistingCustomer {
    initialize(
        data: ISubscriptionExistingCustomerInitializeRequestData,
        callback: (err: Error, result: ISubscriptionExistingCustomerInitializeResult) => void,
    ): void;
}

declare class Iyzipay {
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

declare namespace Iyzipay {
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

export = Iyzipay;
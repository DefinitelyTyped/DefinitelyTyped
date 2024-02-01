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
interface ConfigOptions {
    apiKey: string;
    secretKey: string;
    uri: string;
}

interface PaymentCard {
    cardHolderName: string;
    cardNumber: string;
    expireMonth: string;
    expireYear: string;
    cvc?: string;
    registerCard?: number;
    registerConsumerCard?: boolean;
    cardAlias: string;
}

interface SavedPaymentCard {
    cardToken?: string;
    cardUserKey: string;
    ucsToken?: string;
    consumerToken?: string;
}

interface SavedPaymentCardDetail {
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

interface BuyerDetails {
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

interface AddressDetails {
    contactName: string;
    city: string;
    country: string;
    address: string;
    zipCode?: string;
}

interface BasketItem {
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
interface ConvertedPayout {
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

interface ItemTransaction {
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
    convertedPayout: ConvertedPayout;
}

/* REQUEST - RESULT INTERFACES */
interface ApprovalPaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentTransactionId: string;
}

interface ApprovalPaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
}

interface ApiTestRequestData {
    locale?: Locale;
    conversationId?: string;
}

interface ApiTestResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
}

interface BinNumberRequestData {
    locale?: Locale;
    conversationId?: string;
    binNumber: string;
}

interface BinNumberResult {
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

interface CancelPaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    ip: string;
    reason?: RefundReason;
    description?: string;
}

interface CancelPaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
}

interface SavePaymentCardRequestData {
    locale?: Locale;
    conversationId?: string;
    email: string;
    externalId?: string;
    cardUserKey?: string;
    card: PaymentCard;
}

interface ListUserCardsRequestData {
    locale?: Locale;
    conversationId?: string;
    cardUserKey: string;
}

interface DeleteUserCardRequestData {
    locale?: Locale;
    conversationId?: string;
    cardUserKey: string;
    cardToken: string;
}

interface ListUserCardsResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    cardDetails: SavedPaymentCardDetail[];
}

interface DeleteUserCardResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
}

interface SavePaymentCardResult {
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

// interface ICheckoutFormInitializeRequestData extends ThreeDSInitializePaymentRequestData { }

interface CheckoutFormInitialResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

interface CheckoutFormRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

interface CheckoutFormRetrieveResult {
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
    paymentItems: ItemTransaction[];
    paymentCard: SavedPaymentCardDetail;
    buyer: BuyerDetails;
    shippingAddress: AddressDetails;
    billingAddress: AddressDetails;
    basketItems: BasketItem[];
}

interface UniversalCardStorageInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    gsmNumber: string;
    email: string;
}

interface UniversalCardStorageInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    callbackUrl: string;
}

interface InstallmentInfoRequestData {
    locale?: Locale;
    conversationId?: string;
    price: number | string;
    binNumber: string;
}

interface InstallmentDetail {
    installmentNumber: number;
    totalPrice: number | string;
    installmentPrice: number | string;
    installmentRate: number;
}

interface InstallmentInfoResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    binNumber: string;
    price: number | string;
    installmentDetails: InstallmentDetail[];
}

interface PaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    price: number | string;
    paidPrice: number | string;
    currency?: Currency;
    installments: number;
    basketId?: string;
    paymentChannel?: PaymentChannel;
    paymentGroup?: PaymentGroup;
    paymentCard: SavedPaymentCard | PaymentCard;
    buyer: BuyerDetails;
    shippingAddress: AddressDetails;
    billingAddress: AddressDetails;
    basketItems: BasketItem[];
}

interface PaymentResult {
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
    itemTransactions: ItemTransaction[];
    authCode: string;
    phase: string;
    mdStatus: string;
    hostReference: string;
}

interface PaymentRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    paymentConversationId?: string;
}

// interface PaymentRetrieveResult extends PaymentResult { }

interface PaymentItemRequestData {
    paymentTransactionId: string;
    subMerchantKey?: string;
    subMerchantPrice?: number | string;
}

interface PaymentItemResult {
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
    convertedPayout: ConvertedPayout;
}

interface PeccoInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    price: number | string;
    paidPrice: number | string;
    currency?: Currency;
    installments: number;
    basketId?: string;
    paymentChannel?: PaymentChannel;
    paymentGroup?: PaymentGroup;
    buyer: BuyerDetails;
    shippingAddress: AddressDetails;
    billingAddress: AddressDetails;
    basketItems: BasketItem[];
    callbackUrl: string;
}

interface PeccoInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

interface PeccoPaymentRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

interface PeccoPaymentResult {
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
    paymentItems: ItemTransaction[];
    paymentCard: SavedPaymentCardDetail;
    buyer: BuyerDetails;
    shippingAddress: AddressDetails;
    billingAddress: AddressDetails;
    basketItems: BasketItem[];
}

interface RefundRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentTransactionId: string;
    price: number | string;
    ip: string;
    currency: Currency;
    reason?: RefundReason;
    description?: string;
}

interface RefundResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

interface RefundToBalanceRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    callbackUrl: string;
}

interface RefundToBalanceResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    paymentId: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

interface PayoutCompletedTransactionListRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    date: string;
    page?: number;
    count?: number;
}

/* interface IPayoutCompletedTransaction extends PaymentResult {

} */

interface PayoutCompletedTransactionListRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    payoutCompletedTransactionList: PaymentResult[];
}

interface SubMerchantCreateRequestData {
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

interface SubMerchantCreateResult {
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

interface SubMerchantUpdateRequestData {
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

interface SubMerchantUpdateResult {
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

interface SubMerchantRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    subMerchantExternalId: string;
}

interface SubMerchantRetrieveResult {
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

interface BouncedBackTransactionListRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    date: string;
    page?: number;
    count?: number;
}

/* interface IBouncedBackTransaction extends PaymentResult {

} */

interface BouncedBackTransactionListRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    bouncedBackTransactionList: PaymentResult[];
}

interface ThreeDSInitializePaymentRequestData extends PaymentRequestData {
    callbackUrl: string;
}

interface ThreeDSInitializePaymentResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    threeDSHtmlContent: string;
}

interface ThreeDSPaymentCompleteRequestData {
    locale?: Locale;
    conversationId?: string;
    paymentId: string;
    conversationData?: string;
}

// interface IThreeDSPaymentCompleteResult extends PaymentResult { }

interface SettlementToBalanceRequestData {
    locale?: Locale;
    conversationId?: string;
    subMerchantKey: string;
    callbackUrl?: string;
    price: number | string;
}

interface SettlementToBalanceResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    subMerchantKey: string;
    price: number | string;
    currency: Currency;
    hostReference?: string;
}

interface SubscriptionProductCreateRequestData {
    locale?: Locale;
    conversationId?: string;
    name: string;
    description?: string;
}

interface SubscriptionProductCreateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

interface SubscriptionProductUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
    name?: string;
    description?: string;
}

interface SubscriptionProductUpdateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

interface SubscriptionProductRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
}

interface SubscriptionProductRetrieveResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    productReferenceCode: string;
    name: string;
    description: string;
}

interface SubscriptionProductRetrieveListRequestData {
    locale?: Locale;
    conversationId?: string;
    page?: number;
    count?: number;
}

interface SubscriptionProductItem {
    productReferenceCode: string;
    name: string;
    description: string;
}

interface SubscriptionProductRetrieveListResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: SubscriptionProductItem[];
}

interface SubscriptionPricingPlanCreateRequestData {
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

interface SubscriptionPricingPlanCreateResult {
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

interface SubscriptionPricingPlanUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
    name?: string;
    trialPeriodDays?: number;
}

interface SubscriptionPricingPlanUpdateResult {
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

interface SubscriptionPricingPlanRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
}

interface SubscriptionPricingPlanRetrieveResult {
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

interface SubscriptionPricingPlanRetrieveListRequestData {
    locale?: Locale;
    conversationId?: string;
    productReferenceCode: string;
    page?: number;
    count?: number;
}

interface SubscriptionPricingPlanItem {
    pricingPlanReferenceCode: string;
    name: string;
    price: number | string;
    currencyCode: Currency;
    paymentInterval: SubscriptionPricingPlanInterval;
    paymentIntervalCount: number;
    trialPeriodDays?: number;
    planPaymentType?: PlanPaymentType;
}

interface SubscriptionPricingPlanRetrieveListResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: SubscriptionPricingPlanItem[];
}

interface SubscriptionCustomerCreateRequestData {
    locale?: Locale;
    conversationId?: string;
    name: string;
    surname: string;
    identityNumber: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: AddressDetails;
    shippingAddress?: AddressDetails;
}

interface SubscriptionCustomerCreateResult {
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
    billingAddress?: AddressDetails;
    shippingAddress?: AddressDetails;
}

interface SubscriptionCustomerUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    customerReferenceCode: string;
    name?: string;
    surname?: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: AddressDetails;
    shippingAddress?: AddressDetails;
}

interface SubscriptionCustomerUpdateResult {
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
    billingAddress?: AddressDetails;
    shippingAddress?: AddressDetails;
}

interface SubscriptionCustomerRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    customerReferenceCode: string;
}

interface SubscriptionCustomerRetrieveResult {
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
    billingAddress?: AddressDetails;
    shippingAddress?: AddressDetails;
}

interface SubscriptionCustomerRetrieveListRequestData {
    locale?: Locale;
    conversationId?: string;
    page?: number;
    count?: number;
}

interface SubscriptionCustomerItem {
    customerReferenceCode: string;
    name: string;
    surname: string;
    identityNumber: string;
    email?: string;
    gsmNumber?: string;
    billingAddress?: AddressDetails;
    shippingAddress?: AddressDetails;
}

interface SubscriptionCustomerRetrieveListResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: SubscriptionCustomerItem[];
}

interface SubscriptionCardUpdateRequestData {
    locale?: Locale;
    conversationId?: string;
    customerReferenceCode: string;
    callbackUrl: string;
}

interface SubscriptionCardUpdateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    checkoutFormContent: string;
    token: string;
    tokenExpireTime: number;
}

interface SubscriptionCardUpdateWithSubscriptionReferenceCodeRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
    callbackUrl: string;
}

interface SubscriptionCardUpdateWithSubscriptionReferenceCodeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    checkoutFormContent: string;
    token: string;
    tokenExpireTime: number;
}

interface SubscriptionPaymentRetryRequestData {
    locale?: Locale;
    conversationId?: string;
    referenceCode: string;
}

interface SubscriptionPaymentRetryResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

interface SubscriptionCancelRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

interface SubscriptionCancelResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

interface SubscriptionActivateRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

interface SubscriptionActivateResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

interface SubscriptionUpgradeRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
    newPricingPlanReferenceCode: string;
    upgradePeriod?: SubscriptionUpgradePeriod;
    useTrial?: boolean;
}

interface SubscriptionUpgradeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    referenceCode: string;
}

interface SubscriptionRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    subscriptionReferenceCode: string;
}

interface SubscriptionRetrieveResult {
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
    customer: SubscriptionCustomerItem;
    pricingPlan: SubscriptionPricingPlanItem;
}

interface SubscriptionSearchRequestData {
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

interface SubscriptionItem {
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
    customer: SubscriptionCustomerItem;
    pricingPlan: SubscriptionPricingPlanItem;
}

interface SubscriptionSearchResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    items: SubscriptionItem[];
}

interface SubscriptionInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus?: SubscriptionInitialStatus;
    customer: SubscriptionCustomerCreateRequestData;
    paymentCard?: SavedPaymentCard | PaymentCard;
}

interface SubscriptionCheckoutFormInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus?: SubscriptionInitialStatus;
    customer: SubscriptionCustomerCreateRequestData;
}

interface SubscriptionCheckoutFormInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
    checkoutFormContent: string;
}

interface SubscriptionCheckoutFormRetrieveRequestData {
    locale?: Locale;
    conversationId?: string;
    token: string;
}

interface SubscriptionCheckoutFormRetrieveResult {
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

interface SubscriptionExistingCustomerInitializeRequestData {
    locale?: Locale;
    conversationId?: string;
    pricingPlanReferenceCode: string;
    customerReferenceCode: string;
}

interface SubscriptionExistingCustomerInitializeResult {
    status: string;
    locale?: Locale;
    systemTime: number;
    conversationId?: string;
    token: string;
}

/* NAMESPACE INTERFACES */
interface ApiTest {
    retrieve(data: ApiTestRequestData, callback: (err: Error, result: ApiTestResult) => void): void;
}

interface BinNumber {
    retrieve(data: BinNumberRequestData, callback: (err: Error, result: BinNumberResult) => void): void;
}

interface Approval {
    create(data: ApprovalPaymentRequestData, callback: (err: Error, result: ApprovalPaymentResult) => void): void;
}

interface Disapproval {
    create(data: ApprovalPaymentRequestData, callback: (err: Error, result: ApprovalPaymentResult) => void): void;
}

interface BKMInitialize {
    create(
        data: ThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: ThreeDSInitializePaymentResult) => void,
    ): void;
}

interface Ibkm {
    retrieve(
        data: ThreeDSPaymentCompleteRequestData,
        callback: (err: Error, result: ThreeDSPaymentCompleteRequestData) => void,
    ): void;
}

interface Cancel {
    create(data: CancelPaymentRequestData, callback: (err: Error, result: CancelPaymentResult) => void): void;
}

interface Card {
    create(data: SavePaymentCardRequestData, callback: (err: Error, result: SavePaymentCardResult) => void): void;
    delete(data: DeleteUserCardRequestData, callback: (err: Error, result: DeleteUserCardResult) => void): void;
}

interface CardList {
    retreive(data: ListUserCardsRequestData, callback: (err: Error, result: ListUserCardsResult) => void): void;
}

interface CheckOutFormInitialize {
    create(
        data: ThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: CheckoutFormInitialResult) => void,
    ): void;
}

interface CheckOutForm {
    retrieve(
        data: CheckoutFormRetrieveRequestData,
        callback: (err: Error, result: CheckoutFormRetrieveResult) => void,
    ): void;
}

interface UniversalCardStorageInitialize {
    retrieve(
        data: UniversalCardStorageInitializeRequestData,
        callback: (err: Error, result: UniversalCardStorageInitializeResult) => void,
    ): void;
}

interface InstallmentInfo {
    retrieve(data: InstallmentInfoRequestData, callback: (err: Error, result: InstallmentInfoResult) => void): void;
}

interface Payment {
    create(data: PaymentRequestData, callback: (err: Error, result: PaymentResult) => void): void;
    retrieve(data: PaymentRetrieveRequestData, callback: (err: Error, result: PaymentResult) => void): void;
}

interface PaymentItem {
    update(data: PaymentItemRequestData, callback: (err: Error, result: PaymentItemResult) => void): void;
}

interface PeccoInitialize {
    create(data: PeccoInitializeRequestData, callback: (err: Error, result: PeccoInitializeResult) => void): void;
}

interface PeccoPayment {
    create(data: PeccoPaymentRequestData, callback: (err: Error, result: PeccoPaymentResult) => void): void;
}

interface Refund {
    create(data: RefundRequestData, callback: (err: Error, result: RefundResult) => void): void;
}

interface RefundToBalance {
    create(data: RefundToBalanceRequestData, callback: (err: Error, result: RefundToBalanceResult) => void): void;
}

interface PayoutCompletedTransactionListRetrieve {
    retrieve(
        data: PayoutCompletedTransactionListRetrieveRequestData,
        callback: (err: Error, result: PayoutCompletedTransactionListRetrieveResult) => void,
    ): void;
}

interface BouncedBackTransactionListRetrieve {
    retrieve(
        data: BouncedBackTransactionListRetrieveRequestData,
        callback: (err: Error, result: BouncedBackTransactionListRetrieveResult) => void,
    ): void;
}

interface SubMerchant {
    create(data: SubMerchantCreateRequestData, callback: (err: Error, result: SubMerchantCreateResult) => void): void;
    update(data: SubMerchantUpdateRequestData, callback: (err: Error, result: SubMerchantUpdateResult) => void): void;
    retrieve(
        data: SubMerchantRetrieveRequestData,
        callback: (err: Error, result: SubMerchantRetrieveResult) => void,
    ): void;
}

interface ThreeDSInitialize {
    create(
        data: ThreeDSInitializePaymentRequestData,
        callback: (err: Error, result: ThreeDSInitializePaymentResult) => void,
    ): void;
}

interface ThreedsPayment {
    create(data: ThreeDSPaymentCompleteRequestData, callback: (err: Error, result: PaymentResult) => void): void;
}

interface SettlementToBalance {
    create(
        data: SettlementToBalanceRequestData,
        callback: (err: Error, result: SettlementToBalanceResult) => void,
    ): void;
}

interface SubscriptionProduct {
    create(
        data: SubscriptionProductCreateRequestData,
        callback: (err: Error, result: SubscriptionProductCreateResult) => void,
    ): void;
    update(
        data: SubscriptionProductUpdateRequestData,
        callback: (err: Error, result: SubscriptionProductUpdateResult) => void,
    ): void;
    retrieve(
        data: SubscriptionProductRetrieveRequestData,
        callback: (err: Error, result: SubscriptionProductRetrieveResult) => void,
    ): void;
    retrieveList(
        data: SubscriptionProductRetrieveListRequestData,
        callback: (err: Error, result: SubscriptionProductRetrieveListResult) => void,
    ): void;
}

interface SubscriptionPricingPlan {
    create(
        data: SubscriptionPricingPlanCreateRequestData,
        callback: (err: Error, result: SubscriptionPricingPlanCreateResult) => void,
    ): void;
    update(
        data: SubscriptionPricingPlanUpdateRequestData,
        callback: (err: Error, result: SubscriptionPricingPlanUpdateResult) => void,
    ): void;
    retrieve(
        data: SubscriptionPricingPlanRetrieveRequestData,
        callback: (err: Error, result: SubscriptionPricingPlanRetrieveResult) => void,
    ): void;
    retrieveList(
        data: SubscriptionPricingPlanRetrieveListRequestData,
        callback: (err: Error, result: SubscriptionPricingPlanRetrieveListResult) => void,
    ): void;
}

interface SubscriptionCustomer {
    create(
        data: SubscriptionCustomerCreateRequestData,
        callback: (err: Error, result: SubscriptionCustomerCreateResult) => void,
    ): void;
    update(
        data: SubscriptionCustomerUpdateRequestData,
        callback: (err: Error, result: SubscriptionCustomerUpdateResult) => void,
    ): void;
    retrieve(
        data: SubscriptionCustomerRetrieveRequestData,
        callback: (err: Error, result: SubscriptionCustomerRetrieveResult) => void,
    ): void;
    retrieveList(
        data: SubscriptionCustomerRetrieveListRequestData,
        callback: (err: Error, result: SubscriptionCustomerRetrieveListResult) => void,
    ): void;
}

interface SubscriptionCard {
    update(
        data: SubscriptionCardUpdateRequestData,
        callback: (err: Error, result: SubscriptionCardUpdateResult) => void,
    ): void;
    updateWithSubscriptionReferenceCode(
        data: SubscriptionCardUpdateWithSubscriptionReferenceCodeRequestData,
        callback: (err: Error, result: SubscriptionCardUpdateWithSubscriptionReferenceCodeResult) => void,
    ): void;
}

interface SubscriptionPayment {
    retry(
        data: SubscriptionPaymentRetryRequestData,
        callback: (err: Error, result: SubscriptionPaymentRetryResult) => void,
    ): void;
}

interface Subscription {
    cancel(
        data: SubscriptionCancelRequestData,
        callback: (err: Error, result: SubscriptionCancelResult) => void,
    ): void;
    activate(
        data: SubscriptionActivateRequestData,
        callback: (err: Error, result: SubscriptionActivateResult) => void,
    ): void;
    upgrade(
        data: SubscriptionUpgradeRequestData,
        callback: (err: Error, result: SubscriptionUpgradeResult) => void,
    ): void;
    retrieve(
        data: SubscriptionRetrieveRequestData,
        callback: (err: Error, result: SubscriptionRetrieveResult) => void,
    ): void;
    search(
        data: SubscriptionSearchRequestData,
        callback: (err: Error, result: SubscriptionSearchResult) => void,
    ): void;
    initialize(
        data: SubscriptionInitializeRequestData,
        callback: (err: Error, result: SubscriptionCheckoutFormInitializeResult) => void,
    ): void;
}

interface SubscriptionCheckoutForm {
    initialize(
        data: SubscriptionCheckoutFormInitializeRequestData,
        callback: (err: Error, result: SubscriptionCheckoutFormInitializeResult) => void,
    ): void;
    retrieve(
        data: SubscriptionCheckoutFormRetrieveRequestData,
        callback: (err: Error, result: SubscriptionCheckoutFormRetrieveResult) => void,
    ): void;
}

interface SubscriptionExistingCustomer {
    initialize(
        data: SubscriptionExistingCustomerInitializeRequestData,
        callback: (err: Error, result: SubscriptionExistingCustomerInitializeResult) => void,
    ): void;
}

declare class Iyzipay {
    constructor(options?: ConfigOptions);
    apiTest: ApiTest;
    approval: Approval;
    disapproval: Disapproval;
    binNumber: BinNumber;
    bkmInitialize: BKMInitialize;
    bkm: Ibkm;
    cancel: Cancel;
    card: Card;
    cardList: CardList;
    checkoutFormInitialize: CheckOutFormInitialize;
    checkoutForm: CheckOutForm;
    universalCardStorageInitialize: UniversalCardStorageInitialize;
    installmentInfo: InstallmentInfo;
    payment: Payment;
    paymentItem: PaymentItem;
    peccoInitialize: PeccoInitialize;
    peccoPayment: PeccoPayment;
    refund: Refund;
    refundToBalance: RefundToBalance;
    payoutCompletedTransactionListRetrieve: PayoutCompletedTransactionListRetrieve;
    bouncedBackTransactionListRetrieve: BouncedBackTransactionListRetrieve;
    subMerchant: SubMerchant;
    threedsInitialize: ThreeDSInitialize;
    threedsPayment: ThreedsPayment;

    settlementToBalance: SettlementToBalance;
    /* SUBSCRIPTION */
    subscriptionProduct: SubscriptionProduct;
    subscriptionPricingPlan: SubscriptionPricingPlan;
    subscriptionCustomer: SubscriptionCustomer;
    subscriptionCard: SubscriptionCard;
    subscriptionPayment: SubscriptionPayment;
    subscription: Subscription;
    subscriptionCheckoutForm: SubscriptionCheckoutForm;
    subscriptionExistingCustomer: SubscriptionExistingCustomer;
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

import { MoneyV2, Attribute, MailingAddress } from './common';
import {
    DiscountApplication,
    CartDiscountAllocation,
    DateTime,
    CurrencyCode,
    CountryCode,
    CardBrand,
    DigitalWallet,
    TransactionKind,
    TransactionStatus,
    Node,
    URL,
} from './graphql';
import { LocationAddress } from './online_store';
import { Order } from './orders';
import { ProductVariant } from './products';

export interface AppliedGiftCard extends Node {
    amountUsed: MoneyV2;
    balance: MoneyV2;
    lastCharacters: string;
    presentmentAmountUsed: MoneyV2;
    /**
     * @deprecated
     */
    amountUsedV2: MoneyV2;
    /**
     * @deprecated
     */
    balanceV2: MoneyV2;
}

export interface AutomaticDiscountApplication extends DiscountApplication {
    title: string;
}

export interface AvailableShippingRates {
    ready: boolean;
    shippingRates: null | ShippingRate[];
}

export interface CartCost {
    checkoutChargeAmount: MoneyV2;
    subtotalAmount: MoneyV2;
    subtotalAmountEstimated: boolean;
    totalAmount: MoneyV2;
    totalAmountEstimated: boolean;
    totalTaxAmount: MoneyV2;
    totalTaxAmountEstimated: boolean;
}

export interface CartCustomDiscountAllocation extends CartDiscountAllocation {
    title: string;
}

export interface CartLineCost {
    amountPerQuantity: MoneyV2;
    compareAtAmountPerQuantity: MoneyV2;
    subtotalAmount: MoneyV2;
    totalAmount: MoneyV2;
}

export interface Checkout extends Node {
    appliedGiftCards: AppliedGiftCard[];
    availableShippingRates?: AvailableShippingRates;
    buyerIdentity: CheckoutBuyerIdentity;
    completedAt?: DateTime;
    createdAt: DateTime;
    currencyCode: CurrencyCode;
    customAttributes: Attribute[];
    email?: string;
    lineItemsSubtotalPrice: MoneyV2;
    note?: string;
    order?: Order;
    orderStatusUrl?: URL;
    paymentDue: MoneyV2;
    ready: boolean;
    requiresShipping: boolean;
    shippingAddress?: MailingAddress;
    shippingDiscountAllocations: DiscountAllocation[];
    shippingLine?: ShippingRate;
    subtotalPrice: MoneyV2;
    taxExempt: boolean;
    taxesIncluded: boolean;
    totalDuties?: MoneyV2;
    totalPrice: MoneyV2;
    totalTax: MoneyV2;
    updatedAt: DateTime;
    webUrl: URL;
    /**
     * @deprecated
     */
    paymentDueV2: MoneyV2;
    /**
     * @deprecated
     */
    subtotalPriceV2: MoneyV2;
    /**
     * @deprecated
     */
    totalPriceV2: MoneyV2;
    /**
     * @deprecated
     */
    totalTaxV2: MoneyV2;
    discountApplications: DiscountApplication[];
    lineItems: CheckoutLineItem[];
}

export interface CheckoutBuyerIdentity {
    countryCode: CountryCode;
}

export interface CheckoutLineItem extends Node {
    customAttributes: Attribute[];
    discountAllocations: DiscountAllocation[];
    quantity: number;
    title: string;
    unitPrice?: MoneyV2;
    variant?: ProductVariant;
}

export interface Company {
    createdAt: DateTime;
    externalId?: string;
    name: string;
    updatedAt: DateTime;
}

export interface CompanyContact {
    createdAt: DateTime;
    locale?: string;
    title?: string;
    updatedAt: DateTime;
}

export interface CompanyLocation {
    createdAt: DateTime;
    externalId?: string;
    locale?: string;
    name: string;
    updatedAt: DateTime;
}

export interface CreditCard {
    brand?: string;
    expiryMonth?: number;
    expiryYear?: number;
    firstDigits?: string;
    firstName?: string;
    lastDigits?: string;
    lastName?: string;
    maskedNumber?: string;
}

export interface DiscountAllocation {
    allocatedAmount: MoneyV2;
    discountApplication: DiscountApplication;
}

export interface DiscountCodeApplication extends DiscountApplication {
    applicable: boolean;
    code: string;
}

export interface Location extends Node {
    address: LocationAddress;
    name: string;
}

export interface ManualDiscountApplication extends DiscountApplication {
    description?: string;
    title: string;
}

export interface Payment extends Node {
    amount: MoneyV2;
    billingAddress?: MailingAddress;
    checkout: Checkout;
    creditCard?: CreditCard;
    errorMessage?: string;
    idempotencyKe?: string;
    nextActionUrl?: URL;
    ready: boolean;
    test: boolean;
    transaction?: Transaction;
}

export interface PaymentSettings {
    acceptedCardBrands: CardBrand[];
    cardVaultUrl: URL;
    countryCode: CountryCode;
    currencyCode: CurrencyCode;
    enabledPresentmentCurrencies: CurrencyCode[];
    shopifyPaymentsAccountId?: string;
    supportedDigitalWallets: DigitalWallet;
}

export interface PricingPercentageValue {
    percentage: number;
}

export interface PurchasingCompany {
    company: Company;
    contact?: CompanyContact;
    location: CompanyLocation;
}

export interface ScriptDiscountApplication extends DiscountApplication {
    title: string;
}

export interface ShippingRate {
    handle: string;
    price: MoneyV2;
    title: string;
    /**
     * @deprecated
     */
    priceV2: MoneyV2;
}

export interface StoreAvailability {
    available: boolean;
    location: Location;
    pickUpTime: string;
}

export interface Transaction {
    amount: MoneyV2;
    kind: TransactionKind;
    statusV2?: TransactionStatus;
    test: boolean;
    /**
     * @deprecated
     */
    amountV2: MoneyV2;
    /**
     * @deprecated
     */
    status: TransactionStatus;
}

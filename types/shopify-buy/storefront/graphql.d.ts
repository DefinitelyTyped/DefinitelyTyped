import { PricingPercentageValue } from './checkout';
import { MailingAddress, ContentEntry, MoneyV2, Metafield, Image } from './common';
import { Customer } from './customers';
import { Article, Blog, Page, Shop } from './online_store';
import { Order } from './orders';
import {
    ProductVariant,
    Collection,
    Product,
    GenericFile,
    Video,
    SellingPlanCheckoutChargePercentageValue,
    SellingPlanFixedAmountPriceAdjustment,
    SellingPlanFixedPriceAdjustment,
    SellingPlanPercentagePriceAdjustment,
    MediaImage,
} from './products';

// GraphQL Types - Scalars
export type Color = string;
export type DateTime = string;
export type ID = string;
export type URL = string;
export type JSON = Record<string, unknown>;
// end GraphQL Types - Scalars

// GraphQL Types - Enums
export enum ArticleSortKeys {
    AUTHOR = 'author',
    BLOG_TITLE = 'blog_title',
    ID = 'id',
    PUBLISHED_AT = 'published_at',
    RELEVANCE = 'query',
    TITLE = 'title',
    UPDATED_AT = 'updated_at',
}

export enum BlogSortKeys {
    HANDLE = 'HANDLE',
    ID = 'id',
    RELEVANCE = 'query',
    TITLE = 'title',
}

export enum CardBrand {
    AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
    DINERS_CLUB = 'DINERS_CLUB',
    DISCOVER = 'DISCOVER',
    ELO = 'ELO',
    JCB = 'JCB',
    MASTERCARD = 'MASTERCARD',
    UNIONPAY = 'UNIONPAY',
    VISA = 'VISA',
}

export enum CartErrorCode {
    INVALID = 'INVALID',
    INVALID_MERCHANDISE_LINE = 'INVALID_MERCHANDISE_LINE',
    LESS_THAN = 'LESS_THAN',
    MISSING_DISCOUNT_CODE = 'MISSING_DISCOUNT_CODE',
    MISSING_NOTE = 'MISSING_NOTE',
}

export enum CheckoutErrorCode {
    ALREADY_COMPLETED = 'ALREADY_COMPLETED',
    BAD_DOMAIN = 'BAD_DOMAIN',
    BLANK = 'BLANK',
    CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
    CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
    DISCOUNT_ALREADY_APPLIED = 'DISCOUNT_ALREADY_APPLIED',
    DISCOUNT_DISABLED = 'DISCOUNT_DISABLED',
    DISCOUNT_EXPIRED = 'DISCOUNT_EXPIRED',
    DISCOUNT_LIMIT_REACHED = 'DISCOUNT_LIMIT_REACHED',
    DISCOUNT_NOT_FOUND = 'DISCOUNT_NOT_FOUND',
    EMPTY = 'EMPTY',
    EXPIRED_QUEUE_TOKEN = 'EXPIRED_QUEUE_TOKEN',
    GIFT_CARD_ALREADY_APPLIED = 'GIFT_CARD_ALREADY_APPLIED',
    GIFT_CARD_CODE_INVALID = 'GIFT_CARD_CODE_INVALID',
    GIFT_CARD_CURRENCY_MISMATCH = 'GIFT_CARD_CURRENCY_MISMATCH',
    GIFT_CARD_DEPLETED = 'GIFT_CARD_DEPLETED',
    GIFT_CARD_DISABLED = 'GIFT_CARD_DISABLED',
    GIFT_CARD_EXPIRED = 'GIFT_CARD_EXPIRED',
    GIFT_CARD_NOT_FOUND = 'GIFT_CARD_NOT_FOUND',
    GIFT_CARD_UNUSABLE = 'GIFT_CARD_UNUSABLE',
    GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
    HIGHER_VALUE_DISCOUNT_APPLIED = 'HIGHER_VALUE_DISCOUNT_APPLIED',
    INVALID = 'INVALID',
    INVALID_COUNTRY_AND_CURRENCY = 'INVALID_COUNTRY_AND_CURRENCY',
    INVALID_FOR_COUNTRY = 'INVALID_FOR_COUNTRY',
    INVALID_FOR_COUNTRY_AND_PROVINCE = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
    INVALID_PROVINCE_IN_COUNTRY = 'INVALID_PROVINCE_IN_COUNTRY',
    INVALID_QUEUE_TOKEN = 'INVALID_QUEUE_TOKEN',
    INVALID_REGION_IN_COUNTRY = 'INVALID_REGION_IN_COUNTRY',
    INVALID_STATE_IN_COUNTRY = 'INVALID_STATE_IN_COUNTRY',
    LESS_THAN = 'LESS_THAN',
    LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
    LINE_ITEM_NOT_FOUND = 'LINE_ITEM_NOT_FOUND',
    LOCKED = 'LOCKED',
    MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED = 'MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED',
    MISSING_PAYMENT_INPUT = 'MISSING_PAYMENT_INPUT',
    NOT_ENOUGH_IN_STOCK = 'NOT_ENOUGH_IN_STOCK',
    NOT_SUPPORTED = 'NOT_SUPPORTED',
    PRESENT = 'PRESENT',
    PRODUCT_NOT_AVAILABLE = 'PRODUCT_NOT_AVAILABLE',
    SHIPPING_RATE_EXPIRED = 'SHIPPING_RATE_EXPIRED',
    THROTTLED_DURING_CHECKOUT = 'THROTTLED_DURING_CHECKOUT',
    TOO_LONG = 'TOO_LONG',
    TOTAL_PRICE_MISMATCH = 'TOTAL_PRICE_MISMATCH',
    UNABLE_TO_APPLY = 'UNABLE_TO_APPLY',
}

export enum CollectionSortKeys {
    ID = 'id',
    RELEVANCE = 'query',
    TITLE = 'title',
    UPDATED_AT = 'updated_at',
}

// TODO: https://shopify.dev/api/storefront/unstable/enums/CountryCode
export type CountryCode = string;

export enum CropRegion {
    BOTTOM = 'BOTTOM',
    CENTER = 'CENTER',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TOP = 'TOP',
}

// TODO: https://shopify.dev/api/storefront/unstable/enums/CurrencyCode
export type CurrencyCode = string;

export enum CustomerErrorCode {
    ALREADY_ENABLED = 'ALREADY_ENABLED',
    BAD_DOMAIN = 'BAD_DOMAIN',
    BLANK = 'BLANK',
    CONTAINS_HTML_TAGS = 'CONTAINS_HTML_TAGS',
    CONTAINS_URL = 'CONTAINS_URL',
    CUSTOMER_DISABLED = 'CUSTOMER_DISABLED',
    INVALID = 'INVALID',
    INVALID_MULTIPASS_REQUEST = 'INVALID_MULTIPASS_REQUEST',
    NOT_FOUND = 'NOT_FOUND',
    PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
    TAKEN = 'TAKEN',
    TOKEN_INVALID = 'TOKEN_INVALID',
    TOO_LONG = 'TOO_LONG',
    TOO_SHORT = 'TOO_SHORT',
    UNIDENTIFIED_CUSTOMER = 'UNIDENTIFIED_CUSTOMER',
}

export enum DeliveryMethodType {
    LOCAL = 'LOCAL',
    NONE = 'NONE',
    PICKUP_POINT = 'PICKUP_POINT',
    PICK_UP = 'PICK_UP',
    RETAIL = 'RETAIL',
    SHIPPING = 'SHIPPING',
}

export enum DigitalWallet {
    ANDROID_PAY = 'ANDROID_PAY',
    APPLE_PAY = 'APPLE_PAY',
    FACEBOOK_PAY = 'FACEBOOK_PAY',
    GOOGLE_PAY = 'GOOGLE_PAY',
    SHOPIFY_PAY = 'SHOPIFY_PAY',
}

export enum DiscountApplicationAllocationMethod {
    ACROSS = 'ACROSS',
    EACH = 'EACH',
    /**
     * @deprecated
     */
    ONE = 'ONE',
}

// TODO: https://shopify.dev/api/storefront/unstable/enums/DiscountApplicationTargetSelection
export type DiscountApplicationTargetSelection = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/DiscountApplicationTargetType
export type DiscountApplicationTargetType = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/FilterType
export type FilterType = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/ImageContentType
export type ImageContentType = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/LanguageCode
export type LanguageCode = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/LocationSortKeys
export type LocationSortKeys = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/MediaContentType
export type MediaContentType = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/MediaHost
export type MediaHost = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
export type MenuItemType = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/OrderCancelReason
export type OrderCancelReason = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/OrderFinancialStatus
export type OrderFinancialStatus = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/OrderFulfillmentStatus
export type OrderFulfillmentStatus = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/OrderSortKeys
export type OrderSortKeys = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/PageSortKeys
export type PageSortKeys = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/PaymentTokenType
export type PaymentTokenType = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/ProductCollectionSortKeys
export type ProductCollectionSortKeys = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/ProductImageSortKeys
export type ProductImageSortKeys = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/ProductMediaSortKeys
export type ProductMediaSortKeys = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/ProductSortKeys
export type ProductSortKeys = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/ProductVariantSortKeys
export type ProductVariantSortKeys = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/SellingPlanCheckoutChargeType
export type SellingPlanCheckoutChargeType = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/TransactionKind
export type TransactionKind = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/TransactionStatus
export type TransactionStatus = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/UnitPriceMeasurementMeasuredType
export type UnitPriceMeasurementMeasuredType = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/UnitPriceMeasurementMeasuredUnit
export type UnitPriceMeasurementMeasuredUnit = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/UnitSystem
export type UnitSystem = string;

// TODO: https://shopify.dev/api/storefront/unstable/enums/WeightUnit
export type WeightUnit = string;
// end GraphQL Types - Enums

// GraphQL Types - Unions
export type DeliveryAddress = MailingAddress;
export type Merchandise = ProductVariant;
export type MetafieldParentResource =
    | Article
    | Blog
    | Collection
    | ContentEntry
    | Customer
    | Order
    | Page
    | Product
    | ProductVariant
    | Shop;
export type MetafieldReference =
    | Collection
    | ContentEntry
    | GenericFile
    | MediaImage
    | Page
    | Product
    | ProductVariant
    | Video;
export type PricingValue = MoneyV2 | PricingPercentageValue;
export type SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue;
export type SellingPlanPriceAdjustmentValue =
    | SellingPlanFixedAmountPriceAdjustment
    | SellingPlanFixedPriceAdjustment
    | SellingPlanPercentagePriceAdjustment;
// end GraphQL Types - Unions

// GraphQL Types - Interfaces
export interface CartDiscountAllocation {
    discountedAmount: MoneyV2;
}

export interface DiscountApplication {
    allocationMethod: DiscountApplicationAllocationMethod;
    targetSelection: DiscountApplicationTargetSelection;
    targetType: DiscountApplicationTargetType;
    value: PricingValue;
}

export interface DisplayableError {
    field: string[];
    message: string;
}

export interface HasMetafields {
    metafield?: Metafield;
    metafields: Metafield[];
}

export interface Media {
    alt?: string;
    mediaContentType: MediaContentType;
    previewImage?: Image;
}

export interface Node {
    id: ID;
}

export interface OnlineStorePublishable {
    onlineStoreUrl?: URL;
}
// end GraphQL Types - Interfaces

// GraphQL Types - Input Objects
export interface AttributeInput {
    key: string;
    value: string;
}

export interface CartBuyerIdentityInput {
    countryCode?: CountryCode;
    customerAccessToken?: string;
    deliveryAddressPreferences: DeliveryAddressInput;
    email?: string;
    phone?: string;
}

export interface CartInput {
    attributes?: AttributeInput[];
    buyerIdentity?: CartBuyerIdentityInput;
    discountCodes?: string[];
    lines?: CartLineInput[];
    note?: string;
}

export interface CartLineInput {
    attributes?: AttributeInput[];
    merchandiseId: ID;
    quantity?: number;
    sellingPlanId?: number;
}

export interface CartLineUpdateInput {
    attributes?: AttributeInput[];
    id: ID;
    merchandiseId?: ID;
    quantity?: number;
    sellingPlanId?: ID;
}

export interface CartSelectedDeliveryOptionInput {
    deliveryGroupId: ID;
    deliveryOptionHandle: string;
}

export interface CheckoutAttributesUpdateV2Input {
    allowPartialAddresses?: boolean;
    customAttributes?: AttributeInput[];
    note?: string;
}

export interface CheckoutBuyerIdentityInput {
    countryCode: CountryCode;
}

export interface CheckoutCreateInput {
    allowPartialAddresses?: boolean;
    buyerIdentity?: CheckoutBuyerIdentityInput;
    customAttributes?: AttributeInput[];
    email?: string;
    lineItems?: CheckoutLineItemInput[];
    note?: string;
    /**
     * @deprecated
     */
    presentmentCurrencyCode?: CurrencyCode;
    shippingAddress?: MailingAddressInput;
}

export interface CheckoutLineItemInput {
    customAttributes?: AttributeInput[];
    quantity: number;
    variantId: ID;
}

export interface CheckoutLineItemUpdateInput {
    customAttributes?: AttributeInput[];
    id?: ID;
    quantity?: number;
    variantId?: ID;
}

export interface ContentEntryHandleInput {
    handle?: string;
    type?: string;
}

export interface CreditCardPaymentInputV2 {
    billingAddress: MailingAddressInput;
    idempotencyKey: string;
    paymentAmount: MoneyInput;
    test?: boolean;
    vaultId: string;
}

export interface CustomerAccessTokenCreateInput {
    email: string;
    password: string;
}

export interface CustomerActivateInput {
    activationToken: string;
    password: string;
}

export interface CustomerCreateInput {
    acceptsMarketing?: boolean;
    email: string;
    firstName?: string;
    lastName?: string;
    password: string;
    phone?: string;
}

export interface CustomerResetInput {
    password: string;
    resetToken: string;
}

export interface CustomerUpdateInput {
    acceptsMarketing?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
    password: string;
    phone?: string;
}

export interface DeliveryAddressInput {
    deliveryAddress?: MailingAddressInput;
}

export interface GeoCoordinateInput {
    latitude: number;
    longitude: number;
}

export interface HasMetafieldsIdentifier {
    key: string;
    namespace: string;
}

export interface ImageTransformInput {
    crop?: CropRegion;
    maxHeight?: number;
    maxWidth?: number;
    preferredContentType?: ImageContentType;
    scale?: number;
}

export interface MailingAddressInput {
    address1?: string;
    address2?: string;
    city?: string;
    company?: string;
    country?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    province?: string;
    zip?: string;
}

export interface MetafieldFilter {
    key: string;
    namespace: string;
    value: string;
}

export interface MoneyInput {
    amount: number;
    currencyCode: CurrencyCode;
}

export interface PriceRangeFilter {
    max?: number;
    min?: number;
}

export interface ProductFilter {
    available?: boolean;
    price?: PriceRangeFilter;
    productMetafield?: MetafieldFilter;
    productType?: string;
    productVendor?: string;
    tag?: string;
    variantMetafield?: MetafieldFilter;
    variantOption?: VariantOptionFilter;
}

export interface SelectedOptionInput {
    name: string;
    value: string;
}

export interface TokenizedPaymentInputV3 {
    billingAddress: MailingAddressInput;
    idempotencyKey: string;
    identifier?: string;
    paymentAmount: MoneyInput;
    paymentData: string;
    test?: boolean;
    type: PaymentTokenType;
}

export interface VariantOptionFilter {
    name?: string;
    value?: string;
}
// end GraphQL Types - Input Objects

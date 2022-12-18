// Type definitions for swell-js 3.18
// Project: https://github.com/swellstores/swell-js#readme
// Definitions by: Gus Fune <https://github.com/gusfune>
//                 Markus <https://github.com/markus-gx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="currency.d.ts" />
/// <reference path="locale.d.ts" />
/// <reference path="settings.d.ts" />

import type { Locale } from './locale';
import type { Currency, CurrencySelect } from './currency';
import type { Settings } from './settings';

export as namespace Swell;

export interface ProductQuery extends Query {
    category?: string;
    categories?: string[];
    $filters?: unknown;
}

export interface Query {
    limit?: number;
    page?: number;
    expand?: string[];
}

export interface SearchQuery extends Query {
    search: string;
}

export interface CartOption {
    name: string;
    value: string;
}

export interface CreateAccountInput {
    email: string;
    first_name?: string;
    last_name?: string;
    email_optin?: boolean;
    password?: string;
}

export interface ListResult<T> {
    count: number;
    results: T[];
    page: number;
    pages?: {
        [key: string]: {
            start: number;
            end: number;
        };
    };
}

export type PurchaseOptions = 'subscription' | 'standard';

export interface ImageFileCamelCase {
    id: string;
    dateUploaded: string;
    length: number;
    md5: string;
    filename: string | null;
    contentType: string;
    metadata: unknown;
    url: string;
    width: number;
    height: number;
}

export interface ImageCamelCase {
    file: ImageFileCamelCase;
    caption?: string | null;
    id: string;
}

export interface ImageFileSnakeCase {
    id: string;
    date_uploaded: string;
    length: number;
    md5: string;
    filename?: string | null;
    content_type: string;
    metadata: unknown;
    url: string;
    width: number;
    height: number;
}

export interface ImageSnakeCase {
    file: ImageFileSnakeCase;
    caption?: string | null;
    id: string;
}

export interface PriceCamelCase {
    price: number;
    quantityMin: number;
    quantityMax: number | null;
    accountGroup: unknown | null;
}

export interface PriceSnakeCase {
    price: number;
    quantity_min: number;
    quantity_max: number | null;
    account_group: unknown | null;
}

export type Price = PriceCamelCase | PriceSnakeCase;

export type ProductPurchaseOptionCamelCase = Record<
    PurchaseOptions,
    {
        active: boolean;
        price: number;
        sale: boolean;
        salePrice?: number | null;
        origPrice?: number | null;
        prices: PriceCamelCase[];
    }
>;

export type ProductPurchaseOptionSnakeCase = Record<
    PurchaseOptions,
    {
        active: boolean;
        price: number;
        sale: boolean;
        sale_price?: number | null;
        orig_price?: number | null;
        prices: PriceSnakeCase[];
    }
>;

export type ProductPurchaseOption = ProductPurchaseOptionSnakeCase | ProductPurchaseOptionCamelCase;

export interface ProductVariantSnakeCase {
    active: boolean;
    cost: number | null;
    currency: string;
    date_created: string;
    date_updated: string;
    dimensions: unknown[];
    id: string;
    images: ImageSnakeCase[];
    name: string;
    option_value_ids: string[];
    parent_id: string;
    price: number | null;
    prices: PriceSnakeCase[];
    purchase_options: ProductPurchaseOptionSnakeCase;
    sale_price: number | null;
    sale: boolean;
    sku: string;
    stock_level: number;
    weight: number | null;
}

export interface ProductVariantCamelCase {
    active: boolean;
    cost: number | null;
    currency: string;
    dateCreated: string;
    dateUpdated: string;
    dimensions: unknown[];
    id: string;
    images: ImageCamelCase[];
    name: string;
    optionValueIds: string[];
    parentId: string;
    price: number | null;
    prices: PriceCamelCase[];
    purchaseOptions: ProductPurchaseOptionSnakeCase;
    salePrice: number | null;
    sale: boolean;
    sku: string;
    stockLevel: number;
    weight: number | null;
}

export type ProductVariant = ProductVariantCamelCase | ProductVariantSnakeCase;

export interface ProductOptionValueSnakeCase {
    name: string;
    id: string;
    price: null;
    shipment_weight: null;
    description: null;
}

export interface ProductOptionSnakeCase {
    active: true;
    attribute_id?: string | null;
    description: null;
    id: string;
    input_type: string;
    name: string;
    required: boolean;
    values: ProductOptionValueSnakeCase[];
    variant: boolean;
}

export interface ProductOptionValueCamelCase {
    name: string;
    id: string;
    price: null;
    shipmentWeight: null;
    description: null;
}

export interface ProductOptionCamelCase {
    active: boolean;
    attributeId?: string | null;
    description: string | null;
    id: string;
    inputType: string;
    name: string;
    required: boolean;
    values: ProductOptionValueCamelCase[];
    variant: boolean;
}

export type ProductOption = ProductOptionCamelCase | ProductOptionSnakeCase;

export type ProductOptionValue = ProductOptionValueCamelCase | ProductOptionValueSnakeCase;

export interface ProductCategorySnakeCase {
    date_created: string;
    id: string;
    parent_id: string;
    product_id: string;
    sort: number;
}

export interface ProductCategoryCamelCase {
    dateCreated: string;
    id: string;
    parentId: string;
    productId: string;
    sort: number;
}

export type ProductCategory = ProductCategoryCamelCase | ProductCategorySnakeCase;

export interface ProductCamelCase {
    price: number;
    sale: boolean;
    salePrice?: number;
    origPrice?: number;
    prices?: PriceCamelCase[];
    sku: unknown;
    slug: string;
    stockLevel: number;
    stockPurchasable: boolean;
    stockTracking: boolean;
    options?: ProductOptionCamelCase[];
    attributes: unknown;
    content: any;
    description: string;
    metaDescription?: string | null;
    metaTitle?: string | null;
    bundle: boolean;
    tags: unknown[];
    id: string;
    images: ImageCamelCase[];
    name: string;
    variants?: {
        count: number;
        results: ProductVariantCamelCase[];
    };
    crossSells?: Array<{
        id: string;
        productId: string;
        product?: ProductCamelCase;
    }>;
    upSells?: Array<{
        id: string;
        productId: string;
        product?: ProductCamelCase;
    }>;
    purchaseOptions?: ProductPurchaseOptionCamelCase;
    categories?: {
        count: number;
        results: ProductCategoryCamelCase[] | null;
    };
}

export interface ProductSnakeCase {
    price: number;
    sale: boolean;
    sale_price?: number;
    orig_price?: number;
    prices?: PriceSnakeCase[];
    sku: unknown;
    slug: string;
    stock_level: number;
    stock_purchasable: boolean;
    stock_tracking: boolean;
    options?: ProductOptionSnakeCase[];
    attributes: unknown;
    content: any;
    description: string;
    meta_description?: string | null;
    meta_title?: string | null;
    bundle: boolean;
    tags: unknown[];
    id: string;
    images: ImageSnakeCase[];
    name: string;
    variants?: {
        count: number;
        results: ProductVariantSnakeCase[];
    };
    cross_sells?: Array<{
        id: string;
        product_id: string;
        product: ProductSnakeCase;
    }>;
    up_sells?: Array<{
        id: string;
        product_id: string;
        product: ProductSnakeCase;
    }>;
    purchase_options?: ProductPurchaseOptionSnakeCase;
    categories?: {
        count: number;
        results: ProductCategorySnakeCase[] | null;
    };
}

export type Product = ProductCamelCase | ProductSnakeCase;

export interface CartItemCamelCase {
    delivery?: string | null;
    discountEach: number;
    discountTotal: number;
    discounts: unknown[];
    id: string;
    origPrice: number;
    price: number;
    priceTotal: number;
    productId: string;
    productName: string;
    quantity: number;
    shipmentWeight: number;
    stockTracking: boolean;
    taxEach: number;
    taxTotal: number;
    variantId: string;
    variant: ProductVariantCamelCase | null;
    product: Product;
}

export interface CartItemSnakeCase {
    delivery?: string | null;
    discount_each: number;
    discount_total: number;
    discounts: unknown[];
    id: string;
    orig_price: number;
    price: number;
    price_total: number;
    product_id: string;
    product_name: string;
    quantity: number;
    shipment_weight: number;
    stock_tracking: boolean;
    tax_each: number;
    tax_total: number;
    variant_id: string;
    variant: ProductVariantSnakeCase | null;
    product: Product;
}

export type CartItem = CartItemCamelCase | CartItemSnakeCase;

export interface Address {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export interface AddressWithContact extends Address {
    name: string;
    phone: string;
}

export interface BillingCamelCase extends AddressWithContact {
    accountCardId: string | null;
    firstName: string;
    lastName: string;
}

export interface BillingSnakeCase extends AddressWithContact {
    account_card_id: string | null;
    first_name: string;
    last_name: string;
}

export type CartBilling = BillingCamelCase | BillingSnakeCase;

export type OrderBilling = BillingCamelCase | BillingSnakeCase;

export interface ShippingCamelCase extends AddressWithContact {
    accountAddressId: string | null;
    firstName: string;
    lastName: string;
}

export interface ShippingSnakeCase extends AddressWithContact {
    account_address_id: string | null;
    first_name: string;
    last_name: string;
}

export type OrderShipping = ShippingCamelCase | ShippingSnakeCase;

export interface CartShippingCamelCase {
    country: string;
    accountAddressId: string | null;
    account?: unknown;
    service: string;
    serviceName: string;
    price: number;
}

export interface CartShippingSnakeCase {
    country: string;
    account_address_id: string | null;
    account?: unknown;
    service: string;
    service_name: string;
    price: number;
}

export type CartShipping = CartShippingCamelCase | CartShippingSnakeCase;

export interface Coupon {
    name: string;
    id: string;
    description: string;
}

export type CartCoupon = Coupon;

export type OrderCoupon = Coupon;

export interface Discount {
    type: string;
    rule: Record<string, string | number | null>;
    amount: number;
    id: string;
}

export type CartDiscount = Discount;

export type OrderDiscount = Discount;

export interface ShipmentRatingCamelCase {
    dateCreated: string;
    fingerprint: string;
    services: ShippingService[];
}

export interface ShipmentRatingSnakeCase {
    date_created: string;
    fingerprint: string;
    services: ShippingService[];
}

export type ShipmentRating = ShipmentRatingCamelCase | ShipmentRatingSnakeCase;

export interface CartCamelCase {
    accountLoggedIn: unknown;
    authTotal: number;
    billing: CartBilling;
    captureTotal: number;
    checkoutId: string;
    checkoutUrl: string;
    coupon: CartCoupon | null;
    currency: string;
    dateAbandoned: string;
    dateCreated: string;
    discounts: CartDiscount[];
    discountTotal: number;
    giftcardTotal: number;
    grandTotal: number;
    guest: boolean;
    id: string;
    itemDiscount: number;
    itemQuantity: number;
    items: CartItemCamelCase[];
    itemShipmentWeight: number;
    itemTax: number;
    metadata: any;
    promotionIds: unknown[];
    promotions: ListResult<unknown>;
    recovered: boolean;
    shipmentDelivery: boolean;
    shipmentDiscount: number;
    shipmentPrice: number;
    shipmentRating: ShipmentRatingCamelCase;
    shipmentTotal: number;
    shipping: CartShippingCamelCase;
    subTotal: number;
    taxes: unknown | null;
    taxIncludedTotal: number;
    taxTotal: number;
}

export interface CartSnakeCase {
    account_logged_in: unknown;
    auth_total: number;
    billing: CartBilling;
    capture_total: number;
    checkout_id: string;
    checkout_url: string;
    coupon: CartCoupon | null;
    coupon_id?: string;
    currency: string;
    date_abandoned: string;
    date_created: string;
    discounts: CartDiscount[];
    discount_total: number;
    giftcard_total: number;
    grand_total: number;
    guest: boolean;
    id: string;
    item_discount: number;
    item_quantity: number;
    items: CartItemSnakeCase[];
    item_shipment_weight: number;
    item_tax: number;
    metadata: any;
    promotion_ids: unknown[];
    promotions: ListResult<unknown>;
    recovered: boolean;
    shipment_delivery: boolean;
    shipment_discount: number;
    shipment_price: number;
    shipment_rating: ShipmentRatingSnakeCase;
    shipment_total: number;
    shipping: CartShippingSnakeCase;
    sub_total: number;
    taxes: unknown | null;
    tax_included_total: number;
    tax_total: number;
}

export type Cart = CartCamelCase | CartSnakeCase;

export interface OrderGiftcardCamelCase {
    amount?: number;
    code?: string | null;
    codeFormatted?: string | null;
    id?: string | null;
    last4?: string | null;
}

export interface OrderGiftcardSnakeCase {
    amount?: number;
    code?: string | null;
    code_formatted?: string | null;
    id?: string | null;
    last4?: string | null;
}

export type OrderGiftcard = OrderGiftcardCamelCase | OrderGiftcardSnakeCase;

export interface OrderCamelCase {
    account: unknown;
    accountCreditAmount: unknown;
    accountCreditApplied: unknown;
    accountId: string;
    accountInfoSaved: unknown;
    accountLoggedIn: unknown;
    billing: OrderBilling;
    comments: unknown;
    coupon: OrderCoupon | null;
    couponCode: unknown;
    couponId?: string;
    currency: string;
    dateCreated: string;
    delivered: boolean;
    discounts: OrderDiscount[];
    discountTotal: number;
    gift: unknown;
    giftcards: OrderGiftcard[];
    giftcardTotal: number;
    giftMessage: unknown;
    grandTotal: number;
    guest: boolean;
    id: string;
    itemDiscount: number;
    itemQuantity: number;
    itemQuantityCancelable: number;
    itemQuantityCanceled: number;
    itemQuantityDeliverable: number;
    itemQuantityDelivered: number;
    itemQuantityReturnable: number;
    itemQuantityReturned: number;
    items: CartItemCamelCase[];
    itemShipmentWeight: number;
    itemTax: number;
    itemTaxIncluded: unknown;
    metadata: unknown;
    number: string;
    paid: boolean;
    promotionIds: unknown;
    promotions: unknown;
    shipmentDelivery: boolean;
    shipmentDiscount: number;
    shipmentPrice: number;
    shipmentTax: unknown;
    shipmentTaxIncluded: unknown;
    shipmentRating: ShipmentRatingCamelCase;
    shipmentTotal: number;
    shipping: OrderShipping;
    status: string;
    subTotal: number;
    taxes: unknown;
    taxIncludedTotal: number;
    taxTotal: number;
}

export interface OrderSnakeCase {
    account: unknown;
    account_credit_amount: unknown;
    account_credit_applied: unknown;
    account_id: string;
    account_info_saved: unknown;
    account_logged_in: unknown;
    billing: OrderBilling;
    comments: unknown;
    coupon: OrderCoupon | null;
    coupon_code: unknown;
    coupon_id?: string;
    currency: string;
    date_created: string;
    delivered: boolean;
    discounts: OrderDiscount[];
    discount_total: number;
    gift: unknown;
    giftcards: OrderGiftcard;
    giftcard_total: number;
    gift_message: unknown;
    grand_total: number;
    guest: boolean;
    id: string;
    item_discount: number;
    item_quantity: number;
    item_quantity_cancelable: number;
    item_quantity_canceled: number;
    item_quantity_deliverable: number;
    item_quantity_delivered: number;
    item_quantity_returnable: number;
    item_quantity_returned: number;
    items: CartItemSnakeCase[];
    item_shipment_weight: number;
    item_tax: number;
    item_tax_included: unknown;
    metadata: unknown;
    number: string;
    paid: boolean;
    promotion_ids: unknown;
    promotions: unknown;
    shipment_delivery: boolean;
    shipment_discount: number;
    shipment_price: number;
    shipment_rating: ShipmentRatingSnakeCase;
    shipment_tax: unknown;
    shipment_tax_included: unknown;
    shipment_total: number;
    shipping: OrderShipping;
    status: string;
    sub_total: number;
    taxes: unknown;
    tax_included_total: number;
    tax_total: number;
}

export type Order = OrderCamelCase | OrderSnakeCase;

export interface CartInput {
    product_id: string;
    quantity?: number;
    options?: CartOption[];
    purchase_option?: {
        plan_id?: string;
        type?: PurchaseOptions;
    };
}

export interface InitOptions {
    api?: string;
    currency?: string;
    locale?: string;
    previewContent?: boolean | null;
    session?: string;
    timeout?: number;
    url?: string | null;
    useCamelCase?: boolean | null;
    vaultUrl?: string;
}

export interface CategoryCamelCase {
    active: boolean;
    dateCreated: string;
    dateUpdated: string;
    description?: string;
    id: string;
    images: ImageCamelCase[];
    metaTitle?: string | null;
    metaDescription?: string | null;
    name: string;
    parentId?: string;
    slug: string;
    sort: number;
    topId: string;
    products?: {
        count: number;
        results: Array<{
            dateCreated: string;
            id: string;
            parentId: string;
            productId: string;
        }> | null;
    } | null;
}

export interface CategorySnakeCase {
    active: boolean;
    date_created: string;
    date_updated: string;
    description?: string;
    id: string;
    images: ImageSnakeCase[];
    meta_title?: string | null;
    meta_description?: string | null;
    name: string;
    parent_id?: string;
    slug: string;
    sort: number;
    top_id: string;
    products?: {
        count: number;
        results: Array<{
            date_created: string;
            id: string;
            parent_id: string;
            product_id: string;
        }> | null;
    } | null;
}

export type Category = CategoryCamelCase | CategorySnakeCase;

export interface Attribute {
    filterable: boolean;
    id: string;
    name: string;
    searchable: boolean;
    values: string[];
    visible: boolean;
}

export interface ShippingService {
    id: string;
    name: string;
    price: number;
    description: string;
}

export interface ShippingRatesCamelCase {
    dateCreated: string;
    fingerprint: string;
    services: ShippingService[];
}

export interface ShippingRatesSnakeCase {
    date_created: string;
    fingerprint: string;
    services: ShippingService[];
}

export type ShippingRates = ShippingRatesCamelCase | ShippingRatesSnakeCase;

export function init(storeId: string, publicKey: string, options?: InitOptions): void;

export function get(url: string, query: object): Promise<unknown>;
export function put(url: string, query: object): Promise<unknown>;
export function post(url: string, query: object): Promise<unknown>;
export function request(url: string, query: object): Promise<unknown>;

export namespace account {
    function create(input: CreateAccountInput): Promise<unknown>;
    function createAddress(input: AddressWithContact): Promise<AddressWithContact>;
    function createCard(input: object): Promise<unknown>;
    function deleteAddress(id: string): Promise<unknown>;
    function deleteCard(id: string): Promise<unknown>;
    function get(): Promise<unknown>;
    function getAddresses({}): Promise<unknown>;
    function getOrder(id?: string): Promise<Order>;
    function listAddresses(): Promise<unknown>;
    function listCards(): Promise<unknown>;
    function listOrders(input: object): Promise<unknown>;
    function login(user: string, password: string): Promise<unknown>;
    function logout(): Promise<unknown>;
    function recover(input: object): Promise<unknown>;
    function update(input: object): Promise<unknown>;
    function updateCard(input: object): Promise<unknown>;
    function updateAddress(id: string, data: Address): Promise<AddressWithContact>;
}

export namespace attributes {
    function get(input: string): Promise<Attribute>;
    function get(): Promise<ListResult<Attribute>>;
    function list(input: Query): Promise<ListResult<Attribute>>;
}

export namespace card {
    function createToken(input: object): Promise<unknown>;
    function validateCVC(input: string): boolean;
    function validateExpiry(input: string): boolean;
    function validateNumber(input: string): boolean;
}

export namespace cart {
    function addItem(input: CartInput): Promise<Cart>;
    function applyCoupon(input: string): Promise<Cart>;
    function applyGiftcard(input: string): Promise<Cart>;
    function get(): Promise<Cart>;
    function getSettings(): Promise<unknown>;
    function getShippingRates(): Promise<ShippingRates>;
    function removeCoupon(): Promise<Cart>;
    function removeGiftcard(itemId: string): Promise<Cart>;
    function removeItem(itemId: string): Promise<Cart>;
    function setItems(input: CartInput[]): Promise<Cart>;
    function submitOrder(): Promise<Order>;
    function update(input: any): Promise<Cart>;
    function updateItem(itemId: string, input: any): Promise<Cart>;
}

export namespace categories {
    function get(input: string): Promise<Category>;
    function get(): Promise<ListResult<Category>>;
    function list(input: object): Promise<ListResult<Category>>;
}

export namespace currency {
    function format(input: number, format: object): string;
    function list(): Promise<Currency[]>;
    function select(input: string): Promise<CurrencySelect>;
    function selected(): string;
}

export namespace locale {
    function selected(): string;
    function select(locale: string): Promise<Locale>;
}

export namespace payment {
    function createElements(input: object): Promise<unknown>;
    function tokenize(input: object): void;
}

export namespace products {
    function get(productId: string): Promise<Product>;
    function list(input: ProductQuery): Promise<ListResult<Product>>;
    function variation(productId: string, options: CartOption): Promise<Product>;
}

export namespace settings {
    function get(): Promise<Settings>;
    function load(): Promise<unknown>;
    function menus(input?: string): Promise<unknown>;
    function payments(): Promise<unknown>;
}

export namespace subscriptions {
    function addItem(id: string, input: object): Promise<unknown>;
    function create(input: object): Promise<unknown>;
    function get(id: string): Promise<unknown>;
    function list(): Promise<ListResult<unknown>>;
    function removeItem(id: string, itemId: string): Promise<unknown>;
    function update(id: string, input: object): Promise<unknown>;
    function updateItem(id: string, itemId: string, input: any): Promise<unknown>;
}

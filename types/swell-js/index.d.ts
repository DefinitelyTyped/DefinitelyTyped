// Type definitions for swell-js 3.17
// Project: https://github.com/swellstores/swell-js#readme
// Definitions by: Gus Fune <https://github.com/gusfune>
//                 Markus <https://github.com/markus-gx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace swell;

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

export interface ImageCamelCase {
    file: {
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
    };
    id: string;
}

export interface ImageSnakeCase {
    file: {
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
    };
    id: string;
}

export type Image = ImageCamelCase | ImageSnakeCase;

export interface ProductCamelCase {
    price: number;
    sale: boolean;
    salePrice?: number;
    sku: unknown;
    slug: string;
    stockLevel: number;
    stockPurchasable: boolean;
    stockTracking: boolean;
    options?: Array<{
        id: string;
        values: [
            {
                name: string;
                id: string;
                price: null;
                shipmentWeight: null;
                description: null;
            },
        ];
        active: true;
        description: null;
        inputType: 'select';
        name: 'Size';
        required: true;
        variant: true;
    }>;
    attributes: unknown;
    content: any;
    description: string;
    id: string;
    images: ImageCamelCase[];
    name: string;
    variants?: {
        count: number;
        results: ProductCamelCase[];
    };
    crossSells?: Array<{
        id: string;
        productId: string;
    }>;
    upSells?: Array<{
        id: string;
        productId: string;
    }>;
}

export interface ProductSnakeCase {
    price: number;
    sale: boolean;
    sale_price?: number;
    sku: unknown;
    slug: string;
    stock_level: number;
    stock_purchasable: boolean;
    stock_tracking: boolean;
    options?: Array<{
        id: string;
        values: [
            {
                name: string;
                id: string;
                price: null;
                shipment_weight: null;
                description: null;
            },
        ];
        active: true;
        description: null;
        input_type: 'select';
        name: 'Size';
        required: true;
        variant: true;
    }>;
    attributes: unknown;
    content: any;
    description: string;
    id: string;
    images: ImageSnakeCase[];
    name: string;
    variants?: {
        count: number;
        results: ProductSnakeCase[];
    };
    cross_sells?: Array<{
        id: string;
        product_id: string;
    }>;
    up_sells?: Array<{
        id: string;
        product_id: string;
    }>;
}

export type Product = ProductCamelCase | ProductSnakeCase;

export interface CartItemCamelCase {
    discountEach: number;
    discountTotal: number;
    id: string;
    origPrice: number;
    price: number;
    priceTotal: number;
    productId: string;
    quantity: number;
    shipmentWeight: number;
    taxEach: number;
    taxTotal: number;
    variant: null;
    product: Product;
}

export interface CartItemSnakeCase {
    discount_each: number;
    discount_total: number;
    id: string;
    orig_price: number;
    price: number;
    price_total: number;
    product_id: string;
    quantity: number;
    shipment_weight: number;
    tax_each: number;
    tax_total: number;
    variant: null;
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

export type Billing = BillingCamelCase | BillingSnakeCase;

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

export type Shipping = ShippingCamelCase | ShippingSnakeCase;

export interface CartCamelCase {
    accountLoggedIn: unknown;
    authTotal: number;
    billing: Billing;
    captureTotal: number;
    checkoutId: string;
    checkoutUrl: string;
    coupon: unknown;
    currency: string;
    dateAbandoned: string;
    dateCreated: string;
    discounts: unknown;
    discountTotal: number;
    giftcardTotal: number;
    grandTotal: number;
    guest: true;
    id: string;
    itemDiscount: number;
    itemQuantity: number;
    items: CartItem[];
    itemShipmentWeight: number;
    itemTax: number;
    promotionIds: unknown;
    promotions: unknown;
    recovered: boolean;
    shipmentDelivery: boolean;
    shipmentDiscount: number;
    shipmentPrice: number;
    shipmentTotal: number;
    shipping: unknown;
    subTotal: number;
    taxes: unknown;
    taxIncludedTotal: number;
    taxTotal: number;
}

export interface CartSnakeCase {
    account_logged_in: unknown;
    auth_total: number;
    billing: unknown;
    capture_total: number;
    checkout_id: string;
    checkout_url: string;
    coupon: unknown;
    currency: string;
    date_abandoned: string;
    date_created: string;
    discounts: unknown;
    discount_total: number;
    giftcard_total: number;
    grand_total: number;
    guest: boolean;
    id: string;
    item_discount: number;
    item_quantity: number;
    items: CartItem[];
    item_shipment_weight: number;
    item_tax: number;
    promotion_ids: unknown;
    promotions: unknown;
    recovered: boolean;
    shipment_delivery: boolean;
    shipment_discount: number;
    shipment_price: number;
    shipment_total: number;
    shipping: unknown;
    sub_total: number;
    taxes: unknown;
    tax_included_total: number;
    tax_total: number;
}

export type Cart = CartCamelCase | CartSnakeCase;

export interface OrderCamelCase {
    account: unknown;
    accountCreditAmount: unknown;
    accountCreditApplied: unknown;
    accountId: string;
    accountInfoSaved: unknown;
    accountLoggedIn: unknown;
    billing: Billing;
    comments: unknown;
    coupon: unknown;
    couponCode: unknown;
    currency: string;
    dateCreated: string;
    delivered: boolean;
    discounts: unknown;
    discountTotal: number;
    gift: unknown;
    giftcards: unknown;
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
    items: CartItem[];
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
    shipmentRating: unknown;
    shipmentTax: unknown;
    shipmentTaxIncluded: unknown;
    shipmentTotal: number;
    shipping: Shipping;
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
    billing: Billing;
    comments: unknown;
    coupon: unknown;
    coupon_code: unknown;
    currency: string;
    date_created: string;
    delivered: boolean;
    discounts: unknown;
    discount_total: number;
    gift: unknown;
    giftcards: unknown;
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
    items: CartItem[];
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
    shipment_rating: unknown;
    shipment_tax: unknown;
    shipment_tax_included: unknown;
    shipment_total: number;
    shipping: Shipping;
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

export type Category = CategoryCamelCase | CategorySnakeCase;

export interface CategoryCamelCase {
    description?: string;
    id: string;
    images: Image[];
    metaDescription?: string;
    name: string;
    parentId?: string;
    slug: string;
    topId: string;
}

export interface CategorySnakeCase {
    description?: string;
    id: string;
    images: Image[];
    meta_description?: string;
    name: string;
    parent_id?: string;
    slug: string;
    topId: string;
}

export interface Attribute {
    filterable: boolean;
    id: string;
    name: string;
    searchable: boolean;
    values: string[];
    visible: boolean;
}

export function init(storeId: string, publicKey: string, options?: InitOptions): void;

export function get(url: string, query: object): Promise<unknown>;
export function put(url: string, query: object): Promise<unknown>;
export function post(url: string, query: object): Promise<unknown>;

export namespace account {
    function create(input: CreateAccountInput): Promise<unknown>;
    function createAddress(input: AddressWithContact): Promise<AddressWithContact>;
    function createCard(input: object): Promise<unknown>;
    function deleteAddress(id: string): Promise<unknown>;
    function deleteCard(id: string): Promise<unknown>;
    function get(): Promise<unknown>;
    function getAddresses({}): Promise<unknown>;
    function getOrder(id?: string): Promise<unknown>;
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
    function list(): Promise<ListResult<unknown>>;
    function select(input: string): Promise<unknown>;
    function selected(): Promise<string>;
}

export namespace locale {
    function selected(): Promise<string>;
    function select(locale: string): Promise<unknown>;
}

export namespace payment {
    function createElements(input: object): Promise<unknown>;
    function tokenize(input: object): void;
}

export namespace products {
    function get(productId: string): Promise<Product>;
    function list(input: Query | SearchQuery): Promise<ListResult<Product>>;
    function variation(productId: string, options: CartOption): Promise<Product>;
}

export namespace settings {
    function get(): Promise<unknown>;
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

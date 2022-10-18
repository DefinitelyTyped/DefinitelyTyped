// Type definitions for swell-js 3.17
// Project: https://github.com/swellstores/swell-js#readme
// Definitions by: Gus Fune <https://github.com/gusfune>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace swell;

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

export type PurchaseOptions = 'subscription' | 'standard';

export interface ProductCamelCase {
    price: number;
    sale: boolean;
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
    content: never;
    description: string;
    id: string;
    images: never;
    name: string;
}

export interface ProductSnakeCase {
    price: number;
    sale: boolean;
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
    content: never;
    description: string;
    id: string;
    images: never;
    name: string;
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

export interface CartCamelCase {
    accountLoggedIn: unknown;
    authTotal: number;
    billing: unknown;
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

export interface CartInput {
    product_id: string;
    quantity?: number;
    options?: CartOption[];
    purchase_option?: {
        plan_id?: string;
        type?: PurchaseOptions;
    };
}

export function init(storeId: string, publicKey: string, options?: InitOptions): void;

export interface InitOptions {
    useCamelCase: boolean;
}

export namespace account {
    function create(input: CreateAccountInput): Promise<unknown>;
    function createAddress(input: object): Promise<unknown>;
    function createCard(input: object): Promise<unknown>;
    function deleteAddress(id: string): Promise<unknown>;
    function deleteCard(id: string): Promise<unknown>;
    function get(): Promise<unknown>;
    function getOrder(id: string): Promise<unknown>;
    function listAddresses(): Promise<unknown>;
    function listCards(): Promise<unknown>;
    function listOrders(input: object): Promise<unknown>;
    function login(user: string, password: string): Promise<unknown>;
    function logout(): Promise<unknown>;
    function recover(input: object): Promise<unknown>;
    function update(input: object): Promise<unknown>;
    function updateAddress(input: object): Promise<unknown>;
}

export namespace attributes {
    function get(input: string): Promise<unknown>;
    function list(input: object): Promise<unknown>;
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
    function submitOrder(): Promise<unknown>;
    function update(input: any): Promise<Cart>;
    function updateItem(itemId: string, input: any): Promise<Cart>;
}

export namespace categories {
    function get(input: string): Promise<unknown>;
    function list(input: object): Promise<unknown>;
}

export namespace currency {
    function format(input: number, format: object): string;
    function list(): Promise<unknown>;
    function select(input: string): Promise<unknown>;
    function selected(): Promise<string>;
}

export namespace locale {
    function selected(): Promise<string>;
    function select(locale: string): Promise<unknown>;
}

export namespace payment {
    function createElements(input: object): Promise<unknown>;
    function tokenize(input: object): Promise<unknown>;
}

export namespace products {
    function get(productId: string): Promise<Product>;
    function list(input: object): Promise<Product>;
    function variation(productId: string, options: CartOption): Promise<Product>;
}

export namespace settings {
    function getfunction(): Promise<unknown>;
    function loadfunction(): Promise<unknown>;
    function menus(input?: string): Promise<unknown>;
    function payments(): Promise<unknown>;
}

export namespace subscriptions {
    function addItem(id: string, input: object): Promise<unknown>;
    function create(input: object): Promise<unknown>;
    function get(id: string): Promise<unknown>;
    function list(): Promise<unknown>;
    function removeItem(id: string, itemId: string): Promise<unknown>;
    function update(id: string, input: object): Promise<unknown>;
    function updateItem(id: string, itemId: string, input: any): Promise<unknown>;
}

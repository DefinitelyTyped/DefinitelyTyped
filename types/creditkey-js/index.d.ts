export type Platform = "production" | "staging" | "development";
export type Mode = "modal" | "redirect";
export type Copy = "checkout" | "pdp";
export type Display = "button" | "text" | "button_text";
export type Size = "small" | "medium" | "large";
export type Status = "declined" | "pending" | "approved";

export function checkout(source: string, type: Mode): void;
export function apply(key: string, type?: Mode, platform?: Platform): void;

export class CartItem {
    constructor(
        merchantProductId: string,
        name: string,
        price: number,
        sku: string | null,
        quantity: number,
        size: string | null,
        color: string | null,
    );
    is_valid_item(): boolean;
}

export class Address {
    constructor(
        first_name: string,
        last_name: string,
        company_name: string,
        email: string,
        address1: string,
        address2: string | null,
        city: string,
        state: string,
        zip: string,
        phone_number: string,
    );
    is_valid_address(): boolean;
}

export class Charges {
    constructor(total: number, shipping: number, tax: number, discount_amount: number, grand_total: number);
    validate_charges(): boolean;
    is_valid_money_value(value: number): boolean;
}

export interface CheckoutResponse {
    id: string;
    checkout_url: string;
}
export interface CustomerResponse {
    status: Status;
    amount: number;
    amount_available: number;
}
export class Client {
    constructor(key: string, platform?: Platform);
    begin_checkout(
        cartItems: CartItem[],
        billingAddress: Address,
        shippingAddress: Address,
        charges: Charges,
        remoteId: string,
        customerId: string,
        returnUrl: string,
        cancelUrl: string,
        mode: Mode,
        merchantData: any,
    ): Promise<CheckoutResponse>;
    is_displayed_in_checkout(cartItems: CartItem[]): Promise<boolean>;
    get_marketing_display(charges: Charges, type?: Copy, display?: Display, size?: Size): Promise<string>;
    get_customer(email: string, customer_id: string): Promise<CustomerResponse>;
}

import { Address } from "./address";
import { FulfillmentStatus, PaymentStatus } from "./checkout-capture-response";
import { Currency } from "./currency";
import { Customer } from "./customer";
import { Discount } from "./discount";
import { OrderCollected } from "./order-collected";
import { OrderConditionals } from "./order-conditionals";
import { OrderLineItem } from "./order-line-item";
import { OrderTax } from "./order-tax";
import { Price } from "./price";

export interface Order {
    version: string;
    sandbox: boolean;
    id: string;
    checkout_token_id: string;
    cart_id: string;
    customer_reference: string;
    created: number;
    status_payment: PaymentStatus;
    status_fulfillment: FulfillmentStatus;
    currency: Currency;
    order_value: Price;
    conditionals: OrderConditionals;
    fraud: any;
    meta: any;
    redirect: boolean;
    collected: OrderCollected;
    has: {
        digital_fulfillment: boolean;
        discounts: boolean;
        extend_apps: boolean;
        extend_fulfillment: boolean;
        pay_what_you_want: boolean;
        physical_fulfillment: boolean;
        subscription_items: boolean;
        webhook_fulfillment: boolean;
    };
    is: {
        free: boolean;
        fulfilled: boolean;
    };
    order: {
        subtotal: Price;
        total: Price;
        total_with_tax: Price;
        total_paid: Price;
        pay_what_you_want: {
            enabled: boolean;
            minimum: Price | null;
            customer_set_price: Price | null;
        };
        shipping: any;
        line_items: OrderLineItem[];
        discount: Omit<Discount, "valid"> | [];
        giftcard: any;
    };
    shipping: Address;
    billing: Address;
    transactions: any[];
    fulfillment: any;
    customer: Customer;
    extra_fields: Array<{
        id: string;
        name: string;
        type: string;
        required: boolean;
        value: string;
    }>;
    client_details: any;
    tax: OrderTax;
}

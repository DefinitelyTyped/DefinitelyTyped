import { Currency } from "./currency";
import { OrderCollected } from "./order-collected";
import { OrderConditionals } from "./order-conditionals";
import { Price } from "./price";

export type PaymentStatus = "paid" | "not_paid" | "partially_paid" | "refunded" | "authorized";

export type FulfillmentStatus = "fulfilled" | "not_fulfilled" | "partially_fulfilled" | "returned";

export interface CheckoutCaptureResponse {
    id: string;
    sandbox: boolean;
    checkout_token_id: string;
    cart_id: string;
    customer_reference: string;
    created: number;
    status_payment: PaymentStatus;
    status_fulfillment: FulfillmentStatus;
    currency: Currency;
    order_value: Price;
    redirect: string;
    customer: {
        email: string;
        firstname: string;
        lastname: string;
    };
    extra_fields: Array<{
        id: string;
        name: string;
        type: string;
        required: boolean;
        value: string;
    }>;
    conditionals: OrderConditionals;
    collected: OrderCollected;
    has: {
        physical_fulfillment: boolean;
        digital_fulfillment: boolean;
        pay_what_you_want: boolean;
        discounts: boolean;
    };
    is: {
        free: boolean;
        fulfilled: boolean;
    };
    fraud: any;
    meta: any;
}

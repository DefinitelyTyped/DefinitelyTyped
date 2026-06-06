import { Currency } from "./currency";
import { Discount } from "./discount";
import { OrderTax } from "./order-tax";
import { Price } from "./price";
import { ShippingMethod } from "./shipping-method";

export interface Live {
    merchant_id: number;
    currency: Currency;
    line_items: any[];
    subtotal: Price;
    discount: Discount | [];
    shipping: {
        available_options: ShippingMethod[];
        price: Price;
    };
    giftcard: any;
    tax: OrderTax;
    total: Price;
    total_with_tax: Price;
    pay_what_you_want: {
        enabled: boolean;
        minimum: Price | null;
        customer_set_price: Price | null;
    };
}

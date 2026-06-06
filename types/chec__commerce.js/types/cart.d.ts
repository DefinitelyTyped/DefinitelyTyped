import { Currency } from "./currency";
import { LineItem } from "./line-item";
import { Price } from "./price";

export interface Cart {
    id: string;
    created: number;
    updated: number;
    expires: number;
    total_items: number;
    total_unique_items: number;
    subtotal: Price;
    currency: Currency;
    discount_code: any; // todo
    hosted_checkout_url: string;
    line_items: LineItem[];
}

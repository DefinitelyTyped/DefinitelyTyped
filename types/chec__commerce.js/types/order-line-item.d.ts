import { Price } from "./price";

export interface OrderLineItem {
    id: string;
    product_id: string;
    product_name: string;
    product_sku: string | null;
    quantity: number;
    price: Price;
    line_total: Price;
    line_total_with_tax: Price;
    variant: any;
    selected_options: any;
    tax: any;
}

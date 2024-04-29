import { Price } from "./price";

export type DiscountType = "percentage" | "fixed";

export interface Discount {
    valid: boolean;
    type: DiscountType;
    code: string;
    value: number;
    amount_saved: Price;
}

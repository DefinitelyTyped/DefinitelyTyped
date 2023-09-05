import { Price } from "./price";

export interface OrderTaxLine {
    amount: Price;
    rate?: number | undefined;
    rate_percentage?: string | undefined;
    type: string;
}

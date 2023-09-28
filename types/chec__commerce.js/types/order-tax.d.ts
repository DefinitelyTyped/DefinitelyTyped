import { OrderTaxLine } from "./order-tax-line";
import { Price } from "./price";

export interface OrderTax {
    amount: Price;
    included_in_price: boolean;
    provider: string;
    provider_type?: string | undefined;
    breakdown: OrderTaxLine[];
    zone: {
        country: string;
        region: string;
        postal_zip_code: string;
        ip_address: string | null;
    };
}

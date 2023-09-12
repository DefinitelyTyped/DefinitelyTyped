import { Price } from "./price";

export interface ShippingMethod {
    id: string;
    description: string;
    price: Price;
    countries: string[];
}

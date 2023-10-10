import { Asset } from "./asset";
import { Price } from "./price";

export interface Variant {
    id: string;
    sku: string | null;
    description: string | null;
    inventory: number | null;
    price: Price | null;
    is_valid: boolean;
    invalid_reason_code: string | null;
    meta: any;
    created?: number | undefined;
    updated?: number | undefined;
    options: { [name: string]: string };
    assets: Asset[];
}

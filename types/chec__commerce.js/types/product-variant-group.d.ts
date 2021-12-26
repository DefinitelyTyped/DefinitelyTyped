import { Price } from './price';

export interface ProductVariantGroup {
    id: string;
    name: string;
    meta?: any;
    created: number | null;
    updated: number | null;
    options: ProductVariantOption[];
}

export interface ProductVariantOption {
    id: string;
    name: string;
    price: Price;
    assets: string[] | null;
    meta: any;
    created: number | null;
    updated: number | null;
}

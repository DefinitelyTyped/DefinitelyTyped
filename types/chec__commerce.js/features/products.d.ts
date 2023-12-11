import Commerce = require("../");
import { PaginationMeta } from "../types/pagination";
import { Product } from "../types/product";
import { Variant } from "../types/variant";

export interface ProductCollection {
    data: Product[];
    meta: PaginationMeta;
}

export interface VariantCollection {
    data: Variant[];
    meta: PaginationMeta;
}

export class Products {
    constructor(commerce: Commerce);

    list(params?: any): Promise<ProductCollection>;
    retrieve(id: string, data?: object): Promise<Product>;
    getVariants(id: string, data?: object): Promise<VariantCollection>;
    getVariant(id: string, variantId: string): Promise<Variant>;
}

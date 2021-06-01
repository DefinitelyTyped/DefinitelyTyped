import Commerce = require('@chec/commerce.js');
import { Product } from '../types/product';
import { PaginationMeta } from '../types/pagination';
import { VariantOption } from '../types/variant-option';

export interface ProductCollection {
  data: Product[];
  meta: PaginationMeta;
}

export interface VariantOptionCollection {
  data: VariantOption[];
  meta: PaginationMeta;
}

export class Products {
  constructor(commerce: Commerce);

  list(params?: any): Promise<ProductCollection>;
  retrieve(id: string, data?: object): Promise<Product>;
  getVariants(id: string, data?: object): Promise<VariantOptionCollection>;
  getVariant(id: string, variantId: string): Promise<VariantOption>;
}

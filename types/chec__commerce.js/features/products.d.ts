import Commerce = require('@chec/commerce.js');
import { Product } from '../types/product';
import { PaginationMeta } from '../types/pagination';

export interface ProductCollection {
  data: Product[];
  meta: PaginationMeta;
}

export class Products {
  constructor(commerce: Commerce);

  list(params?: any): Promise<ProductCollection>;
  retrieve(id: string, data?: object): Promise<Product>;
}

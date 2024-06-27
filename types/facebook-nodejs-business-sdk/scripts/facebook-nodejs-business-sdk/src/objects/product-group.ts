import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ProductItem from "./product-item";
/**
 * ProductGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductGroup extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      product_catalog: 'product_catalog',
      retailer_id: 'retailer_id',
      variants: 'variants'
    });
  }

  getProducts(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ProductItem, fields, params, fetchFirstPage, '/products');
  }

  createProduct(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ProductItem> {
    return this.createEdge('/products', fields, params, ProductItem, pathOverride);
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ProductGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): ProductGroup {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}
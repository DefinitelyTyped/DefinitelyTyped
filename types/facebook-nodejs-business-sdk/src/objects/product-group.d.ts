import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ProductItem from "./product-item";
/**
 * ProductGroup

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProduct(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductItem>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductGroup>;    get(fields: string[], params?: Record<string, any>): Promise<ProductGroup>;
}

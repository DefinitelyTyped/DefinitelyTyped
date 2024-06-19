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
    static get Fields(): Record<string, any>;
    getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    createProduct(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<ProductItem>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): ProductGroup;
    update(fields: Array<string>, params?: Record<string, any>): ProductGroup;
}

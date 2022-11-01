import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductItem from './product-item';
export default class ProductGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getProducts(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createProduct(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<ProductItem>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ProductGroup>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<ProductGroup>;
}

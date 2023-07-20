import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductItem from './product-item';
export default class ProductGroup extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getProducts(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getProducts(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProduct(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductItem>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductGroup>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductGroup>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ProductItem from "./product-item";
/**
 * ProductGroup
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductGroup extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        product_catalog: "product_catalog";
        retailer_id: "retailer_id";
        variants: "variants";
    }>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createProduct(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductItem>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductGroup>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductGroup>;
}

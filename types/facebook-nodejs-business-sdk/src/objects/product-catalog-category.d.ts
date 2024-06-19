import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogCategory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogCategory extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CategorizationCriteria(): Record<string, any>;
}

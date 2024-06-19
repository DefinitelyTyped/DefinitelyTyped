import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogDataSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogDataSource extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get IngestionSourceType(): Record<string, any>;
}

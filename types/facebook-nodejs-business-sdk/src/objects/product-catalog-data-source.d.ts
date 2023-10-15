import { AbstractCrudObject } from "./../abstract-crud-object";
export default class ProductCatalogDataSource extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get IngestionSourceType(): Record<string, any>;
}

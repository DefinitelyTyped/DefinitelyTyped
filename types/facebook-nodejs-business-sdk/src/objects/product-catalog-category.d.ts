import { AbstractCrudObject } from "./../abstract-crud-object";
export default class ProductCatalogCategory extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CategorizationCriteria(): Record<string, any>;
}

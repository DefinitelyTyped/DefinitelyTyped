import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogFacets
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogFacets extends AbstractCrudObject {
    static get Fields(): Readonly<{
        facets: "facets";
        item_count: "item_count";
    }>;
}

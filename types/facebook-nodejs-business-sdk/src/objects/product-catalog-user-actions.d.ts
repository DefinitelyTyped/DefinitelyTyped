import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogUserActions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogUserActions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        actions: "actions";
    }>;
}

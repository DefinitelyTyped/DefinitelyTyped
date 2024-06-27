import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ParentCatalogReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ParentCatalogReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        purchase_conversion_value: "purchase_conversion_value";
        purchases: "purchases";
    }>;
}

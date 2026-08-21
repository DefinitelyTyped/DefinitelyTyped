import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogAdvertiserInsight
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogAdvertiserInsight extends AbstractCrudObject {
    static get Fields(): Readonly<{
        category: "category";
        country: "country";
    }>;
}

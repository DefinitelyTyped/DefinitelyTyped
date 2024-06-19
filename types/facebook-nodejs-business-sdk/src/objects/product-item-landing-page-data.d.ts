import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemLandingPageData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemLandingPageData extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Availability(): Record<string, any>;
}

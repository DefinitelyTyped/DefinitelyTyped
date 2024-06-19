import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CatalogItemAppealStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CatalogItemAppealStatus extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductVariant
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductVariant extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Recommendation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Recommendation extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

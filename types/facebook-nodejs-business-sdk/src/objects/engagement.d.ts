import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Engagement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Engagement extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

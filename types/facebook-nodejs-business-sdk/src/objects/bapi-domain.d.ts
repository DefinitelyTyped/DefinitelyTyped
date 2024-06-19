import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BAPIDomain
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BAPIDomain extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

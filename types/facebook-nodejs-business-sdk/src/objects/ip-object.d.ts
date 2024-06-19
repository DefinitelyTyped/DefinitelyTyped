import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IPObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IPObject extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

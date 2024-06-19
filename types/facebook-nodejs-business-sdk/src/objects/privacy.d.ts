import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Privacy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Privacy extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

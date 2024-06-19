import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WebPublisher
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WebPublisher extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

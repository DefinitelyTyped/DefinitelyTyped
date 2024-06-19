import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AppPublisher
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AppPublisher extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

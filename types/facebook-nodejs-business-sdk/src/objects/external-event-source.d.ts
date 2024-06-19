import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExternalEventSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExternalEventSource extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

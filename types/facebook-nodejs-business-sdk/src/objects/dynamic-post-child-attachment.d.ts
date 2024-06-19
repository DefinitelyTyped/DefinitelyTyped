import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicPostChildAttachment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicPostChildAttachment extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

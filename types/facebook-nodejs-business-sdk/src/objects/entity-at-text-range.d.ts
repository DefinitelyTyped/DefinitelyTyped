import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EntityAtTextRange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EntityAtTextRange extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
}

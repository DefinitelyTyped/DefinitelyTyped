import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TaggableSubject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TaggableSubject extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DraftPost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DraftPost extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExpirablePost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExpirablePost extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
}

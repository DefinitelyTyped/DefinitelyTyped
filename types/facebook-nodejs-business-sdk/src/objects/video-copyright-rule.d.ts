import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoCopyrightRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Source(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): VideoCopyrightRule;
}

import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoCopyrightRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Source(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoCopyrightRule>;
}

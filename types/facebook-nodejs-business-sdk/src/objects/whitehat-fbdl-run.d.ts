import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhitehatFBDLRun

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhitehatFBDLRun extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<WhitehatFBDLRun>;
}

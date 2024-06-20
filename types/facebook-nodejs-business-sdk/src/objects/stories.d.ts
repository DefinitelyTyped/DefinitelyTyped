import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Stories

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Stories extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
}

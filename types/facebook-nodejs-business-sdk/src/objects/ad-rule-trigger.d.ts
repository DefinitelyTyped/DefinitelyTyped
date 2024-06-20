import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleTrigger

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleTrigger extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Operator(): Record<string, any>;
    static get Type(): Record<string, any>;
}

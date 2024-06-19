import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleHistory extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Action(): Record<string, any>;
}

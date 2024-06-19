import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleFilters
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleFilters extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Operator(): Record<string, any>;
}

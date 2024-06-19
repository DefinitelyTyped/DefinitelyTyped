import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleExecutionOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleExecutionOptions extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Operator(): Record<string, any>;
}

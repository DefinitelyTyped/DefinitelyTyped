import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleExecutionSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleExecutionSpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ExecutionType(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdRuleExecutionSpec;
}

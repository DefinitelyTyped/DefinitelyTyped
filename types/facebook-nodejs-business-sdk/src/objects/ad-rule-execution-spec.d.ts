import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleExecutionSpec

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleExecutionSpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ExecutionType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdRuleExecutionSpec>;
}

import { AbstractCrudObject } from './../abstract-crud-object';
export default class AdRuleExecutionSpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ExecutionType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdRuleExecutionSpec>;
}

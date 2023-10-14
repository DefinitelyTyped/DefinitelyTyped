import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdRuleFilters extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Operator(): Record<string, any>;
}

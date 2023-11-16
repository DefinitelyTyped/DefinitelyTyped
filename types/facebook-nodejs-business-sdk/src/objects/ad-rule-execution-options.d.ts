import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleExecutionOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleExecutionOptions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        field: "field";
        operator: "operator";
        value: "value";
    }>;
    static get Operator(): Readonly<{
        equal: "EQUAL";
        in: "IN";
    }>;
}

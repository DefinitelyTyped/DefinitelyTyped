import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingAutomation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingAutomation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        advantage_audience: "advantage_audience";
        individual_setting: "individual_setting";
        shared_audiences: "shared_audiences";
        value_expression: "value_expression";
    }>;
}

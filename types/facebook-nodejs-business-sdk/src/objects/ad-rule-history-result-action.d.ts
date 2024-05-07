import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdRuleHistoryResultAction
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRuleHistoryResultAction extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action: "action";
        field: "field";
        new_value: "new_value";
        old_value: "old_value";
    }>;
}

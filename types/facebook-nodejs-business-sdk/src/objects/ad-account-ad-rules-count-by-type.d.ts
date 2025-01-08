import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAdRulesCountByType
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAdRulesCountByType extends AbstractCrudObject {
    static get Fields(): Readonly<{
        count: "count";
        evaluation_type: "evaluation_type";
    }>;
}

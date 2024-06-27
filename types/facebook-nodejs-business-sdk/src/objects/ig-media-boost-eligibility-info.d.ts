import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGMediaBoostEligibilityInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMediaBoostEligibilityInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        boost_ineligible_reason: "boost_ineligible_reason";
        eligible_to_boost: "eligible_to_boost";
        id: "id";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): IGMediaBoostEligibilityInfo;
}

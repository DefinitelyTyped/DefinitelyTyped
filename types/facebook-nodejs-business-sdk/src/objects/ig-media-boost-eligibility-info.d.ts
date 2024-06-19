import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGMediaBoostEligibilityInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMediaBoostEligibilityInfo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): IGMediaBoostEligibilityInfo;
}

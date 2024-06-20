import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGMediaBoostEligibilityInfo

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGMediaBoostEligibilityInfo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<IGMediaBoostEligibilityInfo>;
}

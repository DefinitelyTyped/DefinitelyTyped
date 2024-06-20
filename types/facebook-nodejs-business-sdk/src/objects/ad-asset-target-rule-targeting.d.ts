import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetTargetRuleTargeting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetTargetRuleTargeting extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get DevicePlatforms(): Record<string, any>;
}

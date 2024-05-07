import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetTargetRuleTargeting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetTargetRuleTargeting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        age_max: "age_max";
        age_min: "age_min";
        audience_network_positions: "audience_network_positions";
        device_platforms: "device_platforms";
        facebook_positions: "facebook_positions";
        geo_locations: "geo_locations";
        instagram_positions: "instagram_positions";
        publisher_platforms: "publisher_platforms";
    }>;
    static get DevicePlatforms(): Readonly<{
        desktop: "desktop";
        mobile: "mobile";
    }>;
}

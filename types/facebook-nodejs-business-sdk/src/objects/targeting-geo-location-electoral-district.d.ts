import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationElectoralDistrict
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationElectoralDistrict extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        deprecation_code: "deprecation_code";
        electoral_district: "electoral_district";
        key: "key";
        name: "name";
    }>;
}

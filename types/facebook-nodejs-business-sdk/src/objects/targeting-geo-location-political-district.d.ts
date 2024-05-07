import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationPoliticalDistrict
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationPoliticalDistrict extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        key: "key";
        name: "name";
        political_district: "political_district";
    }>;
}

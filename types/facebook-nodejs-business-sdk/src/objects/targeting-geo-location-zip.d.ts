import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationZip
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationZip extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        key: "key";
        name: "name";
        primary_city_id: "primary_city_id";
        region_id: "region_id";
    }>;
}

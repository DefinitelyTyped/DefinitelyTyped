import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationPlace
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationPlace extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        distance_unit: "distance_unit";
        key: "key";
        latitude: "latitude";
        longitude: "longitude";
        name: "name";
        primary_city_id: "primary_city_id";
        radius: "radius";
        region_id: "region_id";
    }>;
}

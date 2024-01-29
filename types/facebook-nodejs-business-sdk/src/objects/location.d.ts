import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * Location
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Location extends AbstractCrudObject {
    static get Fields(): Readonly<{
        city: "city";
        city_id: "city_id";
        country: "country";
        country_code: "country_code";
        latitude: "latitude";
        located_in: "located_in";
        longitude: "longitude";
        name: "name";
        region: "region";
        region_id: "region_id";
        state: "state";
        street: "street";
        zip: "zip";
    }>;
}

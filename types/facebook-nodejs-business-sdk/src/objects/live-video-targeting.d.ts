import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LiveVideoTargeting
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoTargeting extends AbstractCrudObject {
    static get Fields(): Readonly<{
        age_max: "age_max";
        age_min: "age_min";
        excluded_countries: "excluded_countries";
        geo_locations: "geo_locations";
    }>;
}

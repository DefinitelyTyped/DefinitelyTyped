import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdSavedLocation
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdSavedLocation extends AbstractCrudObject {
    static get Fields(): Readonly<{
        cities: "cities";
        countries: "countries";
        country_groups: "country_groups";
        custom_locations: "custom_locations";
        geo_markets: "geo_markets";
        id: "id";
        location_sentences: "location_sentences";
        name: "name";
        regions: "regions";
        zips: "zips";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdSavedLocation>;
}

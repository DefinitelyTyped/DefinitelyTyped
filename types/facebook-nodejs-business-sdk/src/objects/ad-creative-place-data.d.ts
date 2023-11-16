import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativePlaceData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativePlaceData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        address_string: "address_string";
        label: "label";
        latitude: "latitude";
        location_source_id: "location_source_id";
        longitude: "longitude";
        type: "type";
    }>;
}

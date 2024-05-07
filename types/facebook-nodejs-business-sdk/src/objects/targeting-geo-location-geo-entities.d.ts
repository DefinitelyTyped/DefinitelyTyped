import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationGeoEntities
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationGeoEntities extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        key: "key";
        name: "name";
        region: "region";
        region_id: "region_id";
    }>;
}

import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationRegion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationRegion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        key: "key";
        name: "name";
    }>;
}

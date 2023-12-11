import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationLocationExpansion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationLocationExpansion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        allowed: "allowed";
    }>;
}

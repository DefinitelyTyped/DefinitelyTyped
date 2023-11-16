import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationLocationCluster
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationLocationCluster extends AbstractCrudObject {
    static get Fields(): Readonly<{
        key: "key";
    }>;
}

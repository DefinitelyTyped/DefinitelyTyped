import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingGeoLocationMarket
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocationMarket extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        key: "key";
        market_type: "market_type";
        name: "name";
    }>;
}

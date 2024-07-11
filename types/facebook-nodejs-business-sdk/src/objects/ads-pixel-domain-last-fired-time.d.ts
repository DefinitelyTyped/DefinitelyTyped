import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelDomainLastFiredTime
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelDomainLastFiredTime extends AbstractCrudObject {
    static get Fields(): Readonly<{
        domain_name: "domain_name";
        last_fired_time: "last_fired_time";
    }>;
}

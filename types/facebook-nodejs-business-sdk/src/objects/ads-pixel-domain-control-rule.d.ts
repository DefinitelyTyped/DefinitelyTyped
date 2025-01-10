import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelDomainControlRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelDomainControlRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        domain_list: "domain_list";
        type: "type";
    }>;
}
